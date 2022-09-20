import React from "react";
import styled from "styled-components";

import { H1, P1 } from "../../util/StyledComponent/premadeComponent";
import Header from "./../LandingPage/Header/Header.component";
import { Wrapper } from "../../util/buttons/DownloadButton/DownloadButton.styles";
import PriceDetails from "./priceDetails";
import AddAddress from "./addAddress";
import SelectAddress from "./selectAddress";
import OrderOverview from "./orderOverview";
import PaymentOption from "./paymentOption";
import Footer from "./footer";

const Checkout = () => {
  const [lookingFor, setLookingFor] = React.useState("false");
  const [boolean_options, setBoolean_options] = React.useState([
    {
      _id: 1,
      name: "Name1",
      value: "Name1",
      phone: "1234567890",
      address: "VIT",
    },
    {
      _id: 2,
      name: "Name2",
      value: "Name2",
      phone: "9832498237",
      address: "Vellore",
    },
  ]);
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Wrapper1>
          <Login>
            <NestedLogin>
              <H1>1</H1>
              <NestedLogin2>
                <H1>LOGIN</H1>
                <P1>+81924940494</P1>
              </NestedLogin2>
            </NestedLogin>
            <Wrapper
              // onClick={AddCart}
              color="#8bc34a"
              background="white"
              border="#8bc34a"
              to="#"
            >
              CHANGE
            </Wrapper>
          </Login>
          <SelectAddress
            value={lookingFor}
            options={boolean_options}
            onChange={(newValue) => setLookingFor(newValue)}
          />
          <AddAddress />
          <OrderOverview />
          <PaymentOption />
        </Wrapper1>
        <Wrapper2>
          <PriceDetails />
        </Wrapper2>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Checkout;
const Container = styled.div`
  display: flex;
  margin: 0 2rem;
  padding-top: 2rem;
`;

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
`;
const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
`;

const Login = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #e8f3db;
  padding: 20px;
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
// const StyledNumH1 = styled(H1)`
//   background-color: #ffffff;
//   padding: 5px;
//   `;