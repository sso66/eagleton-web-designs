// File: src/features/Form/LoginFormGroup.jsx
// Date: 2/18/2021
// Note: React Controlled and Uncontrolled Forms{
import React, { Component, Fragment } from 'react';

// ___ controlled component with individual A/c ___
class LoginFormGroup extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            username: '',
            password: '' 
        }
    }

    handleChange = ({ target }) => {
        this.setState({[target.name]:target.value})
    };

    render() {
        return (
            <Fragment>
                <form>
                    <label htmlFor="username">
                        Name:&nbsp;
                    </label>
                    <input 
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="Password">
                        Passowrd:&nbsp;
                    </label>
                    <input 
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </form>
                <h4>Your Username is {this.state.username}</h4>
                <h4>Your Password is {this.state.password}</h4>
            </Fragment>
        )
    }
}

export default LoginFormGroup;

// eof