import React from 'react'
import styled from "styled-components";

import { H1, P1 } from "../../util/StyledComponent/premadeComponent";
import Header from "./../LandingPage/Header/Header.component";
import { Wrapper } from "../../util/buttons/DownloadButton/DownloadButton.styles";
import PriceDetails from "./priceDetails";
function AddAddress() {
  return (
    <React.Fragment>
      <Box>
        <NestedLogin>
          <H1>+</H1>
          <NestedLogin2>
            <H1>Add Address</H1>
          </NestedLogin2>
        </NestedLogin>
      </Box>
    </React.Fragment>
  );
}

export default AddAddress
const Box = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #e8f3db;
  padding: 5px 20px;
  border-radius: 5px;
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
