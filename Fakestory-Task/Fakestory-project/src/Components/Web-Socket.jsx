import { useEffect, useState } from "react";

function WebSocketDemo() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const socket = new WebSocket("wss://echo.websocket.events");

    socket.onopen = () => {
      socket.send("Hello React");
    };

    socket.onmessage = (event) => {
      setMessage(event.data);
    };

    return () => socket.close();
  }, []);

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
}

export default WebSocketDemo;
