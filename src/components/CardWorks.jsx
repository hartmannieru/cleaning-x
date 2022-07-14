import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import H3 from './H3';
import Description from './Description';

const CardWorks = ({ id, img, title, description }) => {
  return (
    <CardWorksContainer>
      <CardWorksImgContainer>
        <CardWorksImg src={img} />
      </CardWorksImgContainer>
      <H3 align="center" mb={16}>
        {id}. {title}
      </H3>
      <Description align="center">{description}</Description>
    </CardWorksContainer>
  );
};

const CardWorksContainer = styled.article``;

const CardWorksImgContainer = styled.div`
  display: flex;
  margin: 0 auto;
  height: ${rem(240)};
  margin-bottom: ${rem(40)};
`;

const CardWorksImg = styled.img`
  width: 100%;
`;

export default CardWorks;
