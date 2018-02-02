import React from 'react';

const TodoCount = ({sumCompletedItem, sumActiveItem}) => (
  <div>
  <h4>Show Active: {sumActiveItem}</h4>
  <h4>Show Completed: {sumCompletedItem}</h4>
  <h4>Show All: {sumCompletedItem + sumActiveItem}</h4>
  </div>
)

export default TodoCount
