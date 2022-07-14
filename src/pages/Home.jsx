import React from 'react';
import Container from 'src/components/Container';
import ServiceCleaning from 'src/components/ServiceCleaning';
import Header from '../components/Header';
import ServiceWorks from '../components/ServiceWorks';


const Home = () => {
  return (
    <>
      <Header />
      <ServiceWorks />
      <ServiceCleaning />
    </>
  );
};

export default Home;
