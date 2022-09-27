import React from 'react'

const CategoryList = (category) => {
  return (
    <>
    <select>
    {category.category.map((todo, index) => (
        <option>{todo}</option>
      ))}
    </select>
    </>
  )
}

export default CategoryList