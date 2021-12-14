import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { loginAction, logoutAction } from '../modules/user';

const Test = () => {
  const { id, email } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const onLogin = () => {
    dispatch(loginAction({ id: 2, email: 'login test' }));
  };
  const onLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <div>
      <button onClick={onLogin}>login</button>
      <button onClick={onLogout}>logout</button>
      <div>
        <span>
          {id} {email}
        </span>
      </div>
    </div>
  );
};

export default Test;
