import React from 'react';
import { Table } from 'react-bootstrap';
export default function ResultTable(props): JSX.Element {
    let retJsx;
    if (props.result !== null) {
        retJsx = props.result.map((item, key) => {
            const str: string = (item.z.value).replace(props.dbUri, '');
            return (<tr key={`${key}A`}><td key={key}><a style={{cursor:'help'}} onClick={()=>{props.callback(str)}}>{str}</a></td></tr>);
        });
    }
    return (
        <Table condensed hover >
            <thead key="10001">
                <tr key="10000">
                    <th key="m1">Name</th>
                </tr>
            </thead>
            <tbody key="10002">
                {retJsx}
            </tbody>
        </Table>
    );
}
