import { Component } from "react";
import "./Boxes.css";

class Boxes extends Component{
  render(){
    return(
      <div className={`Boxes ${this.props.bgColor}`} onClick={this.props.boxClick} style={{ backgroundColor: this.props.bgColor }}></div>
    )
  }
}

export default Boxes;