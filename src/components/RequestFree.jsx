import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Container from './Container';
import { H2Box } from './H2';
import { DescriptionBox } from './Description';
import Icons from './Icons';
import Icon from './Icon';
import Hr from './Hr';
import { H3Box } from './H3';
import Button from './Button';

const RequestFree = () => {
  return (
    <RequestFreeBox>
      <Container>
        <RequestFreeInner>
          <RequestFreeInfo>
            <RequestFreeTitle>Request a free cleaning quote today</RequestFreeTitle>
            <RequestFreeDescription>
              In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus
              duis pharetra eutortor.
            </RequestFreeDescription>
            <Icon
              img={'images/icons/icon-2.svg'}
              title="Call us now"
              description="(414) 567 - 2109"
              tel="tel:4145672109"
            />
            <Hr />
            <RequestFreeBoxSubtitle>Not convinced yet?</RequestFreeBoxSubtitle>
            <RequestFreeDescription>
              Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna
              purus diam.
            </RequestFreeDescription>
            <Button full={false}>Browse our packages</Button>
          </RequestFreeInfo>
          <RequestFreeForm></RequestFreeForm>
        </RequestFreeInner>
      </Container>
    </RequestFreeBox>
  );
};

const RequestFreeBox = styled.section`
  background: #f7f9fc;
  padding: ${rem(240)};
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: ${rem(120)};
  }
`;

const RequestFreeInner = styled.div``;
const RequestFreeInfo = styled.div``;
const RequestFreeForm = styled.div`
  padding: ${rem(85)} ${rem(61)};
  background: ${(props) => props.theme.color.white};
  border: ${rem(1)} solid #eff0f6;
  box-shadow: 0 ${rem(2)} ${rem(6)} rgba(20, 20, 43, 0.04);
  border-radius: ${rem(16)};
`;
const RequestFreeTitle = styled(H2Box)``;
const RequestFreeDescription = styled(DescriptionBox)``;
const RequestFreeBoxSubtitle = styled(H3Box)``;

export default RequestFree;
