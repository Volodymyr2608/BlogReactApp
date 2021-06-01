import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PostsPage from '../pages/Posts';
import PostPage from '../pages/Post';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={PostsPage} />
      <Route path="/:id" exact component={PostPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
