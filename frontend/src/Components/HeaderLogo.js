import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png"
import logo_title from "../assets/logo_title.png"
import logo_text from "../assets/logo_text.png"
import mobile_logo from "../assets/mobile_logo.png"
import mobile_title from "../assets/mobile_title.png"
import mobile_text from "../assets/mobile_text.png"

const LogoBox = styled.div`
    display: flex;
    align-items: center;
  
`;

const LogoImg = styled.img`
    width: 45px;
`;

const LogoContentImg = styled.img`
    display:block;
`;

const LogoText = styled(LogoContentImg)`
    padding-left: 3px;
`;

const LogoTitle = styled(LogoContentImg)`
`;

const LogoContentBox = styled.div`
    padding-left:6px;
`;
const Logo = function () {
    return (
        <LogoBox>
            <picture>
                <source srcset={`${mobile_logo}`} media="(max-width: 768px)" />
                <LogoImg src={logo} />
            </picture>
            <LogoContentBox>
                <picture>
                    <source srcset={`${mobile_title}`} media="(max-width: 768px)" />
                    <LogoTitle src={logo_title} />
                </picture>
                <picture>
                    <source srcset={`${mobile_text}`} media="(max-width: 768px)" />
                    <LogoText src={logo_text} />
                </picture>
            </LogoContentBox>
        </LogoBox>
    )


}


export default Logo;