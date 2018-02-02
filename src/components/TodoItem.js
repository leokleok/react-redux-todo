import React from 'react';

const TodoItem = ({removeTodo, text, id, completeTodo}) => (
  <li>
    {text}
    <input type="checkbox" onClick={ () => completeTodo(id) }></input>
    <button onClick={ () => removeTodo(id)}>Delete</button>
  </li>
)

export default TodoItem
