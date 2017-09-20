import React, { Component } from 'react';
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Title from './Title'


class App extends Component {

  state = {
    todos : []
  }

  addTodo = (todo) => {
    this.setState(state => ({
      todos : state.todos.concat(todo)
    }))
  }

  removeTodo = (id) => {
    this.setState(state => ({
      todos : state.todos.filter(item => id !== item.id)
    }))
  }

  render()
  {
    console.log("state", this.state)

    return (

      <div>
        <Title/>
        <AddTodo
          addTodo={this.addTodo}
          />
        <TodoList
          todos={this.state.todos}
          remove={this.removeTodo}
          />
      </div>
    );
  }

}

export default App;
