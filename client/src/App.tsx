import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './modules';
import PublicRoute from './routes/PublicRoute';

function App() {
  const userInfo = useSelector((state: RootState) => state.user);
  return <>{userInfo.login ? <div>logined!</div> : <PublicRoute />}</>;
}

export default App;
