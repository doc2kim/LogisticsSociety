import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from 'react-router-dom';
import SubTitle from "../SubTitle";


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
    display: flex;
    flex-direction: column;
    align-items: center;
        line-height: 1.7em;
        padding: 1em 0;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
    `;

const Title = styled.div`
    display: flex;
    font-size: 1.5em;
    @media only screen and (max-width: 768px) {
        font-size: 1.2em;
    }
`;

const Poster = styled.div`

`;

const PosterImage = styled.img`
    width: 600px;
    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;

const InfoBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 1.7em;
    padding: 1em 0;
    border-bottom: 1px solid rgba(0, 0, 0, .5);
    font-size: 0.8em;
    @media only screen and (max-width: 768px) {
        display:block;      
    }
`;

const Info = styled.div`
    width: 49% ;
    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;

const Date = styled.div`
    opacity: 0.6;
`;

const Place = styled.div`
    opacity: 0.6;
`;

const ContentBox = styled.div`
    padding-bottom: 5% ;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
`;

const Section = styled.div`
    width: ${props => { return props.property ? '24.3333%' : '32.3333%' }};
    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;

const SessionBox = styled.div`
    width: 100%;
    line-height: 1.7em;
    
`;
const FlexBox = styled.div`
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
        display: block;
    }
`;

const SessionTitle = styled.div`
    font-size: 1.3em;
    padding: 0.8em 0;
    border-bottom: 3px solid rgba(0, 0, 0, .1);
`;

const Topic = styled.div`
    font-size: 0.7em;
    opacity: 0.8;
`;

const Chair = styled.li`
    font-size: 0.6em;
    opacity: 0.8;
    list-style: inside;
`;

const Keynote = styled.div`
    padding:1em 0;
    border-bottom: 1px solid rgba(0, 0, 0, .5);
`;

const PaperLists = styled.ul`
    padding:0.7em 0;
    ${({ borderControl }) => {
        return borderControl ?
            'border-bottom: 1px solid rgba(0, 0, 0, .5)' : 'border-bottom: 1px dashed rgba(0, 0, 0, .3)';
    }}
    
`;

const PaperTitle = styled.div`
`;

const PaperInfo = styled.div`
 
`;

const Author = styled.li`
    list-style: inside;
    font-size: 0.8em;
    opacity: 0.6;
`;

const Name = styled.span`
    padding-right: 0.6em;
`;

const Back = styled.div`
    background-color:#165fa3;
    cursor: pointer;
    padding: 1em;
    color: white;
    border-radius: 0.5em;
`;

const BackToConference = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    padding: 2em;
    
    @media only screen and (max-width: 280px) {
        font-size: 0.8em;
    }
`;


const IcaslDetail = function () {
    const property = useLocation();
    const navigate = useNavigate()
    const data = property.state.data;
    return data && <Container>
        <SubTitle title={`${data.ordinal} - ${data.schedule.substr(0, 4)} ${data.city} / ${data.country}`} />
        <Container2>
            <Box>
                <TitleBox>
                    {/* <Title>
                        {data.ordinal} - {data.schedule.substr(0, 4)} {data.city} / {data.country}
                    </Title> */}
                    <Poster>
                        <PosterImage src={data.post_image} />
                    </Poster>
                </TitleBox>
                <InfoBox>
                    <Info>
                        <Date>
                            Date : {data.schedule}
                        </Date>
                        <Place>
                            Venue : {data.place}
                        </Place>
                    </Info>
                </InfoBox>
                <ContentBox>
                    {data.keynote ? <SessionBox>
                        <SessionTitle>Keynote Speech</SessionTitle>
                        <Keynote>
                            <PaperTitle>{data.keynote.keynote_title}</PaperTitle>
                            <PaperInfo>
                                <Author>
                                    <Name>{data.keynote.presenter.name}</Name>
                                </Author>
                            </PaperInfo>
                        </Keynote>
                    </SessionBox> : null}
                    <FlexBox>
                        {console.log(data.session4)}
                        <Section property={data.session4}>
                            <SessionBox>
                                <SessionTitle>Session1
                                    <Topic>{data.session1.session_title}</Topic>
                                    <Chair>{data.session1.chair.name}</Chair>
                                </SessionTitle>
                                {data.session1.paper.map(function (i, index) {
                                    return <PaperLists borderControl={data.session1.paper.length === index + 1 ? 1 : undefined} key={i.id}>
                                        <PaperTitle>{i.title}</PaperTitle>
                                        <PaperInfo>
                                            {i.author.map(function (j) {
                                                return <Author key={j.id}>
                                                    <Name>{j.name}</Name>
                                                </Author>
                                            })}
                                        </PaperInfo>
                                    </PaperLists>
                                })}
                            </SessionBox>
                        </Section>
                        <Section property={data.session4} >
                            <SessionBox>
                                <SessionTitle>Session2
                                    <Topic>{data.session2.session_title}</Topic>
                                    <Chair>{data.session2.chair.name}</Chair>
                                </SessionTitle>
                                {data.session2.paper.map(function (i, index) {
                                    return <PaperLists borderControl={data.session2.paper.length === index + 1 ? 1 : undefined} key={i.id}>
                                        <PaperTitle>{i.title}</PaperTitle>
                                        <PaperInfo>
                                            {i.author.map(function (j) {
                                                return <Author key={j.id}>
                                                    <Name>{j.name}</Name>
                                                </Author>
                                            })}
                                        </PaperInfo>
                                    </PaperLists>
                                })}
                            </SessionBox>
                        </Section>
                        <Section property={data.session4}>
                            <SessionBox>
                                <SessionTitle>Session3
                                    <Topic>{data.session3.session_title}</Topic>
                                    <Chair>{data.session3.chair.name}</Chair>
                                </SessionTitle>
                                {data.session3.paper.map(function (i, index) {
                                    return <PaperLists borderControl={data.session3.paper.length === index + 1 ? 1 : undefined} key={i.id}>
                                        <PaperTitle>{i.title}</PaperTitle>
                                        <PaperInfo>
                                            {i.author.map(function (j) {
                                                return <Author key={j.id}>
                                                    <Name>{j.name}</Name>
                                                </Author>
                                            })}
                                        </PaperInfo>
                                    </PaperLists>
                                })}
                            </SessionBox>
                        </Section>
                        {data.session4 ? <Section property={data.session4}>
                            <SessionBox>
                                <SessionTitle>Session4
                                    <Topic>{data.session4.session_title}</Topic>
                                    <Chair>{data.session4.chair.name}</Chair>
                                </SessionTitle>
                                {data.session4.paper.map(function (i, index) {
                                    return <PaperLists borderControl={data.session4.paper.length === index + 1 ? 1 : undefined} key={i.id}>
                                        <PaperTitle>{i.title}</PaperTitle>
                                        <PaperInfo>
                                            {i.author.map(function (j) {
                                                return <Author key={j.id}>
                                                    <Name>{j.name}</Name>
                                                </Author>
                                            })}
                                        </PaperInfo>
                                    </PaperLists>
                                })}
                            </SessionBox>
                        </Section> : null}
                    </FlexBox>
                    <BackToConference>
                        <Back onClick={() => navigate("/active/icasl/")}>목록으로</Back>
                    </BackToConference>
                </ContentBox>
            </Box>
        </Container2>
    </Container>
}
export default IcaslDetail;