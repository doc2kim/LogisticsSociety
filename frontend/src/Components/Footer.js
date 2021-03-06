import React from "react";
import styled from "styled-components";
import { FooterLogo } from "./Logo.js"
import Slider from "./Slider";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 3em;
    z-index:2;
    @media only screen and (max-width: 768px) {
        background-color:rgb(63, 66, 73);
        align-items:center;
        padding: 0;
    }
    `;

const Box = styled.div`
    width: 1130px;
    padding: 1em 0;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 1070px) {
        flex-direction: column;
    }
    @media only screen and (max-width: 768px) {
        width: 100%;
        margin: 0;
        justify-content: center;
    }
`;

const LogoBox = styled.div`
    display: flex;
    align-items: center;
    position:relative;
    opacity:0.4;
    @media only screen and (max-width: 768px) {
        justify-content:center;
        padding-top:10px;
    }
`;

// 

const ContentInfo = styled.div`
    width: 100%;
    margin-left: 3em;
    @media only screen and (max-width: 1070px) {
        margin: 0;
    }
    @media only screen and (max-width: 768px) {
        display: flex;
        padding: 0;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const TextBox = styled.div`
    @media only screen and (max-width: 1070px) {
    text-align: center; 
}
  @media only screen and (max-width: 768px) {
    width:100%;
    line-height:4vw;
  }
`;

const CopyRight = styled.span`
    opacity: 0.5;
    font-size: x-small;
    @media only screen and (max-width: 768px) {
        color:#bbbbbb;
    }
`;


const ContentText = styled.span`
    opacity: 0.5;
    margin-right:0.5em;
    font-size: 0.7em;
    @media only screen and (max-width: 768px) {
        font-size:0.7em;
        color: #bbbbbb;
    }
`;



const Footer = () => {
    return (
        <Container>
            <Slider />
            <Box>

                <LogoBox>
                    <FooterLogo />
                </LogoBox>
                <ContentInfo>
                    <TextBox>
                        <ContentText>????????? ????????? ???????????? 23??? 54 ???????????? 10???&emsp;</ContentText>

                    </TextBox>
                    <TextBox><ContentText>E-mail : master@shipping.or.kr</ContentText></TextBox>
                    <TextBox>
                        <ContentText>????????? : </ContentText>
                        <ContentText>?????? ?????????</ContentText><ContentText>010-5617-9717</ContentText>
                        <ContentText>?????? ?????????</ContentText><ContentText>010-3911-8747</ContentText>
                    </TextBox>
                    <TextBox>
                        <CopyRight>Copyright ?? The Korean Association of Shipping and Logistics, Inc. All rights reserved. </CopyRight>
                    </TextBox>
                    <TextBox>
                        <CopyRight style={{ textAlign: 'center' }}>Created by ODN.</CopyRight>
                    </TextBox>
                </ContentInfo>
            </Box >
        </Container >

    )
}
export default Footer;