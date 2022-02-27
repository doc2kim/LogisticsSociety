import React from "react";
import styled from "styled-components";
import copyright_logo from "../assets/학회_logo.png";
import Slider from "./Slider";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 3vw;
    z-index:2;
    @media only screen and (max-width: 768px) {
        background-color:rgb(63, 66, 73);
        align-items:center;
        padding: 0;
    }
    `;

const ContentBox = styled.div`
    margin: 0 20%;
    padding: 1vw 0;
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
    width:30%;
    opacity:0.4;
    @media only screen and (max-width: 1070px) {
        width:auto;
    }
    @media only screen and (max-width: 768px) {
        justify-content:center;
        padding-top:10px;
    }
`;

const Logo = styled.img`
    filter: invert(77%) sepia(66%) saturate(2%) hue-rotate(332deg) brightness(86%) contrast(89%);
    width:35px;
    position:absolute;
    @media only screen and (max-width: 768px) {
        filter: none;
        left:0;
    }
`;

const Texts = styled.div`
    display: flex;
    flex-direction: column;
    margin-left:7px;
    align-items: center;
    padding-top:1.5%;
    @media only screen and (max-width: 768px) {
        color: #bbbbbb;
    }
`;

const Title = styled.span`
    font-size:20px;
    font-weight: 700;
    text-align: start;
    @media only screen and (max-width: 768px) {
        color: white;
    }
`;

const Content = styled.span`
    font-size: 0.6em;
    font-weight: 700;
    text-align: center;
    -webkit-transform:scale(0.65);
`;

const ContentInfo = styled.div`
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
    margin-right:2%;
    font-size: 0.6vw;
    @media only screen and (max-width: 768px) {
        font-size:0.7em;
        color: #bbbbbb;
    }
`;



const Footer = () => {
    return (
        <Container>
            <Slider />
            <ContentBox>
                <LogoBox>
                    <Logo src={copyright_logo} />
                    <Texts>
                        <Title>한국해운물류학회</Title>
                        <Content>The Korea association of shipping and logistics</Content>
                    </Texts>
                </LogoBox>
                <ContentInfo>
                    <TextBox>
                        <ContentText>개인정보취급방침</ContentText><ContentText>이메일무단수집거부</ContentText> <ContentText>개인정보관리책임자:관리자</ContentText>
                    </TextBox>
                    <TextBox>
                        <ContentText>서울시 종로구 세종대로 23길 54 세종빌딩 10층</ContentText> <ContentText>E-mail:master@shipping.or.kr</ContentText>
                    </TextBox>
                    <TextBox>
                        <CopyRight>copyright © The Korean Association of Shipping and Logistics, Inc. All rights reserved.</CopyRight>
                    </TextBox>
                </ContentInfo>
            </ContentBox >
        </Container >

    )
}
export default Footer;