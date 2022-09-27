import React from 'react';
import { useState } from 'react';

function Status({ setStatus, category }) {
 
  const [statusValue, setStatusValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const colors = [
    'Select Color',
    'red',
    'green',
    'blue',
    'yellow',
    'orange',
    'purple',
    'pink',
  ];

  // Kullanıcının seçtiği rengin yakalanması
  const [color, setColor] = useState('');

  // add status
  const addStatus = () => {
    setStatus((prev) => [
      ...prev,
      {
        status: statusValue,
        category: categoryValue,
        color,
        id: Math.round(Math.random() * 10000),
      },
    ]);

    // reset
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h1>Add Status</h1>
      <select onChange={(e) => setCategoryValue(e.target.value)}>
        <option value="">Select Category</option>
        {category.map((data, index) => (
          <option value={index}>{data}</option>
        ))}
      </select>

      <input
        value={statusValue}
        placeholder="Enter Status"
        onChange={(e) => setStatusValue(e.target.value)}
      />

      <select onChange={(e) => setColor(e.target.value)}>
        {colors.map((data, index) => (
          <option value={data}>{data}</option>
        ))}
      </select>

      <button onClick={addStatus}>Add Status</button>
    </div>
  );
}

export default Status;
