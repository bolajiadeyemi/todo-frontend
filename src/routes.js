// ./react-redux-client/src/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/app';
import Todos from './containers/todos';
import Todo from './containers/todo';

export default (
  <Route path="/" component={App}>
     <IndexRoute component={Todos} />
    
     <Route path="/:id" component={Todo} />
  </Route>
)