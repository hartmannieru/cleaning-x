import React from 'react';
import Header from 'src/components/Header';
import LookProfessional from 'src/components/LookProfessional';
import ServiceCleaning from 'src/components/ServiceCleaning';
import ServiceWorks from 'src/components/ServiceWorks';

const Home = () => {
  return (
    <>
      <Header />
      <ServiceWorks />
      <ServiceCleaning />
      <LookProfessional />
    </>
  );
};

export default Home;
