import { ADD_TODO, EDIT_INPUT, REMOVE_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER } from '../constants/input'

let nextTodo = 0

export const addTodo = item => {
  return {
    type: ADD_TODO,
    payload: {
      id: nextTodo++,
      text: item.input,
      completed: false
    }
  }
}

export const editInput = text => {
  return {
    type: EDIT_INPUT,
    payload: {
      text
    }
  }
}

export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    payload: {
      id
    }
  }
}

export const completeTodo = id => {
  return {
    type: COMPLETE_TODO,
    payload: {
      id
    }
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: {
      filter
    }
  }
}
