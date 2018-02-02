import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodoList from '../components/TodoList';
import TodoFilter from '../components/TodoFilter'
import TodoCount from '../components/TodoCount';

import { addTodo, editInput, removeTodo, completeTodo, setVisibilityFilter } from '../actions/todoActions';
import { SHOW_ACTIVE, SHOW_COMPLETED, SHOW_ALL } from '../constants/input';

import styled from 'styled-components';

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

  sumCompletedItem = todos => todos.filter( todo => todo.completed ).length

  sumActiveItem = todos => todos.filter( todo => !todo.completed ).length

  getCompletedItems = todos => todos.filter( todo => todo.completed )

  getActiveItems = todos => todos.filter( todo => !todo.completed )

  getAllItems = todos => todos

  renderItems = (state, filter) => {
    switch(filter) {
      case SHOW_COMPLETED:
        return this.getCompletedItems(state)
      case SHOW_ACTIVE:
        return this.getActiveItems(state)
      default:
        return this.getAllItems(state)
    }
  }

  render() {
    const { state, addTodo, editInput, removeTodo, completeTodo, setVisibilityFilter } = this.props

    return (
      <div>
        <Input
          value={state.input}
          onChange={ event => editInput(event.target.value) }
          />
        <Button onClick={ () => addTodo(state) }>Add</Button>
        <TodoList todos={this.renderItems(state.todos, state.visibilityFilter)} removeTodo={removeTodo} completeTodo={completeTodo} />
        <TodoFilter setVisibilityFilter={setVisibilityFilter} />
        <TodoCount sumCompletedItem={ this.sumCompletedItem(state.todos)} sumActiveItem={this.sumActiveItem(state.todos)} />
      </div>
    )
  }
}

const mapStateToProps = state => ({state})

const mapDispatchToProps = dispatch => ({
  addTodo: bindActionCreators(addTodo, dispatch),
  editInput: bindActionCreators(editInput, dispatch),
  removeTodo: bindActionCreators(removeTodo, dispatch),
  completeTodo: bindActionCreators(completeTodo, dispatch),
  setVisibilityFilter: bindActionCreators(setVisibilityFilter, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

// const connect = (mapStateToProps, mapDispatchToProps) => Todo => {
//   const store
//   // {state}
//   const propsState = mapStateToProps(store.getState())
//   // {addTodo}
//   const propsDispatch = mapDispatchToProps(store.dispatch)
//   return <Todo {...propsState} {...propsDispatch}/>
// }
