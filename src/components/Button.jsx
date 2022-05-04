import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

const Button = ({children, full = true, size = 'large'}) => {
  return (
    <ButtonContainer
      full={full}
      size={size}
    >
      {children}
    </ButtonContainer>
  )
}

const ButtonContainer = styled.button`
  color: ${props => props.full ? props.theme.color.white : props.theme.color.black};
  background: ${props => props.full ? props.theme.color.primary : props.theme.color.transparent};
  border-width: ${rem(1)};
  border-style: solid;
  border-color: ${props => props.full ? 'transparent' : props.theme.color.grey};
  border-radius: ${rem(14)};
  font-size: ${props => props.size === 'large' ? `${rem(18)}` : `${rem(16)}`};
  line-height: ${rem(20)};
  ${
    props => {
      if (props.full && props.size !== 'small') {
        return `
          font-weight: 700;
        `
      } else {
        return `
          font-weight: 400;
        `
      }
    }
  }
  font-family: 'Roboto', sans-serif;
  text-align: center;
  padding: ${props => props.size === 'large' ? `${rem(26)} ${rem(38)}` : `${rem(17)} ${rem(27)}`};
  min-width: ${props => props.size === 'large' ? `${rem(217)}` : '100%'};
  box-shadow: ${props => props.full ? 'none' : '0px 4px 10px rgba(20, 20, 43, 0.04)'};
  transition: all 0.3s linear;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.color.white};
    background: #0069E4;
    box-shadow: none;
    transition: background 200ms linear;
    font-weight: ${props => props.size === 'large' ? 700 : 400};
  }
`

export default Button