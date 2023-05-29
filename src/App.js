import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  addTodo = (text) => {
    const newTodo = { text, completed: false };
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo]
    }));
  };

  completeTodo = (index) => {
    this.setState((prevState) => {
      const updatedTodos = [...prevState.todos];
      updatedTodos[index].completed = !updatedTodos[index].completed;
      return { todos: updatedTodos };
    });
  };

  removeTodo = (index) => {
    this.setState((prevState) => {
      const updatedTodos = [...prevState.todos];
      updatedTodos.splice(index, 1);
      return { todos: updatedTodos };
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <div style={{display:"flex", flexDirection:"column",gap:"2rem", paddingTop:"80px"}}>
        <h1 style={{textAlign:"center", color:"white",margin:"0 450px", padding:"1rem"}}>Todo App</h1>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          todos={todos}
          completeTodo={this.completeTodo}
          removeTodo={this.removeTodo}
        />
      </div>
    );
  }
}

export default App;
