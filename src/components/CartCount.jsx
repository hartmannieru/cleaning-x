import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

const CartCount = () => {
  return (
    <CartCountContainer>Cart (0)</CartCountContainer>
  )
}

const CartCountContainer = styled.span`
  font-weight: 400;
  font-size: ${rem(18)};
  line-height: 167%;
  color: ${props => props.theme.color.black};
`

export default CartCount