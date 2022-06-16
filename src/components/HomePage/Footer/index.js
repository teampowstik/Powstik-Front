import React from "react";

import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

import appstore from "../../../assets/app-store-2.png";
import playstore from "../../../assets/play-store-2.png";
import facebook from "../../../assets/Vector.png"
import twitter from "../../../assets/Vector2.png"
import pinterest from "../../../assets/Vector3.png"
import instagram from "../../../assets/Vector4.png"
import linkedin from "../../../assets/Vector5.png"

const Footer = () => {
  return (
    <Container>
      <StyledRow className="">
        <StyledColumn className="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3">
          <Header className="text-uppercase mb-4 font-weight-bold ">
            products
          </Header>
          <Item>Geriatrics</Item>
          <Item>Metabolics</Item>
          <Item>Mother & Child</Item>
          <Item>Organic</Item>
          <Item>Nutraceuticals</Item>
          <Item>Plant based foods</Item>
        </StyledColumn>
        <StyledColumn className="cold-md-2 col-lg-3 col-xl-3 mx-auto mt-3">
          <Header className="text-uppercase mb-4 font-weight-bold">
            Useful Links
          </Header>
          <Item>Contact Us</Item>
          <Item>About</Item>
          <Item>Terms of Service</Item>
          <Item>Refund Policy</Item>
          <Item>Privacy Policy</Item>
          <Item>Credits</Item>
        </StyledColumn>
        <StyledColumn className="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3">
          <Header className="text-uppercase mb-4 font-weight-bold">
            Coming Soon- Mobile Apps
          </Header>
          <ImageContainer>
            <Logos src={appstore} />
            <Logos src={playstore} />
          </ImageContainer>
          <Header className="text-uppercase mb-4 font-weight-bold mt-5">
            Keep in Touch
          </Header>
          <ImageContainer>
            <Logos2 src={facebook} />
            {/* <Logos src={twitter} />
            <Logos src={pinterest} />
            <Logos src={instagram} />
            <Logos src={linkedin} /> */}
          </ImageContainer>
        </StyledColumn>
        <StyledColumn className="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3">
          <Header className="text-uppercase mb-4 font-weight-bold">
            Free Shipping
          </Header>
          <Item>Above Rs500</Item>
          <Header className="text-uppercase mb-4 font-weight-bold">
            Food Tech Grade
          </Header>
          <Item>100% Guarantee</Item>
          <Header className="text-uppercase mb-4 font-weight-bold">
            Huge Shipping
          </Header>
          <Item>At Lowest Price</Item>
          <Header className="text-uppercase mb-4 font-weight-bold">Easy Returns</Header>
          <Item>No Questions Asked</Item>
        </StyledColumn>
      </StyledRow>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100vw;
  height: auto;
  text-align: left;
  margin-bottom: 1em;
`;

const StyledRow = styled(Row)`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

const StyledColumn = styled(Col)`
  width: fit-content;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
`;

const Header = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  text-transform: uppercase;
`;

const Item = styled.p`
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    &:hover{
        cursor: pointer;
    }
`;

const ImageContainer = styled.div`
    display: flex;
`;

const Logos = styled.img`
    max-width: 40%;
    min-width: 25%;
    height: auto;
    margin-right: 0.3rem;

    &:hover{
        cursor: pointer;
    }
`;

const Logos2 = styled.img`
    width: 100%;
    height: auto;
    margin-right: 0.3rem;

    &:hover{
        cursor: pointer;
    }
`;