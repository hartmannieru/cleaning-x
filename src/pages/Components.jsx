import React from 'react'
import Button from "../components/Button";
import Buttons from "../components/Buttons";
import H1 from "../components/H1";
import H2 from "../components/H2";

const Components = () => {
  return (
    <div className="container">
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
    </div>
  )
}

export default Components