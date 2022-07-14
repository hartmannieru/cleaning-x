import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const Icons = ({ children }) => {
  return <IconsBox>{children}</IconsBox>;
};

const IconsBox = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  gap: ${rem(100)};
  flex-wrap: wrap;
  @media (max-width: 783px) {
    gap: ${rem(50)};
  }
`;

export default Icons;
