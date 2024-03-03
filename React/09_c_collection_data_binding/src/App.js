import React from 'react';
import Table from './Table'; // Import the Table component

// Sample data array
const data = [
  { id: 1, name: "John Doe", age: 30, city: "New York" },
  { id: 2, name: "Jane Doe", age: 25, city: "Los Angeles" },
  { id: 3, name: "William Smith", age: 28, city: "Chicago" },
];

function App() {
  return (
    <div className="App">
      <h1>Data Table</h1>
      <Table data={data} />
    </div>
  );
}

export default App;
