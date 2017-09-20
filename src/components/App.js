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
          />
      </div>
    );
  }

}

export default App;
