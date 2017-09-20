import React, { Component } from 'react';
import AddTodo from './AddTodo'
import TodoList from './TodoList'

class App extends Component {

  state = {
    todos : []
  }

  addTodo = (todo) => {
    this.setState(state => ({
      todos : state.todos.concat(todo)
    }))
  }

  render()
  {
    console.log("state", this.state)

    return (

      <div>
        <AddTodo
          addTodo={this.addTodo}
          />
        <TodoList
          todos={this.state.todos}
          />
      </div>
    );
  }

}

export default App;
