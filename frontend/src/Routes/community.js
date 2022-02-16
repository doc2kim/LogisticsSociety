import React from "react";
import styled from "styled-components";
import SubTitle from "../Components/SubTitle";
import Notice from "../Components/Community/Notice";
import News from "../Components/Community/News";
import { useLocation } from "react-router-dom";


const Container = styled.div`
    margin: 0 20%;
    padding-top:7em;
    @media only screen and (max-width: 768px) {
        margin: 0 3%;
        padding-top:3.5em;
    }
`;

const Community = function () {
    const { pathname } = useLocation()
    return <Container>
        <SubTitle />
        {pathname.includes('notice') ? <Notice /> :
            pathname.includes('news') && <News />
        }
    </Container>
}

export default Community;