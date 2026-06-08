import { useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  // ADD / UPDATE TODO
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    if (editId) {
      setTodos((prev) =>
        prev.map((todo) => (todo.id === editId ? { ...todo, text } : todo)),
      );
      setEditId(null);
    } else {
      setTodos((prev) => [
        {
          id: Date.now(),
          text,
          completed: false,
        },
        ...prev,
      ]);
    }

    setText("");
  };

  // DELETE TODO
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  // TOGGLE COMPLETE
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  // EDIT TODO
  const startEdit = (todo) => {
    setText(todo.text);
    setEditId(todo.id);
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.title}>📝 Todo App</h2>

        {/* FORM */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter a task..."
            style={styles.input}
          />

          <button style={styles.addBtn}>{editId ? "Update" : "Add"}</button>
        </form>

        {/* LIST */}
        <div style={styles.list}>
          {todos.length === 0 ? (
            <p style={{ textAlign: "center", color: "#888" }}>
              No tasks yet 🚀
            </p>
          ) : (
            todos.map((todo) => (
              <div
                key={todo.id}
                style={{
                  ...styles.todo,
                  background: todo.completed ? "#e8f5e9" : "#fff",
                }}
              >
                <span
                  onClick={() => toggleTodo(todo.id)}
                  style={{
                    ...styles.text,
                    textDecoration: todo.completed ? "line-through" : "none",
                    color: todo.completed ? "#4caf50" : "#333",
                    cursor: "pointer",
                  }}
                >
                  {todo.text}
                </span>

                <div style={styles.actions}>
                  <button
                    onClick={() => startEdit(todo)}
                    style={styles.editBtn}
                  >
                    ✏️
                  </button>

                  <button
                    onClick={() => deleteTodo(todo.id)}
                    style={styles.deleteBtn}
                  >
                    ❌
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

/* STYLES */
const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f6f8",
    fontFamily: "sans-serif",
  },

  container: {
    width: "400px",
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },

  title: {
    textAlign: "center",
    marginBottom: "15px",
  },

  form: {
    display: "flex",
    gap: "10px",
  },

  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    outline: "none",
  },

  addBtn: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "8px",
    background: "#1976d2",
    color: "#fff",
    cursor: "pointer",
  },

  list: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  todo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #eee",
  },

  text: {
    flex: 1,
  },

  actions: {
    display: "flex",
    gap: "5px",
  },

  editBtn: {
    border: "none",
    background: "#ffb300",
    padding: "5px 8px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  deleteBtn: {
    border: "none",
    background: "#e53935",
    color: "#fff",
    padding: "5px 8px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};