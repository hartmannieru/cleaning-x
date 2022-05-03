import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import H4 from './H4'
import Description from './Description'
import H5 from './H5'
import Item1 from '../images/article/item-1.png'

const CardArticle = () => {
  return (
    <CardArticleContainer>
      <CardArticleImgContainer>
        <CardArticleImg src={Item1} alt="Img" />
      </CardArticleImgContainer>
      <CardArticleTextWrap>
        <CardArticleTextContainer>
          <H4 mb={17}>8 best vacuum cleaners to clean any mess for your home in 2022</H4>
          <Description>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</Description>
          <CardArticleTextFooter>
            {/* FIXME: сделать отдельный time компонент */}
            <H5><Time datetime="2022-01-28">Jan 28, 2022</Time></H5>
            <CardArticleTextLink href='#'>
              &#128064;
            </CardArticleTextLink>
          </CardArticleTextFooter>
        </CardArticleTextContainer>
      </CardArticleTextWrap>
    </CardArticleContainer>
  )
}

const CardArticleContainer = styled.article``

const CardArticleImgContainer = styled.div``

const CardArticleTextWrap = styled.div`
  padding: ${rem(30)};
  margin-top: ${rem(-95)};
  position: relative;
`

const CardArticleImg = styled.img`
  width: 100%;
`

const CardArticleTextContainer = styled.section`
  padding: ${rem(50)};
  border: ${rem(1)} solid ${props => props.theme.color.grey};
  box-shadow: 0 ${rem(2)} ${rem(6)} rgba(20, 20, 43, 0.04);
  border-radius: ${rem(24)};
  background: ${props => props.theme.color.white};
`

const CardArticleTextFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const CardArticleTextLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${rem(50)};
  height: ${rem(50)};
  background: ${props => props.theme.color.primary};
  font-size: ${rem(30)};
  text-decoration: none;
  border-radius: ${rem(10)};
  transform: scale(-1, 1);
`

const Time = styled.time``

export default CardArticle