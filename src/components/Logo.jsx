import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import LogoImgSrc from '../images/logo.svg';

const Logo = ({ mr }) => {
  return (
    <LogoContainer href="#" mr={mr}>
      <LogoImg src={LogoImgSrc} alt="Logo" />
    </LogoContainer>
  );
};

const LogoContainer = styled.a`
  display: flex;
  text-align: center;
  width: ${rem(178)};
  margin-right: ${(props) => rem(props.mr)};
`;

const LogoImg = styled.img`
  width: 100%;
`;

export default Logo;
