import React from "react";

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  render() {
    return (
      <div>
        <h2>AddTodo</h2>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.title} onChange={this.handleChange} />
          <button type="submit">追加</button>
        </form>
      </div>
    );
  }

  handleChange = (event) => {
    const setTitle = event.target.value;
    this.setState({ title: setTitle });
    // console.log(this.state.title);
  };

  handleSubmit = (event) => {
    const { title } = this.state;
    event.preventDefault();
    this.props.addTodo(title);
    this.setState({ title: "" });
  };
}
