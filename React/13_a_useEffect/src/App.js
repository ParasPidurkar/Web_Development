import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const DataFetchingComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Replace with your API endpoint or mock data
        fetch('https://api.github.com/users/xiaotian/repos')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div>
            {data ? <div>Data loaded: {data.title}</div> : <div>Loading...</div>}
        </div>
    );
};

ReactDOM.render(<DataFetchingComponent />, document.getElementById('app'));
