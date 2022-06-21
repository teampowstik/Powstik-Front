import React from 'react'


import { Col, Form, FormLabel, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { H1, P1 } from '../../../util/StyledComponent/premadeComponent';
import { Input } from '../../../util/StyledComponent/input';

const addProductInput = () => {
  return (
    <Container>
        <FormBox>
            <PageName> Home/Product </PageName>
            <PageTitle> Add a New Product </PageTitle>
            <StyledForm>
                <StyledRow className="mt-5">
                    <Col md={6} >
                    <P1 weight="600" size="19.1339px" lineHeight="27px"> Enter Product name </P1>
                    <Input className="mt-2" placeholder="xyz name" width="100%" height="2.5rem"/>
                    </Col>
                    <Col md={6}>
                    <P1 weight="600" size="19.1339px" lineHeight="27px"> Vendor ID </P1>
                    <Input className="mt-2" placeholder="Vendor ID" width="100%" height="2.5rem" />
                    </Col>
                </StyledRow>
                <StyledRow className="mt-3">
                    <Col md={6}>
                    <P1 weight="600" size="19.1339px" lineHeight="27px"> Enter Expected Price </P1>
                    <Input className="mt-2" placeholder="Price" width="100%" height="2.5rem" />
                    </Col>
                    <Col md={6}>
                    <P1 weight="600" size="19.1339px" lineHeight="27px"> Enter Discount </P1>
                    <Input className="mt-2" placeholder="Discount%" width="100%" height="2.5rem" />
                    </Col>
                </StyledRow>
                <StyledRow className="mt-3">
                    <Col md={12}>
                        <P1 weight="600" size="19.1339px" lineHeight="27px"> Enter Product Description </P1>
                        <StyledTextArea  className="mt-2" placeholder="xyz name" />
                    </Col>
                </StyledRow>
                <StyledRow className="mt-3">
                    <Col md={12}>
                        <P1 weight="600" size="19.1339px" lineHeight="27px"> Add vendor information (optional) </P1>
                        <StyledTextArea className="mt-2" placeholder="xyz name" />
                    </Col>
                </StyledRow>
            </StyledForm>
        </FormBox>
    </Container>
  )
}

export default addProductInput;

const Container = styled.div`
    width: 100vw;
    height: auto;
    background-color: #8BC34A33;
    padding: 0px;
    margin: 0px;
    overflow: auto;
`;

const FormBox = styled.div`
    width: 80vw;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
    margin-bottom: 5rem;
    padding-bottom: 5rem;
    background-color: #FFFFFF;
    overflow: auto;
`;

const PageName = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    color: #616161;
    margin-top: 5rem;
    margin-left: 3rem;
`;

const PageTitle = styled.div`
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 43px;
    color: #000000;
    margin-top: 0.5rem;
    margin-left: 3rem;
`;

const StyledForm = styled(Form)`
    overflow: hidden;
`;

const StyledRow = styled(Row)`
    margin-left: 2.3rem;
    margin-right: 10rem;
`;

const StyledCol = styled(Col)`
`;

const StyledTextArea = styled.textarea`
    width: 100%;
    margin-right: 10%;
    background-color: #8BC34A33;
    border: 0px;
    resize: none;
    height: 8rem;
`;