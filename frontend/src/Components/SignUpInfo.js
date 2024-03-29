import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fileAxios } from "../ApiContext/RestApi";

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
        font-size: 1em;
    }
`;

const ContentBox = styled.div`
    padding-top:1%;
    line-height:25px;
    font-size:large;
    opacity: 0.6;
    @media only screen and (max-width: 768px) {
        font-size: 0.8em;
    }
`;

const Button = styled.a`
    display: block;
    background-color:#165fa3;
    width:auto;
    padding: 1.5% 5%;
    color: white;
    font-size: medium;
    text-align: center;
    @media only screen and (max-width: 768px) {
        font-size: 0.8em;
        padding: 1em;
    }
`;

const SignUpInfo = function () {
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
            <Chapter>정회원 구분</Chapter>
            <ContentBox>
                <span>
                    (1) 일반회원 : 대학의 박사과정생, 교수, 연구원, 업계 종사자<br />
                    (2) 학생회원 : 대학의 석사과정생, 학부생<br />
                    (3) 단체일반회원 : 대학의 도서관<br />
                    (4) 단체특별회원 : 기업체와 법인단체<br />
                </span>
            </ContentBox>
            <Chapter>연회비</Chapter>
            <ContentBox>
                <span>
                    (1) 일반회원 : 10만원<br />
                    (2) 학생회원 : 5만원<br />
                    (3) 단체일반회원 : 15만원<br />
                    (4) 단체특별회원 : 50만원<br />
                    (5) 종신회원 : 40만원<br />
                </span>
            </ContentBox>
            <Chapter>가입비</Chapter>
            <ContentBox>
                <span>
                    가입비 : 5만원
                </span>
            </ContentBox>
            <Chapter>가입방법</Chapter>
            <ContentBox>
                <span>
                    (1) 입회원서를 내려받아 작성한 뒤 e-메일(<span style={{ color: '#165fa3' }}>master@shipping.or.kr</span>)로 학회 사무국으로 송부
                </span>
            </ContentBox>
            <div style={{ display: 'flex', paddingTop: '1%' }}>
                {fileData.map(function (i) {
                    return i.file.includes('personal') ? <Button href={i.file} style={{ marginRight: '1%' }}><span>개인회원 입회원서</span></Button> :
                        i.file.includes('organization') && <Button href={i.file}><span>단체회원 입회원서</span></Button>
                })}
            </div>
            <ContentBox>
                <span>
                    (2) 가입비와 연회비 납부<br />
                    <span style={{ color: '#165fa3' }}>국민은행 421101-90-210893(한국해운물류학회)</span>
                </span>
            </ContentBox>
            <ContentBox>
                <span>

                    (3) 홈페이지 회원가입 및 가입비와 연회비를 납부하신 뒤 사무국으로 통지해 주십시오.
                </span>
            </ContentBox>

            <ContentBox>
                <span>
                    (4) <a style={{ color: "blue", textDecoration: "underline", cursor:"pointer" }} href="https://jsl.jams.or.kr/co/main/jmMain.kci">온라인 논문투고 심사 시스템(jams)</a> &#8592; 클릭하여 회원가입 진행.
                </span>
            </ContentBox>
            <Chapter>정회원의 권한</Chapter>
            <ContentBox>
                <span>
                    (1) 한국해운물류학회가 발간하는 학술지에 논문을 투고할 수 있다.<br />
                    (2) 한국해운물류학회가 주관하는 학술발표회에서 논문을 발표할 수 있다.<br />
                    (3) 학술지를 받아 볼 수 있다.<br />
                    (4) 한국해운물류학회가 주관하는 각종 행사에 참여할 수 있다.<br />
                    (5) 기타 한국해운물류학회의 운영에 대해 의견을 제시할 수 있다.<br />
                </span>
            </ContentBox>
            <Chapter>종신회원의 특전</Chapter>
            <ContentBox>
                <span>
                    (1) 선상물류 포럼, 국제학술대회 등에 우선 초대<br />
                    (2) 학회 논문심사, 발표 및 토론 등에 우선 배정<br />
                    (3) 학회지 논문 게재<br />
                </span>
            </ContentBox>
        </Box>
    </Container>
}


export default SignUpInfo;