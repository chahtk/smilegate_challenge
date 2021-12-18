import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { logoutAction } from '../modules/user';
import Button from '../components/Button';

const Mainpage = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(logoutAction());
  };
  return (
    <div>
      <span>hi, {user.user}</span>
      <Button text="LOGOUT" onClick={onClick} />
    </div>
  );
};

export default Mainpage;
