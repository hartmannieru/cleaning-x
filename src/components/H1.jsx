import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

const H1 = ({children}) => {
  return (
    <H1Container>{children}</H1Container>
  )
}

const H1Container = styled.h1`
  font-weight: 700;
  font-size: ${rem(68)};
  line-height: 109%;
  color: ${props => props.theme.color.black};
`

export default H1