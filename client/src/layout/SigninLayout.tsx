import React from 'react';
import SigninContainer from '../container/SinginContainer';
import styled from 'styled-components';

const Layout = styled.main`
  background-color: beige;
  width: 100vw;
  height: 100vh;
`;

const SigninLayout = () => {
  return (
    <Layout>
      <SigninContainer />
    </Layout>
  );
};

export default SigninLayout;
