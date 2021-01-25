// Article.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = 'https://reqres.in/api/articles/';

function Article() {
    const [articleId, setArticleId] = useState(null);


    useEffect(() => {
        const article = { title: 'React Hooks POST request with Axios'}
        axios.post(`${baseURL}`, article)
            .then(response => setArticleId(response.data.id))
    }, []);

    return (
        <div>
            <h4>Axios API Post Request with React Hooks</h4>
            <p>Returned Id: <b>{articleId}</b>&nbsp;from:&nbsp;{baseURL}</p>
        </div>
    )
}

export default Article;

// eof