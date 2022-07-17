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
            <FollowTitle>
              We&nbsp;follow guidelines to&nbsp;keep you safe from the COVID-19 virus
            </FollowTitle>
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

const FollowBox = styled.section``;

const FollowInner = styled.div`
  display: flex;
  align-items: center;
  background: #211f54;
  border-radius: ${rem(24)};
  overflow: hidden;
  @media (max-width: ${(props) => props.theme.breakpoints.xxl}) {
    flex-wrap: wrap;
  }
`;

const FollowImg = styled.img`
  max-width: ${rem(518)};
  width: 100%;
  align-self: flex-end;
  @media (max-width: ${(props) => props.theme.breakpoints.xxl}) {
    order: 1;
    max-width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: top center;
  }
`;

const FollowContent = styled.div`
  padding: ${rem(138)} ${rem(72)};
  max-width: ${rem(700)};
  width: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.xxl}) {
    padding: ${rem(50)};
    padding-bottom: 0;
    max-width: 100%;
  }
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
