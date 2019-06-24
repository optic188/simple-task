import React from 'react';
import './../App.css';
import {Select} from 'antd'

const itemComponent = props => {
    const {name, role, connected, status} = props;
    return (
        <tr className="item">
            <td>
                {name}
            </td>
            <td>
                {role}
            </td>
            <td>
                {connected}
            </td>
            <td>
                <Select defaultValue={status[0]} style={{width: 120}}>
                    {status.map((elem) => {
                        return <Select.Option key={elem} value={elem}>{elem}</Select.Option>
                    })}
                </Select>
            </td>
        </tr>
    )
}
export default itemComponent
