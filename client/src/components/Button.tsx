import React from 'react';
import styled, { css } from 'styled-components';

interface IButton {
  text?: string;
  disabled?: boolean;
  onClick: () => void;
}

const StyledButton = styled.button`
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: #e4eba4;
  padding: 8px 10px;
  ${({ disabled }) =>
    !disabled &&
    css`
      &:hover {
        cursor: pointer;
        color: white;
      }
    `}
`;

const Button = (props: IButton) => {
  const { text, onClick, disabled } = props;
  return (
    <StyledButton type="button" onClick={onClick} disabled={disabled}>
      {text}
    </StyledButton>
  );
};

export default Button;
