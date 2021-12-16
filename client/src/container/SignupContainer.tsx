import React, { useState } from 'react';
import styled from 'styled-components';
import { emailAuthApi } from '../api/emailAuthApi';
import Button, { ButtonEvent } from '../components/Button';
import Input from '../components/Input';
import { InputLayer, SignContainer } from '../styles/signContainer';

const MarginLeft = styled.span`
  margin-left: 5px;
`;

const MarginRight = styled.section`
  margin-right: 64px;
`;

const ButtonLayer = styled.article`
  margin-left: 16px;
  margin-top: 15px;
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
  const onClick = async (e: ButtonEvent): Promise<void> => {
    if (e.target.name === EMAIL) {
      const status = await emailAuthApi(email);
      if (status === 200) setProgress(true);
      else alert(`error code: ${status}`);
    }
    if (e.target.name === CODE) {
      // api: send code
      setAuthState(true);
    }
  };
  return (
    <SignContainer>
      {!progress ? (
        <section>
          <Input name={EMAIL} placeholder="EMAIL FOR AUTH" value={email} onChange={onChange} disabled={progress} />
          <MarginLeft>
            <Button name={EMAIL} text="SEND" onClick={onClick} disabled={progress} />
          </MarginLeft>
        </section>
      ) : (
        <MarginRight>
          <Input name={EMAIL} placeholder="EMAIL FOR AUTH" value={email} onChange={onChange} disabled={progress} />
        </MarginRight>
      )}
      {progress && !authState && (
        <section>
          <Input name={CODE} placeholder="AUTH CODE" value={code} onChange={onChange} disabled={authState} />
          <MarginLeft>
            <Button name={CODE} text="SEND" onClick={onClick} disabled={authState} />
          </MarginLeft>
        </section>
      )}
      {authState && (
        <section>
          <MarginRight>
            <InputLayer>
              <Input placeholder="PW" value="" onChange={() => null} />
            </InputLayer>
            <InputLayer>
              <Input placeholder="CHECK PW" value="" onChange={() => null} />
            </InputLayer>
            <InputLayer>
              <Input placeholder="USER NAME" value="" onChange={() => null} />
            </InputLayer>
          </MarginRight>
          <ButtonLayer>
            <Button text="SIGN UP" onClick={() => undefined} />
          </ButtonLayer>
        </section>
      )}
    </SignContainer>
  );
};

export default SignupContainer;
