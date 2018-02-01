import React from 'react';
import { Route } from 'react-router-dom';

import App from './pages/App.jsx';
import List from './pages/List.jsx';
import Detail from './pages/Detail.jsx';

const routes = (
<div>
  <Route path="/" component={ App } />
  <Route exact path="/" component={ List } />
  <Route exact path="/detail/:repo" component={ Detail } />
</div>
);

export default routes;