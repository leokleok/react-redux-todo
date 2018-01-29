import React, { Component } from 'react';
import styled from 'styled-components';

const List = styled.li`
  padding: 1rem;
  background: pink;
  font-size: 1rem;
  list-style: none;
  border-bottom: 1px solid blue;
  max-width: 50rem;
  margin: 0 auto;
  text-decoration: ${props => props.completed ? "line-through" : "none"};
`

const Button = styled.button`
  border: 2px solid palevioletred;
  border-radius: 3px;
  padding: 1rem;
  font-size: 1rem;
`

const Todo = props => (
  <div>
    <List completed={props.completed}>
      {props.text}
      <Button onClick={() => props.removeTodoItem(props.id)}>Delete</Button>
      <input type="checkbox" onClick={() => props.completeItem(props.id)} />
    </List>
  </div>
)

const TodoItem = props => {

  const {items, completeItem, removeTodoItem} = props

  return (
    <ul>
      {items.map((todo,i) => <Todo completeItem={completeItem} removeTodoItem={removeTodoItem} key={i} {...todo} />)}
    </ul>
  )
}

export default TodoItem;
