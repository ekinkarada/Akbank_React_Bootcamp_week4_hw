
function EditCategoryForm({
  currentCategory,
  setCategory,
  setOpenCategory,
  editCategoryText,
  setEditCategoryText,
  openCategory,
}) {
  const editCategory = () => {
    setCategory((prev) => {
      let newCategory = [...prev];
      newCategory[currentCategory] = editCategoryText;
      return newCategory;
    });
  };
  return (
    <>
      {openCategory && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              border: '1px solid black',
              padding: '10px',
              borderRadius: '5px',
              width: '400px',
            }}
          >
            <h1>Set Category</h1>
            <input
              value={editCategoryText}
              onChange={(e) => setEditCategoryText(e.target.value)}
            />
            <button onClick={editCategory}>Edit</button>

            <div
              style={{
                textAlign: 'right',
              }}
            >
              <button onClick={() => setOpenCategory(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EditCategoryForm;
