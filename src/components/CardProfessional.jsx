import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import H4 from './H4';
import Description from './Description';

const CardProfessional = ({
  img = '/images/professional/item-1.webp',
  title,
  description,
  page,
}) => {
  return (
    <CardProfessionalContainer page={page}>
      <CardProfessionalImgContainer>
        <CardProfessionalImg src={img} alt={title} />
      </CardProfessionalImgContainer>
      <H4 align="center" mb={13}>
        {title}
      </H4>
      <Description align="center">{description}</Description>
    </CardProfessionalContainer>
  );
};

const CardProfessionalContainer = styled.article`
  padding: ${rem(49)} ${rem(50)} ${rem(29)};
  border: ${rem(1)} solid ${(props) => props.theme.color.grey};
  box-shadow: 0 ${rem(2)} ${rem(6)} rgba(20, 20, 43, 0.04);
  border-radius: ${rem(16)};
  max-width: ${(props) => (props.page === 'components' ? rem(388) : 'auto')};
  width: 100%;
`;

const CardProfessionalImgContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: ${rem(220)};
  height: ${rem(224)};
  margin-bottom: ${rem(24)};
`;

const CardProfessionalImg = styled.img`
  width: 100%;
  object-fit: contain;
  margin-top: auto;
`;

export default CardProfessional;
