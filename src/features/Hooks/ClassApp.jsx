// features/Hooks/ClassApp.jsx
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassApp extends Component {
    state = {
        age: 30,
        status: 'married',

        results: [],
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

export default ClassApp;

// eof