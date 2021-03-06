import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import jsonKoResults from "./json_ko_results.json";
import jsonEnResults from "./json_en_results.json";
import Pagination from "../../Pagination"

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

const JournalInfo = styled.ul`
    font-size: 0.7em;
    opacity: 0.6;
`;

const Author = styled.li`
    font-size: 0.7em;
    list-style: inside;
`;

const SearchBox = styled.div`
    display:flex;
    justify-content:space-between;
    margin: 0.5% 0;
    width: 100%;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items:center;
    }
`;

const SearchForm = styled.form`
    display:flex;
    justify-content:flex-end;
`;

const SearchInput = styled.input`
    padding:1%;
    @media only screen and (max-width: 768px) {
        font-size: 0.7em;
    }
`;

const SearchCategory = styled.select`
    padding: 1%;
    @media only screen and (max-width: 768px) {
        font-size:0.7em;
    }
`;


const CountInfo = styled.span`
    font-size:small;
    line-height: 3em;
    @media only screen and (max-width: 280px) {
        display: none;
    }
`;


const Number = styled.span`
    color: blue;
    font-size:small;
    text-decoration: underline;
`;

const SearchInfo = styled.span`
    color: blue;
    font-size:small;
    text-decoration: underline;
`;




const ThesisSearch = function () {
    const [results, setResults] = useState(() => localStorage.getItem('results') ? JSON.parse(localStorage.getItem('results')) : null);
    const [search, setSearch] = useState(() => localStorage.getItem('search') ? JSON.parse(localStorage.getItem('search')) : "");
    const [select, setSelect] = useState(() => localStorage.getItem('select') ? JSON.parse(localStorage.getItem('select')) : "");
    const [journal, setJournal] = useState(() => localStorage.getItem('journal') ? JSON.parse(localStorage.getItem('journal')) : "?????????");
    const [page, setPage] = useState(1);
    const limit = 15;
    const offset = (page - 1) * limit;
    const inputRef = useRef(null)
    let state = useLocation();



    const searchThesis = function (e) {
        e.preventDefault()
        const searchResult = [];
        const optionValue = e.target[1].selectedOptions[0].value;
        const journalValue = e.target[0].selectedOptions[0].value;
        let jsonResults = journalValue === "?????????" ? jsonKoResults : jsonEnResults;
        setPage(1);
        if (optionValue === "?????????") {
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
        } else if (optionValue === "??????") {
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
        } else if (optionValue === "????????????") {
            for (const i of jsonResults) {
                const issueData = i.journalInfo["pub-year"];
                if (issueData.includes(e.target.search.value)) {
                    searchResult.push(i)
                }
            }
        }
        setResults(searchResult)
        localStorage.setItem('results', JSON.stringify(searchResult))
        setJournal(e.target[0].selectedOptions[0].value)
        localStorage.setItem('journal', JSON.stringify(e.target[0].selectedOptions[0].value))
        setSearch(e.target.search.value)
        localStorage.setItem('search', JSON.stringify(e.target.search.value))
        setSelect(e.target[1].selectedOptions[0].value)
        localStorage.setItem('select', JSON.stringify(e.target[1].selectedOptions[0].value))
    }

    useEffect(function () {
        if (!results) {
            setResults(jsonKoResults)
            setJournal('?????????')
            localStorage.setItem('results', JSON.stringify(jsonKoResults))
            setSearch("")
            localStorage.setItem('search', JSON.stringify(""))
            setSelect("")
            localStorage.setItem('select', JSON.stringify(""))
        }
        if (JSON.parse(localStorage.getItem('key')) !== state.key && state.state !== null) {
            setResults(state.state.searchResult)
            localStorage.setItem('results', JSON.stringify(state.state.searchResult))

            localStorage.setItem('key', JSON.stringify(state.key))
            setJournal(state.state.journalValue)
            localStorage.setItem('journal', JSON.stringify(state.state.journalValue))
            setSearch(state.state.searchValue)
            localStorage.setItem('search', JSON.stringify(state.state.searchValue))
            setSelect(state.state.selectValue)
            localStorage.setItem('select', JSON.stringify(state.state.selectValue))
        }
    }, [])
    return results && <Container>
        <Box>
            <SearchBox>
                <CountInfo>
                    <SearchInfo>{`${journal}`}</SearchInfo> / <SearchInfo>{`${select}`}</SearchInfo> / <SearchInfo>{`${search}`}</SearchInfo> ????????????
                    ???<Number> {results.length}</Number>?????? ???????????? ????????????.
                </CountInfo>
                <SearchForm onSubmit={searchThesis} name="searchForm" ref={inputRef}>
                    <SearchCategory name='journal'>
                        <option value="?????????" title="?????????">?????????</option>
                        <option value="?????????" title="?????????">?????????</option>
                    </SearchCategory>
                    <SearchCategory name="catagory">
                        <option value="?????????" title="?????????">?????????</option>
                        <option value="??????" title="??????">??????</option>
                        <option value="????????????" title="????????????">????????????</option>
                    </SearchCategory>
                    <SearchInput name="search" type="search" />
                </SearchForm>
            </SearchBox>
            <Results>{
                results && results.slice(offset, offset + limit).map(function (i, index) {
                    const authorJoin = typeof i.articleInfo["author-group"]["author"] === "object" ? i.articleInfo["author-group"]["author"].join("") : i.articleInfo["author-group"]["author"]
                    const authorReplace = authorJoin.replace(/\(/g, ' - ');
                    const authorGroup = authorReplace.split(')').slice(0, -1)
                    const articleTitle = i.articleInfo["title-group"]["article-title"]
                    const journalInfo = i.journalInfo
                    const id = i.articleInfo["@article-id"]
                    return <Tuple key={index}>
                        <Link to={id} state={{ id: id, data: i, results: results, index: index, journal: journal }}>
                            {articleTitle && articleTitle[0] ?
                                <>
                                    <ArticleTitle>{articleTitle[0]["#text"]}</ArticleTitle>
                                    <JournalInfo>
                                        {typeof authorGroup !== "string" ? authorGroup.map(function (j, index) {
                                            return <Author key={index}>{j}&emsp;</Author>
                                        }) : <Author>{authorGroup}&emsp;</Author>}
                                        <div>
                                            {`${journalInfo["pub-year"]}.${journalInfo["pub-mon"]} | ${journalInfo["volume"] !== null ? journalInfo["volume"] : ""}??? / ${journalInfo["issue"] !== null ? journalInfo["issue"] : ""}??? `}
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
                                            {`${journalInfo["pub-year"]}.${journalInfo["pub-mon"]} | ${journalInfo["volume"] !== null ? journalInfo["volume"] : ""}??? / ${journalInfo["issue"] !== null ? journalInfo["issue"] : ""}??? `}
                                        </div>
                                    </JournalInfo>
                                </>}
                        </Link>
                    </Tuple>
                })}
            </Results>
            <Pagination total={results && results.length} limit={limit} page={page} setPage={setPage} />
        </Box>
    </Container >
}
export default ThesisSearch;

