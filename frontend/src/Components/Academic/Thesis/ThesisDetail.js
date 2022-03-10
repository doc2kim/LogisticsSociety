import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SubTitle from "../../SubTitle";
import { useLocation, useNavigate } from 'react-router-dom';


const Container = styled.div`
    margin: 0 20%;
    padding-top:7.7em;
    @media only screen and (max-width: 768px) {
        margin: 0 3%;
        padding-top:3.5em;
    }
`;

const Table = styled.div`
  
`;

const TitleBox = styled.div`
    line-height: 1.7em;
    padding: 1em 0;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
`;

const Title = styled.h1`
    font-size: 1.3em;
`;

const EngTitle = styled(Title)`
    font-size:1em;
    
    `;


const InfoBox = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: end;
    line-height: 1.5em;
    padding: 1em 0;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    font-size: 0.8em;
    opacity: 0.8;
`;



const Journal = styled.h2`
`;


const Research = styled.h2`
`;


const Date = styled.div`
    
`;

const Volume = styled.div`  
`;

const Page = styled.div`
`;

const AuthorBox = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    padding: 1em 0;
    opacity: 0.8;
`;

const Author = styled.span`
    font-size: 0.8em;
`;

const AbstractBox = styled.div`
    padding: 1em 0;
    font-size: 0.8em;
    line-height: 1.7em;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    
`;

const AbstractTitle = styled.h1`
    font-size: 1.5em;
    padding-bottom:0.5em;
    
`;

const Abstract = styled.div`
    opacity: 0.8;
`;

const EngAbstract = styled(Abstract)`
    padding-top: 1em;
`;

const ShortCut = styled.div`
    display: flex;
`;

const UrlButton = styled.a`
    border: 1px solid;
    background-color: #244476;
    color: white;
    width: 3em; ;
    border-radius:0.5em;
    text-align: center;
    margin: 0 1em;
    cursor: pointer;
`;


const ThesisDetail = function () {
    const [resultsData, setResultsData] = useState(null)
    const property = useLocation();
    const navigate = useNavigate()
    const results = property.state.results;
    const data = property.state.data;
    const id = property.state.id;
    const dataIndex = property.state.index;

    const title = data.articleInfo["title-group"]["article-title"];
    const author = data.articleInfo["author-group"]["author"];
    const abstract = data.articleInfo["abstract-group"]["abstract"];
    console.log(data)

    return <Container>
        <SubTitle title={title[0] && title[0]["#text"] ? title[0]["#text"] : title && title["#text"]} />
        <Table>
            <TitleBox>
                <Title>{title[0] && title[0]["#text"] ? title[0]["#text"] : title && title["#text"]}</Title>
                <EngTitle>{title[1] && title[1]["#text"] ? title[1]["#text"] : ""}</EngTitle>
            </TitleBox>
            <InfoBox>
                <div>
                    <Research>
                        연구분야 : {`${data.articleInfo["article-categories"]}`}
                    </Research>
                    <Journal>
                        학회지 : {`${data.journalInfo["journal-name"]}`}
                    </Journal>
                    <Volume>
                        {`vol.${data.journalInfo["volume"] !== null ? data.journalInfo["volume"] : ""} no.${data.journalInfo["issue"] !== null ? data.journalInfo["issue"] : ""}`}
                    </Volume>
                    <Page>
                        {`pp.${data.articleInfo["fpage"]} ~ ${data.articleInfo["lpage"]} / ${data.articleInfo["lpage"] - data.articleInfo["fpage"] + 1}pages`}
                    </Page>
                    <Date>
                        {`${data.journalInfo["pub-year"]}.${data.journalInfo["pub-mon"]}`}
                    </Date>
                </div>
                <ShortCut>
                    {data.articleInfo["doi"] &&
                        <UrlButton href={data.articleInfo["doi"]} target="_blank" title={data.articleInfo["doi"]}>doi</UrlButton>}
                    {data.articleInfo["url"] &&
                        <UrlButton href={data.articleInfo["url"]} target="_blank" title={data.articleInfo["url"]}>kci</UrlButton>}
                </ShortCut>
            </InfoBox>
            <AuthorBox>
                {typeof author !== "string" ? author.map(function (j, index) {
                    return <Author key={index}>{j}&emsp;</Author>
                }) : <Author>{author}&emsp;</Author>}
            </AuthorBox>
            <AbstractBox>
                <AbstractTitle>초록</AbstractTitle>
                {typeof abstract !== "string" ?
                    <>
                        <Abstract>{abstract[0] && abstract[0]["#text"]}</Abstract>
                        <EngAbstract>{abstract[1] && abstract[1]["#text"]}</EngAbstract>
                    </>
                    : <Abstract>{abstract["#text"]}</Abstract>}
            </AbstractBox>
        </Table>
    </Container>
}

export default ThesisDetail;