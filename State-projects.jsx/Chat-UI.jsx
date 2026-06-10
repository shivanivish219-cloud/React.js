import { useState } from "react";

export default function ChatApp() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hello! How can I help you today?" },
  ]);

  const [input, setInput] = useState("");

  const fakeReplies = [
    "That's interesting!",
    "I understand. Tell me more.",
    "Here is a simple solution for that.",
    "Let me think about it...",
    "Good question!",
    "I'm not fully sure, but here is an idea.",
    "You can try breaking it into smaller steps.",
    "That makes sense 👍",
  ];

  const getRandomReply = () => {
    return fakeReplies[Math.floor(Math.random() * fakeReplies.length)];
  };

  const handleSend = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    const aiMessage = {
      role: "ai",
      text: getRandomReply(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    // simulate AI delay
    setTimeout(() => {
      setMessages((prev) => [...prev, aiMessage]);
    }, 600);
  };

  return (
    <div style={styles.container}>
      {/* HEADER */}
      <div style={styles.header}>ChatGPT Clone</div>

      {/* CHAT AREA */}
      <div style={styles.chatBox}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              ...styles.messageRow,
              justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
            }}
          >
            <div
              style={{
                ...styles.bubble,
                background: msg.role === "user" ? "#0084ff" : "#f1f1f1",
                color: msg.role === "user" ? "#fff" : "#000",
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* INPUT BOX */}
      <form onSubmit={handleSend} style={styles.inputBox}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Message..."
          style={styles.input}
        />
        <button style={styles.button}>➤</button>
      </form>
    </div>
  );
}

/* STYLES */
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    fontFamily: "sans-serif",
    background: "#f7f7f8",
  },

  header: {
    padding: "15px",
    textAlign: "center",
    fontWeight: "bold",
    background: "#fff",
    borderBottom: "1px solid #ddd",
  },

  chatBox: {
    flex: 1,
    padding: "15px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  messageRow: {
    display: "flex",
  },

  bubble: {
    padding: "10px 14px",
    borderRadius: "18px",
    maxWidth: "70%",
    fontSize: "14px",
    lineHeight: "1.4",
  },

  inputBox: {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #ddd",
    background: "#fff",
  },

  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "20px",
    border: "1px solid #ddd",
    outline: "none",
  },

  button: {
    marginLeft: "10px",
    border: "none",
    background: "#0084ff",
    color: "#fff",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    cursor: "pointer",
  },
};








// import { useState } from "react";

// function ChatApp() {
//   const [message, setMessage] = useState("");

//   const [messages, setMessages] = useState([]);

//   const sendMessage = () => {
//     if (!message.trim()) return;

//     setMessages((prevState) => [
//       ...prevState,
//       {
//         id: Date.now(),
//         text: message,
//       },
//     ]);

//     setMessage("");
//   };

//   return (
//     <div>
//       <h2>Chat App</h2>

//       <div>
//         {messages.map((msg) => (
//           <p key={msg.id}>
//             {msg.text}
//           </p>
//         ))}
//       </div>

//       <input
//         type="text"
//         value={message}
//         placeholder="Type message..."
//         onChange={(e) =>
//           setMessage(e.target.value)
//         }
//       />

//       <button onClick={sendMessage}>
//         Send
//       </button>
//     </div>
//   );
// }

// export default ChatApp;