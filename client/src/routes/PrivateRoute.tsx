import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Mainpage from '../pages/Mainpage';

const PrivateRoute = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={Mainpage} />
      <Redirect path="*" to="/"></Redirect>
    </Switch>
  );
};

export default PrivateRoute;
