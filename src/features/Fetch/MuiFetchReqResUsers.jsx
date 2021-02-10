// MuiFetchReqResUsers.jsx
import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import PplCard from './PplCard';

const baseURL = "https://reqres.in/api/"
// setting the users initial state with React Hook
export default function MuiFetchReqResUsers() {
    const [users, setUsers] = useState([]);

    // setting up await fetch api and turning response into json
    useEffect(() => {
        async function fetchUserData() {
            setUsers (
                await fetch(`${baseURL}users?page=2`)
                    .then(response => response.json())
                    .then(response => response.data)
                    .catch(error => console.log(error, 'warning'))
            )
        }

        fetchUserData();
    }, []);

    return (
        <div className='App'>
            <h3>THE TRUE BEAUTY OF MATERIAL-UI</h3>
            <Grid 
                container
                spacing={10}
                style={{ padding: '24px'}}
            >
                {users.map(user =>
                    <Grid item
                        xs={12} sm={6} md={4} lg={4} xl={3}
                        key={user.id}
                    >
                        <PplCard 
                            key={user.id}
                            first_name={user.first_name}
                            last_name={user.last_name}
                            email={user.email}
                            avatar={user.avatar}
                        />
                    </Grid>
                )}
            </Grid>
        </div>
    )
}

// eof