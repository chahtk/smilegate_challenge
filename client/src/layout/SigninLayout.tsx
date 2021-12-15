import React from 'react';
import SigninContainer from '../container/SinginContainer';
import styled from 'styled-components';

const Layout = styled.main`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const SigninLayout = () => {
  return (
    <Layout>
      <SigninContainer />
    </Layout>
  );
};

export default SigninLayout;
