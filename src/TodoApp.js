import React from "react";

import { AddTodo } from "./components/AddTodo";
import { List } from "./components/List";

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      nextId: 0
    };
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h2>TodoApp</h2>
        <AddTodo addTodo={this.addTodo} />
        <List todos={todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }

  addTodo = (addTitle) => {
    const { todos, nextId } = this.state;
    const newNextId = nextId + 1;
    this.setState({
      todos: [...todos, { id: newNextId, title: addTitle }],
      nextId: newNextId
    });
  };

  deleteTodo = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => {
        return id !== todo.id;
      })
    });
  };
}
