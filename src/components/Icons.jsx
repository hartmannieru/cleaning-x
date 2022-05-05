import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

// TODO:переименовать компонент и имя файла в Icon
const Icons = ({img = '../images/icons/icon-1.svg', title = 'clients', description = '3,480+', tel = false}) => {
  return (
    <IconsContainer>
      <IconsIconContainer>
        <IconsIcon src={img.default} alt='Icon' />
      </IconsIconContainer>
      <IconsTextContainer>
        <IconsTitle>
          {title}
        </IconsTitle>
        <IconsDescription>
          {tel ? 
            <IconsLink href={tel} rel="noopener noreferrer">
              {description}
            </IconsLink>
            : 
            (
              (description) 
            )
          }
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
// TODO: разобраться как наследовать от h3
const IconsLink = styled.a`
  font-weight: 700;
  font-size: ${rem(28)};
  line-height: 129%;
  color: ${props => props.theme.color.black};
`

export default Icons