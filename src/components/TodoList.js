import React from 'react'
const TodoList = ({todos}) => {

  console.log("todos", todos)

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>

  )

}

export default TodoList
