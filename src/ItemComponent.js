import React from 'react';
import './App.css';
import {Checkbox, Icon} from 'antd'

const itemComponent = props => {
    const {onChangeCheckbox, elem, onDelete, index} = props
    return (
        <div className="item">
            <Checkbox checked={!elem.status} data-index={index} onChange={onChangeCheckbox}/>
            <div>
                <p className={!elem.status ? 'underline' : ''}>{elem.text}</p>
            </div>
            <div>
                <Icon onClick={onDelete} type="delete" className="delete-icon"/>
            </div>
        </div>
    )
}
export default itemComponent
