import React from 'react';
import { useState } from 'react';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const CategoryForm = ({
  setCategory,
  category,
  setCurrentCategory,
  setOpenCategory,
  setEditCategoryText,
  todos,
  setTodos,
  setAllCategory,
}) => {
  const [categoryText, setCategoryText] = useState('');

  const handleSubmit = (e) => {
    setCategory((prev) => [...prev, categoryText]);
    setCategoryText('');
  };

  const deleteCategory = (index) => {

    // kaç tane ilişkili todo var onu bulunması
    let _todos = todos.filter((todo) => todo.todoCategory == index);
    let newTodos = todos.filter((todo) => todo.todoCategory != index);

    MySwal.fire({
      title:
        'Bu kategoriye ait ' +
        _todos.length +
        ' todo var. Silmek istediğinize emin misiniz?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then((result) => {
      
      if (result.isConfirmed) {
        setTodos(newTodos);
        setAllCategory(newTodos);

        // delete array
        delete category[index];

        console.log(category);
        setCategory(category);

        Swal.fire('Todos deleted successfuly', '', 'success');
      } else if (result.isDenied) {
       
      }
    });
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h1>Add Category</h1>

        <input
          placeholder="Enter Category"
          value={categoryText}
          onChange={(e) => setCategoryText(e.target.value)}
        />

        <button onClick={handleSubmit}>Add Category</button>

        {category.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {category.map((data, index) => {
                return (
                  <tr>
                    <td>{data}</td>
                    <td>
                      <button
                        onClick={() => {
                          setCurrentCategory(index);
                          setOpenCategory(true);
                          setEditCategoryText(data);
                        }}
                      >
                        Edit
                      </button>
                      <button onClick={() => deleteCategory(index)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default CategoryForm;
