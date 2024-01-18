import React from 'react';

const App = () => {
  const headerStyle = {
    color: 'blue',
    backgroundColor: 'lightgray',
    padding: '10px',
    textAlign: 'center'
  };

  const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.5',
    margin: '20px'
  };

  return (
      <div>
        <h1 style={headerStyle}>Welcome to My App</h1>
        <p style={paragraphStyle}>This is a simple example of using inline styles in React.</p>
      </div>
  );
};

export default App;
