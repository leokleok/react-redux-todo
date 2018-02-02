import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos, removeTodo, completeTodo}) => (
  <ul>
    {todos.map(todo =>
      <TodoItem
        key={todo.id}
        text={todo.text}
        id={todo.id}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        {...todo}
      />
    )}
  </ul>
)

export default TodoList
