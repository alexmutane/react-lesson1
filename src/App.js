import './App.css';
import { useState, useEffect } from 'react';

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h4>Work: {props.work}</h4>
    </>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setCounter(10);
  }, []);

  return (
    <div className="App">
      <Person name="Alex" age="30" work="Project-Manager" />
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      {counter}
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
