// File: RetrieveList.jsx
// Date: 2/7/2021
// Note: Eagleton Web Designs Production
import React, { Component } from 'react';
import styled  from '@emotion/styled';
// import { css, jsx } from '@emotion/react';
import axios from 'axios';

const Container = styled.div `
    background: purple;
    margin-top: 10px;
    padding: 5px;
    color: #FFFFFF;
`
const style = {
    textAlign: 'center'
}

class RetrieveList extends Component {
    state = {
        persons: [],
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log(response);
                this.setState({ persons: response.data });
            });
    }
    render() {
        return (
            <Container>
                <h3>Retrieve List: Search and Found</h3>
                {this.state.persons.map(person => 
                    <li key={person.id} style={style}>
                        {person.name}
                    </li>
                )}
            </Container>
        )
    }
}

export default RetrieveList;

// eof