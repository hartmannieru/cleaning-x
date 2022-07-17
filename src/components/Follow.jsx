import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Container from './Container';
import { H2Box } from './H2';
import { DescriptionBox } from './Description';
import ButtonAndPhone from './ButtonAndPhone';

const Follow = () => {
  return (
    <FollowBox>
      <Container>
        <FollowInner>
          <FollowImg src={'images/follow.svg'} alt={'follow'} />
          <FollowContent>
            <FollowMiniTitle>Covid-19 sanitization</FollowMiniTitle>
            <FollowTitle>We follow guidelines to keep you safe from the COVID-19 virus</FollowTitle>
            <FollowDescription>
              Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue
              massa mauris lectus.
            </FollowDescription>
            <ButtonAndPhone color={'white'} />
          </FollowContent>
        </FollowInner>
      </Container>
    </FollowBox>
  );
};

const FollowBox = styled.section`
  height: 2000px;
  @media (max-width: ${(props) => props.theme.breakpoints.xxl}) {
    display: none;
  }
`;

const FollowInner = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${rem(556)}, auto));
  align-items: center;
  background: #211f54;
  border-radius: ${rem(24)};
  overflow: hidden;
`;

const FollowImg = styled.img`
  @media (max-width: ${(props) => props.theme.breakpoints.xxl}) {
    order: 1;
  }
`;

const FollowContent = styled.div`
  padding: 0 ${rem(72)};
  flex-shrink: 0;
  flex-grow: 1;
`;
const FollowMiniTitle = styled.div`
  color: ${(props) => props.theme.color.white};
  margin-bottom: ${rem(17)};
`;
const FollowTitle = styled(H2Box)`
  color: ${(props) => props.theme.color.white};
  margin-bottom: ${rem(18)};
`;
const FollowDescription = styled(DescriptionBox)`
  color: ${(props) => props.theme.color.white};
  margin-bottom: ${rem(12)};
`;

export default Follow;
