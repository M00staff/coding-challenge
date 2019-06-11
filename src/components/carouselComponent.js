import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

const carousel = () => (
  <Carousel className="Carousel">
    <Carousel.Item>
      <h1>Example Headline</h1>
      <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</h5>
      <Button>Sign Up Today</Button>
    </Carousel.Item>
    <Carousel.Item>
      <h1>Example Headline</h1>
      <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</h5>
      <Button>Sign Up Today</Button>
    </Carousel.Item>
    <Carousel.Item>
      <h1>Example Headline</h1>
      <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</h5>
      <Button>Sign Up Today</Button>
    </Carousel.Item>
  </Carousel>
);

export default carousel;
