import React from "react";
import { render } from "react-dom";

class Human extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      hobby: props.hobby,
      count: 1
    };
  }

  render() {
    return (
      <div>
        <p onClick={this.onNameClick.bind(this)}>{this.state.name}</p>
        <p>{this.state.hobby}</p>
      </div>
    );
  }

  onNameClick() {
    this.setState({
      name: this.state.name + "変更後なまえ" + this.state.count,
      count: this.state.count + 1
    });
    alert("おしたよ");
    console.log(this.state);
  }
}

render(
  <Human name="ながとも" hobby="さっかー" />,
  document.getElementById("root")
);
