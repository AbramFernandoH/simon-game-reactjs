import { Component } from "react";
import SimonGame from "./SimonGame";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1 className="title">The Simon Game</h1>
        <SimonGame />
      </div>
    )
  }
}

export default App;