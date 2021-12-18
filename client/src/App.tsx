import React, { useEffect } from 'react';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import getUserFromCookie from './utils/getUserFromCookie';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './modules';
import { loginSuccessAction } from './modules/user';

function App() {
  const userNameFromCookie = getUserFromCookie();
  const userRedux = useSelector((state: RootState) => state);

  const disaptch = useDispatch();

  // 마운트 시에 쿠키가 있는지 체크 하고 있다면, store에 업데이트
  useEffect(() => {
    if (userNameFromCookie) {
      disaptch(loginSuccessAction(userNameFromCookie));
    }
  }, []);

  // userNameFromCookie: 로그인이 되어 있는지
  // userRedux: login 관련 액션이 일어나면 렌더링
  return <>{userNameFromCookie && userRedux ? <PrivateRoute /> : <PublicRoute />}</>;
}

export default App;
