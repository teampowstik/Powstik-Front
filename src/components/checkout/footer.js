import React from 'react'
import styled from "styled-components";
import { H1, P1 } from "../../util/StyledComponent/premadeComponent";
import facebook from "../../assets/fb.png";
import instagram from "../../assets/insta.png";
import twitter from "../../assets/twt.png";
import pinterest from "../../assets/pint.png";
import linkedin from "../../assets/linked.png";
function footer() {
  return (
    <Wrapper>
      <NestedWrapper>
        <ImageContainer>
          <Logos2 src={facebook} />
          <Logos2 src={twitter} />
          <Logos2 src={pinterest} />
          <Logos2 src={instagram} />
          <Logos2 src={linkedin} />
        </ImageContainer>
        <StyledH1>www.powstik.com</StyledH1>
      </NestedWrapper>
      <P1>
        Need Help? Visit the <Span>Help Center</Span> or <Span>Contact Us</Span>
      </P1>
    </Wrapper>
  );
}

export default footer
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background-color: #ffffff;
  padding: 10px 20px;
  margin-top: 20px;
  border-top: 1px solid #000000;
  align-items: center;
`;
const NestedWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 10px;
`;
const Logos2 = styled.img`
  width: 20px;
    height: 20px;
  margin-right: 1.5rem;

  &:hover {
    cursor: pointer;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;
const StyledH1 = styled(H1)`
    padding-left: 50px;
`;
const Span = styled.span`
    color: #8bc34a;
`;