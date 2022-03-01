import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Container = styled.div`
    margin: 0 20%;
    padding-top:7.7em;
    @media only screen and (max-width: 768px) {
        margin: 0 3%;
        padding-top:3.5em;
    }
`;

const TitleBox = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 2% 0;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
`;

const Title = styled.h1`
    font-size: xx-large;
`;

const Icon = styled(Link)`
    filter: grayscale(100%);  
`;

const Maps = styled.div`
    margin-top:2%;
    margin-bottom:5%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: large;
`;
const MapNavLists = styled.div`
    display: grid;
    grid-template-columns: 60% 60% 60%;
    justify-content: center;
    text-align: center;
    row-gap: 10%;
	column-gap: 20%;
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
        <TitleBox>
            <Title>사이트맵</Title>
            <div><Icon to="/">🏠 </Icon> &gt; <span style={{ color: 'rgb(18, 95, 163)' }}>사이트맵</span></div>
        </TitleBox>
        <Maps>
            <MapNavLists>{navigate.map(function (i) {
                return <MapLists key={i.index} selected={pathname === ` ${i.path}`}>
                    <MapList key={i.index} style={{ borderTop: '3px solid #16498b', backgroundColor: 'rgba(0, 0, 0, .05)' }}>{i.title}</MapList>
                    {i.subNav.map(function (j) {
                        return j.subPath ?
                            <MapList key={j.id} style={{ opacity: '0.6' }}><Link to={`${i.path + j.subPath}`}>{j.subTitle}</Link></MapList> :
                            <MapList key={j.id} style={{ opacity: '0.6' }}><Alink target="_blank" href={j.url}>{j.subTitle}</Alink></MapList>
                    })}
                </MapLists>;
            })}</MapNavLists>
        </Maps>

    </Container >
}

export default SiteMap;