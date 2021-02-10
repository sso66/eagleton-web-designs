// File: UserForm.jsx
// Date: 2/7/2021
// Note: Eagleton Web Designs Production
import React, { Component } from 'react';
import axios from 'axios';

class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      fname: '',
      lname: '',
      email: '',
    };
  }

  onChange = (e) => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { fname, lname, email } = this.state;

    // axios.post('/', { fname, lname, email })
    axios.post('https://jsonplaceholder.typicode.com/users', { fname, lname, email })
      .then((response) => {
        //access the results here....
        console.log(response.data);
        // __ redirect when submission is successfl ___
        // window.location = '/RetrieveList';
      });
  }
﻿
  render() {
    const { fname, lname, email } = this.state;
    return (
      <form onSubmit>
        <input
          type="text"
          name="fname"
          value={fname}
          placeholder="First Name"
          onChange={this.onChange}
        />
        <input
          type="text"
          name="lname"
          value={lname}
          placeholder="Last Name"
          onChange={this.onChange}
        />
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          onChange={this.onChange}
        />
       <button type="submit">Submit</button>
      </form>
    );
  }
}

export default UserForm;

// eof