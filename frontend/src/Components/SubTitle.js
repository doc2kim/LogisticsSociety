import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import navigate from "./Navigate";
import home_icon from "../assets/home_icon.png"


const Container = styled.div`
    display:flex;
    justify-content: center;
`;
const Box = styled.div`
    width: 1130px;
    margin: 0 3%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
`;

const TitleBox = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em 0;
    border-bottom: 1px solid rgba(0, 0, 0, .5);
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const Title = styled.h1`
    font-size: 1.5em;
    width: 40%;
    @media only screen and (max-width: 768px) {
        text-align: center;
        font-size: 1.5em;
        padding: 0.5em 0;
    }
`;

const Icon = styled(Link)`
`;

const PathRoute = styled.div`
    font-size: 0.8em;
    line-height:1.5em;
    @media only screen and (max-width: 768px) {
        line-height: 2em;
        padding: 0.5em;
    }
`;

const HomeIcon = styled.img`
`;

const SubTitle = function ({ title }) {
    const { pathname } = useLocation();
    console.log(title)
    return (
        <Container>
            <Box>
                {navigate.map(function (i) {
                    return i.subNav.map(function (j) {
                        return pathname.includes(i.path + j.subPath) && (
                            <TitleBox key={j.id}>
                                <Title>{j.subTitle}</Title>
                                <PathRoute><Icon to="/"><HomeIcon src={home_icon} /></Icon> &ensp;&gt;&ensp; {i.title} &ensp;&gt;&ensp;
                                    {title ? <>
                                        <Link to={i.path + j.subPath}>{j.subTitle}</Link> &ensp;&gt;&ensp; <span style={{ color: 'rgb(18, 95, 163)' }}>{title}</span></> :
                                        <span style={{ color: 'rgb(18, 95, 163)' }}>{j.subTitle}</span>}</PathRoute>
                            </TitleBox>
                        )
                    })
                })}
            </Box>
        </Container>
    )
}
export default SubTitle;
