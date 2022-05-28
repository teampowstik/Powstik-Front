import React from "react";
import styled from "styled-components";

import footerLogo from "../../../assets/powstik.png";
import appStore from "../../../assets/app-store.png";
import playStore from "../../../assets/play-store.png";
import facebook from "../../../assets/Vector.png";
import twitter from "../../../assets/Vector2.png";
import pinterest from "../../../assets/Vector3.png";
import instagram from "../../../assets/Vector4.png";
import linkedIn from "../../../assets/Vector5.png";

const Footer = () => {
  return (
    <Container>
      <Container1>
        <Column1>
          <Image0>
          <img src={footerLogo} alt="footerLogo"/>
          </Image0>
        </Column1>
        <Column2>
          <Text1 onClick={() => window.open("https://www.google.com")}>About</Text1>
          <Text1>Terms of Service</Text1>
          <Text1>Privacy Policy</Text1>
          <Text1>Refund Policy</Text1>
          <Text1>Contact</Text1>
        </Column2>
        <Column3>
          <Text2>Coming Soon- Mobile Apps</Text2>
          <ImageContainer>
            <Image1>
              <img src={appStore} alt="appStore" />
            </Image1>
            <Image1>
              <img src={playStore} alt="playStore" />
            </Image1>
          </ImageContainer>
        </Column3>
      </Container1>
      <Line color="white" />
      <Container2>
        <Column4>
          <Text3>Copyright © 2022 | Aadya Nutrition Private Limited</Text3>
        </Column4>
        <Column5>
          <Image2>
            <img src={facebook} alt="facebook" />
          </Image2>
          <Image2>
            <img src={twitter} alt="twitter"/>
          </Image2>
          <Image2>
            <img src={pinterest} alt=""/>
          </Image2>
          <Image2>
            <img src={instagram} />
          </Image2>
          <Image2>
            <img src={linkedIn} />
          </Image2>
        </Column5>
      </Container2>
    </Container>
  );
};

const Container = styled.div`
  background-color: #333333;
  width: 100vw;
  height: auto;
  overflow: hidden;
  bottom: 0;
`;

const Container1 = styled.div`
  width: auto;
  height: auto;
  overflow: hidden;
  display: flex;
  justify-content: space-evenly;
  margin-bottom:5%;
`;

const Image0 = styled.div``;

const Column1 = styled.div`
  height: fit-content;
  width: fit-content;
  border-radius: 0px;
  margin-top: 2%;
  margin-left: 6%;
`;



const Column2 = styled.div`
  min-width: fit-content;
  height: fit-content;
  margin-top: 2%;
  margin-left: 15%;
`;

const Text1 = styled.div`
  color: white;
  //styleName: OS-SB-16;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  cursor: pointer;
  width: fit-content;
`;

const Column3 = styled.div`
  width: fit-content;
  height: fit-content;
  margin-top: 2%;
  color: white;
`;

const Text2 = styled.div`
  text-align: center;
  //styleName: MW-20;
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  min-width: 30vw;
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 1em;
  cursor: pointer;
  width: 100%;
  margin: 0 auto;
`;

const Image1 = styled.image`
  margin: 2%;
  width: auto;
  height: auto;
`;

const Line = ({ color }) => (
  <hr
      style={{
          color: color,
          height: 0
      }}
  />
);

const Container2 = styled.div`
  color: #f6f6f6;
  width: auto;
  height: auto;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
`;

const Column4 = styled.div`
  height: auto;
  width: auto;
  border-radius: 0px;
  margin-top: 0.2%;
  margin-left: 6%;
`;

const Text3 = styled.div`
  //styleName: OS-SB-16;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  width: auto;
  margin-bottom: 5%;
`;

const Column5 = styled.div`
  height: auto;
  width: auto;
  border-radius: 0px;
  margin-top: 0.2%;
  margin-right: 15.5%;
  display: flex;
`;

const Image2 = styled.div`
  margin-right: 20%;
  cursor: pointer;
`;

export default Footer;
