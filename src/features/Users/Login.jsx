// File: Login.jsx
// Date: 2/8/2021
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import User from './User';

const baseURL = 'https://jsonplaceholder.typicode.com/';

export default function Login() {
    const [state, setState] = useState([]);
    const [setError] = useState(null)

    const fetchUserData = () => {
        axios.get(`${baseURL}users`, {})
            .then(response => {
                const data = response.data;
                console.log(data);
                const users = data.map(user =>
                    <div 
                        style={{
                            background: 'teal',
                            border: '1px solid orange',
                            paddingLeft: '50px',
                            color: '#FFFFFF',
                            textAlign: 'left', 

                        }} >
                        <h3>Axios API request from : {baseURL}</h3>
                        <p>[{user.id-1}]</p>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.websidte}</p>
                        <p>{user.company.name}</p>
                    </div>
                )
                setState({users})
            })
            .catch(error => setError(error));
    }
    useEffect(() => {
        fetchUserData();
    }, [""])

    return (
        <div>
            {state.users}
            <User />
        </div>
    );
}; 