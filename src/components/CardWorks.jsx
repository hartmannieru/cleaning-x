import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import H3 from './H3'
import Description from './Description'
import Item1 from '../images/works/item-1.svg'

const CardWorks = () => {
  return (
    <CardWorksContainer>
      <CardWorksImgContainer>
        <CardWorksImg src={Item1} />
      </CardWorksImgContainer>
      <H3 align='center' mb={16}>1. Schedule online</H3>
      <Description align='center'>
        Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sedn.
      </Description>
    </CardWorksContainer>
  )
}

const CardWorksContainer = styled.article``

const CardWorksImgContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: ${rem(240)};
  margin-bottom: ${rem(40)};
`

const CardWorksImg = styled.img`
  width: 100%;
`


export default CardWorks