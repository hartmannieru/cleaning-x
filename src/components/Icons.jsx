import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const Icons = ({ children }) => {
  return <IconsBox>{children}</IconsBox>;
};

const IconsBox = styled.div`
  display: flex;
  gap: ${rem(100)};
`;

export default Icons;
