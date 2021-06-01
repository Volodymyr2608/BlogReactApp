import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PostsPage from '../pages/Posts';
import PostPage from '../pages/Post';
import FormPost from '../components/Form';
// import PrivateRoute from "../containers/PrivateRoute";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {/* <PrivateRoute path="/dashboard" component={DashboardRoutes} /> */}
      {/* <Route exact path="/login" component={LoginPage} /> */}
      {/* <Route exact path="/forgot-password" component={ForgotPasswordPage} /> */}
      {/* <Route exact path="/reset-password" component={ResetPasswordPage} /> */}
      {/* <Route exact path="/error" component={ErrorPage} /> */}

      <Route path="/" exact component={PostsPage} />
      <Route path="/newPost" exact component={FormPost} />
      <Route path="/update/:id" exact component={FormPost} />
      <Route path="/:id" exact component={PostPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
