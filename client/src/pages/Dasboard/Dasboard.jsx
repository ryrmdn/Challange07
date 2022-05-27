import React from 'react';
import '../../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../Home';
import OurService from './OurService';
import Card from './Card';
import Banner from './Banner';
import Carousel from './Carousel';
import Accordion from './Accordion';

function Main() {
  return (
    <>
      <Home />
      <OurService />
      <Card />
      <Banner />
      <Carousel />
      <Accordion />
    </>
  )
}

export default Main;