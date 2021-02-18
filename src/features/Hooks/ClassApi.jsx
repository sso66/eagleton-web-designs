// features/Hooks/ClassApi.jsx
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

const baseURL = 'https://jsonplaceholder.typicode.com/users';

class ClassApi extends Component {
    state = {
        results: [],
        loading: true,
        error: null,
    }

    async componentDidMount() {
        const response = await fetch(baseURL)
        const { results, status } = {
            results: await response.json(),
            status: response.status
        }

        // error?
        if (status !== 200) {
            return this.setState({
                results,
                error: "error",
                loading: false
            })
        }
        // no error
        this.setState({
            results,
            error: null,
            loading: false
        })
    }

    render() {
        const { results, error } = this.state;
        console.log(results);
        
        return error 
            ? 
            <div>Sorry, and error occured: </div> 
            :
            // <pre>{JSON.stringify(results, null, '')}</pre>
            <div>
                {results.map(result => 
                    <pre>
                        {result.id}. 
                        {result.name}
                        {result.email}
                    </pre>
                )}
            </div>

    }
}

export default ClassApi;



// eof