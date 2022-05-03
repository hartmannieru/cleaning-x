import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Icon1 from '../images/icons/icon-1.svg'

const Icons = () => {
  return (
    <IconsContainer>
      <IconsIconContainer>
        <IconsIcon src={Icon1} alt='Icon' />
      </IconsIconContainer>
      <IconsTextContainer>
        <IconsTitle>
          Clients
        </IconsTitle>
        <IconsDescription>
          3,480+
        </IconsDescription>
      </IconsTextContainer>
    </IconsContainer>
  )
}

const IconsContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: ${rem(16)};
`

const IconsIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${rem(72)};
  height: ${rem(72)};
`

const IconsIcon = styled.img`
  width: 100%;
  filter: drop-shadow(0px 4px 10px rgba(20, 20, 43, 0.04));
`

const IconsTextContainer = styled.div``

const IconsTitle = styled.h5`
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: 112%;
  letter-spacing: ${rem(1.6)};
  text-transform: uppercase;
  color: ${props => props.theme.color.description};
  margin-bottom: ${rem(4)};
`

const IconsDescription = styled.h3`
  font-weight: 700;
  font-size: ${rem(28)};
  line-height: 129%;
  color: ${props => props.theme.color.black};
`

export default Icons