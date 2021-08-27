import React from "react";
import { render } from "react-dom";

import "./App.css";

class H2O extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: 15
    };
  }

  render() {
    // this.state から temp を取り出す
    const { temp } = this.state;
    return (
      <div>
        <h2 className={this.H2oState(temp)}>
          phase: {this.H2oState(temp)} {temp} 度
        </h2>
        <button onClick={this.onPlusClick.bind(this)}>+</button>
        <button onClick={this.onPlus10Click.bind(this)}>+10</button>
        <button onClick={this.onMinusClick.bind(this)}>-</button>
        <button onClick={this.onMinus10Click.bind(this)}>-10</button>
      </div>
    );
  }

  H2oState(temp) {
    if (temp <= 0) {
      return "ice";
    } else if (temp >= 100) {
      return "steam";
    }
    return "water";
  }

  onPlusClick() {
    this.setState({ temp: this.state.temp + 1 });
  }

  onPlus10Click() {
    this.setState({ temp: this.state.temp + 10 });
  }

  onMinusClick() {
    this.setState({ temp: this.state.temp - 1 });
  }

  onMinus10Click() {
    this.setState({ temp: this.state.temp - 10 });
  }
}

render(<H2O />, document.getElementById("root"));
