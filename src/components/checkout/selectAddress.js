import React from "react";
import styled from "styled-components";

import { H1, P1 } from "../../util/StyledComponent/premadeComponent";
import GButton from "../../util/buttons/reusableButton/button";
import Header from "./../LandingPage/Header/Header.component";
import { Wrapper } from "../../util/buttons/DownloadButton/DownloadButton.styles";
import PriceDetails from "./priceDetails";
function SelectAddress({ name, phone, address, value, options, onChange }) {
  return (
    <React.Fragment>
      {/* <input type="radio" name={name} value={address} /> */}
      <Container>
        <Head primary>
          <NestedLogin>
            <H1 color="white">2</H1>
            <NestedLogin2>
              <H1 color="white">Delivery Address</H1>
            </NestedLogin2>
          </NestedLogin>
        </Head>
        {options.map((option) => (
          <Box>
            <NestedLogin>
              <StyledInput
                type="radio"
                className="form-check-input"
                name={option.name}
                key={option._id}
                value={option.value}
                checked={value === option.value}
                onChange={() => onChange(option.value)}
              ></StyledInput>

              <NestedLogin2>
                <NestedLogin3>
                  <StyledH1>{option.name}</StyledH1>
                  <StyledH1>{option.phone}</StyledH1>
                </NestedLogin3>
                <StyledP>Vellore Institue of Technology</StyledP>
                <GButton title="Deliver Here" bg="#8BC34A" width="100%" />
              </NestedLogin2>
            </NestedLogin>
            <a href="#edit">Edit</a>
          </Box>
        ))}
      </Container>
    </React.Fragment>
  );
}

export default SelectAddress;
const Container = styled.div`
  margin: 1rem 0;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background-color: ${(props) => (props.primary ? "#8BC34A" : "#e8f3db;")};
  padding: 10px 20px;
  &:hover {
    background-color: #d6e9be;
  }
`;
const StyledInput = styled.input`
  color: #8bc34a;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
  &:checked {
    background-color: #8bc34a;
  }
`;
const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background-color: ${(props) => (props.primary ? "#8BC34A" : "#e8f3db;")};
  padding: 10px 20px;
`;

const NestedLogin = styled.div`
  display: flex;
  flex-direction: row;
`;

const NestedLogin2 = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;
const NestedLogin3 = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledH1 = styled.p`
  font-style: normal;
  font-weight: ${(props) => props.weight || "bold"};
  padding-right: 20px;
  font-size: ${(props) => props.size + "px" || "34px"};

  margin: 0px !important;
  /* or 128% */
  /* primary */

  color: ${(props) => props.color || "#111111"};

  @media (max-width: 500px) {
    font-size: ${(props) => props.size / 2 + 5 + "px" || "34px"};
    line-height: 26px;
  }
`;

const StyledP = styled.p`
  margin-bottom: 20px;
`;
