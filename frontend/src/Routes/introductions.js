import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import SubTitle from "../Components/SubTitle";
import OverView from "../Components/Intro/OverView";
import Greeting from "../Components/Intro/Greeting";
import History from "../Components/Intro/History";
import CurrentExecutives from "../Components/Intro/CurrentExecutives";
import PastExecutives from "../Components/Intro/PastExecutives";
import Articles from "../Components/Intro/Articles";

const Container = styled.div`
    margin: 0 20%;
    padding-top:7.7em;
    @media only screen and (max-width: 768px) {
        margin: 0 3%;
        padding-top:3.5em;
    }
`;

const Intro = function () {
    const { pathname } = useLocation()
    return (
        <Container>
            <SubTitle />
            {pathname.includes('outline') ? <OverView /> :
                pathname.includes('greeting') ? <Greeting /> :
                    pathname.includes('history') ? <History /> :
                        pathname.includes('current-executives') ? <CurrentExecutives /> :
                            pathname.includes('past-executives') ? <PastExecutives /> :
                                pathname.includes('articles') && <Articles />}
            {/* 위 null 자리에 에러페이지 만들어 넣자 */}
        </Container>
    )
}


export default Intro;