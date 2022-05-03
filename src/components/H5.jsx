import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'


const H5 = ({children}) => {
  return (
    <H5Container>
      {children}
    </H5Container>
  )
}

const H5Container = styled.h5`
  font-weight: 700;
  font-size: ${rem(18)};
  line-height: 111%;
`

export default H5
