// ExpansionPanelistPromise.jdx
import React, { useState } from 'react';

const ExpansionPanelistPromise = () => {
    const [content, setContent] = useState("Didn't yet start...");
    
    // ___ use setTimeout to simulate latency to experience real API___
    const fetchContent = new Promise((resolve, reject) => {    
        setTimeout(() => {
            resolve();
        }, 2000);
    }).then(() => {
        setContent("Done now!");
    });
    
    return (
        <div style={{color: 'red'}}>{content}</div>
    );
  };

  export default ExpansionPanelistPromise;

  // eof
