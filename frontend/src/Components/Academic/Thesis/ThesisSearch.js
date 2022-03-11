import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import jsonResults from "./json_results.json";
import Pagination from "../../Pagination"

const Container = styled.div`
`;

const Results = styled.div`
    border-top : 1px solid rgba(0, 0, 0, .1);
`;

const Tuple = styled.div`
    display:flex;
    flex-direction : column;
    justify-content : center;
    padding : 1em 0;
    border-bottom : 1px solid rgba(0, 0, 0, .1);
    line-height : 2em;
`;

const ArticleTitle = styled.div`
    font-size: 1.2em;
    opacity: 0.8;
`;

const JournalInfo = styled.div`
    font-size: 0.7em;
    opacity: 0.6;
`;

const Author = styled.span`
    font-size: 0.7em;
`;

const SearchBox = styled.div`
    display:flex;
    justify-content:space-between;
    margin: 0.5% 0;
    width: 100%;
    
    @media only screen and (max-width: 280px) {
        justify-content:center;
    }
`;

const SearchForm = styled.form`
    width:25%;
    display:flex;
    justify-content:flex-end;
    @media only screen and (max-width: 280px) {
        width:10%;
        justify-content:center;
    }
`;

const SearchInput = styled.input`
    padding:1%;
    @media only screen and (max-width: 768px) {
        font-size: 0.7em;
        width: 20vw;
        display:block;
    }
`;

const SearchCategory = styled.select`
    padding: 1%;
    display: block;
    @media only screen and (max-width: 768px) {
        font-size:0.7em;
        width: 15vw;
    }
`;


const CountInfo = styled.span`
    font-size:small;
    line-height: 2em;
    @media only screen and (max-width: 280px) {
        display: none;
    }
`;


const Number = styled.span`
    color: blue;
    font-size:small;
    text-decoration: underline;
`;


const ThesisSearch = function () {
    const [results, setResults] = useState(() => localStorage.getItem('results') ? JSON.parse(localStorage.getItem('results')) : null);
    const [page, setPage] = useState(1);
    const limit = 15;
    const offset = (page - 1) * limit;

    const searchThesis = function (e) {
        e.preventDefault();
        const searchResult = [];
        const optionValue = e.target[0].selectedOptions[0].value;
        if (optionValue === "thesis") {
            for (const i of jsonResults) {
                const titleData = i.articleInfo["title-group"]["article-title"]
                if (titleData[0] && titleData[0]["#text"]) {
                    if (titleData[0]["#text"].includes(e.target.search.value)) {
                        searchResult.push(i)
                    }
                } else {
                    if (titleData["#text"].includes(e.target.search.value)) {
                        searchResult.push(i)
                    }
                }
            }
        } else if (optionValue === "author") {
            for (const i of jsonResults) {
                const authorData = i.articleInfo["author-group"]["author"]
                if (typeof authorData === "object") {
                    for (const j of authorData) {
                        if (j.includes(e.target.search.value)) {
                            searchResult.push(i)
                        } else {
                            continue
                        }
                    }
                } else {
                    if (authorData.includes(e.target.search.value)) {
                        searchResult.push(i)
                    }
                }
            }
        } else if (optionValue === "issue") {
            for (const i of jsonResults) {
                const issueData = i.journalInfo["pub-year"];
                if (issueData.includes(e.target.search.value)) {
                    searchResult.push(i)
                }
            }
        }
        setResults(searchResult)
        localStorage.setItem('results', JSON.stringify(searchResult))
    }

    useEffect(function () {
        if (!results) {
            setResults(jsonResults)
            localStorage.setItem('results', JSON.stringify(jsonResults))
        }
    }, [])
    return results && <Container>
        <SearchBox>
            <CountInfo>총 <Number>{results.length}</Number>개의 게시물이 있습니다.</CountInfo>
            <SearchForm onSubmit={searchThesis}>
                <SearchCategory >
                    <option value="thesis">논문명</option>
                    <option value="author">저자</option>
                    <option value="issue">발행년도</option>
                </SearchCategory>
                <SearchInput name="search" />
            </SearchForm>
        </SearchBox>
        <Results>{
            results && results.slice(offset, offset + limit).map(function (i, index) {
                const articleTitle = i.articleInfo["title-group"]["article-title"]
                const authorGroup = i.articleInfo["author-group"]["author"]
                const journalInfo = i.journalInfo
                const id = i.articleInfo["@article-id"]
                return <Tuple key={index}>
                    <Link to={id} state={{ id: id, data: i, results: results, index: index }}>
                        {articleTitle && articleTitle[0] ?
                            <>
                                <ArticleTitle>{articleTitle[0]["#text"]}</ArticleTitle>
                                <JournalInfo>
                                    {typeof authorGroup !== "string" ? authorGroup.map(function (j, index) {
                                        return <Author key={index}>{j}&emsp;</Author>
                                    }) : <Author>{authorGroup}&emsp;</Author>}
                                    <div>
                                        {`${journalInfo["pub-year"]}.${journalInfo["pub-mon"]} | ${journalInfo["volume"] !== null ? journalInfo["volume"] : ""}권 / ${journalInfo["issue"] !== null ? journalInfo["issue"] : ""}호 `}
                                    </div>
                                </JournalInfo>
                            </> :
                            <>
                                <ArticleTitle>{articleTitle["#text"]}</ArticleTitle>
                                <JournalInfo>
                                    {typeof authorGroup !== "string" ? authorGroup.map(function (j, index) {
                                        return <Author key={index}>{j}&emsp;</Author>
                                    }) : <Author>{authorGroup}&emsp;</Author>}
                                    <div>
                                        {`${journalInfo["pub-year"]}.${journalInfo["pub-mon"]} | ${journalInfo["volume"] !== null ? journalInfo["volume"] : ""}권 / ${journalInfo["issue"] !== null ? journalInfo["issue"] : ""}호 `}
                                    </div>
                                </JournalInfo>
                            </>}
                    </Link>
                </Tuple>
            })}
        </Results>
        <Pagination total={results && results.length} limit={limit} page={page} setPage={setPage} />
    </Container>
}
export default ThesisSearch;

