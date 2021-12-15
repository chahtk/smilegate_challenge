import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import styled from 'styled-components';

const StyledComponent = styled.article`
  width: 400px;
  height: 400px;
  border: 1px solid red;
  border-radius: 5px;
  overflow: hidden;
`;

const SigninContainer = () => {
  // for id(label used this)
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
  };

  return (
    <StyledComponent>
      <form>
        <div>login</div>
        <Input id={EMAIL} value={email} placeholder="ID" onChange={onChange} />
        <Input
          id={PASSWORD}
          value={password}
          placeholder="PW"
          type="password"
          onChange={onChange}
        />
        <Button onClick={onClick} text="LOGIN" />
      </form>
      <a>sign up</a>
    </StyledComponent>
  );
};

export default SigninContainer;
