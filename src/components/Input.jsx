import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const Input = ({ label = 'Full name', placeholder = 'name' }) => {
  return (
    <InputBox>
      <InputLabel>
        <InputLabelText>{label}</InputLabelText>
        <InputForm placeholder={placeholder} />
      </InputLabel>
    </InputBox>
  );
};

const InputBox = styled.div``;
const InputLabel = styled.label``;
const InputLabelText = styled.p`
  font-weight: 400;
  font-size: ${rem(18)};
  line-height: 167%;
  color: #211f54;
  margin-bottom: ${rem(12)};
`;
const InputForm = styled.input`
  background: #ffffff;
  border: 1px solid #eff0f6;
  box-shadow: 0px 2px 12px rgba(20, 20, 43, 0.08);
  border-radius: 16px;
  height: ${rem(72)};
  min-width: ${rem(259)};
  padding: ${rem(20)};
  font-size: ${rem(18)};
  line-height: 167%;
  &::placeholder {
    color: #6e7191;
  }
`;

export default Input;
