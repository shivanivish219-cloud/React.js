// import Todo from "./Todo";

const Todo = ({
  todo,
  index,
  onEditTodo,
  onDeleteTodo,
}) => {
  return (
    <div className="todo-item">
      <p>
        {index + 1}. {todo.title}
      </p>

      <p>{todo.desciption}</p>

      <button
        onClick={() => onEditTodo(todo)}
      >
        Edit
      </button>

      <button
        onClick={() => onDeleteTodo(todo)}
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;