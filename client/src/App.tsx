import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './modules';
import PublicRoute from './routes/PublicRoute';
import TestPage from './pages/TestPage';

function App() {
  const userInfo = useSelector((state: RootState) => state.user);
  return <>{userInfo.login ? <TestPage /> : <PublicRoute />}</>;
}

export default App;
