import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { newsAxios } from "../../ApiContext/RestApi"
import Pagination from "../Pagination"

const Container = styled.div`
`;

const NewsBox = styled.div`
    padding: 1%;
`;

const NewsGridBox = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 13vw);
    grid-template-rows: repeat(3, 1fr);
    gap: 2vw 2vw;
    justify-content:center;
    align-items: center;
    @media only screen and (max-width: 768px) {
        display: block;

    }
`;

const ImgBox = styled.div`
    width:100%;
    height: 8vw;
    @media only screen and (max-width: 768px) {
        height: 55vw;
    }
`;

const TitleBox = styled.div`
 @media only screen and (max-width: 768px) {
        padding-bottom: 5%;
    }
`;

const Title = styled.h1`
    text-align: center;
    line-height: 25px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
`;

const Date = styled.span`
    text-align: end;
`;

const Count = styled.span`
`;

const SubInfo = styled.div`
    font-size: x-small;
    line-height:15px;
    display: flex;
    justify-content:space-between;
    @media only screen and (max-width: 768px) {
        padding-top: 5%;
    }
`;

const Number = styled.span`
    color: blue;
    font-size:small;
    text-decoration: underline;
`;

const CountInfo = styled.span`
    font-size:small;
`;

const News = function () {
    const [newsData, setNewsData] = useState(null)
    const [page, setPage] = useState(1);
    const limit = 12;
    const offset = (page - 1) * limit;

    const news = async function () {
        let { data } = await newsAxios();
        setNewsData(data)
    }
    useEffect(function () {
        if (!newsData)
            news()
    }, [])
    console.log(newsData && newsData)
    return newsData && <Container>
        <CountInfo style={{ padding: "1% 0" }}>총 <Number>{newsData.length}</Number>개의 게시물이 있습니다.</CountInfo>
        <NewsBox>
            <div>
                <NewsGridBox>
                    {newsData
                        .sort((a, b) => b.id - a.id)
                        .slice(offset, offset + limit)
                        .map(function (i, index) {
                            return <div>
                                <SubInfo>
                                    <Count>조회 <span>{i.hits}</span></Count>
                                    <Date>{i.created_date.substr(0, 10)}</Date>
                                </SubInfo>
                                <Link to={`${i.id}`} state={{ data: i.id, allData: newsData, index: index }}>
                                    <ImgBox style={{ background: `url(/media/${i.cover_image})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></ImgBox>
                                    <TitleBox>
                                        <Title>{i.title}</Title>
                                    </TitleBox>
                                </Link>
                            </div>
                        })}
                </NewsGridBox>
            </div>
        </NewsBox>
        <div style={{ paddingTop: "5%" }}>
            <Pagination total={newsData.length} limit={limit} page={page} setPage={setPage} />
        </div>
    </Container>
}



export default News;