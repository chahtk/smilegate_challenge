import React, { useState } from 'react';
import styled from 'styled-components';
import { emailAuthApi } from '../api/emailAuthApi';
import Button from '../components/Button';
import Input from '../components/Input';

const MarginLeft = styled.span`
  margin-left: 5px;
`;

const SignupContainer = () => {
  const [email, setEmail] = useState('');
  const [progress, setProgress] = useState(false);

  const onChnage = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };
  const onClick = async () => {
    const status = await emailAuthApi(email);
    if (typeof status === 'number') setProgress(true);
    if (typeof status === 'boolean') alert('server error!');
  };
  return (
    <div>
      <Input placeholder="EMAIL FOR AUTH" value={email} onChange={onChnage} disabled={progress} />
      <MarginLeft>
        <Button text="SEND" onClick={onClick} disabled={progress} />
      </MarginLeft>
    </div>
  );
};

export default SignupContainer;
