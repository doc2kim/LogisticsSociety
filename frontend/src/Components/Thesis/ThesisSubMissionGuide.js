import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fileAxios } from "../../ApiContext/RestApi";

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

const Chapter = styled.h1`
    margin-top: 2% ;
    color: #165fa3;
    font-size: x-large;
    padding-bottom: 1%;
    @media only screen and (max-width: 768px) {
        font-size:1em;
    }
`;

const ContentBox = styled.div`
    padding-top:1%;
    line-height:25px;
    font-size:large;
    opacity: 0.6;
    @media only screen and (max-width: 768px) {
        font-size:0.7em;
    }
`;

const Button = styled.a`
    background-color:#165fa3;
    width:auto;
    padding: 1.5% 5%;
    color: white;
    font-size: medium;
    text-align: center;
    @media only screen and (max-width: 768px) {
            font-size:0.7em;
            padding: 5% 5%;
    }
`;


const ThesisSubMissionGuide = function () {
    const [fileData, setFileData] = useState(null)

    const files = async function () {
        let { data } = await fileAxios();
        setFileData(data)
    }
    useEffect(function () {
        if (!fileData)
            files()
    })
    return fileData && <Container>
        <Box>
            <Chapter>주제</Chapter>
            <ContentBox>
                <span>
                    해운과 물류를 중심으로 한 관련 분야의 창의적이고 독립적인 이론적·정책적 논문 (다른 학술관련 문헌과 정기간행지에 게재되지 않은 것이어야 하며,
                    이를 위반한 것으로 판명될 경우에는 그에 따른 불이익은 투고자가 감수해야 함)<br />
                </span>
            </ContentBox>
            <Chapter>논문마감(국문지 및 영문지(ASIAN JOURNAL OF SHIPPING AND LOGISTICS))</Chapter>
            <ContentBox>
                <span>
                    1) 춘계지( 3월 30일 발간) : 12월 31일까지 수시 접수<br />
                    2) 하계지( 6월 30일 발간) : 4월 30일까지 수시 접수<br />
                    3) 추계지( 9월 30일 발간) : 7월 31일까지 수시 접수<br />
                    4) 동계지(12월 30일 발간) : 10월 31일까지 수시 접수
                </span>
            </ContentBox>
            <Chapter>투고 자격</Chapter>
            <ContentBox>
                <span>
                    회원에 가입하고 연회비를 납부한 회원
                </span>
            </ContentBox>
            <Chapter>투고 방법</Chapter>
            <ContentBox>
                <span>
                    1. 국문지 투고 방법<br />
                    1) 아래의“샘플논문”을 이용하여 논문 작성(스타일키 F6 이용)<br />
                    2) 연회비 완납 후 투고 (투고료는 없음)<br />
                    * 반드시 입금자명을 확인 할 수 있도록 명기(예: 김창범연회비)<br />
                    3) 투고자 논문제출 메뉴얼, 심사결과 답변서 양식, 논문심사신청서 및 연구윤리서약서 등은 https://jsl.jams.or.kr/co/main/jmMain.kci 참조<br />
                    4)논문게재가 확정된 경우 일반논문은 30만원, 연구비 수혜논문은 40만원 납부<br />
                    * 20페이지를 초과하는 경우 초과 페이지당 10,000원의 추가 게재료 납부<br />
                    <span style={{ color: '#165fa3' }}>한국해운물류학회 송금처 : 국민은행 421101-90-210893(한국해운물류학회)</span><br />
                    <br />
                    2. 영문지 투고 방법<br />
                    - 영문지는 아래에 접속하여, Elsevier 출판사의 Editorial Manager 투고시스템을 사용하여 투고함.<br />
                    - <a href="https://www.editorialmanager.com/ajsl/default.aspx" target="_blank" style={{ color: 'red' }}>https://www.editorialmanager.com/ajsl/default.aspx</a><br />
                </span>
            </ContentBox>
            <div style={{ display: 'flex', paddingTop: '2%' }}>
                {fileData.map(function (i) {
                    return i.file.includes('sample') ? <Button key={i.id} href={i.file} style={{ marginLeft: '2%' }}><span>샘플논문</span></Button> :
                        i.file.includes('written_oath') && <Button key={i.id} href={i.file}><span>논문심사신청서 및 연구 윤리서약서</span></Button>
                })}
            </div>
        </Box>
    </Container>
}


export default ThesisSubMissionGuide;