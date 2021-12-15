import React from 'react';
import styled from 'styled-components';

interface IButton {
  text?: string;
  onClick: () => void;
}

const StyledButton = styled.button`
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: #e4eba4;
  padding: 8px 10px;
  cursor: pointer;
  &:hover {
    color: white;
  }
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
