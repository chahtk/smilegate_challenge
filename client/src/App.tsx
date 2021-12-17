import React from 'react';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import getUserFromCookie from './utils/getUserFromCookie';

function App() {
  const user = getUserFromCookie();
  return <>{user ? <PrivateRoute /> : <PublicRoute />}</>;
}

export default App;
