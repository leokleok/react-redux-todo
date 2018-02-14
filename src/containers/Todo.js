import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// components
import TodoList from '../components/TodoList'
import TodoFilter from '../components/TodoFilter'
import TodoCount from '../components/TodoCount'

// actions
import { addTodo, editInput, removeTodo, completeTodo, setVisibilityFilter } from '../actions/todoActions'

// constants
import { SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/input'

import styled from 'styled-components'

const Input = styled.input`
  border: 2px solid palevioletred;
  border-radius: 3px;
  padding: 1rem;
  font-size: 1rem;
`

const Button = styled.button`
  border: 2px solid palevioletred;
  border-radius: 3px;
  padding: 1rem;
  font-size: 1rem;
`

class Todo extends Component {
  sumCompletedItem = todos => todos.filter(todo => todo.get('completed')).size

  sumActiveItem = todos => todos.filter(todo => !todo.get('completed')).size

  getCompletedItems = todos => todos.filter(todo => todo.get('completed'))

  getActiveItems = todos => todos.filter(todo => !todo.get('completed'))

  getAllItems = todos => todos

  renderItems = (todos, filter) => {
    switch (filter) {
      case SHOW_COMPLETED:
        return this.getCompletedItems(todos)
      case SHOW_ACTIVE:
        return this.getActiveItems(todos)
      default:
        return this.getAllItems(todos)
    }
  }

  render () {
    const { state, addTodo, editInput, removeTodo, completeTodo, setVisibilityFilter } = this.props
    console.log('state', state)

    return (
      <div>
        <Input
          value={state.input}
          onChange={event => editInput(event.target.value)}
          />
        <Button onClick={() => addTodo(state)}>Add</Button>
        <TodoList todos={this.renderItems(state.todos, state.visibilityFilter)} removeTodo={removeTodo} completeTodo={completeTodo} />
        <TodoFilter setVisibilityFilter={setVisibilityFilter} />
        <TodoCount sumCompletedItem={this.sumCompletedItem(state.todos)} sumActiveItem={this.sumActiveItem(state.todos)} />
      </div>
    )
  }
}

const mapStateToProps = state => ({state: state})

const mapDispatchToProps = dispatch => ({
  addTodo: bindActionCreators(addTodo, dispatch), // () => dispatch(addTodo)
  editInput: bindActionCreators(editInput, dispatch),
  removeTodo: bindActionCreators(removeTodo, dispatch),
  completeTodo: bindActionCreators(completeTodo, dispatch),
  setVisibilityFilter: bindActionCreators(setVisibilityFilter, dispatch)
})

// connect is a function that calls mapStateToProps() and mapDispatchToProps()
export default connect(mapStateToProps, mapDispatchToProps)(Todo)

// const connect = (mapStateToProps, mapDispatchToProps) => Todo => {
//   const store
//   // {state}
//   const propsState = mapStateToProps(store.getState())
//   // {addTodo}
//   const propsDispatch = mapDispatchToProps(store.dispatch)
//   return <Todo {...propsState} {...propsDispatch}/>
// }
