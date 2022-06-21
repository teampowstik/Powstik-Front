import React from 'react'


import { Col, Form, FormLabel, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { H1, P1 } from '../../util/StyledComponent/premadeComponent';
import { Input } from '../../util/StyledComponent/input';

const addProduct = () => {
  return (
    <Container>
        <FormBox>
            <PageName> Home/Product </PageName>
            <PageTitle> Add a New Product </PageTitle>
            <Form>
                <StyledRow className="mt-5">
                    <Col>
                    <P1 weight="600" size="19.1339px" lineHeight="27px"> Enter Product name </P1>
                    <Input className="mt-2" placeholder="xyz name" />
                    </Col>
                    <Col className="col-7 mx-4">
                    <P1 weight="600" size="19.1339px" lineHeight="27px"> Vendor ID </P1>
                    <Input className="mt-2" placeholder="Vendor ID" />
                    </Col>
                </StyledRow>
                <StyledRow className="mt-3">
                    <Col>
                    <P1 weight="600" size="19.1339px" lineHeight="27px"> Enter Expected Price </P1>
                    <Input className="mt-2" placeholder="xyz name" />
                    </Col>
                    <Col className="col-7 mx-4">
                    <P1 weight="600" size="19.1339px" lineHeight="27px"> Vendor ID </P1>
                    <Input className="mt-2" placeholder="Price" />
                    </Col>
                </StyledRow>
                <StyledRow className="mt-3">
                    <Col>
                        <P1 weight="600" size="19.1339px" lineHeight="27px"> Enter Expected Price </P1>
                        <Input className="mt-2" placeholder="xyz name" width="auto"/>
                    </Col>
                </StyledRow>
            </Form>
        </FormBox>
    </Container>
  )
}

export default addProduct;

const Container = styled.div`
    width: 100vw;
    height: 80rem;
    background-color: #8BC34A33;
    padding: 0px;
    margin: 0px;
    overflow: auto;
`;

const FormBox = styled.div`
    width: 80vw;
    height: 40rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
    margin-bottom: 5rem;
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

const StyledRow = styled(Row)`
    margin-left: 2.3rem;
`;

const StyledCol = styled(Row)`
    margin: 0px;
`;