import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import {Col, Row } from 'react-bootstrap'
import H1 from './H1';
import Description from './Description' 
import Button from './Button'
import Icons from './Icons'
import HeaderImg from '../images/header/header-img.svg'

const Header = () => {
  return (
    <HeaderContainer className='d-flex'>
      <Row>
        <Col className='align-self-center'>
          <H1 mb={22}>
            Quality cleaning<br />for your home
          </H1>
          <Description mb={34}>
            Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.
          </Description>
          <Row>
            <Col xs={5}>
              <Button>Get a free quote</Button>
            </Col>
            <Col>
              <Icons 
                img={require('../images/icons/icon-2.svg')}
                title='Call us now'
                description='(414) 567 - 2109'
                tel='tel:4145672109'
              />
            </Col>
          </Row>
        </Col>
        <Col>
          <HeaderImgContainer>
            <img src={HeaderImg} alt='header-img' />
          </HeaderImgContainer>
        </Col>
      </Row>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  min-height: ${rem(734)};
  margin-bottom: ${rem(240)};
`

const HeaderImgContainer = styled.div`
  margin-right: ${rem(-172)};
`

export default Header