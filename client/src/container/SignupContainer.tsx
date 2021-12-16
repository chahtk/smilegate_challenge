import React, { useState } from 'react';
import styled from 'styled-components';
import { emailSendApi, codeSendApi } from '../api/emailAuthApi';
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

const cantSubmit = (pass: string, passCheck: string, userName: string): boolean =>
  !(userName !== '' && pass !== '' && passCheck !== '');

const SignupContainer = () => {
  const [EMAIL, CODE, PASS, PASSCHECK, USERNAME, SIGNUP] = ['email', 'code', 'pass', 'passcheck', 'username', 'signup'];
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [pass, setPass] = useState('');
  const [userName, setUserName] = useState('');
  const [passCheck, setPassCheck] = useState('');
  const [progress, setProgress] = useState(false);
  const [authState, setAuthState] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === EMAIL) setEmail(e.target.value);
    if (e.target.name === CODE) setCode(e.target.value);
    if (e.target.name === PASS) setPass(e.target.value);
    if (e.target.name === PASSCHECK) setPassCheck(e.target.value);
    if (e.target.name === USERNAME) setUserName(e.target.value);
  };
  const onClick = async (e: ButtonEvent): Promise<void> => {
    if (e.target.name === EMAIL) {
      const status = await emailSendApi(email);
      if (status === 204) setProgress(true);
      else alert(`error code: ${status}`); // 서버와 연결 안되면 false
    }
    if (e.target.name === CODE) {
      const status = await codeSendApi(code);
      if (status === 204) setAuthState(true);
      else alert('wrong code');
    }
    if (e.target.name === SIGNUP) {
      if (pass !== passCheck) {
        alert('비밀번호가 일치하지 않습니다');
        setPass('');
        setPassCheck('');
      }
      // submit api (email, pass, username)
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
              <Input placeholder="PW" name={PASS} value={pass} onChange={onChange} />
            </InputLayer>
            <InputLayer>
              <Input placeholder="CHECK PW" name={PASSCHECK} value={passCheck} onChange={onChange} />
            </InputLayer>
            <InputLayer>
              <Input placeholder="USER NAME" name={USERNAME} value={userName} onChange={onChange} />
            </InputLayer>
          </MarginRight>
          <ButtonLayer>
            <Button text="SIGN UP" name={SIGNUP} onClick={onClick} disabled={cantSubmit(pass, passCheck, userName)} />
          </ButtonLayer>
        </section>
      )}
    </SignContainer>
  );
};

export default SignupContainer;
