import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Logo from './Logo'
import Menu from './Menu'
import CartCount from './CartCount'
import Button from './Button'
import { Col, Container, Row } from 'react-bootstrap'

const Nav = () => {
  return (
    <NavContainer className='py-7'>
      <Container>
        <Row className='align-items-center d-flex justify-content-between'>
          <Col xs sm={6} lg={3} xl={2}>
            <Logo />
          </Col>
          <Col lg={5} xl={6} className='d-none d-lg-block'>
            <Menu />
          </Col>
          <Col xs={1} md={2} lg={1} xl={1} className='d-none d-md-block'>
            <CartCount />
          </Col>
          <Col xs sm={5} md={4} lg={3} xl={2} className="text-end">
            <Button size='small'>Get a free quote</Button>
          </Col>
        </Row>
      </Container>
    </NavContainer>
  )
}

const NavContainer = styled.nav``

export default Nav