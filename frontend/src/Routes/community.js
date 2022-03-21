import React from "react";
import styled from "styled-components";
import SubTitle from "../Components/SubTitle";
import Notice from "../Components/Community/Notice";
import News from "../Components/Community/News";
import { useLocation } from "react-router-dom";


const Container = styled.div`
    width:100%;
    padding-top:6.3em;
    @media only screen and (max-width: 768px) {
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