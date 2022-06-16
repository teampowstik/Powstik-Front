import React from "react";

import Slider from "react-slick";
import styled from "styled-components";

import ProductCard from "../Card";

import prod1 from "../../../assets/product1.png";
import prod2 from "../../../assets/product2.png"
import prod3 from "../../../assets/product3.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const CardSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Container>
      <Slider {...settings}>
        <Cards>
          <ProductCard
            discount="20"
            image={prod1}
            subtitle="Diabetes"
            description="Befach Rice for Diabetics"
            price="504"
          />
        </Cards>
        <Cards>
          <ProductCard
            discount="35"
            image={prod3}
            subtitle="Diabetes"
            description="Befach Rice for Diabetics"
            price="504"
          />
        </Cards>
        <Cards>
          <ProductCard
            discount="25"
            image={prod1}
            subtitle="Diabetes"
            description="Befach Rice for Diabetics"
            price="504"
          />
        </Cards>
        <Cards>
          <ProductCard
            discount="15"
            image={prod3}
            subtitle="Diabetes"
            description="Befach Rice for Diabetics"
            price="504"
          />
        </Cards>
        <Cards>
          <ProductCard
            discount="45"
            image={prod1}
            subtitle="Diabetes"
            description="Befach Rice for Diabetics"
            price="504"
          />
        </Cards>
        <Cards>
          <ProductCard
            discount="20"
            image={prod3}
            subtitle="Diabetes"
            description="Befach Rice for Diabetics"
            price="504"
          />
        </Cards>
        <Cards>
          <ProductCard
            discount="15"
            image={prod1}
            subtitle="Diabetes"
            description="Befach Rice for Diabetics"
            price="504"
          />
        </Cards>
        <Cards>
          <ProductCard
            discount="30"
            image={prod3}
            subtitle="Diabetes"
            description="Befach Rice for Diabetics"
            price="504"
          />
        </Cards>
      </Slider>
    </Container>
  );
};

export default CardSlider;

const Container = styled.div`
  width: 85vw;
  height: auto;
  margin-left:auto;
  margin-right:auto;
  margin-bottom: 5rem;
`;

const Cards = styled(Slider)`
  margin: 0.2rem;
`;