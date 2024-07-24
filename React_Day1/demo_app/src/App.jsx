import "./App.css";
import Card from "./Card";
import Demo from "./Demo";

function App() {
  const name = "Vinesh";
  const x = 10;
  const y = 5;
  const colors = ["red", "green", "blue", "purple"];
  
  const h1Style = {
    color: "blue",
  };

  const redStyle ={
    color :"red"
  }
  const greenstyle ={
    color:"green"
  }

  const user = {
    name1: "vinesh",
    age: 10,
    email: "test",
  };

  return (
    <>
      <h1 style={h1Style}>{name}</h1>
      <p>
        sum of {x} and {y} is {x + y}
      </p>
      <h2>sdjfjff</h2>
      <ul>
        <li>{colors[1]}</li>
        <li>{colors[2]}</li>
      </ul>
      <Demo />
      <Card />
      <Card h2Style={redStyle} />
      <Card h2Style={greenstyle} />
    </>
  );
}

export default App;
