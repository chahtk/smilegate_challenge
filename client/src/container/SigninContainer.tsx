import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import styled from 'styled-components';
import { InputLayer, SignContainer } from '../styles/signContainer';

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

  // state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // event handlers
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === EMAIL) setEmail(e.target.value);
    if (e.target.name === PASSWORD) setPassword(e.target.value);
  };
  const onClick = () => {
    // send (email + password) using api
    console.log('try login api');
  };

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
        <A href="/signup" target="_blank">
          sign up
        </A>
        <Button onClick={onClick} text="SIGN IN" />
      </SignLayer>
    </SignContainer>
  );
};

export default SigninContainer;
