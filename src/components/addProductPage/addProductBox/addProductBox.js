import React, {useRef} from 'react'

import { Col, Form, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { P1 } from '../../../util/StyledComponent/premadeComponent';
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
                <StyledRow className="mt-3">
                    <Col md={3}>
                        <P1 weight="600" size="19.1339px" lineHeight="27px"> Upload Product Images </P1>
                        <StyledLabel for="files" className="mt-2"> 
                            CHOOSE FILE 
                        </StyledLabel>
                        <StyledInput id="files" type="file" accept="image/*" multiple/>
                    </Col>
                    <Col md={3}>
                            <UploadInfo> 1 Image Uploaded </UploadInfo>
                    </Col>
                </StyledRow>
                <StyledRow className="mt-3">
                    <Col md={12}>
                        <StyledTextArea className="mt-2" placeholder="upload image here" />
                    </Col>
                </StyledRow>
                <StyledRow className="mt-3 justify-content-md-center">
                    <Col md={3}>
                        <StyledButtonWhite className="mt-2 outline" type="button"> DISCARD CHANGES </StyledButtonWhite>
                    </Col>
                    <Col md={3}>
                        <StyledButton className="mt-2" type="button"> SAVE CHANGES </StyledButton>
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
    overflow: hidden;
`;

const FormBox = styled.div`
    width: 80vw;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding-bottom: 3rem;
    background-color: #FFFFFF;
    overflow: hidden;
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
    overflow: hidden;
`;

const StyledTextArea = styled.textarea`
    width: 100%;
    margin-right: 10%;
    background-color: #8BC34A33;
    border: 0px;
    resize: none;
    height: 8rem;
    overflow: hidden;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
`;

const StyledInput = styled.input`
    display: none;
`;

const StyledButton = styled.button`
    background-color: #8BC34A;
    border-radius: 4px;
    border: 1px;
    width: 100%;
    height: 2.4rem;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 550;
    font-size: 17.6175px;
    line-height: 21px;
`;

const StyledLabel= styled.label`
    background-color: #8BC34A;
    border-radius: 4px;
    border: 1px;
    width: 100%;
    height: 2.4rem;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 550;
    font-size: 17.6175px;
    line-height: 21px;
    padding-top: 0.5rem;
    text-align: center;
`;

const UploadInfo = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 19.1339px;
    line-height: 27px;
    color: #616161;
    margin-top: 2.3rem;
`;

const StyledButtonWhite = styled.button`
    background-color: #FFFFFF;
    border-radius: 4px;
    border-color: #8BC34A;
    border: 2px solid;
    width: 100%;
    height: 2.4rem;
    color: #8BC34A;
    font-style: normal;
    font-weight: 550;
    font-size: 17.6175px;
    line-height: 21px;
`;