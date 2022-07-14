import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Container from './Container';
import H2 from './H2';
import Description from './Description';
import Icons from './Icons';
import Icon from './Icon';

const ServiceCleaning = () => {
  return (
    <ServiceCleaningBox>
      <Container>
        <H2 align="center" mb={13}>
          Our cleaning services have
          <br />
          no comparison
        </H2>
        <Description align={'center'} mb={32}>
          Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa
          mauris lectus vitae cras viverra gravida sapien.
        </Description>
        <ServiceCleaningIconsBox>
          <Icons>
            <Icon />
            <Icon />
            <Icon />
          </Icons>
        </ServiceCleaningIconsBox>
      </Container>
    </ServiceCleaningBox>
  );
};

const ServiceCleaningBox = styled.div`
  min-height: 2000px;
  padding-top: ${rem(240)};
`;

const ServiceCleaningIconsBox = styled.div`
  display: flex;
  justify-content: center;
`;

export default ServiceCleaning;
