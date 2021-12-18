import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { logoutAction } from '../modules/user';
import Button from '../components/Button';
import styled from 'styled-components';
import axios from 'axios';

const Header = styled.header`
  margin: 30px;
  display: flex;
  justify-content: space-between;
`;

const PutRight = styled.div`
  position: relative;
  left: 80%;
`;

const UserList = styled.article`
  margin: 30px;
  border: 1px solid grey;
  padding: 7px 11px;
  background-color: white;
`;

const User = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & + & {
    border-top: 1px solid grey;
    margin-top: 10px;
    padding-top: 10px;
  }
`;

const Mainpage = () => {
  const user = useSelector((state: RootState) => state.user);
  const [anotherUsers, setAnotherUsers] = useState([]);
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(logoutAction());
  };
  const adminHandler = async () => {
    const response = await axios.get('http://localhost:3001/admin', { withCredentials: true });
    if (response.status === 200) {
      console.log(response.data);
      setAnotherUsers(response.data);
    } else alert('you are not admin');
  };
  const banHandler = () => {
    console.log('미구현');
  };
  return (
    <div>
      <Header>
        <span>hi, {user.user}</span>
        <Button text="LOGOUT" onClick={onClick} />
      </Header>
      <PutRight>
        <Button text="ADMIN" onClick={adminHandler} />
      </PutRight>
      <UserList>
        {anotherUsers.map((another: { name: string }) => (
          <User key={another.name}>
            <span>{another.name}</span>
            <Button text="BAN" onClick={banHandler}></Button>
          </User>
        ))}
      </UserList>
    </div>
  );
};

export default Mainpage;
