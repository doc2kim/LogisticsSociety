import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import SubTitle from "../Components/SubTitle";
import ThesisSubMissionGuide from "../Components/Thesis/ThesisSubMissionGuide"
import ThesisWriting from "../Components/Thesis/ThesisWriting"
import ThesisReview from "../Components/Thesis/ThesisReview"
import Ethics from "../Components/Thesis/Ethics"

const Container = styled.div`
    margin: 0 20%;
    padding-top:7.7em;
    @media only screen and (max-width: 768px) {
        margin: 0 3%;
        padding-top:3.5em;
    }
`;

const ThesisSubMission = function () {
    const { pathname } = useLocation()
    return <Container>
        <SubTitle />
        {pathname.includes('thesis-submission-guide') ? <ThesisSubMissionGuide /> :
            pathname.includes('thesis-writing') ? <ThesisWriting /> :
                pathname.includes('thesis-review') ? <ThesisReview /> :
                    pathname.includes('code-of-ethics') ? <Ethics /> : null}
    </Container>
}

export default ThesisSubMission;