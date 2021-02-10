// File: JsonPlaceholderClassUsers.jsx    
// Date: 2/7/2021
// Note: Eagleton Web Designs Production
import React, { Component } from 'react';
import styled  from '@emotion/styled';
// import { css, jsx } from '@emotion/react';
import axios from 'axios';

const Container = styled.div `
    background: teal;
    margin-top: 5px;
    padding: 5px;
    color: #FFFFFF;
`
class SubmitForm extends Component {
    state = { 
        name: '',
    }

    handleSubmit = event => {
        event.preventDefault();
        const user = {
            name: this.state.name,
        }
        axios.post('https://jsonplaceholder.typicode.com/users', { user })
            .then(response => {
                console.log(response);
                console.log(response.data);
                // __ redirect when submission is successful ___
                // window.location = '/RetrieveList';
            });
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
    }

    render() {
        return (
            <Container>
                <h3>Submit Form: Search and Found Users</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person Name:&nbsp;
                        <input
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </Container>
        )
    }
}
export default SubmitForm;

// eof