import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import H1 from './H1';
import Description from './Description';
import Button from './Button';
import Icons from './Icons';
import HeaderImg from '../images/header/header-img.svg';
import Container from './Container';

const Header = () => {
  return (
    <HeaderBox>
      <Container>
        <HeaderBoxInner>
          <HeaderContentBox>
            <H1 mb={22}>
              Quality cleaning
              <br />
              for your home
            </H1>
            <Description mb={34}>
              Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis
              senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.
            </Description>
            <HeaderAction>
              <Button>Get a free quote</Button>
              <Icons
                img={require('../images/icons/icon-2.svg')}
                title="Call us now"
                description="(414) 567 - 2109"
                tel="tel:4145672109"
              />
            </HeaderAction>
          </HeaderContentBox>
          <HeaderImgBox>
            <HeaderImgInner src={HeaderImg} alt="header-img" />
          </HeaderImgBox>
        </HeaderBoxInner>
      </Container>
    </HeaderBox>
  );
};

const HeaderBox = styled.header`
  min-height: ${rem(734)};
  margin-bottom: ${rem(240)};
`;

const HeaderBoxInner = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${rem(400)}, auto));
  align-items: center;
  gap: ${rem(30)};
`;

const HeaderContentBox = styled.div`
  margin-top: ${rem(85)};
  flex-shrink: 0;
  flex-grow: 1;
  @media (max-width: 890px) {
    margin-bottom: ${rem(34)};
    margin-top: ${rem(34)};
  }
`;

const HeaderAction = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${rem(28)};
`;

const HeaderImgBox = styled.div`
  margin-right: ${rem(-110)};
  flex-shrink: 0;
  flex-grow: 1;
  @media (max-width: 890px) {
    margin-right: 0;
    width: 100%;
  }
`;

const HeaderImgInner = styled.img`
  @media (max-width: 890px) {
    width: 100%;
  }
`;

export default Header;
