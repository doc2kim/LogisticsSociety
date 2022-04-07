import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from 'react-router-dom';
import download from "../../assets/download.png"
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

const Topic = styled.div`
    font-size: 1.5em;
    @media only screen and (max-width: 768px) {
        font-size: 1.2em;
    }
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
    font-size: 1em;
`;

const Season = styled.div`
    padding: 0 0.3em;
`;

const Year = styled.div`
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

const Image = styled.div`
    width: 49% ;
    text-align: center;
    @media only screen and (max-width: 768px) {
        padding-top:3%;
        width: 100%;
    }
`;

const Img = styled.img`
    width: 17% ;
    padding: 0 1%;
`;

const Date = styled.div`
    opacity: 0.6;
`;

const Place = styled.div`
    opacity: 0.6;
`;

const Host = styled.div`
    opacity: 0.6;
`;

const Support = styled.div`
    opacity: 0.6;
`;

const ContentBox = styled.div`
padding-bottom: 5% ;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
`;

const Section = styled.div`
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
        display: block;
    }
`;

const SessionBox = styled.div`
    width: 49%;
    line-height: 1.7em;
    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;

const SessionTitle = styled.div`
    font-size: 1.3em;
    padding: 0.8em 0;
    border-bottom: 3px solid rgba(0, 0, 0, .1);
`;

const PaperLists = styled.ul`
    padding:0.7em 0;
    ${({ borderControl }) => {
        return borderControl ?
            'border-bottom: 1px solid rgba(0, 0, 0, .5)' : 'border-bottom: 1px dashed rgba(0, 0, 0, .3)';
    }}
    
`;

const PaperTitle = styled.div`
    width: 80%;
`;

const PaperInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
`;

const Author = styled.li`
    list-style: inside;
    font-size: 0.8em;
    opacity: 0.6;
`;

const Name = styled.span`
    padding-right: 0.6em;
`;

const Affiliated = styled.span`
`;

const Award = styled.span`
font-size: 0.7em;
${({ normalAward }) => {
        return normalAward === 1 ? '::after {content: "최우수논문상"; color:red;}' :
            normalAward === 2 && '::after {content: "우수논문상"; color:blue;}'
    }}
${({ competeAward }) => {
        return competeAward === 1 ? '::after {content: "최우수상"; color:red;}' :
            competeAward === 2 ? '::after {content: "우수상";  color:blue;}' :
                competeAward === 3 && '::after {content: "장려상"}'
    }}
`;

const PaperBox = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
`;

const Download = styled.a`
    font-size:1.5em;
`;

const DownloadIcon = styled.img`
    width: 30px;
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



const ConferenceDetail = function () {
    const property = useLocation();
    const navigate = useNavigate()
    const data = property.state.data;
    console.log(data.compete)
    return data && <Container>
        <SubTitle title={`${data.schedule.substr(0, 4)}년도 
            ${data.season === "spring" ? "춘계" :
                data.season === "summer" ? "하계" :
                    data.season === "autumn" ? "추계" :
                        data.season === "winter" && "동계"} 정기학술대회`} />
        <Container2>
            <Box>
                <TitleBox>
                    <Title>
                        <Year>{data.schedule.substr(0, 4)}년도</Year>
                        <Season>
                            {data.season === "spring" ? "춘계" :
                                data.season === "summer" ? "하계" :
                                    data.season === "autumn" ? "추계" :
                                        data.season === "winter" && "동계"}
                        </Season>
                        정기학술대회
                    </Title>
                    <Topic>{data.topic}</Topic>
                </TitleBox>
                <InfoBox>
                    <Info>
                        <Date>
                            개최일: {data.schedule}
                        </Date>
                        <Place>
                            장소: {data.place}
                        </Place>
                        <Host>
                            주최: (사)한국해운물류학회
                        </Host>
                        <Support>
                            후원: {data.joint}
                        </Support>
                    </Info>
                    <Image>
                        {data.image.map(function (i, index) {
                            return index < 10 && <a href={i.image} rel="noopener noreferrer" key={index} target="_blank"><Img src={i.image}></Img></a>
                        })}
                    </Image>
                </InfoBox>
                <ContentBox>
                    <Section>
                        <SessionBox>
                            <SessionTitle>Keynote Speech</SessionTitle>
                            {data.keynote.map(function (i, index) {
                                return <PaperLists borderControl={data.keynote.length === index + 1 ? 1 : undefined} key={i.id}>
                                    <PaperTitle>{i.title}</PaperTitle>
                                    <PaperInfo>
                                        <div>
                                            <Author>
                                                <Name>{i.presenter.name}</Name>
                                                <Affiliated>{i.presenter.affiliated}</Affiliated>
                                            </Author>
                                            {i.co_author.map(function (j) {
                                                return <Author key={j.id}>
                                                    <Name>{j.name}</Name>
                                                    <Affiliated>{j.affiliated}</Affiliated>
                                                </Author>
                                            })}
                                        </div>
                                        <Download href={i.presentation} target="_blank"><DownloadIcon src={download} /></Download>
                                    </PaperInfo>
                                </PaperLists>
                            })}
                            <SessionTitle>일반 세션</SessionTitle>
                            {data.normal.sort((a, b) => (a.award === "outstand") - (b.award === "outstand") || a - b).sort((a, b) => (a.award === null) - (b.award === null) || a - b).map(function (i, index) {
                                return <PaperLists borderControl={data.normal.length === index + 1 ? 1 : undefined} key={i.id}>
                                    <PaperBox>
                                        <PaperTitle>{i.title}</PaperTitle>
                                        {i.award && <Award normalAward={i.award === "best" ? 1 : i.award === "outstand" && 2}></Award>}
                                    </PaperBox>
                                    <PaperInfo>
                                        <div>
                                            <Author>
                                                <Name>{i.presenter.name}</Name>
                                                <Affiliated>{i.presenter.affiliated}</Affiliated>
                                            </Author>
                                            {i.co_author.map(function (j) {
                                                return <Author key={j.id}>
                                                    <Name>{j.name}</Name>
                                                    <Affiliated>{j.affiliated}</Affiliated>
                                                </Author>
                                            })}
                                            {i.advisor && <Author>
                                                <Name>{i.advisor.name}</Name>
                                                <Affiliated>{i.advisor.affiliated}</Affiliated>
                                            </Author>
                                            }
                                        </div>
                                        <Download href={i.presentation} target="_blank"><DownloadIcon src={download} /></Download>
                                    </PaperInfo>
                                </PaperLists>
                            })}
                        </SessionBox>
                        <SessionBox>
                            <SessionTitle>대학(원)생 세션</SessionTitle>
                            {data.compete.sort((a, b) => (a.award === "outstand") - (b.award === "outstand") || a - b).sort((a, b) => (a.award === "Encourage") - (b.award === "Encourage") || a - b)
                                .map(function (i, index) {
                                    return <PaperLists borderControl={data.compete.length === index + 1 ? 1 : undefined} key={i.id}>
                                        <PaperBox>
                                            <PaperTitle>{i.title}</PaperTitle>
                                            {i.award && <Award competeAward={i.award === "best" ? 1 : i.award === "outstand" ? 2 : i.award === "Encourage" && 3}></Award>}
                                        </PaperBox>
                                        <PaperInfo>
                                            <ul>
                                                <Author>
                                                    <Name>{i.presenter.name}</Name>
                                                    <Affiliated>{i.presenter.affiliated}</Affiliated>
                                                </Author>
                                                {i.co_author.map(function (j) {
                                                    return <Author key={j.id}>
                                                        <Name>{j.name}</Name>
                                                        <Affiliated>{j.affiliated}</Affiliated>
                                                    </Author>
                                                })}
                                                {i.advisor && <Author>
                                                    <Name>{i.advisor.name}</Name>
                                                    <Affiliated>{i.advisor.affiliated}</Affiliated>
                                                </Author>
                                                }
                                            </ul>
                                            <Download href={i.presentation} target="_blank"><DownloadIcon src={download} /></Download>
                                        </PaperInfo>
                                    </PaperLists>
                                })}
                        </SessionBox>
                    </Section>
                    <BackToConference>
                        <Back onClick={() => navigate("/active/conference/")}>목록으로</Back>
                    </BackToConference>
                </ContentBox>
            </Box>
        </Container2>
    </Container>
}

export default ConferenceDetail;