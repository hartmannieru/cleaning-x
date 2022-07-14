import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import H4 from './H4';
import Description from './Description';

const CardProfessional = ({ page }) => {
  return (
    <CardProfessionalContainer page={page}>
      <CardProfessionalImgContainer>
        <CardProfessionalImg src={'/images/professional/item-1.webp'} alt="Img" />
      </CardProfessionalImgContainer>
      <H4 align="center" mb={13}>
        House cleaning
      </H4>
      <Description align="center">
        Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis
        volutpat est.
      </Description>
    </CardProfessionalContainer>
  );
};

const CardProfessionalContainer = styled.article`
  padding: ${rem(83)} ${rem(50)} ${rem(29)};
  border: ${rem(1)} solid ${(props) => props.theme.color.grey};
  box-shadow: 0 ${rem(2)} ${rem(6)} rgba(20, 20, 43, 0.04);
  border-radius: ${rem(16)};
  max-width: ${(props) => (props.page === 'components' ? rem(388) : 'auto')};
  width: 100%;
`;

const CardProfessionalImgContainer = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: ${rem(220)};
  margin-bottom: ${rem(24)};
`;

const CardProfessionalImg = styled.img`
  width: 100%;
`;

export default CardProfessional;
