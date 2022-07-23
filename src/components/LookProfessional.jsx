import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Container from './Container';
import { H2Box } from './H2';
import Button from './Button';
import CardProfessional from './CardProfessional';

const LookProfessional = () => {
  const [cardsProfessional, setCardsProfessional] = useState([]);

  useEffect(() => {
    fetch('db/db.json')
      .then((response) => response.json())
      .then((json) => setCardsProfessional(json['cardsProfessional']));
  }, []);

  return (
    <LookProfessionalBox>
      <Container>
        <LookProfessionalHeader>
          <LookProfessionalTitle>
            Take a&nbsp;look at&nbsp;our professional services
          </LookProfessionalTitle>
          <Button full={false}>Explore services</Button>
        </LookProfessionalHeader>
        <LookProfessionalCards>
          {cardsProfessional.map(({ id, img, title, description }) => (
            <CardProfessional key={id} img={img} title={title} description={description} />
          ))}
        </LookProfessionalCards>
      </Container>
    </LookProfessionalBox>
  );
};

const LookProfessionalBox = styled.section`
  padding: ${rem(240)} 0;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: ${rem(120)} 0;
  }
`;

const LookProfessionalHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: ${rem(40)};
  margin-bottom: ${rem(48)};
`;

const LookProfessionalTitle = styled(H2Box)`
  max-width: ${rem(475)};
`;

const LookProfessionalCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${rem(388)}, auto));
  gap: ${rem(28)};
`;

export default LookProfessional;
