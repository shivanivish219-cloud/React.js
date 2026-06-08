import { useState } from "react";

const TodoPage = () => {
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });
  const [todos, setTodos] = useState([]);

  const onChangeNewTodo = (event) => {
    const { name, value } = event.target;

    console.log("name, value: ", name, value);

    setNewTodo((prevState) => ({ ...prevState, [name]: value }));
  };

  const onAddNewTodo = () => {
    console.log("NewTodo: ", newTodo);
    if (!newTodo.title) {
      alert("Please enter todo title");
      return;
    }

    const newTodoPayload = {
      id: new Date().getTime(),
      title: newTodo.title,
      desciption: newTodo.description,
      createdAt: new Date().getTime(),
    };

    setTodos((prevState) => [...prevState, newTodoPayload]);
    setNewTodo({ title: "", description: "" });
  };

  const onDeleteTodo = (todo) => {
    console.log("To delete todoId: ", todo);
    const promptRes = confirm(`Do you want to delete: ${todo.title}`);
    console.log("promptRes: ", promptRes);
    if (!promptRes) {
      return;
    }
    setTodos((prevState) => prevState.filter((item) => item.id !== todo.id));
  };

  const onEditTodo =(todo)=>{
    console.log("To edit todoId:", todo);
    const updatedTitle = prompt(`Do you want to edit: ${todo.title}`);
    if (!updatedTitle){
        return;
    }

        const updatedDescription = prompt(`update description: ${todo.desciption}`);
    
    // console.log("promptsRes:", promptRes);
    if (!updatedDescription){
        return;
    }
    setTodos((prevState) => prevState.map((item) => item.id === todo.id
        ?{...item,
             title: updatedTitle,
            desciption: updatedDescription,

        }
        :item
    ));
  };

  return (
    <div>
      <section>
        <p>
          <strong>Add New Todo</strong>
        </p>
        <div className="new-todo-form">
          <div className="form-element">
            <p>Title</p>
            <input
              type="text"
              value={newTodo.title}
              placeholder="Enter todo title"
              name="title"
              onChange={onChangeNewTodo}
            />
          </div>
          <div className="form-element">
            <p>Description</p>
            <textarea
              name="description"
              onChange={onChangeNewTodo}
              value={newTodo.description}
              placeholder="Enter todo description"
            ></textarea>
          </div>
          <div className="form-element">
            <button onClick={onAddNewTodo}>Add todo</button>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <p>
          <strong>My Todos</strong>

          {todos.length === 0 ? (
            <p>No todos available. Please add a new one</p>
          ) : (
            <div className="todo-list">
              {todos.map((todo, index) => (
                <div className="todo-item" key={todo.id}>
                  <p>
                    {index}-{todo.title}
                  </p>
                  <p>{todo.desciption}</p>
                  <button onClick={()=> onEditTodo(todo)}>Edit</button>
                  <button onClick={() => onDeleteTodo(todo)}>Delete</button>
                </div>
              ))}
            </div>
          )}
        </p>
      </section>
    </div>
  );
};

export default TodoPage;