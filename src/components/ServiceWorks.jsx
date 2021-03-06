import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import H2 from './H2';
import CardWorks from './CardWorks';
import Description from './Description';
import Container from './Container';
import { useEffect } from 'react';
import { useState } from 'react';
import Hr from './Hr';
import Buttons from './Buttons';
import Button from './Button';

const ServiceWorks = () => {
  const [cardsArr, setCardsArr] = useState([]);

  useEffect(() => {
    fetch('db/db.json')
      .then((response) => response.json())
      .then((json) => setCardsArr(json['serviceWorks']));
  }, []);

  return (
    <ServiceWorksContainer>
      <Container>
        <H2 align="center" mb={21}>
          How our service works?
        </H2>
        <Description align="center" mb={58}>
          Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non
          ultrices massa id&nbsp;egestas quam velit pretium&nbsp;nu.
        </Description>
        <ServiceWorksCards>
          {cardsArr.map(({ id, img, title, description }) => (
            <CardWorks key={id} id={id} img={img} title={title} description={description} />
          ))}
        </ServiceWorksCards>
        <Buttons mb={200} justifyContent={'center'}>
          <Button>Get a free quote</Button>
          <Button full={false}>Explore services</Button>
        </Buttons>
        <Hr />
      </Container>
    </ServiceWorksContainer>
  );
};

const ServiceWorksContainer = styled.section``;
const ServiceWorksCards = styled.section`
  margin-bottom: ${rem(29)};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${rem(374)}, auto));
  gap: ${rem(30)};
`;

export default ServiceWorks;
