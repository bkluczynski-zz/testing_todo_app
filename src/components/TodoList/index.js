import React from 'react'
const TodoList = ({todos, remove}) => {

  return (
    <ul>
      {todos.map((todo) => (
        <li onClick={() => {remove(todo.id)}} key={todo.id}>{todo.text}</li>
      ))}
    </ul>

  )

}

export default TodoList
