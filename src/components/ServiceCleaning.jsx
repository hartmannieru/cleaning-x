import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Container from './Container';
import H2 from './H2';
import Description from './Description';
import Icons from './Icons';
import Icon from './Icon';
import { useEffect } from 'react';
import { useState } from 'react';
import Video from './Video';
import Hr from './Hr';

const ServiceCleaning = () => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    fetch('db/db.json')
      .then((response) => response.json())
      .then((json) => setIcons(json['serviceCleaning']));
  }, []);
  return (
    <ServiceCleaningBox>
      <Container>
        {/* TODO: убрать br и сделать максимальную ширину */}
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
            {icons.map(({ icon, title, count }, index) => (
              <Icon icon={icon} title={title} count={count} key={index} />
            ))}
          </Icons>
        </ServiceCleaningIconsBox>
        <ServiceCleaningVideoBox>
          <Video position={'0 auto'} />
        </ServiceCleaningVideoBox>
        <Hr />
      </Container>
    </ServiceCleaningBox>
  );
};

const ServiceCleaningBox = styled.section`
  padding-top: ${(props) => rem(props.theme.padding.desktop)};
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    padding-top: ${(props) => rem(props.theme.padding.mobile)};
  }
`;

const ServiceCleaningIconsBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${rem(40)};
`;

const ServiceCleaningVideoBox = styled.div`
  margin-bottom: ${(props) => rem(props.theme.margin.desktop)};
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    margin-bottom: ${(props) => rem(props.theme.margin.mobile)};
  }
`;

export default ServiceCleaning;
