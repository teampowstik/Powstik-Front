import React from 'react';

import styled from 'styled-components';

import Header from '../LandingPage/Header/Header.component';
import Footer from '../LandingPage/FooterWhite';

const Credits = () => {
  return (
    <>
        <Header />
            <Item> Credits... </Item>
        <Footer />
    </>
  )
}

export default Credits;

const Item = styled.div`
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
    margin-bottom: 5rem;
`;