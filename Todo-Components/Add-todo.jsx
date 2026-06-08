// import AddTodo from "./Add-todo";


const AddTodo = ({
  newTodo,
  onChangeNewTodo,
  onAddNewTodo,
}) => {
  return (
    <div className="new-todo-form">
      <div>
        <p>Title</p>
        <input
          type="text"
          name="title"
          value={newTodo.title}
          onChange={onChangeNewTodo}
        />
      </div>

      <div>
        <p>Description</p>
        <textarea
          name="description"
          value={newTodo.description}
          onChange={onChangeNewTodo}
        />
      </div>

      <button onClick={onAddNewTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;