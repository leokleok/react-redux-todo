import React, { Component } from 'react';
import TodoItem from './todoItem';
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

let idNum = 0

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
      todos: [],
      filter: "all"
    };
  }

  addTodoItem() {
    const newTodos = {
      text: this.state.text,
      completed: false,
      id: idNum++
    }
    const updatedTodos = [...this.state.todos, newTodos]
    this.setState({
      todos: updatedTodos,
      text: ""
    })
  }

  removeTodoItem = (id) => {
    const updatedTodos = this.state.todos.filter( todo => todo.id !== id )
    this.setState({todos: updatedTodos})
  }

  completeItem = (id) => {
    const updatedTodoList = this.state.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    this.setState({todos: updatedTodoList})
  }

  sumCompletedItem = () => this.state.todos.filter( todo => todo.completed ).length

  sumActiveItem = () => this.state.todos.filter( todo => !todo.completed ).length

  showCompletedItems = () => this.setState({filter: "completed"})

  showActiveItems = () => this.setState({filter: "active"})

  showAllItems = () => this.setState({filter: "all"})

  getCompletedItems = () => this.state.todos.filter(todo => todo.completed)

  getActiveItems = () => this.state.todos.filter( todo => !todo.completed)

  getAllItems = () => this.state.todos

  renderItems = (filter) => {
    // method 1
    // if(this.state.filter === "completed") {
    //   return this.getCompletedItems()
    // } else if(this.state.filter === "active") {
    //   return this.getActiveItems()
    // } else {
    //   return this.getAllItems()
    // }
    // method 2
    switch(this.state.filter) {
      case 'completed':
        return this.getCompletedItems()
      case 'active':
        return this.getActiveItems()
      default:
        return this.getAllItems()
    }
    // method 3
    // return ({
    //   'completed': this.getCompletedItems,
    //   'active': this.getActiveItems,
    //   'all': this.getAllItems
    // })[this.state.filter]()
  }

  render() {
    return (
      <div>
        <Input
          value={this.state.text}
          onChange={ event => this.setState({text: event.target.value}) }
          />
        <Button onClick={ () => this.addTodoItem() }>Add</Button>

        <TodoItem items={this.renderItems()}
          completeItem={this.completeItem}
          removeTodoItem={this.removeTodoItem}
          />
        <Button onClick={ () => this.showActiveItems() }>ACTIVE</Button>
        <Button onClick={ () => this.showCompletedItems() }>COMPLETED</Button>
        <Button onClick={ () => this.showAllItems() }>ALL</Button>

        <h3>{`Total:${this.state.todos.length}`}</h3>
        <h3>{`Completed:${this.sumCompletedItem()}`}</h3>
        <h3>{`Active:${this.sumActiveItem()}`}</h3>
      </div>
    )
  }
}

export default Todo;
