import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import LogoImgSrc from '../images/logo.svg';
import { Link } from 'react-router-dom';

const Logo = ({ mr }) => {
  return (
    <LogoContainer to={'/'} mr={mr}>
      <LogoImg src={LogoImgSrc} alt="Logo" />
    </LogoContainer>
  );
};

const LogoContainer = styled(Link)`
  display: flex;
  text-align: center;
  width: ${rem(178)};
  margin-right: ${(props) => rem(props.mr)};
`;

const LogoImg = styled.img`
  width: 100%;
`;

export default Logo;
