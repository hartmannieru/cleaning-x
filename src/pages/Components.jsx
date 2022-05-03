import React from 'react'
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

const Components = () => {
  return (
    <div className="container">
      <div className='row my-5'>
        <div className='col-12'>
          <Logo />
        </div>
      </div>
      <div className='row my-5'>
        <div className='col-12'>
          <Buttons>
            <Button>
              Get a free quote
            </Button>
            <Button full={false}>
              Explore services
            </Button>
            <Button size='small'>
              Get a free quote
            </Button>
          </Buttons>
        </div>
      </div>
      <div className='row my-5'>
        <div className='col-12'>
          <H1>H1</H1>
        </div>
      </div>
      <div className='row my-5'>
        <div className='col-12'>
          <H2>H2</H2>
        </div>
      </div>
      <div className='row my-5'>
        <div className='col-12'>
          <H3>H3</H3>
        </div>
      </div>
      <div className='row my-5'>
        <div className='col-12'>
          <H4>H4</H4>
        </div>
      </div>
      <div className='row my-5'>
        <div className='col-12'>
          <Description>Description</Description>
        </div>
      </div>
      <div className='row my-5'>
        <div className='col-12'>
          <Icons />
        </div>
      </div>
      <div className='row my-5'>
        <div className='col-4'>
          <CardWorks />
        </div>
      </div>
      <div className='row my-5'>
        <div className='col-4'>
          <CardProfessional />
        </div>
      </div>
      <div className='row my-5'>
        <div className='col-6'>
          <CardArticle />
        </div>
      </div>
    </div>
  )
}

export default Components