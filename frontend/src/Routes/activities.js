import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import SubTitle from "../Components/SubTitle";
import Activity from "../Components/Active/Activity"
import Conference from "../Components/Active/Conference"
import Icasl from "../Components/Active/Icasl"
import AcademicAward from "../Components/Active/AcademicAward"
import CulturalAward from "../Components/Active/CulturalAward"
import ManagementAward from "../Components/Active/ManagementAward"
import BusinessAward from "../Components/Active/BusinessAward"
import JournalPublication from "../Components/Active/JournalPublication"
import SymposiumOperation from "../Components/Active/SymposiumOperation"

const Container = styled.div`
    width:100%;
    padding-top:6.3em;
    @media only screen and (max-width: 768px) {
        padding-top:3.5em;
    }
`;

const Active = function () {
    const { pathname } = useLocation()
    return <Container>
        <SubTitle />
        {pathname.includes('activity') ? <Activity /> :
            pathname.includes('conference') ? <Conference /> :
                pathname.includes('icasl') ? <Icasl /> :
                    pathname.includes('academic-award') ? <AcademicAward /> :
                        pathname.includes('cultural-award') ? <CulturalAward /> :
                            pathname.includes('management-award') ? <ManagementAward /> :
                                pathname.includes('business-award') ? <BusinessAward /> :
                                    pathname.includes('journal-publication') ? <JournalPublication /> :
                                        pathname.includes('symposium-operation') && <SymposiumOperation />
        }
    </Container>
}


export default Active;