// File: User.jsx
// Date: 2/8/2021
import React from 'react';

export default function Users({user}) {
    return (
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
}; 