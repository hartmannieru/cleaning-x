import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

const Description = ({children}) => {
  return (
    <DescriptionContainer>
      {children}
    </DescriptionContainer>
  )
}

const DescriptionContainer = styled.p`
  font-weight: 400;
  font-size: ${rem(21)};
  line-height: 143%;
  color: ${props => props.theme.color.description};
`

export default Description