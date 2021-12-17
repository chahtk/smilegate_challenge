import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './modules';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const userInfo = useSelector((state: RootState) => state.user);
  return <>{userInfo.login ? <PrivateRoute /> : <PublicRoute />}</>;
}

export default App;
