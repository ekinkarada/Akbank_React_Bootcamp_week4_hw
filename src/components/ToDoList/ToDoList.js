import { useState } from 'react';
import './ToDoList.css';

const ToDoList = ({
  todos,
  setTodos,
  category,
  setAllCategory,
  allCategory,
}) => {
  const [color, setColor] = useState('#fff');

  const [allStatus, setAllStatus] = useState(null);

  const deleteTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    setAllCategory(newTodos);
  };

  const changeTodoColor = (rowIndex, statusIndex) => {
    
     // Her renk için bir array oluşturulması ve listelenen tablonun indeksi ile eşleştirilmesi

    setColor((prev) => {
      let newColor = [...prev];
      newColor[rowIndex] = todos[rowIndex].status[statusIndex].color;
      return newColor;
    });
  };

  const filterTodos = (categoryIndex) => {
    if (allCategory == null) {
      setAllCategory(todos);
      let newTodos = todos.filter((todo) => todo.todoCategory === categoryIndex);
      setTodos(newTodos);
    }
    if (categoryIndex == 'all_categories') {
      setTodos(allCategory);
    } else {
      let newTodos = allCategory.filter(
        (todo) => todo.todoCategory == categoryIndex
      );

      setTodos(newTodos);
    }
  };
  return (
    <>
      <table className="todoList">
        <caption>
          <select
            onChange={(e) => filterTodos(e.target.value)}
            style={{
              width: '30%',
            }}
          >
            <>
              <option value="all_categories">All Categories</option>
              {category.map((data, index) => (
                <>
                  <option key={index} value={index}>
                    {data}
                  </option>
                </>
              ))}
            </>
          </select>
        </caption>
        <thead>
          <tr>
            <th>Todo Name</th>
            <th>Todo Description</th>
            <th>Todo Category</th>
            <th>Todo Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td
                style={{
                  backgroundColor: color[index],
                }}
              >
                {todo.todoName}
              </td>
              <td
                style={{
                  backgroundColor: color[index],
                }}
              >
                {todo.todoDesc}
              </td>
              <td
                style={{
                  backgroundColor: color[index],
                }}
              >
                {category[todo.todoCategory]}
              </td>
              <td
                style={{
                  backgroundColor: color[index],
                }}
              >
                <select
                  onChange={(e) => changeTodoColor(index, e.target.value)}
                >
                  {todo.status.map((stat, index) => (
                    <option key={index} value={index}>
                      {stat.status}
                    </option>
                  ))}
                </select>
              </td>
              <td
                style={{
                  backgroundColor: color[index],
                }}
              >
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ToDoList;
