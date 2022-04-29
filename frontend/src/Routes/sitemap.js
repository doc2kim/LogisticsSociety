import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Container = styled.div`
    width:100%;
    padding-top:6.3em;
    @media only screen and (max-width: 768px) {
        padding-top:3.5em;
    }
`;

const Container2 = styled.div`
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


const TitleBox = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em 0;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const Title = styled.h1`
    font-size: 1.5em;
    @media only screen and (max-width: 768px) {
        padding: 0.5em 0;
    }
`;

const Icon = styled(Link)`
    filter: grayscale(100%);  
`;

const PathRoute = styled.div`
    font-size: 0.8em;
    @media only screen and (max-width: 768px) {
        line-height: 2em;
        padding: 0.5em;
    }
`;

const Maps = styled.div`
    margin-top:2%;
    margin-bottom:5%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: large;
    @media only screen and (max-width: 768px) {
        font-size:1em;
        padding-bottom:5em;
    }
`;
const MapNavLists = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 30%);
    justify-content: center;
    text-align: center;
    row-gap: 10%;
    column-gap: 5%;
    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 45%);
        row-gap: 5%;
        column-gap: 10%;
    }
`;

const MapLists = styled.ul`
`;

const MapList = styled.li`
    border-bottom: 1px solid rgba(0, 0, 0, .3);
    border-right: 1px solid rgba(0, 0, 0, .3);
    border-left: 1px solid rgba(0, 0, 0, .3);
    padding: 3%;
`;

const Alink = styled.a`
`;


const SiteMap = function () {
    const location = useLocation()
    const navigate = location.state.navigate;
    const { pathname } = useLocation()
    return <Container>
        <Container2>
            <Box>
                <TitleBox>
                    <Title>사이트맵</Title>
                    <PathRoute><Icon to="/">🏠 </Icon> &gt; <span style={{ color: 'rgb(18, 95, 163)' }}>사이트맵</span></PathRoute>
                </TitleBox>
            </Box>
        </Container2>
        <Container2>
            <Box>
                <Maps>
                    <MapNavLists>{navigate.map(function (i) {
                        return <MapLists key={i.index} selected={pathname === ` ${i.path}`}>
                            <MapList key={i.index} style={{ borderTop: '3px solid #16498b', backgroundColor: 'rgba(0, 0, 0, .05)' }}>{i.title}</MapList>
                            {i.subNav
                                .filter((element) => {
                                    if (element.id !== 17 && element.id !== 18) {
                                        return true;
                                    }
                                    return false;
                                })
                                .map(function (j) {
                                    return j.subPath ?
                                        <MapList key={j.id} style={{ opacity: '0.6' }}><Link to={`${i.path + j.subPath}`}>{j.subTitle}</Link></MapList> :
                                        <MapList key={j.id} style={{ opacity: '0.6' }}><Alink target="_blank" href={j.url}>{j.subTitle}</Alink></MapList>
                                })}
                        </MapLists>;
                    })}</MapNavLists>
                </Maps>
            </Box>
        </Container2>
    </Container >
}

export default SiteMap;