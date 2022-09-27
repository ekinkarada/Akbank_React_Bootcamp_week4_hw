import './App.css';
import { useState } from 'react';
import CategoryForm from './components/CategoryForm/CategoryForm';
import ToDoForm from './components/ToDoForm/ToDoForm';
import ToDoList from './components/ToDoList/ToDoList';
import Status from './components/StatusForm/StatusForm';

import EditCategoryForm from './components/EditCategoryForm/EditCategoryForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [category, setCategory] = useState([]);
  const [status, setStatus] = useState([]);

  // open/close edit category form
  const [openCategory, setOpenCategory] = useState(false);

  // current category index
  const [currentCategory, setCurrentCategory] = useState(0);
  const [editCategoryText, setEditCategoryText] = useState('');
  const [allCategory, setAllCategory] = useState('');

  return (
    <div className="App">
      <h1>MY TO DO APP</h1>
      <EditCategoryForm
        currentCategory={currentCategory}
        setCategory={setCategory}
        setOpenCategory={setOpenCategory}
        setEditCategoryText={setEditCategoryText}
        editCategoryText={editCategoryText}
        openCategory={openCategory}
      />
      <header className="App-header">
        <CategoryForm
          setCategory={setCategory}
          category={category}
          setCurrentCategory={setCurrentCategory}
          setOpenCategory={setOpenCategory}
          setEditCategoryText={setEditCategoryText}
          todos={todos}
          setTodos={setTodos}
          setAllCategory={setAllCategory}
        />

        <Status setStatus={setStatus} category={category} />
        <ToDoForm
          category={category}
          setTodos={setTodos}
          status={status}
          setAllCategory={setAllCategory}
        />
      </header>
      <ToDoList
        todos={todos}
        setTodos={setTodos}
        category={category}
        setAllCategory={setAllCategory}
        allCategory={allCategory}
      />
    </div>
  );
}

export default App;
