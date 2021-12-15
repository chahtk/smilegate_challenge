import React from 'react';
import SigninContainer from '../container/SinginContainer';
import styled from 'styled-components';

const Layout = styled.main`
  background-color: beige;
  width: 100%;
  height: 100%;
`;

const SigninLayout = () => {
  return (
    <Layout>
      <SigninContainer />
    </Layout>
  );
};

export default SigninLayout;
