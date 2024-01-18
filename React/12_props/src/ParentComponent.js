// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const message = "Hello from Parent!";

  return (
      <div>
        <h1>Parent Component</h1>
        <ChildComponent greeting={message} />
      </div>
  );
};

export default ParentComponent;
