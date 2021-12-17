import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './modules';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import getUserFromCookie from './utils/getUserFromCookie';

function App() {
  const user = getUserFromCookie();
  const userInfo = useSelector((state: RootState) => state.user);

  return <>{user && userInfo.login ? <PrivateRoute /> : <PublicRoute />}</>;
}

export default App;
