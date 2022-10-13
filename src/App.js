import React from "react";
import { useEffect } from "react";

const API_URL = "https://api.fontedavida.org/teaching/api";

const searcTeachings = async (takeLimit) => {
  const response = await fetch(`${API_URL}?limit=${takeLimit}`);
  const data = await response.json();
  console.log(data)
}

const App = () => {
  useEffect(() => {
    // searcTeachings(20);
  }, []);

  return (
    <>
      <div className="App">
        <h1>Pregações de recent</h1>
        <MakeInput />
      </div>
      <p>Time: {new Date().toLocaleTimeString()}</p>
      <Welcome name="Alexande" />
    </>
  );
}

class Welcome extends React.Component {
  render() {
    return <h3>Usando classes. {this.props.name}</h3>
  }
}

class MakeInput extends React.Component {
  render() {
    return (
      <input
        placeholder="coloque id da pregação"
        defaultValue="94"
        onChange={() => { }} />
    )
  }
}

export default App;