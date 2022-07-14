import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const Buttons = ({ children, mb }) => {
  return <ButtonsContainer mb={mb}>{children}</ButtonsContainer>;
};

const ButtonsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: ${rem(28)};
  margin-bottom: ${(props) => rem(props.mb)};
`;

export default Buttons;
