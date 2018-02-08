import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, removeTodo, completeTodo}) => (
  <ul>
    {todos.map(todo =>
      <TodoItem
        key={todo.get('id')}
        text={todo.get('text')}
        id={todo.get('id')}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        {...todo}
      />
    )}
  </ul>
)

export default TodoList
