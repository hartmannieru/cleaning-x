import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import LogoImgSrc from '../images/logo.svg'

// TODO: сделать ссылкой на главную
const Logo = () => {
  return (
    <LogoContainer href="#">
      <LogoImg src={LogoImgSrc} alt="Logo" />
    </LogoContainer>
  )
}

const LogoContainer = styled.a`
  display: flex;
  text-align: center;
  width: ${rem(178)};
`

const LogoImg = styled.img`
  
`

export default Logo