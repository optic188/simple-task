import React from 'react';
import './App.css';
import { Avatar ,Icon} from 'antd';
function App() {
  return (
      <div className="wrapper">
        <div className="user-info">
          <div className="user">
            <div className="user_user-wrapper">
              <Avatar style={{ backgroundColor: '#7265e6', verticalAlign: 'middle' }} size="large" > US </Avatar>
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
      </div>
    </div>
  );
}

export default App;
