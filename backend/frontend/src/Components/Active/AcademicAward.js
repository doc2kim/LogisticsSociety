import React from "react";
import styled from "styled-components";

const Container = styled.div`
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
        font-size:0.8em;
    }
`;

const Table = styled.div`  
    border-bottom: 1px solid rgba(0, 0, 0, .3);
    border-right: 1px solid rgba(0, 0, 0, .3);
    
`;

const Tuple = styled.div`
    display: flex;
`;

const Attributes = styled.div`
    font-size:medium;
    background-color: rgba(0, 0, 0, .02);
    border-top: 2px solid #16498b;
    border-left: 1px solid rgba(0, 0, 0, .3);
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1% 0;
    @media only screen and (max-width: 768px) {
        font-size:0.5em;
    }
`;

const Value = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    border-top: 1px solid rgba(0, 0, 0, .5);
    border-left: 1px solid rgba(0, 0, 0, .5);
    opacity: 0.6;
    font-size: medium;
    line-height:25px;
    padding: 1% 0;
    text-align: center;
    @media only screen and (max-width: 768px) {
        font-size:0.5em;
    }
`;


const Activity = function () {
    return <Container>
        <Chapter>시상규칙</Chapter>
        <ContentBox>
            <span>
                2002. 8. 1 제정<br />
                2003. 2. 21 개정<br />
                2012. 6. 8 개정<br />
                <br />
                제1조  (목적)  이 규칙은 사단법인 한국해운물류학회(이하 “학회”라 한다)가 수여하는 학술상(이하 “상”이라 한다)의 시상기준과 절차에 관한 사항을
                규정함을 목적으로 한다.<br />
                <br />
                제2조  (상의 명칭 및 시상의 원칙)  이 상의 명칭은 “유통과 물류 부문의 중요성을 강조한 실학자 박제가의 학문적 업적을 계승 발전시킨다”는 의미
                에서 楚亭學術賞이라고 하고, 해운 및 물류 분야의 학문 발전에 이바지한 공로가 현저한 자에게 수여한다.<br />
                <br />
                제3조  (시상의 종류 및 시상 시기)  이 상은 논문 부문과 저술 부문으로 나누어 시상하며, 논문 부문은 매년마다(0년, 2년, 4년, 6년, 8년), 그리고  저술
                부문은 매 5년마다(0년, 5년) 시상하는 것을 원칙으로 한다.<br />
                <br />
                제4조  (수상자의 자격)  수상자는 해운 및 물류 부문의 학문 발전에 기여한 공로가 현저한 자로서 한국인 또는 외국인으로서 우리 학회 회원인 자
                중에서 학술위원회의 심의를 거쳐 이사회의 승인을 받은 자로 한다.<br />
                <br />
                제5조  (수상 인원)  각 부문 수상자는 매회 1인을 원칙으로 하되, 해당자가 없을 경우에는 시상하지 않을 수 있다.<br />
                <br />
                제6조  (전형위원회의 구성)<br />
                ① 회장은 전조의 수상자를 선정하기 위해 고문, 회장, 부회장, 학술위원장, 학술위원 사무국장 중 5명 이상 홀수로 전형
                위원회를 구성한다. 단 수상후보자는 전형위원으로 선정할 수 없다.<br />
                ②  전형위원장은 회장이 맡는 것을 원칙으로 하고, 부득이한 사유가 있을 때에는 학술위원장, 부회장, 학술위원, 사무국장 순으로 승계하는 것으로 한다.<br />
                <br />
                제7조 (수상자의 선정)  수상자는 다음과 같은 절차에 따라 선정한다.<br />
                ①  (심사 대상)  이 상의 논문상은 시상연도 직전 2년 동안 학회가 발간하는 학술지에 게재된 논문을 대상으로 하고, 저술상은 국내 · 외에서 출간된
                해운물류 부문의 저서를 대상으로 한다.<br />
                ②  (평가 기준)  전형위원회는 [주제의 독창성], [새로운 방법론의 개발], [새로운 이론의 개발], [학문적 기여도] 를 종합적으로 평가하여 수상자를
                선정한다<br />
                ③ 전형위원회는 위원의 2/3 이상의 찬성으로 수상자를 선정한다.<br />
                <br />
                부    칙<br />
                1. 이 규칙은 2002년 8월 1일부터 시행한다.<br />
                2. 이 규칙은 2003년 2월 21일부터 시행한다.<br />
                3. 이 규칙은 2012년 6월 8일부터 시행한다.<br />
            </span>
        </ContentBox>
        <Chapter>논문상<span style={{ fontSize: 'small', color: 'black', opacity: '0.6' }}>(매년마다 시상)</span></Chapter>
        <Table>
            <Tuple>
                <Attributes style={{ width: '15%' }}><span>호(연도)</span></Attributes>
                <Attributes style={{ width: '15%' }}><span>필자</span></Attributes>
                <Attributes style={{ width: '50%' }}><span>논문제목</span></Attributes>
                <Attributes style={{ width: '20%' }}><span>게재지</span></Attributes>
            </Tuple>
            <Tuple>
                <Value style={{ width: '15%' }}><span>제1호(2002)</span></Value>
                <Value style={{ width: '15%' }}><span>모수원,김창범</span></Value>
                <Value style={{ width: '50%' }}><span>환율과 경기의 불확실성이 MRI곡물운임에 미치는 영향</span></Value>
                <Value style={{ width: '20%' }}><span>한국해운학회지 제32호</span></Value>
            </Tuple>
            <Tuple>
                <Value style={{ width: '15%' }}><span>제2호(2002)</span></Value>
                <Value style={{ width: '15%' }}><span>이태우</span></Value>
                <Value style={{ width: '50%' }}><span>Aftermath of the Financial Crisis and Challenges for the Maritime Industry in Korea</span></Value>
                <Value style={{ width: '20%' }}><span>한국해운학회지 제33호</span></Value>
            </Tuple>
            <Tuple>
                <Value style={{ width: '15%' }}><span>제3호(2002)</span></Value>
                <Value style={{ width: '15%' }}><span>이원철</span></Value>
                <Value style={{ width: '50%' }}><span>운송과 수송에 관한 개념적 시론 외 18편</span></Value>
                <Value style={{ width: '20%' }}><span>한국해운학회지 제11호</span></Value>
            </Tuple>
            <Tuple>
                <Value style={{ width: '15%' }}><span>제4호(2004)</span></Value>
                <Value style={{ width: '15%' }}><span>김재승</span></Value>
                <Value style={{ width: '50%' }}><span>대한제국 농상공부 통신국 관선과 연구</span></Value>
                <Value style={{ width: '20%' }}><span>한국해운학회지 제38호</span></Value>
            </Tuple>
            <Tuple>
                <Value style={{ width: '15%' }}><span>제5호(2006)</span></Value>
                <Value style={{ width: '15%' }}><span>김상열,김태훈</span></Value>
                <Value style={{ width: '50%' }}><span>Relationships among factors for distribution channel performance</span></Value>
                <Value style={{ width: '20%' }}><span>한국해운학회지 제33호</span></Value>
            </Tuple>
            <Tuple>
                <Value style={{ width: '15%' }}><span>제6호(2010)</span></Value>
                <Value style={{ width: '15%' }}><span>김성준</span></Value>
                <Value style={{ width: '50%' }}><span>17~19세기 유럽 상선 선장의 지위 변화</span></Value>
                <Value style={{ width: '20%' }}><span>한국해운학회지 제63호</span></Value>
            </Tuple>
            <Tuple>
                <Value style={{ width: '15%' }}><span>제7호(2012)</span></Value>
                <Value style={{ width: '15%' }}><span>하병천,조성빈</span></Value>
                <Value style={{ width: '50%' }}><span>트럭운송업체와의 전략적 협력이 운송업체의 서비스성과와 사용자의 공급체인 성과에 미친 영향</span></Value>
                <Value style={{ width: '20%' }}><span>한국해운학회지 제71호</span></Value>
            </Tuple>
        </Table>
        <Chapter>저술상<span style={{ fontSize: 'small', color: 'black', opacity: '0.6' }}>(매 5년마다 시상)</span></Chapter>
        <Table>
            <Tuple>
                <Attributes style={{ width: '15%' }}><span>호(연도)</span></Attributes>
                <Attributes style={{ width: '15%' }}><span>필자</span></Attributes>
                <Attributes style={{ width: '40%' }}><span>논문제목</span></Attributes>
                <Attributes style={{ width: '10%' }}><span>출판사</span></Attributes>
                <Attributes style={{ width: '20%' }}><span>게재지</span></Attributes>
            </Tuple>
            <Tuple>
                <Value style={{ width: '15%' }}><span>제1호(2005)</span></Value>
                <Value style={{ width: '15%' }}><span>민성규</span></Value>
                <Value style={{ width: '40%' }}><span>해운경제학</span></Value>
                <Value style={{ width: '10%' }}><span>한국해양대</span></Value>
                <Value style={{ width: '20%' }}><span>한국해운학회지 제32호</span></Value>
            </Tuple>
            <Tuple>
                <Value style={{ width: '15%' }}><span>특별상(2005)</span></Value>
                <Value style={{ width: '15%' }}><span>Martin Stopford</span></Value>
                <Value style={{ width: '40%' }}><span>Marittime Economics</span></Value>
                <Value style={{ width: '10%' }}><span>Routledge</span></Value>
                <Value style={{ width: '20%' }}><span>한국해운학회지 제33호</span></Value>
            </Tuple>
        </Table>
    </Container>
}

export default Activity;