import React, { useState } from 'react';
import {
  UncontrolledCarousel
} from 'reactstrap';
import "./Offerings.css";
{/*
    Show Static offerings
*/}
const offerings = [
  {
    src: '/images/overview/offerings/ad_step_1.png',
    key: '1',
  },
  {
    src: '/images/overview/offerings/ad_step_2.png',
    key: '2',
  },
  {
    src: '/images/overview/offerings/ad_step_3.png',
    key: '3',
  }
];

const Offerings = (props) => {
  return (
    <UncontrolledCarousel items={offerings}
    />
  );
}

export default Offerings;