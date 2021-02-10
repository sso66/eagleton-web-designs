// features/Hooks/AppClass.jsx
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const baseURL = 'https://jsonplaceholder.typicode.com/';

class AppClass extends Component {
    state = {
        age: 30,
        status: 'married',
    }

    static propTypes = {
        name: PropTypes.string
    }

    static defaultProps = { 
        name: 'React Class Component'
    }

    handleClick = () => {
        console.log(this.props.name);
        this.setState(state => ({age: state.age + 1}));
    }

    render() {
        return (
            <div>
                <h3>Hello {this.props.name}</h3> 
                <p>Today I am <b>{this.state.age}</b> years old, 
                    and <i>{this.state.status}</i>!
                    </p>
                <button
                    onClick={this.handleClick}  
                >
                    Click Me:&nbsp;{this.props.name}
                </button>
            </div>
        )
    }
}

export default AppClass;

// eof