import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

const H2 = ({children}) => {
  return (
    <H2Container>
      {children}
    </H2Container>
  )
}

const H2Container = styled.h2`
  font-weight: 700;
  font-size: ${rem(48)};
  line-height: 121%;
  color: ${props => props.theme.color.black};
`

export default H2