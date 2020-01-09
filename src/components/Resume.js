import React from "react";
import {loadResume} from "../redux/actions";
import {connect} from "react-redux";
import {Button, Input} from "antd";

class Resume extends React.Component {
    state = {
        name: '',
        email: '',
        age: 0,
        title: ''
    };

    loadResume = () => {
        if (this.state.name !== '' && this.state.email !== '' && this.state.age !== '' && this.state.title !== '') {
            this.props.loadResume(this.state)
        } else {
            alert('Fill the form')
        }
    };

    onChange = (event) => {
        console.log(event);
        event.persist()
        const e = event;
        this.setState(() => ({
            [`${e.target.name}`]: e.target.value
        }))
    };

    render() {
        return (
            <div className="resume">
                <h2>Your Resume</h2>
                <Input placeholder="Login name" name='name' onChange={this.onChange}/>
                <Input placeholder="Email" name='email' onChange={this.onChange}/>
                <Input placeholder="age" name='age' onChange={this.onChange}/>
                <Input placeholder="title" name='title' onChange={this.onChange}/>
                <Button type="primary" onClick={this.loadResume}>Send cv</Button>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    user: state.items
});

const mapDispatchToProps = dispatch => ({
    loadResume: (data) => dispatch(loadResume(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Resume);