import React from 'react';
import styled from 'styled-components';

interface IInput {
  name?: string;
  type?: 'password';
  placeholder?: string;
  disabled?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input`
  outline-color: #1a73e8;
  border: none;
  border-bottom: 1px solid grey;
  padding: 8px 5px;
  background-color: inherit;
`;

const Input = (props: IInput) => {
  const { name, type, value, disabled, placeholder, onChange } = props;
  return (
    <StyledInput
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default Input;
