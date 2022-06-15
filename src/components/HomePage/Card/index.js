import React from "react";

import { Card, Button } from "react-bootstrap";
import styled from "styled-components";

import prod1 from "../../../assets/product1.png";

const ProductCard = () => {
  return (
    <StyledCard>
      <Card.Img
        variant="top"
        src={prod1}
        style={{ width: "15rem", margin: "auto" }}
      />
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">Diabetes</Card.Subtitle>
        <Card.Text className="">
          Befach Rice for Diabetics
        </Card.Text>
        <Card.Text className="">
        ₹504.00
        </Card.Text>
        <Button variant="outline-success ">Add to Cart</Button>
      </Card.Body>
    </StyledCard>
  );
};

export default ProductCard;

const StyledCard = styled(Card)`

`;
