// JsonPlaceholderUsers.jsx
import React, { useState, useEffect } from 'react';

const baseURL = 'https://jsonplaceholder.typicode.com/';

export default function JsonPlaceholderFetchUsers() {
    const [state, setState] = useState({});
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(null);

     const fetchUsersData = () => {
        fetch(`${baseURL}users`)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                const users = response.map(user =>
                    <div 
                        style={{
                            background: 'teal',
                            border: '1px solid orange',
                            paddingLeft: '50px',
                            color: '#FFFFFF',
                            textAlign: 'left', 

                        }} >
                        <h3>Fetch API request from : {baseURL}</h3>
                        <p>[{user.id-1}]</p>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.websidte}</p>
                        <p>{user.company.name}</p>
                    </div>
                )
                setState({users})
                setIsLoading(true)
            })
            .catch(error => setError(error));    }

    useEffect(() => {
        fetchUsersData();
    }, []);

    return (
        <div>{state.users}</div>
    );
}