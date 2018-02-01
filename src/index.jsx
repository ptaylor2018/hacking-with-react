import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router-dom';
import { createHashHistory } from 'history';

import routes from './routes.jsx';


const appHistory = createHashHistory();

ReactDOM.render(
  <Router history={ appHistory }>
    { routes }
  </Router>,
  document.getElementById('app')
);