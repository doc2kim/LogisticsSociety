import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from 'react-router-dom';
import { noticeDetailAxios } from "../../ApiContext/RestApi"
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


const Table = styled.div`
    border-top: 4px solid #16498b; 
    margin-top: 1em;
`;


const Divide = styled.div`
    display: flex;
`;

const TitleDivide = styled(Divide)`
    width: 80%;
    align-items: center;
    @media only screen and (max-width: 768px) {
        width: 100%;
        border-bottom: 1px solid rgba(0, 0, 0,0.2);
    }
`;

const InfoDivide = styled(Divide)`
    flex-direction: column; 
    width: 20%; 
    border-left: 1px solid rgba(0, 0, 0,0.2);
    line-height:1em;
    @media only screen and (max-width: 768px) {
        flex-direction: row;
        width: 100%;
        border:none;
    }
`;

const WriterDivide = styled(Divide)`
    border-bottom: 1px solid rgba(0, 0, 0,0.2);
    @media only screen and (max-width: 768px){
        width: 33.3333%;
        border:none;
    }
`;

const CreatedDateDivide = styled(Divide)`
 @media only screen and (max-width: 768px){
        width: 33.3333%;
    }
`;

const HitsDivide = styled(Divide)`
    border-top: 1px solid rgba(0, 0, 0,0.2);
    @media only screen and (max-width: 768px) {
        width: 33.3333%;
        border: none;
    }
`;

const FileDivide = styled(Divide)`
    width: 80%;
    align-items: center;
    @media only screen and (max-width: 768px) {        
        width:100%
    }
`;


const TitleContent = styled.div`
    font-size: 1.5em;
    padding: 2% 0;
    display:flex;
    align-items: center;
    @media only screen and (max-width: 768px) {
        font-size: 5vw;
        padding: 4% 0;
    }
    @media only screen and (max-width: 280px) {
        font-size: 0.9em;
    }
`;

const Attributes = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    width: 100%;
    text-align: center;
    border-right: 1px solid rgba(0, 0, 0,0.2);
    color: rgba(0, 0, 0,0.7);
    font-size: 0.8em;
    
    @media only screen and (max-width: 768px) {
        width:46%;
        font-size: 0.5em;
    }
`;


const WriterAttr = styled(Attributes)`
   
`;

const CreatedDateAttr = styled(Attributes)`
    @media only screen and (max-width: 768px){
        border-left: 1px solid rgba(0,0,0,0.2);
    }
`;

const HitsAttr = styled(Attributes)`
    @media only screen and (max-width: 768px) {
        border-left: 1px solid rgba(0,0,0,0.2);    
    }
`;


const Value = styled.div`
    width: 100%;
    padding: 0.3em 0;
    text-align: center;
    font-size: 0.7em;
    @media only screen and (max-width: 768px) {
        padding:0.5em;
    }
    @media only screen and (max-width: 280px) {
        font-size: 0.5em;
    }
`;



const Tuple = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0,0.2);
    @media only screen and (max-width: 768px) {
        display: block;
    }
`;

const Attachments = styled.div`
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0,0.2);
    font-size:0.7em;
`;

const AttachTitle = styled.div`
    width: 10%;
    text-align: center;
    color: rgba(0, 0, 0,0.7);
    @media only screen and (max-width: 768px) {
        display: none;
    }
`;


const ContentBox = styled.div`
    font-size: 1em;
    line-height:1.5em;
    padding: 0 2%;
    color: rgba(0, 0, 0,0.8);
    @media only screen and (max-width: 768px) {
        line-height: 1.5em;
        font-size: 0.9em;
        margin-top:2em;
    }
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

const PostTitle = styled.span`
    padding: 0 1%;
`;

const UpDownIcon = styled.div`
    padding: 0 0.5%;
    white-space:nowrap;
`;

const Img = styled.img`
    width: 50%;
    @media only screen and (max-width: 768px) {
        width:100%;
    }
`;

const ImgBox = styled.div`
    display: flex;
    justify-content:center;
    padding: 3% 0;
`;

const Back = styled.div`
    cursor: pointer;
    font-size: 0.9em;
`;


const File = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    padding-left: 3%;
    border-left: 1px solid rgba(0, 0, 0,0.2);
    line-height:2em;
    @media only screen and (max-width:768px){
        width:100%;
        border:none;
    }
`;

const FileBox = styled.a`
    padding:0.5em;
    display: flex;
`;

const FileIcon = styled.span`
    padding-right: 1%;
`;

const FileName = styled.div`
    color: blue;
    opacity: 0.7;
    font-size: 0.9em;
    @media only screen and (max-width: 280px) {
        font-size: 0.7em;
    }
`;


const NoticeDetail = function () {
    const [detailData, setDetailData] = useState(null)
    const property = useLocation();
    const navigate = useNavigate()
    const allData = property.state.allData;
    const id = property.state.data;
    const dataIndex = property.state.index;

    const noticeDetail = async function (prop) {
        let { data } = await noticeDetailAxios(prop);
        setDetailData(data)
    }

    const pageControl = function (prop, detailIndex) {
        navigate(`/community/notice/${prop}`, { state: { data: prop, allData: allData, index: detailIndex }, replace: true })
        noticeDetail(prop)
        window.scrollTo(0, 0);
    }
    useEffect(function () {
        if (!detailData) {
            noticeDetail(id)
        }
    }, [])
    return detailData &&
        <Container>
            <SubTitle title={detailData.title} />
            <Container2>
                <Box>
                    <Table>
                        <Tuple>
                            <TitleDivide>
                                <TitleContent>
                                    <h1>{detailData.title}</h1>
                                </TitleContent>
                            </TitleDivide>
                            <InfoDivide>
                                <WriterDivide>
                                    <WriterAttr>작성자</WriterAttr>
                                    <Value>{detailData.writer}</Value>
                                </WriterDivide>
                                <CreatedDateDivide>
                                    <CreatedDateAttr>등록일</CreatedDateAttr>
                                    <Value>{detailData.created_date.substr(0, 10)}</Value>
                                </CreatedDateDivide>
                                <HitsDivide>
                                    <HitsAttr>조회수</HitsAttr>
                                    <Value>{detailData.hits}</Value>
                                </HitsDivide>
                            </InfoDivide>
                        </Tuple>
                        {detailData.file.length > 0 &&
                            <Attachments>
                                <FileDivide>
                                    <AttachTitle>첨부파일</AttachTitle>
                                    <File>
                                        {detailData.file.map(function (i, index) {
                                            const file_decode = decodeURI(i.file)
                                            const file_split = file_decode.split("/")
                                            const file_name = file_split[file_split.length - 1]
                                            return <div><FileBox key={`file${index}`}
                                                download
                                                target="_blank"
                                                href={`${i.file}`} >
                                                <FileIcon >💾</FileIcon>
                                                <FileName >{file_name}</FileName>
                                            </FileBox>
                                            </div>
                                        }
                                        )}
                                    </File>
                                </FileDivide>
                            </Attachments>
                        }
                    </Table>
                    <ContentBox>
                        <ImgBox>
                            {detailData.image && <Img src={`/media/${detailData.image}`} />}
                        </ImgBox>
                        {detailData.content.split('\n').map((i, index) => {
                            return (
                                <span key={`text${index}`}>{i}<br /></span>
                            )
                        })}
                    </ContentBox>
                    <NoticeNav>
                        <BackToNotice>
                            <Back onClick={() => navigate("/community/notice/")}>목록으로</Back>
                        </BackToNotice>
                        <div style={{ width: '80%' }}>
                            {dataIndex > 0 && dataIndex < allData.length - 1 ?
                                <Posts>
                                    {allData.map(function (i, index) {
                                        return dataIndex - 1 === index && <Post key={index}
                                            onClick={() => pageControl(i.id, index)}
                                            style={{ borderBottom: '1px solid rgba(0, 0, 0,0.2)' }}><UpDownIcon>이전글 ▲</UpDownIcon>
                                            <PostTitle>{i.title}</PostTitle>
                                        </Post>
                                    })}
                                    {allData.map(function (i, index) {
                                        return dataIndex + 1 === index && <Post key={index}
                                            onClick={() => pageControl(i.id, index)}><UpDownIcon>다음글 ▼</UpDownIcon>
                                            <PostTitle>{i.title}</PostTitle>
                                        </Post>
                                    })}
                                </Posts>
                                : dataIndex === allData.length - 1 ?
                                    <Posts>
                                        {allData.map(function (i, index) {
                                            return dataIndex - 1 === index && <Post key={index}
                                                style={{ borderBottom: '1px solid rgba(0, 0, 0,0.2)' }}
                                                onClick={() => pageControl(i.id, index)}><UpDownIcon>이전글 ▲</UpDownIcon>
                                                <PostTitle>{i.title}</PostTitle>
                                            </Post>
                                        })}
                                        <Post style={{ cursor: 'default' }}><UpDownIcon>다음글 ▼</UpDownIcon>
                                            <PostTitle style={{ whiteSpace: 'nowrap' }}>없음</PostTitle>
                                        </Post>
                                    </Posts>
                                    : dataIndex === 0 &&
                                    <Posts>
                                        <Post style={{ borderBottom: '1px solid rgba(0, 0, 0,0.2)', cursor: 'default' }}><UpDownIcon>이전글 ▲</UpDownIcon>
                                            <PostTitle style={{ whiteSpace: 'nowrap' }}>없음</PostTitle>
                                        </Post>
                                        {allData.map(function (i, index) {
                                            return dataIndex + 1 === index && <Post key={index}
                                                onClick={() => pageControl(i.id, index)} ><UpDownIcon>다음글 ▼</UpDownIcon>
                                                <PostTitle>{i.title}</PostTitle>
                                            </Post>
                                        })}
                                    </Posts>}
                        </div>
                    </NoticeNav>
                </Box>
            </Container2>
        </Container >
}

export default NoticeDetail