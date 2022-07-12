import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import H2 from './H2';
import CardWorks from './CardWorks';
import Description from './Description';

const ServiceWorks = () => {
  return (
    <ServiceWorksContainer>
      <H2 align="center" mb={21}>
        How our service works?
      </H2>
      <Description align="center" mb={58}>
        Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non
        ultrices massa id egestas quam velit pretium nu.
      </Description>
      <ServiceWorksCards>
        <Row>
          <Col>
            <CardWorks />
          </Col>
          <Col>
            <CardWorks />
          </Col>
          <Col>
            <CardWorks />
          </Col>
        </Row>
      </ServiceWorksCards>
    </ServiceWorksContainer>
  );
};

const ServiceWorksContainer = styled.section``;
const ServiceWorksCards = styled.section`
  margin-bottom: ${rem(56)};
`;

const Row = styled.div``;
const Col = styled.div``;

export default ServiceWorks;
