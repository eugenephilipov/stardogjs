import React from 'react';
import { Table } from 'react-bootstrap';

export default function UserInfo(props): JSX.Element {
    let retJsx;
    if (props.result !== null) {
        retJsx = props.result.map((item, key) => {
            const y: string = (item.y.value).replace(props.dbUri, '');
            const z: string = (item.z.value).replace(props.dbUri, '');
            const showLink: boolean = (item.z.value).indexOf(props.dbUri)!==-1 && (item.y.value).indexOf(props.dbUri)!==-1 ? true: false;
            return (<tr key={`${key}A`}><td key={key}>{y}</td>
            <td key={key}>{showLink ? (<a style={{ cursor: 'help' }} onClick={() => { props.callback(z) }}>{z}</a>):z}</td>
            </tr>);
        });
    }
    return (
        <Table condensed hover  >
            <thead key="10001">
                <tr key="10000">
                    <th key="m0" colSpan={2}>{props.userName}</th>
                </tr>

                <tr key="10000">
                    <th key="m1">property</th>
                    <th key="m2">value</th>
                </tr>
            </thead>
            <tbody key="10002">
                {retJsx}
            </tbody>
        </Table>
    );
}
