import { useState } from "react";
import "./App.css";

function App() {
  var [counter, setCounter] = useState(10);

  // const addValue = () => {
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  // };
  // On click it won't update 15 to 19. WHY??
  // useState sends the updates to UI in batches menas line no. 32 to line no. 35 forms a batch so, a single change in observed in UI

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };
  // NOW it updates 15 to 19

  return (
    <>
      <h1>Learning useState Hook</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value to {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value from {counter}</button>
    </>
  );
}

export default App;
