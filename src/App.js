import React from 'react';
import './App.css';
import ItemComponent from './ItemComponent'
import {Avatar, Icon} from 'antd';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    text: "my item text long text",
                    status: true
                },
                {
                    text: "my text",
                    status: true
                },
                {
                    text: "my text",
                    status: false
                },
            ]
        }
        this.onChangeCheckbox = this.onChangeCheckbox.bind(this)
        this.onDelete = this.onDelete.bind(this)
    }

    onChangeCheckbox(e) {
        const items = this.state.items,
            deletedItem = items.splice(e.target['data-index'], 1);
        deletedItem[0].status = !deletedItem[0].status
        items.push(deletedItem[0])
        this.setState({items: [...items]})
    }

    onDelete(e) {
        const items = this.state.items;
        items.splice(e.target['data-index'], 1);
        this.setState({items: [...items]})
    }

    render() {
        const {items} = this.state
        return (
            <div className="wrapper">
                <div className="user-info">
                    <div className="user">
                        <div className="user_user-wrapper">
                            <Avatar style={{backgroundColor: '#7265e6', verticalAlign: 'middle'}}
                                    size="large"> US </Avatar>
                            <p> Gulglemo markoni</p>
                        </div>
                        <div className="todo-list">
                            <div className="todo-list_todo-list-wrapper">
                                <Icon type="menu-unfold"/>
                                <p>Team todo list</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="todo-list">
                    <header className="todo-list_header">
                        <h2>Team To-Do List </h2>
                        <p>Tue 12 december </p>
                    </header>
                    <div className="todo-list_body">
                        {items.map((elem, index) => {
                            return <ItemComponent
                                elem={elem}
                                index={index}
                                onChangeCheckbox={this.onChangeCheckbox}
                                onDelete={this.onDelete}
                            />
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
