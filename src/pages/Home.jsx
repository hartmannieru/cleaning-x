import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import ServiceWorks from '../components/ServiceWorks'



const Home = () => {
  return (
    <Container>
      <Header />
      <ServiceWorks />
    </Container>
  )
}

export default Home