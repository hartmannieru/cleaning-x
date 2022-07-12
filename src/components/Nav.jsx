import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Logo from './Logo';
import Menu from './Menu';
import CartCount from './CartCount';
import Button from './Button';
import Container from './Container';

const Nav = () => {
  return (
    <NavBox>
      <Container>
        <NavBoxInner>
          <NavLeft>
            <Logo mr={42} />
            <Menu />
          </NavLeft>
          <NavRight>
            <CartCount mr={24} />
            <Button size="small">Get a free quote</Button>
          </NavRight>
        </NavBoxInner>
      </Container>
    </NavBox>
  );
};

const NavBox = styled.nav`
  padding: ${rem(32)} 0;
`;

const NavBoxInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
`;

export default Nav;
