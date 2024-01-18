// ChildComponent.js
import React from 'react';

const ChildComponent = (props) => {
    return (
        <div>
            <h2>Child Component</h2>
            <p>{props.greeting}</p>
        </div>
    );
};

export default ChildComponent;
