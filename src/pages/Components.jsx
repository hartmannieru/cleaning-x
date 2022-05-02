import React from 'react'
import Button from "../components/Button";
import Buttons from "../components/Buttons";
import Description from '../components/Description';
import H1 from "../components/H1";
import H2 from "../components/H2";
import Logo from '../components/Logo';

const Components = () => {
  return (
    <div className="container">
      <Logo />
      <Buttons>
        <Button>
          Get a free quote
        </Button>
        <Button full={false}>
          Explore services
        </Button>
      </Buttons>
      <H1>H1</H1>
      <H2>H2</H2>
      <Description>Description</Description>
    </div>
  )
}

export default Components