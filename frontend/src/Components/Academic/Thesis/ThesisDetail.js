import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SubTitle from "../../SubTitle";
import { useLocation, useNavigate } from 'react-router-dom';


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

const AuthorBox = styled.ul`
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    line-height: 1.5em;
    padding: 1em 0;
    opacity: 0.8;
`;

const Author = styled.li`
    font-size: 0.8em;
    list-style: inside;
`;

const AbstractBox = styled.div`
    padding: 1em 0;
    font-size: 0.8em;
    line-height: 1.7em;    
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
    white-space: nowrap;
`;

const UrlButton = styled.a`
    border: 1px solid;
    background-color: #244476;
    color: white;
    width: 3em; ;
    border-radius:0.5em;
    text-align: center;
    margin: 0 0.5em;
    cursor: pointer;
`;


const NoticeNav = styled.div`
    display: flex;
    border-top: 1px solid rgba(0, 0, 0,0.2);
    border-bottom: 1px solid rgba(0, 0, 0,0.2);
    margin-top:1em;
    line-height:1.5em;
    @media only screen and (max-width: 768px) {
        margin-top: 2em;
        line-height: 2em;
    }
`;

const BackToNotice = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    width: 20%;
    @media only screen and (max-width: 280px) {
        font-size: 0.8em;
    }
`;

const Posts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (max-width: 280px) {
        font-size: 0.8em;
    }
`;

const Post = styled.div`
    display:flex ;
    align-items: center;
    cursor: pointer;
    padding: 0.5%;
    display:flex;
`;

const PostTitle = styled.div`
    padding: 0 1%;
`;

const UpDownIcon = styled.div`
    padding: 0 0.5%;
    white-space:nowrap;
`;

const Back = styled.div`
    cursor: pointer;
    font-size: 0.9em;
`;

const DownloadLink = styled.div`
    padding: 2px 0; 
    color: blue; 
    @media only screen and (max-width: 768px){
        font-size: 0.7em ;
    }
`;


const ThesisDetail = function () {
    const [resultsData, setResultsData] = useState(null)
    const [language, setLanguage] = useState(null)
    const property = useLocation();
    const navigate = useNavigate()
    const results = property.state.results;
    const data = property.state.data;
    const dataIndex = property.state.index;
    const journal = property.state.journal;
    const title = data.articleInfo["title-group"]["article-title"];
    const abstract = data.articleInfo["abstract-group"]["abstract"];
    const authorGroup = data.articleInfo["author-group"]["author"];
    const author = typeof authorGroup === 'object' ? authorGroup.join("").replace(/\(/g, ' - ').split(')').slice(0, -1) : authorGroup.replace(/\(/g, ' - ').split(')').slice(0, -1);


    const pageControl = function (prop, id, detailIndex) {
        navigate(`/academic/thesis-search/${id}`, { state: { data: prop, id: id, results: results, index: detailIndex }, replace: true })
        window.scrollTo(0, 0);
    }


    useEffect(function () {
        setResultsData(results)
        setLanguage(journal)
    }, [])
    console.log(language)
    return resultsData &&
        <Container>
            <SubTitle title={title[0] && title[0]["#text"] ? title[0]["#text"] : title && title["#text"]} />
            <Container2>
                <Box>
                    <Table>
                        <TitleBox>
                            {language === "?????????" ? <><Title>{title[0] && title[0]["#text"] ? title[0]["#text"] : title && title["#text"]}</Title>
                                <EngTitle>{title[1] && title[1]["#text"] ? title[1]["#text"] : ""}</EngTitle></> : <Title>{title[0] && title[0]["#text"] ? title[0]["#text"] : title && title["#text"]}</Title>}

                        </TitleBox>
                        <InfoBox>
                            <div>
                                <Research>
                                    ???????????? : {`${data.articleInfo["article-categories"]}`}
                                </Research>
                                <Journal>
                                    ????????? : {`${data.journalInfo["journal-name"]}`}
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
                                <DownloadLink>?????? ???????????? ?????? : </DownloadLink>
                                {data.articleInfo["doi"] &&
                                    <UrlButton href={data.articleInfo["doi"]} target="_blank" title={data.articleInfo["doi"]}>doi</UrlButton>}
                                {data.articleInfo["url"] &&
                                    <UrlButton href={data.articleInfo["url"]} target="_blank" title={data.articleInfo["url"]}>kci</UrlButton>}

                            </ShortCut>
                        </InfoBox>
                        <AuthorBox>
                            {typeof author !== "string" ? author.map(function (j, index) {
                                return <Author key={index}>{j}&nbsp;&nbsp;</Author>
                            }) : <Author>{author}&nbsp;&nbsp;</Author>}
                        </AuthorBox>
                        <AbstractBox>
                            <AbstractTitle>??????</AbstractTitle>
                            {language === "?????????" ? typeof abstract !== "string" ?
                                <>
                                    <Abstract>{abstract[0] && abstract[0]["#text"]}</Abstract>
                                    <EngAbstract>{abstract[1] && abstract[1]["#text"]}</EngAbstract>
                                </>
                                : <Abstract>{abstract["#text"]}</Abstract> : typeof abstract !== "string" ?
                                <>
                                    <Abstract>{abstract[0] && abstract[0]["#text"]}</Abstract>
                                </>
                                : <Abstract>{abstract["#text"]}</Abstract>}
                        </AbstractBox>
                    </Table>
                    <NoticeNav>
                        <BackToNotice>
                            <Back onClick={() => navigate("/academic/thesis-search/")}>????????????</Back>
                        </BackToNotice>
                        <div style={{ width: '80%' }}>
                            {dataIndex > 0 && dataIndex < resultsData.length - 1 ?
                                <Posts>
                                    {resultsData.map(function (i, index) {
                                        return dataIndex - 1 === index && <Post key={index}
                                            onClick={() => pageControl(i, i.articleInfo["@article-id"], index)}
                                            style={{ borderBottom: '1px solid rgba(0, 0, 0,0.2)' }}><UpDownIcon>????????? ???</UpDownIcon>
                                            <PostTitle>{i.articleInfo["title-group"]["article-title"][0] && i.articleInfo["title-group"]["article-title"][0]["#text"] ? i.articleInfo["title-group"]["article-title"][0]["#text"] : i.articleInfo["title-group"]["article-title"] && i.articleInfo["title-group"]["article-title"]["#text"]}</PostTitle>
                                        </Post>
                                    })}
                                    {resultsData.map(function (i, index) {
                                        return dataIndex + 1 === index && <Post key={index}
                                            onClick={() => pageControl(i, i.articleInfo["@article-id"], index)}><UpDownIcon>????????? ???</UpDownIcon>
                                            <PostTitle>{i.articleInfo["title-group"]["article-title"][0] && i.articleInfo["title-group"]["article-title"][0]["#text"] ? i.articleInfo["title-group"]["article-title"][0]["#text"] : i.articleInfo["title-group"]["article-title"] && i.articleInfo["title-group"]["article-title"]["#text"]}</PostTitle>
                                        </Post>
                                    })}
                                </Posts>
                                : dataIndex === resultsData.length - 1 ?
                                    <Posts>
                                        {resultsData.map(function (i, index) {
                                            return dataIndex - 1 === index && <Post key={index}
                                                style={{ borderBottom: '1px solid rgba(0, 0, 0,0.2)' }}
                                                onClick={() => pageControl(i, i.articleInfo["@article-id"], index)}><UpDownIcon>????????? ???</UpDownIcon>
                                                <PostTitle>{i.articleInfo["title-group"]["article-title"][0] && i.articleInfo["title-group"]["article-title"][0]["#text"] ? i.articleInfo["title-group"]["article-title"][0]["#text"] : i.articleInfo["title-group"]["article-title"] && i.articleInfo["title-group"]["article-title"]["#text"]}</PostTitle>
                                            </Post>
                                        })}
                                        <Post style={{ cursor: 'default' }}>?????????<UpDownIcon>???</UpDownIcon>
                                            <PostTitle style={{ whiteSpace: "nowrap" }}>??????</PostTitle>
                                        </Post>
                                    </Posts>
                                    : dataIndex === 0 &&
                                    <Posts>
                                        <Post style={{ borderBottom: '1px solid rgba(0, 0, 0,0.2)', cursor: 'default' }}><UpDownIcon>????????? ???</UpDownIcon>
                                            <PostTitle style={{ whiteSpace: "nowrap" }}>??????</PostTitle>
                                        </Post>
                                        {resultsData.map(function (i, index) {
                                            return dataIndex + 1 === index && <Post key={index}
                                                onClick={() => pageControl(i, i.articleInfo["@article-id"], index)} ><UpDownIcon>????????? ???</UpDownIcon>
                                                <PostTitle>{i.articleInfo["title-group"]["article-title"][0] && i.articleInfo["title-group"]["article-title"][0]["#text"] ? i.articleInfo["title-group"]["article-title"][0]["#text"] : i.articleInfo["title-group"]["article-title"] && i.articleInfo["title-group"]["article-title"]["#text"]}</PostTitle>
                                            </Post>
                                        })}
                                    </Posts>}
                        </div>
                    </NoticeNav>
                </Box></Container2>
        </Container >
}

export default ThesisDetail;