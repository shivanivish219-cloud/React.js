import { useEffect, useState } from "react";

const LifecycleFC = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log("Mounting completed:", counter);
  }, []);

  useEffect(() => {
    console.log("Updating Counter:", counter);
  }, [counter]);

  console.log("Re-Rendering: ", counter);
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>

      <hr />
      <h2>Counter: {counter2}</h2>
      <button onClick={() => setCounter2(counter2 + 1)}>Increment 2</button>
      <button onClick={() => setCounter2(counter2 - 1)}>Decrement 2</button>
    </div>
  );
};
export default LifecycleFC;
