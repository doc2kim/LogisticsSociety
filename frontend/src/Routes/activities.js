import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import SubTitle from "../Components/SubTitle";
import Activity from "../Components/Active/Activity"
import AcademicAward from "../Components/Active/AcademicAward"
import CulturalAward from "../Components/Active/CulturalAward"
import ManagementAward from "../Components/Active/ManagementAward"
import BusinessAward from "../Components/Active/BusinessAward"

const Container = styled.div`
    margin: 0 20%;
    padding-top:7.7em;
    @media only screen and (max-width: 768px) {
        margin: 0 3%;
        padding-top:3.5em;
    }
`;

const Active = function () {
    const { pathname } = useLocation()
    return <Container>
        <SubTitle />
        {pathname.includes('activity') ? <Activity /> :
            pathname.includes('academic-award') ? <AcademicAward /> :
                pathname.includes('cultural-award') ? <CulturalAward /> :
                    pathname.includes('management-award') ? <ManagementAward /> :
                        pathname.includes('business-award') && <BusinessAward />}
    </Container>
}


export default Active;