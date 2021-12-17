import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const PrivateRoute = () => {
  return (
    <Switch>
      <Route exact path={'/'} render={() => <div>hello world</div>} />
      <Redirect path="*" to="/"></Redirect>
    </Switch>
  );
};

export default PrivateRoute;
