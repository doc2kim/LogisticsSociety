import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import SubTitle from "../Components/SubTitle";
import SignUpInfo from "../Components/SignUpInfo";

const Container = styled.div`
    width:100%;
    padding-top:6.3em;
    @media only screen and (max-width: 768px) {
        padding-top:3.5em;
    }
`;

const SignUpInformation = function () {
    const { pathname } = useLocation()
    return <Container>
        <SubTitle />
        {pathname.includes('sign-up-information') && <SignUpInfo />}
    </Container>
}


export default SignUpInformation;