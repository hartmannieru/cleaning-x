import React from 'react';
import Follow from 'src/components/Follow';
import Header from 'src/components/Header';
import LookProfessional from 'src/components/LookProfessional';
import Office from 'src/components/Office';
import ServiceCleaning from 'src/components/ServiceCleaning';
import ServiceWorks from 'src/components/ServiceWorks';
import What from 'src/components/What';

const Home = () => {
  return (
    <>
      <Header />
      <ServiceWorks />
      <ServiceCleaning />
      <LookProfessional />
      <Follow />
      <Office />
      <What />
    </>
  );
};

export default Home;
