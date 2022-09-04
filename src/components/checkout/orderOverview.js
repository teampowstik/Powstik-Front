import React from "react";
import styled from "styled-components";

import { H1, P1 } from "../../util/StyledComponent/premadeComponent";
import Header from "./../LandingPage/Header/Header.component";
import { Wrapper } from "../../util/buttons/DownloadButton/DownloadButton.styles";
import PriceDetails from "./priceDetails";
function OrderOverview() {
  return (
    <React.Fragment>
      <Container>
        <Box primary>
          <NestedLogin>
            <H1 color="white">3</H1>
            <NestedLogin2>
              <H1 color="white">Order Overview</H1>
            </NestedLogin2>
          </NestedLogin>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default OrderOverview;
const Container = styled.div`
  margin: 1rem 0;
`;
const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${(props) => (props.primary ? "#8BC34A" : "#e8f3db;")};
  padding: 5px 20px;
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
