import { Component } from "react";
import Boxes from "./Boxes";
import "./SimonGame.css";

class SimonGame extends Component{
  static defaultProps = {
    boxColors: ['red', 'blue', 'green', 'yellow'],
  }

  constructor(props){
    super(props);
    this.state = {
      level: 0,
      pattern: [],
      userPattern: [],
      isGameStart: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.startTheGame = this.startTheGame.bind(this);
  }

  startTheGame(){
    this.setState(curState => ({isGameStart: true, level: curState.level + 1}));
  }

  handleClick(userClick){
    this.setState(curState => ({ userPattern: [...curState.userPattern, userClick] }));
  }

  render(){
    return(
      <div className="SimonGame">
        <h2 className="sub-title">{this.state.isGameStart === false ? 'Please type any key to start the game' : `Level ${this.state.level}`}</h2>
        {this.state.isGameStart === false && <button className="start-game" onClick={this.startTheGame}>Start the game</button>}
        <section className="the-boxes">
          {this.props.boxColors.map(color => <Boxes bgColor={color} boxClick={() => this.handleClick(color)} />)}
        </section>
      </div>
    )
  }
}

export default SimonGame;