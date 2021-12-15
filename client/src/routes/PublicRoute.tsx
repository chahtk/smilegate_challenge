import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SigninPage from '../pages/SigninPage';
import SignupPage from '../pages/SignupPage';

const PublicRoute = () => {
  return (
    <Switch>
      <Route exact path={'/signin'} component={SigninPage} />
      <Route exact path={'/signup'} component={SignupPage} />
      <Redirect path="*" to="/signin"></Redirect>
    </Switch>
  );
};

export default PublicRoute;
