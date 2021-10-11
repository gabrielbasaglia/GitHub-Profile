import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Repos from './pages/repos';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/ repos" component={Repos} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
