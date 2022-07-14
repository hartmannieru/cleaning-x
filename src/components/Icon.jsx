import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const Icon = ({
  img = '/images/icons/icon-2.svg',
  title = 'clients',
  description = '3,480+',
  tel = false,
}) => {
  return (
    <IconContainer>
      <IconIconContainer>
        <IconIcon src={img} alt="Icon" />
      </IconIconContainer>
      <IconTextContainer>
        <IconTitle>{title}</IconTitle>
        <IconDescription>
          {tel ? (
            <IconLink href={tel} rel="noopener noreferrer">
              {description}
            </IconLink>
          ) : (
            description
          )}
        </IconDescription>
      </IconTextContainer>
    </IconContainer>
  );
};

const IconContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: ${rem(16)};
`;

const IconIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${rem(72)};
  height: ${rem(72)};
`;

const IconIcon = styled.img`
  width: 100%;
  filter: drop-shadow(0px 4px 10px rgba(20, 20, 43, 0.04));
`;

const IconTextContainer = styled.div``;

const IconTitle = styled.h5`
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: 112%;
  letter-spacing: ${rem(1.6)};
  text-transform: uppercase;
  color: ${(props) => props.theme.color.description};
  margin-bottom: ${rem(4)};
`;

const IconDescription = styled.h3`
  font-weight: 700;
  font-size: ${rem(28)};
  line-height: 129%;
  color: ${(props) => props.theme.color.black};
`;
// TODO: разобраться как наследовать от h3
const IconLink = styled.a`
  font-weight: 700;
  font-size: ${rem(28)};
  line-height: 129%;
  color: ${(props) => props.theme.color.black};
`;

export default Icon;
