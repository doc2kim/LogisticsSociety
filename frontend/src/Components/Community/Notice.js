import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { noticeAxios, noticeSearchAxios } from "../../ApiContext/RestApi"
import Pagination from "../Pagination"

const Container = styled.div`
`;

const NoticeBox = styled.div`
`;

const NoticeLists = styled.ul`
`;

const NoticeList = styled.li`
`;

const Table = styled.h1`
    border-top: 0.2vw solid #16498b; 
`;

const Tuple = styled.div`
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
`;

const Attribute = styled.div`
    font-size:0.8vw;
    background-color: rgba(0, 0, 0, .02);
    border-top: 2px solid #16498b;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height:1.5vw;
    @media only screen and (max-width: 768px) {
        line-height:7vw;
        font-size: 2.5vw;

    }
`;

const TitleAttr = styled(Attribute)`
    width: 55%;
    @media only screen and (max-width: 768px){
        width:80%;
    }
    @media only screen and (max-width:280px){
        width:100%;
    }
`;


const NumberAttr = styled(Attribute)`
    width:10%;
@media only screen and (max-width: 768px){
    display:none;
}
`;

const WriterAttr = styled(Attribute)`
width: 10%;
@media only screen and (max-width: 768px){
    display:none;
}
`;


const CreatedDateAttr = styled(Attribute)`
    width: 15%;
    @media only screen and (max-width: 768px){
        width: 20%;
    }
    @media only screen and (max-width:280px){
        display:none;
    }

`;

const HitsAttr = styled(Attribute)`
    width: 10%; 
@media only screen and (max-width: 768px) {
    display:none;
}
`;

const Value = styled.div`
    font-size:0.7vw;
    line-height:2vw;
    color: rgba(0, 0, 0, .7);
    text-align:center;
    @media only screen and (max-width: 768px) {
        line-height:15vw;
        font-size: 2.5vw;
    }
`;

const TitleValue = styled(Value)`
    width: 55%;
    text-align: start;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
@media only screen and (max-width: 768px) {
    width: 80%;
    font-size: 3.5vw;
}
@media only screen and (max-width:280px){
    font-size:0.8em;
}
`;

const WriterValue = styled(Value)`
width:10%;
@media only screen and (max-width: 768px) {
    display:none;
}
`;

const NumberValue = styled(Value)`
    width: 10%;
@media only screen and (max-width: 768px) {
    display:none;
}
`;

const HitsValue = styled(Value)`
    width: 10%;   
@media only screen and (max-width: 768px) {
    display:none;
}`;

const CreatedDateValue = styled(Value)`
    width: 15%;
    color: rgba(0, 0, 0, .4);
@media only screen and (max-width: 768px) {
    width: 20%;
    text-align: center;
    font-size: 0.5em;
}
@media only screen and (max-width:280px){
    display:none;
}
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
    justify-content:end;
    @media only screen and (max-width: 280px) {
        width:10%;
        justify-content:center;
        display: block;
    }
`;

const SearchInput = styled.input`
    padding:1%;
    @media only screen and (max-width: 768px) {
        font-size: 0.7em;
        width: 20vw;
    }
`;

const SearchCategory = styled.select`
    padding: 1%;
    @media only screen and (max-width: 768px) {
        font-size:0.7em;
        width: 15vw;
        
    }
`;


const CountInfo = styled.span`
    font-size:small;
    @media only screen and (max-width: 280px) {
        display: none;
    }
`;


const Number = styled.span`
    color: blue;
    font-size:small;
    text-decoration: underline;
`;


const Notice = function () {
    const [noticeData, setNoticeData] = useState(null)
    const [page, setPage] = useState(1);
    const limit = 10;
    const offset = (page - 1) * limit;
    const path = useLocation();

    const notice = async function () {
        const { data } = await noticeAxios();
        setNoticeData(data)
    }
    const searchNotice = async function (e) {
        const { data } = await noticeSearchAxios(e);
        setNoticeData(data)
    }
    useEffect(function () {
        if (!noticeData)
            notice()
    }, [])
    return noticeData && <Container>
        <NoticeBox>
            <SearchBox>
                <CountInfo style={{ paddingTop: "0.5vw" }}>총 <Number>{noticeData && noticeData.length}</Number>개의 게시물이 있습니다.</CountInfo>
                <SearchForm onSubmit={searchNotice}>
                    <SearchCategory>
                        <option>제목</option>
                        <option>작성자</option>
                        <option>파일이름</option>
                    </SearchCategory>
                    <SearchInput name="search" />
                </SearchForm>
            </SearchBox>
            <Table>
                <Tuple>
                    <NumberAttr >번호</NumberAttr>
                    <TitleAttr>제목</TitleAttr>
                    <WriterAttr>작성자</WriterAttr>
                    <CreatedDateAttr>등록일</CreatedDateAttr>
                    <HitsAttr >조회</HitsAttr>
                </Tuple>
                <NoticeLists>
                    {noticeData
                        .sort((a, b) => (b.top_fixed === true) - (a.top_fixed === true) || b.id - a.id)
                        .slice(offset, offset + limit)
                        .map(function (i, index) {
                            return <NoticeList key={i.id}>
                                <Tuple>
                                    {i.top_fixed ?
                                        <>
                                            <NumberValue style={{ color: 'red' }}>공지</NumberValue>
                                            <TitleValue style={{ color: 'red' }} selected={path.pathname === `/${i.id}`}>
                                                <Link to={`${i.id}`} state={{ data: i.id, allData: noticeData, index: index }}>
                                                    {i.title}
                                                </Link>
                                            </TitleValue>
                                        </>
                                        : <> <NumberValue>{i.id}</NumberValue>
                                            <TitleValue selected={path.pathname === `/${i.id}`}>
                                                <Link to={`${i.id}`} state={{ data: i.id, allData: noticeData, index: index }}>
                                                    {i.title}
                                                </Link>
                                            </TitleValue>
                                        </>}
                                    <WriterValue>{i.writer}</WriterValue>
                                    <CreatedDateValue>{i.created_date.substr(0, 10)}</CreatedDateValue>
                                    <HitsValue>{i.hits}</HitsValue>
                                </Tuple>
                            </NoticeList>
                        })}
                </NoticeLists>
                <div style={{ padding: "2%" }}>
                    <Pagination total={noticeData.length} limit={limit} page={page} setPage={setPage} />
                </div>
            </Table>
        </NoticeBox>
    </Container >
}

export default Notice;