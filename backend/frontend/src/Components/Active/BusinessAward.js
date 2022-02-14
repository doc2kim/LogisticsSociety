import React from "react";
import styled from "styled-components";


const Container = styled.div`
padding-bottom: 10%;
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

const Chapter2 = styled(Chapter)`
 @media only screen and (max-width: 768px) {
        display: none;
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
    @media only screen and (max-width: 768px) {
        display: none;
    }
`;


const Tuple = styled.div`
    display: flex;
`;

const Attributes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid #16498b;
    border-left: 1px solid rgba(0, 0, 0, .3);
    font-size:medium;
    background-color: rgba(0, 0, 0, .02);
    line-height:50px;
    @media only screen and (max-width: 768px) {
        font-size:0.8em;
    }
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
    font-size: medium;
    line-height:40px;
    opacity: 0.6;
    @media only screen and (max-width: 768px) {
        font-size:0.5em;
    }
`;

const ManagementAward = function () {

    return <Container>
        <Chapter>상의 제정 목적</Chapter>
        <ContentBox>
            <span>인터넷을 통하여 부가가치를 창출하고자 하는 국내의 해운 및 물류 기업에게 최적의 웹사이트(website) 모델을 제시하고, 공정한 웹사이트 평가
                기준과 새로운 웹 비즈니스 모델을 개발하여 우리 해운 및 물류 기업이 E-비즈니스시대를 선도할 수 있도록 방향을 제시하는 데 그 목적이 있다.</span>
        </ContentBox>
        <Chapter>해운물류 e-비지니스 대상 시상 규칙</Chapter>
        <ContentBox>
            <span>
                제1조  (목적)<br />
                이 규칙은 사단법인 한국해운물류학회(이하 “학회”라 한다)가 수여하는 “해운물류E-비즈니스대상”(영문표기 The Best Web
                Awards of Shipping and Logistics, 이하 “상”이라 한다)의 시상기준과 절차에 관한 사항을 규정함을 목적으로 한다.<br />
                <br />
                제2조 (상의 목적)<br />
                이 상은 인터넷을 통하여 부가가치를 창출하고자 하는 국내의 해운 및 물류 기업에게 최적의 웹사이트(website) 모델을 제시하고,
                공정한 웹사이트 평가기준과 새로운 웹 비즈니스 모델을 개발하여 우리 해운 및 물류 기업이 E-비즈니스시대를 선도할 수 있도록 방향을 제시하는 데
                그 목적이 있다.<br />
                <br />
                제3조 (시상의 종류 및 시상 시기)<br />
                이 상은 공공부문(public sector)과 민간부문(private sector)으로 나누어 시상하되, 민간부문은 해운 및
                복운 부문(carriers and forwarders)과 항만 및 해운산업지원부문(ports and service providers)으로 나누어 시상하며, 매년 정기
                총회에서 시상하는 것을 원칙으로 한다.<br />
                <br />
                제4조  (수상업체의 자격)<br />
                수상업체는 해운 및 물류 부문과 관계된 관청, 업체, 개인 등이 운영하는 웹사이트 중에서 전형위원회의 심의 및 평가를 거쳐
                이사회의 승인을 받은 업체로 한다.<br />
                <br />
                제5조  (수상업체의 수)<br />
                각 부문 수상업체는 매회 1개 업체를 원칙으로 한다. 다만 평가점수가 동률일 경우에는 예외로 한다.<br />
                <br />
                제6조  (전형위원회의 구성)<br />
                ① 전조의 수상업체를 선정하기 위해 회장은 학술위원회의 자문을 받아 별도의 전형위원회를 구성하고, 그 위원장이 된다.<br />
                ② 전형위원은 다음 각호의 자격을 갖춘 자로 한다.<br />
                가. 국내외 정규대학의 조교수 이상인 자 또는 정부출연연구기관 및 그에 준하는 연구소의 상임연구원으로 7년 이상 재직한 자로 주전공이 전자상거
                (E-비즈니스)인 자<br />
                나. 국내외에서 발표한 연구실적(논문 및 저술 포함)이 총 10편이상인 자<br />
                다. 최근 2년 이내의 연구실적(논문 및 저술포함)이 3편 이상인 자<br />
                <br />
                제7조 (수상업체의 선정 절차)<br />
                수상업체는 다음과 같은 절차에 따라 선정한다.<br />
                ① 전형위원회 위원장은 각 부문별 1명씩 준비위원을 지명하고, 준비위원들은 해당 부문 웹사이트를 평가하여 15개 내외의 수상 후보 웹사이트를 추천
                한다. 준비위원은 각 부문 평가위원장이 된다.<br />
                ② 전형위원회는 준비위원 3인이 추천한 각 부문 15개 내외의 웹사이트를 평가하여 각 부문 5개 내외의 웹사이트를 가려낸다.<br />
                ③ 전형위원회는 각 부문 4명으로 전문가 평가단을 선정하여 심사를 의뢰함과 동시에 일반인들을 대상으로 사이버 폴(cyber poll)을 실시한다.<br />
                ④ 각 부문 평가위원장은 해당 부문의 전문가 평가단의 심사결과와 사이버 폴 결과를 종합하여 상위 2개 업체를 선정하여 전형위원장에게 보고한다.<br />
                ⑤ 전형위원장은 각 부문 평가위원장의 자문을 받아 각 부문 수상업체를 선정하고 이를 언론에 공지한다.<br />
                <br />
                제 8 조  (평가 기준)<br />
                ① 전문가 평가는 웹사이트의 시스템과 컨텐츠를 주로 평가하는 것으로 하고, 일반인들을 대상으로 한 사이버 폴은 사용자 만족도를 기준으로
                평가한다.<br />
                ② 시스템 분야는 상호작용성(10점), 편리성(10점), 시각디자인(10점), 보안성(10점)으로 세분하여 평가하고, 컨텐츠 분야는 다양성(15점),
                신뢰성(10점), 최신성(10점), 개별성(10점), 만족도(15점)로 세분하여 평가한다.<br />
                ③ 일반인들을 대상으로 한 만족도는 매우 만족, 대체로 만족, 보통, 개선의 여지 있음, 불만족 등 5 등급으로 평가한다.<br />
                ④ 전형위원회는 e-비즈니스의 발전 추세에 따라 평가기준에 새로운 기준을 추가할 수 있다.<br />
                <br />
                부    칙<br />
                1. 이 규칙은 2003년 2월 21일부터 시행한다<br />
            </span>
        </ContentBox>
        <Chapter2>역대수상업체</Chapter2>
        <Table>
            <Tuple>
                <Tuple style={{ width: '40%' }}>
                    <Attributes style={{ width: '40%' }}>연도</Attributes>
                    <Attributes style={{ width: '60%' }}>부문</Attributes>
                </Tuple>
                <Tuple style={{ width: '40%' }}>
                    <Attributes style={{ width: '40%' }}>수상업체</Attributes>
                    <Attributes style={{ width: '60%' }}>웹사이트</Attributes>
                </Tuple>
                <Tuple style={{ width: '20%' }}>
                    <Attributes style={{ width: '33%' }}>시스템</Attributes>
                    <Attributes style={{ width: '33%' }}>컨텐츠</Attributes>
                    <Attributes style={{ width: '34%' }}>만족도</Attributes>
                </Tuple>
            </Tuple>
            <Tuple>
                <Tuple style={{ width: '40%' }}>
                    <Value style={{ width: '40%' }}><span>2002년</span></Value>
                    <Value style={{ width: '60%' }}><span>해운 및 복운항만 및 해운지원 산업공공</span></Value>
                </Tuple>
                <Tuple style={{ width: '40%' }}>
                    <div style={{ width: '40%' }}>
                        <Value><span>한진해운</span></Value>
                        <Value><span>대한통운</span></Value>
                        <Value><span>여수해양수산청</span></Value>
                    </div>
                    <div style={{ width: '60%' }}>
                        <Value><span>www.hanjin.com</span></Value>
                        <Value><span>www.korex.co.kr</span></Value>
                        <Value><span>yosu.momaf.go.kr</span></Value>
                    </div>
                </Tuple>
                <Tuple style={{ width: '20%' }}>
                    <div style={{ width: '33%' }}>
                        <Value><span>A</span></Value>
                        <Value><span>A</span></Value>
                        <Value><span>A</span></Value>
                    </div>
                    <div style={{ width: '33%' }}>
                        <Value><span>A</span></Value>
                        <Value><span>B+</span></Value>
                        <Value><span>A</span></Value>
                    </div>
                    <div style={{ width: '34%' }}>
                        <Value><span>A+</span></Value>
                        <Value><span>A</span></Value>
                        <Value><span>B+</span></Value>
                    </div>
                </Tuple>
            </Tuple>

            <Tuple>
                <Tuple style={{ width: '40%' }}>
                    <Value style={{ width: '40%' }}><span>2004년</span></Value>
                    <Value style={{ width: '60%' }}><span>해운 및 복운항만 및 해운지원 산업공공</span></Value>
                </Tuple>
                <Tuple style={{ width: '40%' }}>
                    <div style={{ width: '40%' }}>
                        <Value><span>한진해운</span></Value>
                        <Value><span>세방기업</span></Value>
                        <Value><span>부산지방해양수산청</span></Value>
                    </div>
                    <div style={{ width: '60%' }}>
                        <Value><span>www.hanjin.com</span></Value>
                        <Value><span>www.global.co.kr</span></Value>
                        <Value><span>pusan.momaf.go.kr</span></Value>
                    </div>
                </Tuple>
                <Tuple style={{ width: '20%' }}>
                    <div style={{ width: '33%' }}>
                        <Value><span>A</span></Value>
                        <Value><span>A</span></Value>
                        <Value><span>B+</span></Value>
                    </div>
                    <div style={{ width: '33%' }}>
                        <Value><span>A+</span></Value>
                        <Value><span>A</span></Value>
                        <Value><span>B+</span></Value>
                    </div>
                    <div style={{ width: '34%' }}>
                        <Value><span>A</span></Value>
                        <Value><span>A</span></Value>
                        <Value><span>B+</span></Value>
                    </div>
                </Tuple>
            </Tuple>
            <Tuple>
                <Tuple style={{ width: '40%' }}>
                    <Value style={{ width: '40%' }}><span>2005년</span></Value>
                    <Value style={{ width: '60%' }}><span>해운항만 및 해운지원 산업공공</span></Value>
                </Tuple>
                <Tuple style={{ width: '40%' }}>
                    <div style={{ width: '40%' }}>
                        <Value><span>동남아해운</span></Value>
                        <Value><span>세방기업</span></Value>
                        <Value><span>순광상공회의소</span></Value>
                    </div>
                    <div style={{ width: '60%' }}>
                        <Value><span>www.dnal.com</span></Value>
                        <Value><span>www.global.co.kr</span></Value>
                        <Value><span>www.portgy.com</span></Value>
                    </div>
                </Tuple>
                <Tuple style={{ width: '20%' }}>
                    <div style={{ width: '33%' }}>
                        <Value><span>A</span></Value>
                        <Value><span>A</span></Value>
                        <Value><span>B+</span></Value>
                    </div>
                    <div style={{ width: '33%' }}>
                        <Value><span>A</span></Value>
                        <Value><span>A+</span></Value>
                        <Value><span>B+</span></Value>
                    </div>
                    <div style={{ width: '34%' }}>
                        <Value><span>B+</span></Value>
                        <Value><span>A</span></Value>
                        <Value><span>B+</span></Value>
                    </div>
                </Tuple>
            </Tuple>
            <Tuple>
                <Tuple style={{ width: '40%' }}>
                    <Value style={{ width: '40%' }}><span>2006년</span></Value>
                    <Value style={{ width: '60%' }}><span>해운항만 및 해운지원 산업공공</span></Value>
                </Tuple>
                <Tuple style={{ width: '40%' }}>
                    <div style={{ width: '40%' }}>
                        <Value><span>세양선박</span></Value>
                        <Value><span>고려해운항공</span></Value>
                        <Value><span>부산항만공사</span></Value>
                    </div>
                    <div style={{ width: '60%' }}>
                        <Value><span>www.seyangshipping.co.kr</span></Value>
                        <Value><span>www.kmtcas.co.kr</span></Value>
                        <Value><span>www.pba.com</span></Value>
                    </div>
                </Tuple>
                <Tuple style={{ width: '20%' }}>
                    <div style={{ width: '33%' }}>
                        <Value><span>A</span></Value>
                        <Value><span>B+</span></Value>
                        <Value><span>A</span></Value>
                    </div>
                    <div style={{ width: '33%' }}>
                        <Value><span>A</span></Value>
                        <Value><span>A</span></Value>
                        <Value><span>A</span></Value>
                    </div>
                    <div style={{ width: '34%' }}>
                        <Value><span>B+</span></Value>
                        <Value><span>B+</span></Value>
                        <Value><span>B+</span></Value>
                    </div>
                </Tuple>
            </Tuple>
        </Table>
    </Container>
}

export default ManagementAward;