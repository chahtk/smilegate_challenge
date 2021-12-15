import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import styled from 'styled-components';

const StyledContainer = styled.article`
  width: 320px;
  height: 220px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  padding-top: 20px;
`;

const InputLayer = styled.section`
  margin: 10px auto;
`;

const SignLayer = styled.article`
  float: right;
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
  // id of input-component
  const [EMAIL, PASSWORD] = ['email', 'password'];

  // state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // event handlers
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === EMAIL) setEmail(e.target.value);
    if (e.target.id === PASSWORD) setPassword(e.target.value);
  };
  const onClick = () => {
    // send (email + password) using api
    console.log('try login api');
  };

  return (
    <StyledContainer>
      <h2>LOGIN</h2>
      <InputLayer>
        <Input id={EMAIL} value={email} placeholder="ID" onChange={onChange} />
      </InputLayer>
      <InputLayer>
        <Input id={PASSWORD} value={password} placeholder="PW" type="password" onChange={onChange} />
      </InputLayer>
      <SignLayer>
        <A href="/signup" target="_blank">
          sign up
        </A>
        <Button onClick={onClick} text="SIGN IN" />
      </SignLayer>
    </StyledContainer>
  );
};

export default SigninContainer;
