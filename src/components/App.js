import React, {Component, useState} from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false, //variable needed to be changed
      posi: 0,
      ballPosition: {left: "0px"}
    };
    this.renderChoice = this.renderChoice.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.changePosition = this.changePosition.bind(this);
  }

  //call back function
  buttonClickHandler() {
    this.setState({renderBall: !this.state.renderBall});
  }
  renderChoice() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else return <button onClick={this.buttonClickHandler}>Click For One Ball</button>;
  }

  changePosition(event) {
    console.log(1);
    let currentString = this.state.ballPosition.left;
    let currentPosition = +currentString.substr(0, currentString.length - 2);
    currentPosition += 5;

    if (event.keycode === 39) {
      this.setState({ballPosition: {left: `${currentPosition}px`}});
    }
  }

  //bind ArrowRight keydown event
  componentDidMount() {
    (function (obj) {
      document.addEventListener("keydown", (event) => {
        console.log(1);
        let currentString = obj.state.ballPosition.left;
        let currentPosition = +currentString.substr(0, currentString.length - 2);
        currentPosition += 5;

        if (event.keyCode === 39) {
          obj.setState({ballPosition: {left: `${currentPosition}px`}});
          console.log(obj.state);
        }
      });
    })(this);
  }

  render() {
    return <div className="playground">{this.renderChoice()}</div>;
  }
}

export default App;
