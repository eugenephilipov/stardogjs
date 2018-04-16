import React, { Component } from 'react';
import { Connection, query, db } from 'stardog';
import { querySubclasess, connectionString, dbName } from './Queries';
import ResultTable from './ResultTable';
import { Button, ButtonToolbar, Grid, Col, Row } from 'react-bootstrap';
import UserInfo from './UserInfo';

const conn = new Connection(connectionString);

export default class SparkJSconnect extends Component<any, any> {
    dbUri: String = "";
    constructor(props) {
        super(props);
        this.state = { queryResult1: null, buttons: null, activeButton: null, queryResult2: null, userInfo:'N/A' };
        /*
        db.namespaces(conn, dbName, {}).then(({ body }) => {
            
            query.execute(conn, dbName, querySubclasess).then(({ body }) => {
                console.dir(body);
                this.setState({ queryResult1: body.results.bindings });
            });
        });*/
        this.getDbQueryData();
    }
    getDbQueryData() {
        let promisses: any[] = Array();
        promisses.push(db.namespaces(conn, dbName, {}));
        promisses.push(query.execute(conn, dbName, querySubclasess));
        Promise.all(promisses).then(value => {
            this.dbUri = value[0].body[""];
            let buttons = this.drawButtons(value[1].body.results.bindings);
            //this.setState({ queryResult1: value[1].body.results.bindings });
            this.setState({ buttons: buttons , dbUri: this.dbUri });
        });
    }
    classLoad(className) {

        query.execute(conn, dbName, `select * where {?z rdf:type :${className}}`).then(({ body }) => {
            this.setState({ queryResult1: body.results.bindings });

        });

    }
    userInfoLoad(userName) {
        query.execute(conn, dbName, `select * where {:${userName} ?y ?z}`).then(({ body }) => {
            this.setState({ queryResult2: body.results.bindings, userInfo: userName });
        });

    }

    drawButtons(arr: any) {
        let retJsx: JSX.Element[] = Array(<div />);
        retJsx = arr.map((item, key) => {
            const str: string = (item.z.value).replace(this.dbUri, '');
            return (
                <Button onClick={() => { this.classLoad(str) }} key={key} bsStyle="info">{str}</Button>
            )
        });
        retJsx.push(<Button onClick={() => { this.classLoad('People') }} key={retJsx.length} bsStyle="info">People</Button>);
        return (
            <ButtonToolbar>
                {retJsx}
            </ButtonToolbar>
        );
    }
    render() {
        return (
            <Grid>
                <Row className="show-grid" >
                    <Col xs={12} md={12}>
                    <h2>Stardogjs: Classes of People</h2>
                    </Col>
                </Row>                
                <Row className="show-grid" style={{paddingBottom:20, paddingTop:20}}>
                    <Col xs={12} md={12}>
                        {this.state.buttons}
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={6} md={4}>
                        <ResultTable dbUri={this.state.dbUri} result={this.state.queryResult1} callback={(str)=>{this.userInfoLoad(str)}} />
                    </Col>
                    <Col xs={6} md={4}>
                        <UserInfo dbUri={this.state.dbUri} result={this.state.queryResult2} userName={this.state.userInfo} callback={(str)=>{this.userInfoLoad(str)}} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}
