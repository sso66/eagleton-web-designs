// User.jsx
import React, { Component, useState, useReducer } from 'react';
import { Card } from '@material-ui/core';
import styled from 'styled-components'

const StyledCard = styled(Card)`
    display: flex;
    justify-content: space-around;
    background-color: lightgreen;
`;

// class User extends Component {
    // State DP
    // state = {
    //     username: '',
    // }

    // Command DP
    // onChange = (e) => {
    //     // State DP
    //     this.setState({
    //         // KVC
    //         [e.target.name]: e.target.value
    //     });
    //     alert(e.target.name + ': '+ e.target.value);
    // }

    // Observer DP
//     render() {
//         return (
//             <div>
//                 <input 
//                     type='text' 
//                     name="username"
//                     value={this.state.username} 
//                     onChange={this.onChange} 
//                 />
//                 <button onClick={this.onClick}>User</button>
//             </div>
//         )
//     }
// }

// function User() {
     // State DP
    // const [username, setUsername] = useState('');

     // Command DP
    // const onChange = (e) => {
    //     // State DP
    //     setUsername(e.target.value);
    //     alert(e.target.name + ': ' + e.target.value)
    // }

     // Observer DP
//     return (
//         <div>
//             <input 
//                 type='text' 
//                 name="username"
//                 value={username} 
//                 // onChange={(e)=>setUsername(e.target.value)}   
//                 onChange={onChange}      
//             />
//         </div>
//     )
// }

const initialState = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    mobile: '',
}

function reducer(state, { field, value }) {
    return {
        ...state,
        [field]: value
    }
}

function User() {
    // State DP
    const [state, dispatch] = useReducer(reducer, initialState);

    // Command DP
    const onChange = (e) => {
        dispatch({ field: e.target.name, value: e.target.value });
        alert(e.target.name + ": " + e.target.value); // It works!
    }

    const { username, password, firstName, lastName, mobile } = state;
    // Observer DP
    return (
        <div>
            <StyledCard>
            <input name="username" value={username} onChange={onChange} />
            <input name="password" value={password} onChange={onChange} />
            <input name="firstName" value={firstName} onChange={onChange} />
            <input name="lastName" value={lastName} onChange={onChange} />
            <input name="mobile" value={mobile} onChange={onChange} />
            </StyledCard>
        </div>
    )
}
export default User;

// eof