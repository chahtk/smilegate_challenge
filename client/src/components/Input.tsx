import React from 'react';
import styled from 'styled-components';

interface IInput {
  id?: string;
  type?: 'password';
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input`
  display: block;
  outline-color: #1a73e8;
  border: none;
  border-bottom: 1px solid grey;
  padding: 8px 5px;
`;

const Input = (props: IInput) => {
  const { id, type, value, placeholder, onChange } = props;
  return (
    <StyledInput
      id={id}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
