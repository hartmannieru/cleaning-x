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
  font-size: ${rem(16)};
  line-height: ${rem(20)};
  font-weight: ${props => props.full ? 700 : 400};
  font-family: 'Roboto', sans-serif;
  text-align: center;
  padding: ${rem(26)} ${rem(38)};
  min-width: ${rem(217)};
  box-shadow: ${props => props.full ? 'none' : '0px 4px 10px rgba(20, 20, 43, 0.04)'};
  transition: all 0.3s linear;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.color.white};
    background: #0069E4;
    box-shadow: none;
    transition: background 200ms linear;
  }
`

export default Button