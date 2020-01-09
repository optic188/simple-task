import React from 'react';
import "./index.css";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Resume from "./components/Resume";
import { Switch, Route } from 'react-router-dom'

import {connect} from "react-redux";

class App extends React.Component {
    render() {
        const {user} = this.props;
        return (
            <Switch>
                {user.loggedIn &&
                <Route exact path="/" >
                    <Resume />
                </Route>
                }
                {user.loggedIn &&
                <Route exact path="/cv" >
                    <Resume />
                </Route>
                }
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/cv">
                    <Login />
                </Route>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route exact path="/registration" >
                    <Registration />
                </Route>
            </Switch>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
});



export default connect(
    mapStateToProps,
    null
)(App);

