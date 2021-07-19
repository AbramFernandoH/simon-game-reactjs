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
      isGameStart: false,
      isClicked: 0,
      btnDisabled: true
    }
    this.handleClick = this.handleClick.bind(this);
    this.startTheGame = this.startTheGame.bind(this);
  }

  startTheGame(){
    this.setState(curState => ({isGameStart: true, level: curState.level + 1}));
    this.gamePattern();
  }

  gamePattern(){
    const pickColor = this.props.boxColors[Math.floor(Math.random() * this.props.boxColors.length)];
    this.setState(curState => ({ pattern: [...curState.pattern, pickColor], userPattern: [], btnDisabled: true }));
    document.querySelector(`.Boxes.${pickColor}`).style.borderColor = 'white';
    document.querySelector(`.Boxes.${pickColor}`).style.backgroundColor = 'white';
    setTimeout(() => {
      document.querySelector(`.Boxes.${pickColor}`).style.borderColor = 'black';
      document.querySelector(`.Boxes.${pickColor}`).style.backgroundColor = pickColor;
      this.setState(curState => ({ btnDisabled: false }));
    }, 300);
  }

  async handleClick(userClick){
    if(this.state.isGameStart === true){
      await this.setState(curState => ({ userPattern: [...curState.userPattern, userClick] }));
      if(this.state.userPattern[this.state.isClicked] === this.state.pattern[this.state.isClicked]){
        await this.setState(curState => ({ isClicked: curState.isClicked + 1 }));
        if(this.state.userPattern.length === this.state.pattern.length){
          await this.setState(curState => ({ isClicked: 0, level: curState.level + 1 }));
          setTimeout(() => {
            this.gamePattern();
          }, 500);
          return;
        }
        return;
      } else {
        await this.setState(curState => ({ isGameStart: false, pattern: [], level: 0 }));
      }
    } else {
      alert('Please click start game button');
    }
  }

  render(){
    return(
      <div className="SimonGame">
        {this.state.isGameStart === false ? <button className="start-game" onClick={this.startTheGame}>Start the game</button> : <h2 className="sub-title">Level {this.state.level}</h2> }
        <section className="the-boxes">
          {this.props.boxColors.map(color => <Boxes key={color} bgColor={color} boxClick={() => this.handleClick(color)} boxDisabled={this.state.btnDisabled} />)}
        </section>
      </div>
    )
  }
}

export default SimonGame;