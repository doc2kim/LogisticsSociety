import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png"
import logo_title from "../assets/logo_title.png"
import logo_text from "../assets/logo_eng_title.png"
import mobile_logo from "../assets/mobile_logo.png"
import mobile_title from "../assets/mobile_title.png"
import mobile_eng_title from "../assets/mobile_eng_title.png"
import footer_logo from "../assets/footer_logo.png"
import footer_title from "../assets/footer_title.png"
import footer_eng_title from "../assets/footer_eng_title.png"

const HeaderLogoBox = styled.div`
    display: flex;
    align-items: center;
`;

const HeaderLogoImg = styled.img`
    width: 40px;
    @media only screen and (max-width: 768px) {
        width: 30px;
    }
`;
const LogoContentImg = styled.img`
    display: block;
`;

const HeaderLogoText = styled(LogoContentImg)`
    padding-left: 3px;
    @media only screen and (max-width: 768px) {
        padding-left:1px;
    }
`;


const HeaderLogoTitle = styled(LogoContentImg)`
`;

const HeaderLogoContentBox = styled.div`
    padding-left:6px;
`;
export const HeaderLogo = function () {
    return (
        <HeaderLogoBox>
            <picture>
                <source srcset={`${mobile_logo}`} media="(max-width: 768px)" />
                <HeaderLogoImg src={logo} />
            </picture>
            <HeaderLogoContentBox>
                <picture>
                    <source srcset={`${mobile_title}`} media="(max-width: 768px)" />
                    <HeaderLogoTitle src={logo_title} />
                </picture>
                <picture>
                    <source srcset={`${mobile_eng_title}`} media="(max-width: 768px)" />
                    <HeaderLogoText src={logo_text} />
                </picture>
            </HeaderLogoContentBox>
        </HeaderLogoBox>
    )
}

const FooterLogoBox = styled.div`
    display: flex;
    align-items: center;
    filter: invert(100%) sepia(37%) saturate(4%) hue-rotate(128deg) brightness(112%) contrast(84%);
    @media only screen and (max-width: 768px) {
        filter: none;
    }
`;

const FooterLogoImg = styled.img`
    width: 35px;
`;

const FooterTitleBox = styled.div`
    padding-left: 7px;
`;

const FooterTitleImg = styled(LogoContentImg)`
`;

const FooterEngTitle = styled(LogoContentImg)`
`;

export const FooterLogo = function () {
    return (
        <FooterLogoBox>
            <FooterLogoImg src={footer_logo} />
            <FooterTitleBox>
                <FooterTitleImg src={footer_title} />
                <FooterEngTitle src={footer_eng_title} />
            </FooterTitleBox>
        </FooterLogoBox>

    )
}
