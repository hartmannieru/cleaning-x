import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from "../components/Button";
import Buttons from "../components/Buttons";
import CardArticle from '../components/CardArticle';
import CardProfessional from '../components/CardProfessional';
import CardWorks from '../components/CardWorks';
import Description from '../components/Description';
import H1 from "../components/H1";
import H2 from "../components/H2";
import H3 from '../components/H3';
import H4 from '../components/H4';
import Icons from '../components/Icons';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import Nav from '../components/Nav';

const Components = () => {
  return (
    <Container>
      <Row className='my-5'>
        <Col>
          {/* TODO: сделать по Bootstrap */}
          <Buttons>
            <Button>
              Get a free quote
            </Button>
            <Button full={false}>
              Explore services
            </Button>
          </Buttons>
        </Col>
      </Row>
      <Row>
        <Col lg={2} className='my-5'>
          <Button size='small'>
            Get a free quote
          </Button>
        </Col>
        <Col lg={2} className='my-5'>
          <Button size='small' full={false}>
            Get a free quote
          </Button>
        </Col>
      </Row>
      <Row className='my-5'>
        <Col>
          <Logo />
        </Col>
      </Row>
      <Row className='my-5'>
        <Col>
          <Menu />
        </Col>
      </Row>
      <Row className='my-5'>
        <Col>
          <H1>H1</H1>
        </Col>
      </Row>
      <Row className='my-5'>
        <Col>
          <H2>H2</H2>
        </Col>
      </Row>
      <Row className='my-5'>
        <Col>
          <H3>H3</H3>
        </Col>
      </Row>
      <Row className='my-5'>
        <Col>
          <H4>H4</H4>
        </Col>
      </Row>
      <Row className='my-5'>
        <Col>
          <Description>Description</Description>
        </Col>
      </Row>
      <Row className='my-5'>
        <Col>
          <Icons />
        </Col>
      </Row>
      <Row className='my-5'>
        <Col lg={4}>
          <CardWorks />
        </Col>
      </Row>
      <Row className='my-5'>
        <Col lg={4}>
          <CardProfessional />
        </Col>
      </Row>
      <Row className='my-5'>
        <Col lg={6}>
          <CardArticle />
        </Col>
      </Row>
    </Container>
  )
}

export default Components