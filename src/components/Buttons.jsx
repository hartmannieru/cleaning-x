import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const Buttons = ({ children }) => {
  return <ButtonsContainer>{children}</ButtonsContainer>;
};

const ButtonsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${rem(28)};
`;

export default Buttons;
