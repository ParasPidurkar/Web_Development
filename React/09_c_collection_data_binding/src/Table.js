import React from 'react';

const Table = ({ data }) => {
  // Assuming all objects have the same keys, use the keys from the first object for column headers
  const columnHeaders = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <table>
      <thead>
        <tr>
          {columnHeaders.map(header => (
            <th key={header}>{header.toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            {columnHeaders.map(column => (
              <td key={column}>{item[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
