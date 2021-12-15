import React, { useState } from 'react';
import styled from 'styled-components';
import { emailAuthApi } from '../api/emailAuthApi';
import Button, { ButtonEvent } from '../components/Button';
import Input from '../components/Input';
import SignContainer from '../styles/signContainer';

const MarginLeft = styled.span`
  margin-left: 5px;
`;

const SignupContainer = () => {
  const [EMAIL, CODE] = ['email', 'code'];
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [progress, setProgress] = useState(false);
  const [authState, setAuthState] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === EMAIL) setEmail(e.target.value);
    if (e.target.name === CODE) setCode(e.target.value);
  };
  const onClick = async (e?: ButtonEvent): Promise<void> => {
    if (e?.target.name === EMAIL) {
      const status = await emailAuthApi(email);
      if (status === 200) setProgress(true);
      else alert(`error code: ${status}`);
    }
    if (e?.target.name === CODE) {
      // api: send code
      setAuthState(true);
    }
  };
  return (
    <SignContainer>
      <Input name={EMAIL} placeholder="EMAIL FOR AUTH" value={email} onChange={onChange} disabled={progress} />
      <MarginLeft>
        <Button name={EMAIL} text="SEND" onClick={onClick} disabled={progress} />
      </MarginLeft>
      {/* progress === true => show boxes for input auth code */}
      {progress && (
        <>
          <Input name={CODE} placeholder="AUTH CODE" value={code} onChange={onChange} disabled={authState} />
          <MarginLeft>
            <Button name={CODE} text="SEND" onClick={onClick} />
          </MarginLeft>
        </>
      )}
      {/* authState === true => show layers for input password, username */}
      {authState && (
        <>
          <Input placeholder="PW" value="" onChange={() => null} />
          <Input placeholder="Check Pw" value="" onChange={() => null} />
        </>
      )}
    </SignContainer>
  );
};

export default SignupContainer;
