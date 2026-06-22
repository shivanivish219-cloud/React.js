import { useState } from "react";
import AddTodo from "./Add-todo";
import Todo from "./Todo";

const TodoPage = () => {
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
  });

  const [todos, setTodos] = useState([]);

  const onChangeNewTodo = (event) => {
    const { name, value } = event.target;

    setNewTodo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onAddNewTodo = () => {
    if (!newTodo.title) {
      alert("Please enter title");
      return;
    }

    const payload = {
      id: Date.now(),
      title: newTodo.title,
      desciption: newTodo.description,
    };

    setTodos((prevState) => [
      ...prevState,
      payload,
    ]);

    setNewTodo({
      title: "",
      description: "",
    });
  };

  const onDeleteTodo = (todo) => {
    setTodos((prevState) =>
      prevState.filter(
        (item) => item.id !== todo.id
      )
    );
  };

  const onEditTodo = (todo) => {
    const updatedTitle = prompt(
      "Update title",
      todo.title
    );

    const updatedDescription = prompt(
      "Update description",
      todo.desciption
    );

    if (
      !updatedTitle ||
      !updatedDescription
    ) {
      return;
    }

    setTodos((prevState) =>
      prevState.map((item) =>
        item.id === todo.id
          ? {
              ...item,
              title: updatedTitle,
              desciption:
                updatedDescription,
            }
          : item
      )
    );
  };

  return (
    <div>
      <h2>Todo App</h2>

      <AddTodo
        newTodo={newTodo}
        onChangeNewTodo={
          onChangeNewTodo
        }
        onAddNewTodo={onAddNewTodo}
      />

      <hr />

      {todos.map((todo, index) => (
        <Todo
          key={todo.id}
          todo={todo}
          index={index}
          onEditTodo={onEditTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoPage;