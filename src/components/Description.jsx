import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

const Description = ({children, align}) => {
  return (
    <DescriptionContainer
      align={align}
    >
      {children}
    </DescriptionContainer>
  )
}

const DescriptionContainer = styled.p`
  font-weight: 400;
  font-size: ${rem(21)};
  line-height: 143%;
  color: ${props => props.theme.color.description};
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

export default Description