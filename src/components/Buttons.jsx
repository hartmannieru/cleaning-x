import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const Buttons = ({ children, mb, justifyContent = 'left' }) => {
  return (
    <ButtonsContainer mb={mb} justifyContent={justifyContent}>
      {children}
    </ButtonsContainer>
  );
};

const ButtonsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: ${(props) => props.justifyContent};
  gap: ${rem(28)};
  margin-bottom: ${(props) => rem(props.mb)};
`;

export default Buttons;
