import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { conferenceAxios } from "../../ApiContext/RestApi"

const Container = styled.div`
    display:flex;
    justify-content: center;
    @media only screen and (max-width: 768px) {
        margin-bottom: 5%;
    }
`;
const Box = styled.div`
    width: 1130px;
    margin: 0 3%;
`;

const Lists = styled.div`
    line-height : 2em;
`;

const ConferenceInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
`;

const Title = styled.div`
    display: flex;
    font-size: 1.2em;
    @media only screen and (max-width: 768px) {
        font-size: 1em;
    }
    @media only screen and (max-width: 280px) {
        font-size: 0.8em;
    }
`;

const Season = styled.div`
    padding: 0 0.5em;
`;

const Year = styled.div`
`;

const Topic = styled.div`
    opacity: 0.6;
    
`;

const Schedule = styled.div`
    font-size: 0.7em;
    opacity: 0.6;
`;

const CoverImg = styled.img`
    width:25%;
    padding: 1%;
    @media only screen and (max-width: 768px) {
        width: 35%;
    }
`;



const Conference = function () {
    const [conferenceData, setConferenceData] = useState(null);

    const conference = async function () {
        const { data } = await conferenceAxios();
        setConferenceData(data.reverse())
    }
    useEffect(function () {
        if (!conferenceData) {
            conference()
        }
    }, [])

    return conferenceData && <Container>
        <Box>
            <Lists>
                {conferenceData.map(function (i) {
                    return <Link key={i.id} to={`${i.id}`} state={{ data: i }}>
                        <ConferenceInfo>
                            <div>
                                <Title style={{ display: 'flex' }}>
                                    <Year>{i.schedule.substr(0, 4)}년도</Year>
                                    <Season>
                                        {i.season === "spring" ? "춘계" :
                                            i.season === "summer" ? "하계" :
                                                i.season === "autumn" ? "추계" :
                                                    i.season === "winter" && "동계"}
                                    </Season>
                                    정기학술대회
                                </Title>
                                <Topic>
                                    {i.topic}
                                </Topic>
                                <Schedule>개최일 {i.schedule}</Schedule>
                            </div>
                            <CoverImg src={i.cover_image} />
                        </ConferenceInfo>
                    </Link>
                })}
            </Lists>
        </Box>
    </Container>
}

export default Conference;