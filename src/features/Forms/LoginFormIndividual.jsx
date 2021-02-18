// File: src/features/Form/LoginFormIndividual.jsx
// Date: 2/18/2021
// Note: React Controlled and Uncontrolled Forms{
import React, { Component, Fragment } from 'react';

// ___ controlled component with single A/c ___
class LoginFormIndividual extends Component {
    constructor(props) {
        super(props)
        this.state = { username: '' }
    }

    handleChange = event => {
        this.setState({username: event.target.value})
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
                </form>
                <h4>Your Username is {this.state.username}</h4>
            </Fragment>
        )
    }
}

export default LoginFormIndividual;

// eof