import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import styled from 'styled-components';
import { InputLayer, SignContainer } from '../styles/signContainer';
import { useDispatch } from 'react-redux';
import { loginAction } from '../modules/user';

const SignLayer = styled.article`
  float: right;
  margin-top: 20px;
  margin-right: 70px;
`;

const A = styled.a`
  margin-right: 12px;
  color: black;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

const SigninContainer = () => {
  // name of input-component
  const [EMAIL, PASSWORD] = ['email', 'password'];

  // redux
  const dispatch = useDispatch();

  // state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // event handlers
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === EMAIL) setEmail(e.target.value);
    if (e.target.name === PASSWORD) setPassword(e.target.value);
  };
  const onClick = async () => {
    setLoading(true);
    dispatch(loginAction(email, password));
    setLoading(false);
  };
  const cantsubmit = () => !(email !== '' && password !== '');
  return (
    <SignContainer>
      <h2>LOGIN</h2>
      <InputLayer>
        <Input name={EMAIL} value={email} placeholder="ID" onChange={onChange} />
      </InputLayer>
      <InputLayer>
        <Input name={PASSWORD} value={password} placeholder="PW" type="password" onChange={onChange} />
      </InputLayer>
      <SignLayer>
        <A href="/signup">sign up</A>
        <Button onClick={onClick} text="SIGN IN" disabled={cantsubmit()} loading={loading} />
      </SignLayer>
    </SignContainer>
  );
};

export default SigninContainer;
