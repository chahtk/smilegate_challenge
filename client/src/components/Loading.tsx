import React from 'react';
import Loader from 'react-loader-spinner';

interface LoadingProps {
  time?: number;
}

const Loading = ({ time = 3000 }: LoadingProps) => {
  return <Loader type="Oval" color="#3d66ba" height={15} width={40} timeout={time} />;
};

export default Loading;
