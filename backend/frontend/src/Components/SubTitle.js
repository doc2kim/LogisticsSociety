import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import navigate from "./Navigate";


const TitleBox = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 1vw 0;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const Title = styled.h1`
    font-size: 1.3vw;
    @media only screen and (max-width: 768px) {
        font-size: 1.5em;
        padding: 0.5em 0;
    }
`;

const Icon = styled(Link)`
`;

const PathRoute = styled.div`
    font-size: 0.7vw;
    @media only screen and (max-width: 768px) {
        font-size: 0.7em;
        padding-bottom: 0.5em;
    }
`;

const SubTitle = function ({ title }) {
    const { pathname } = useLocation();
    return (
        <div>
            {navigate.map(function (i) {
                return i.subNav.map(function (j) {
                    return pathname.includes(i.path + j.subPath) && (
                        <TitleBox key={j.id}>
                            <Title>{j.subTitle}</Title>
                            <PathRoute><Icon to="/">🏠</Icon> &gt; {i.title} &gt;
                                {title ? <>
                                    <Link to={i.path + j.subPath}>{j.subTitle}</Link> &gt; <span style={{ color: 'rgb(18, 95, 163)' }}>{title}</span></> :
                                    <span style={{ color: 'rgb(18, 95, 163)' }}>{j.subTitle}</span>}</PathRoute>
                        </TitleBox>
                    )
                })
            })}
        </div>
    )
}
export default SubTitle;
