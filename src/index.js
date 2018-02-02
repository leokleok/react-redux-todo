import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore }  from 'redux';

import './index.css';
import Todo from './containers/Todo';
import todoApp from './reducers/indexReducers';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  console.log('state is changing', store.getState())
})

render(
  <Provider store={store}>
    <Todo />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
