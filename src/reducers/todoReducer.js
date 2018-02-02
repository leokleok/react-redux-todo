import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO } from '../constants/input';

const todos = (state=[], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      ]
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload.id)
    case COMPLETE_TODO:
      return state.map(todo => todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo)
    default:
      return state
  }
}

export default todos;
