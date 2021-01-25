// JsonPlaceholderUsers.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/';

export default function JsonPlaceholderAxiosUsers() {
    const [state, setState] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

     const fetchUsersData = () => {
        axios.get(`${baseURL}users`, {})
        .then(response => {
            const data = response.data;
            console.log(data);
            const users = data.map(user =>
                    <div 
                        style={{
                            background: 'purple',
                            border: '1px solid teal',
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