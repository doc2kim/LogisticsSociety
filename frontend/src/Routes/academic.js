import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import SubTitle from "../Components/SubTitle";
import Committee from "../Components/Academic/Committee"
import SubCommittee from "../Components/Academic/SubCommittee"
import Rule from "../Components/Academic/Rule"
import ThesisSearch from "../Components/Academic/Thesis/ThesisSearch"


const Container = styled.div`
    width:100%;
    padding-top:6.3em;
    @media only screen and (max-width: 768px) {
        padding-top:3.5em;
    }
`;

const Academic = function () {
    const { pathname } = useLocation()
    return <Container>
        <SubTitle />
        {pathname.includes('/committee') ? <Committee /> :
            pathname.includes('subcommittee') ? <SubCommittee /> :
                pathname.includes('rule') ? <Rule /> :
                    pathname.includes('thesis-search') && <ThesisSearch />
        }
    </Container>
}


export default Academic;