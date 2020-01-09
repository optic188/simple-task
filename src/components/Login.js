import React from "react";
import {login} from "../redux/actions";
import {connect} from "react-redux";
import {Button, Input} from 'antd';
import {Link} from "react-router-dom";

class Login extends React.Component {
    state = {
        name: '',
        email: ''
    }

    login = () => {
        if(this.state.name !== '') {
            this.props.login(this.state)
        }
    }

    onChange = (event) => {
        console.log(event)
        event.persist()
        const e = event
        this.setState(() => ({
            [`${e.target.name}`]: e.target.value
        }))
    }

    render() {
        const {user} = this.props;
        console.log(user)
        return (
            <div className="login">
                <h2>Login</h2>
                <Input placeholder="Login name" name='name' onChange={this.onChange}/>
                <Input placeholder="Email" name='email' onChange={this.onChange}/>
                <Button type="primary" onClick={this.login}>LogIn</Button>

                {!user.loggedIn &&<Link to='/registration'><Button type="primary" >Register</Button></Link>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    login: (data) => dispatch(login(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
