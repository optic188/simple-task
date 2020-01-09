import React from "react";
import {register} from "../redux/actions";
import {connect} from "react-redux";

class Registration extends React.Component {
    render() {
        return (
            <div className="register">
                <h2>Register here</h2>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.items
});

const mapDispatchToProps = dispatch => ({
    register: () => dispatch(register()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Registration);