import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO } from '../constants/input'
import {List, Map} from 'immutable'

const todos = (state = List(), action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.push(Map(
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        })
      )
    case REMOVE_TODO:
      return state.filter(todo => todo.get('id') !== action.payload.id)
    case COMPLETE_TODO:
      return state.map(todo => todo.get('id') === action.payload.id ? todo.set('completed', !todo.get('completed')) : todo)
    default:
      return state
  }
}

export default todos
