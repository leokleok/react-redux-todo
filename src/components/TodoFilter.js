import React from 'react'
import { SHOW_ACTIVE, SHOW_COMPLETED, SHOW_ALL } from '../constants/input'

const TodoFilter = ({setVisibilityFilter}) => (
  <div>
    <button onClick={() => setVisibilityFilter(SHOW_ACTIVE)}>ACTIVE</button>
    <button onClick={() => setVisibilityFilter(SHOW_COMPLETED)}>COMPLETED</button>
    <button onClick={() => setVisibilityFilter(SHOW_ALL)}>ALL</button>
  </div>
)

export default TodoFilter
