import { combineReducers } from 'redux';
import todos from './todoReducer';
import input from './textReducer';
import visibilityFilter from './visibilityReducer';

const todoApp = combineReducers({
  todos,
  input,
  visibilityFilter
})

export default todoApp;
