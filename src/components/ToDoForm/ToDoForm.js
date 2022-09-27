import React from 'react';
import { useState } from 'react';

const AddToDoForm = ({ category, setTodos, status, setAllCategory }) => {
  const [todoName, setTodoName] = useState('');
  const [todoDesc, setTodoDesc] = useState('');
  const [todoCategory, setTodoCategory] = useState([]);

  const handleSubmit = () => {
    
      // category nin index değeri ile stat içerisindeki category index numaralarını karşılaştırılması
      // ve eşleşenleri settodos içerisinde bir diziye atanması
     
    let _status = status.filter((stat) => stat.category === todoCategory);

    setTodos((prev) => {
      let data = [
        ...prev,
        {
          todoName,
          todoDesc,
          todoCategory,
          id: Math.round(Math.random() * 10000),
          status: _status,
        },
      ];

      setAllCategory(data);
      return data;
    });
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h1>Add To Do</h1>

      <input
        placeholder="Enter New To Do"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />
      <input
        placeholder="Enter Description"
        value={todoDesc}
        onChange={(e) => setTodoDesc(e.target.value)}
      />

      <select onChange={(e) => setTodoCategory(e.target.value)}>
        <option value="">Select Category</option>

        {category.map((data, index) => (
          <option key={index} value={index}>
            {data}
          </option>
        ))}
      </select>

      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default AddToDoForm;
