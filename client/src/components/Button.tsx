import React from 'react';
import styled, { css } from 'styled-components';
import Loading from '../components/Loading';

interface ButtonTarget extends EventTarget {
  name: string;
}

export interface ButtonEvent extends React.MouseEvent<HTMLButtonElement> {
  target: ButtonTarget;
}

interface IButton {
  name?: string;
  text?: string;
  disabled?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
  onClick: (e: ButtonEvent) => void | Promise<void>;
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
  const { text, name, onClick, disabled, loading } = props;
  return (
    <StyledButton name={name} type="button" onClick={onClick} disabled={disabled || loading}>
      {loading ? <Loading /> : text}
    </StyledButton>
  );
};

export default Button;
