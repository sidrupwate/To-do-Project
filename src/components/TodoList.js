import React, { Component } from 'react';
import Todo from './Todo';
import '../App.css';

class TodoList extends Component {
  render() {
    const { todos, completeTodo, removeTodo } = this.props;

    return (
      <div>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
