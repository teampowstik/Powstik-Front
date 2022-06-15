import React from 'react'

import ProductCard from '../Card';

import Slider from 'react-slick';

const CardSlider = () => {
    const settings = {}
    return (
    <Slider>
        <ProductCard/>
    </Slider>
  )
}

;export default CardSlider;