import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router-dom';
import { createHashHistory } from 'history';

import Detail from './pages/Detail.jsx';
import List from './pages/List.jsx';


const appHistory = createHashHistory();

ReactDOM.render(
    <Router history={ appHistory }>
      <div>
        <Route path="/" component={ List } />
        <Route path="/react" component={ Detail } />
      </div>
    </Router>,
    document.getElementById('app')
);