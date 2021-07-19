import { Component } from "react";
import "./Boxes.css";

class Boxes extends Component{
  render(){
    return(
      <button className={`Boxes ${this.props.bgColor}`} onClick={this.props.boxClick} disabled={this.props.boxDisabled} ></button>
    )
  }
}

export default Boxes;