import React from 'react'

import Slider from 'react-slick';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';

import ProductCard from '../Card';

import prod1 from "../../../assets/product1.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CardSlider = () => {
  return (
      <Carousel>
        <Carousel.Item>
          <ProductCard discount="20" image={prod1} subtitle="Diabetes" description="Befach Rice for Diabetics" price="504" />
        </Carousel.Item>
        <Carousel.Item>
          <ProductCard discount="30" image={prod1} subtitle="Diabetes" description="Befach Rice for Diabetics" price="504" />
        </Carousel.Item>
      </Carousel>
  );
};

export default CardSlider;

const Container = styled.div`
  
`;