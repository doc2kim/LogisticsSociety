import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import SubTitle from "../Components/SubTitle";
import Committee from "../Components/Academic/Committee"
import SubCommittee from "../Components/Academic/SubCommittee"
import Rule from "../Components/Academic/Rule"


const Container = styled.div`
    margin: 0 20%;
    padding-top:7.7em;
    @media only screen and (max-width: 768px) {
        margin: 0 3%;
        padding-top:3.5em;
    }
`;

const Academic = function () {
    const { pathname } = useLocation()
    return <Container>
        <SubTitle />
        {pathname.includes('/committee') ? <Committee /> :
            pathname.includes('subcommittee') ? <SubCommittee /> :
                pathname.includes('rule') && <Rule />}
    </Container>
}


export default Academic;