import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

const H2 = ({children, align, mb = 0}) => {
  return (
    <H2Container
      align={align}
      mb={mb}
    >
      {children}
    </H2Container>
  )
}

const H2Container = styled.h2`
  font-weight: 700;
  font-size: ${rem(48)};
  line-height: 121%;
  color: ${props => props.theme.color.black};
  margin-bottom: ${props => rem(props.mb)};
  ${
    props => {
      if (props.align === 'center') {
        return `
          text-align: center;
        `
      }
    }
  }
`

export default H2