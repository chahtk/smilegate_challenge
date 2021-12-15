import React from 'react';
import styled from 'styled-components';

interface IButton {
  text?: string;
  onClick: () => void;
}

const StyledButton = styled.button`
  border: none;
  outline: none;
  background-color: aliceblue;
  padding: 8px 10px;
  cursor: pointer;
`;

const Button = (props: IButton) => {
  const { text, onClick } = props;
  return (
    <StyledButton type="button" onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
