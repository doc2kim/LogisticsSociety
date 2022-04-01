import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { icaslAxios } from "../../ApiContext/RestApi"

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

const IcaslInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 0;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
`;

const TitleBox = styled.ul`
    line-height: 1.7em;
    padding: 1em 0;
`;

const Title = styled.div`
    display: flex;
    font-size: 1.7em;
    padding-bottom:0.3em;
    @media only screen and (max-width: 768px) {
        font-size: 1.3em;
    }
    @media only screen and (max-width: 280px) {
        font-size: 0.8em;
    }
`;

const List = styled.li`
    opacity: 0.6;
    list-style: inside;
    @media only screen and (max-width: 768px) {
        font-size: 0.8em;
    }
    @media only screen and (max-width: 280px) {
        font-size: 0.6em;
    }
`;


const Icasl = function () {
    const [icaslData, setIcaslData] = useState(null);
    const icasl = async function () {
        const { data } = await icaslAxios();
        setIcaslData(data.reverse())
    }
    useEffect(function () {
        if (!icaslData) {
            icasl()
        }
    }, [])
    return icaslData && <Container>
        <Box>
            <Lists>
                {icaslData.map(function (i) {
                    return <Link key={i.id} to={`${i.id}`} state={{ data: i }}>
                        <IcaslInfo>
                            <div>
                                <Title>
                                    {i.ordinal} - {i.schedule.substr(0, 4)} {i.city} / {i.country}
                                </Title>
                                <List>
                                    Venue : {i.place}
                                </List>
                                <List>
                                    Date : {i.schedule}
                                </List>
                            </div>
                        </IcaslInfo>
                    </Link>
                })}
            </Lists>
        </Box>
    </Container >

}

export default Icasl;