import React from "react";

import { Card, Col } from "react-bootstrap";
import styled from "styled-components";

const ProductCard = (props) => {
  return (
    <StyledCard>
      <Card.Text>
        <DiscountTag>
          {props.discount}% off
        </DiscountTag>
      </Card.Text>
        <StyledImage src={props.image} variant="top"/>
      <Card.Body>
        <Card.Text>{props.subtitle}</Card.Text>
        <Card.Text>
          <ProductDesc> {props.description} </ProductDesc>
          <ProductPrice> ₹{props.price} </ProductPrice>
        </Card.Text>
        <StyledBtn> Add to Cart </StyledBtn>
      </Card.Body>
    </StyledCard>
  );
};

export default ProductCard;

const StyledCard = styled(Card)`
  background-color:#E8F3DB;
  width: 18em;
`;

const DiscountTag = styled.div`
  font-weight: 600;
  font-size: 23.954px;
  line-height: 29px;

  color: white;
  background-color:#8BC34A;
  width:fit-content;
  padding-right: 1em;
  margin-top: 0.5em;

`;

const StyledImage = styled(Card.Img)`
  width:100%;
  height: auto;
  padding:1rem;
`;

const ProductDesc = styled.div`
  font-weight: 700;
  font-size: 17.0549px;
  line-height: 21px;
`;

const ProductPrice = styled.div`
  font-weight: 700;
  font-size: 14.923px;
  line-height: 17px;
  margin-top: 0.5rem;
`;

const StyledBtn = styled.button`
  background: #FFFFFF;
  border-radius: 4px;

  font-weight: 600;
  font-size: 17.0549px;
  line-height: 21px;

  padding-left:1rem;
  padding-right:1rem;
  padding-top:0.5rem;
  padding-bottom:0.5rem;
  
  float: right;
`;