import React from "react";

import styled from "styled-components";

const Headers = (props) => {
  return (
    <Container>
      <MainHeader>{props.main}</MainHeader>
      <SubHeader>{props.sub} </SubHeader>
    </Container>
  );
};

export default Headers;

const Container = styled.div`
  width: 85vw;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const MainHeader = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 54px;
  letter-spacing: 0em;
  text-align: left;
`;

const SubHeader = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 45px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(51, 51, 51, 0.75);
`;
