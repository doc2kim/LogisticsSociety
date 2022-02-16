import React from "react";
import styled from "styled-components";

const Container = styled.div`
`;

const Chapter = styled.h1`
    margin-top: 4% ;
    color: #165fa3;
    font-size: x-large;
    padding-bottom: 1%;
    @media only screen and (max-width: 653px) {
        font-size:1em;
    }
`;


const ContentBox = styled.div`
    padding-top:1%;
    line-height:25px;
    font-size:large;
    opacity: 0.6;
    @media only screen and (max-width: 653px) {
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
    line-height:50px;    
    @media only screen and (max-width: 768px) {
        font-size:0.8em;
    }
    @media only screen and (max-width: 653px) {
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
    line-height:40px;
    text-align: center;
    @media only screen and (max-width: 768px) {
        font-size:0.8em;
    }
    @media only screen and (max-width: 653px) {
        font-size:0.5em;
    }
`;

const Rule = function () {

    return <Container>
        <ContentBox>
            <span>
                1990.03.23 제정<br />
                1993.03.01 개정<br />
                2000.04.29 개정<br />
                2001.04.20 개정<br />
                2003.02.21 개정<br />
                2004.02.12 개정<br />
                2006.09.09 개정<br />
                2009.12.12 개정<br />
                2015.02.17 개정<br />
                2016.02.26 개정<br />
            </span>
        </ContentBox>
        <Chapter>
            제1조 (목적)
        </Chapter>
        <ContentBox>
            <span>이 규칙은 사단법인 한국해운물류학회(이하 학회라 함)가 발간하는 학술 논문집의 편집방향과 논문심사 기준 및 절차를 정하고, 학술발표대회에서 발표할 주제 및 발표자 선정에 관한 사항을 정하는 것을 목적으로 한다.</span>
        </ContentBox>
        <Chapter>
            제2조 (학술연구의 범위)
        </Chapter>
        <ContentBox>
            <span>우리 학회가 다루는 학술의 범위는 해운과 물류에 관련된 내용을 중심으로 한다.</span>
        </ContentBox>
        <Chapter>
            제3조 (위원회의 구성)
        </Chapter>
        <ContentBox>
            <span>① 제 1 조의 업무를 수행하기 위해 학술위원회를 두며, 필요한 경우에는 분과위원회를 둘 수 있다.<br />
                ② 학술위원회는 논문집의 편집방향, 논문심사 기준 및 절차 결정, 논문 심사, 투고 논문의 게재 여부 판정, 학술발표대회와 기타 학술에 관련된 사항을
                다룬다.<br />
                ③ 학술위원회는 회장이 이사회의 동의를 받아 위촉하여 구성하고, 분과위원회는 회장의 동의를 받아 학술위원장이 위촉하는 각 분과 10인 이내의
                위원으로 구성할 수 있으며,<br /> 학술위원은 전공 분야에 따라 각 분과의 위원을 겸하는 것으로 한다.<br />
                ④ 학술위원장은 학술위원 중에서 호선한다. 학술위원장과 학술위원의 임기는 2년으로 하며 연임할 수 있다. 연임 횟수에는 제한을 두지 않는다. <br />
                그리고 편집국장과 편집간사는 학술위원장이 지명한다.<br />
                ⑤ 학술위원회는 출석위원 과반수의 찬성으로 의결한다. 그리고 현장 회의가 어려운 경우 전자메일을 통하여 안건심사를 할 수 있다.</span>
        </ContentBox>
        <Chapter>
            제4조 (학술위원 및 분과위원의 자격)
        </Chapter>
        <ContentBox>
            <span>
                학술위원 및 분과위원은 다음 각 호의 자격을 갖춘 자를 임명하는 것을 원칙으로 한다.<br />
                <br />
                ① 국내외 정규대학의 조교수 이상인 자 또는 정부출연연구기관 및 그에 준하는 연구소의 연구위원으로 7년 이상 재직한 자 로 한정한다.<br />
                ② 학술위원회 위원 선임시점에서 최근 3년간 국내외에서 발표한 연구실적(논문 및 저술 포함)이 총 7편 이상인 자로 한정한다.<br />
                ③ 2항의 연구실적 중 국내학술지의 범위는 학국연구재단 등재 및 등재후보지이며, 외국학술지의 범위는 SCI,SCIE,SSCI,A&HCI,Scopus로
                특정한다.<br />
            </span>
        </ContentBox>
        <Chapter>
            제5조 (논문 작성방법)
        </Chapter>
        <ContentBox>
            <span>
                국문 및 영문 학회지의 학술위원회(Editorial Board)에서 별도로 정한다.
            </span>
        </ContentBox>
        <Chapter>
            제6조 (논문심사절차)
        </Chapter>
        <ContentBox>
            <span>
                ① 학술위원장은 학술위원들의 자문을 받은 후 투고 논문의 분야를 고려하여 해당 분양의 전문가 3인에게 익명으로 심사를 의뢰한다. “투고된 논문의
                주제의 전문가 3인을 相避原則(투고자와 같은 대학 출신이나 같은 직장 소속자는 피함)에 따라 선정한다.” 단, 영문 학회지의 경우는 투고자의 투고
                논문에 대한 영문교정 여부를 확인 후 뒤 심사과정을 진행한다.<br />
                ② 학술위원과 임원 등 학회의 관계자가 논문을 투고하였을 경우 학술위원장은 회장과 협의하여 논문심사자를 결정한다.<br />
                ③ 심사를 의뢰받은 논문 심사자는 의뢰받은 날로부터 15일 이내에 심사를 마치고, 학술위원회가 정한 ‘논문심사결과보고서’를 작성하여 그 결과를
                온라인심사관리시스템(JAMS)에 탑재한다. 온라인심사관리시스템(JAMS)에서는 심사위원의 총평 및 지적사항을 투고자에게 공개하여 논문의 수정
                및 보완이 이루어지도록 한다.<br />
                ④ 논문의 수정을 요청받은 투고자는 수정 요청을 받은 날로부터 7일 이내에 논문을 수정하여 온라인심사관리시스템(JAMS)에 수정논문과 답변서를
                탑재한다. 만약 기간 내에 특별한 사유없이 논문을 수정하여 제출하지 않은 경우에는 해당 호의 논문집에 논문을 게재할 수 없다.<br />
                ⑤ 수정 후 게재 판정을 받은 논문의 경우 수정논문과 답변서를 접수하고 학술위원원장이 1차 검토한 후 학술위원회에서 최종 게재판정을 하며, 재심
                판정을 받은 논문은 학술위원회 규칙 제 7조에 따라 심사과정을 진행하며 원심사자 또는 제4심사자에게 의뢰하여 학술위원장이 1차 검토한 후
                학술위원회에서 최종 게재판정을 한다.<br />
                ⑥ 논문 투고자는 논문심사결과에 대해 이의가 있을 경우에는 심사결과통지를 받은 날로부터 10일 이내에 학술위원회에 반론서와 함께 이의신청을
                제기할 수 있다. 학술위원장은 학술위원회의 자문을받아 이의신청이 접수된 논문에 대해서는 투고자의 반론서와 심사자의 논문심사결과보고서를
                검토하여 재심 여부를 결정한다.<br />
            </span>
        </ContentBox>
        <Chapter>
            제7조 (논문의 심사기준 및 최종판정)
        </Chapter>
        <ContentBox>
            <span>
                1. 심사자는 다음과 같은 심사기준을 참조하여 의뢰받은 논문을 심사하고, 그 결과를 학술위원장에게 통지하여야 한다.<br />
                ① 제2조에 따른 것인가의 여부(일치할 경우 1점을 가산하고, 불일치할 경우 반송함)<br />
                ② 논제의 참신성(9점 만점, 이하 같음)<br />
                ③ 연구 목적의 타당성<br />
                ④ 선행 연구의 평가 및 활용도<br />
                ⑤ 사용된 개념의 정확성<br />
                ⑥ 이론의 적합성<br />
                ⑦ 연구방법 선택의 적절성<br />
                ⑧ 연구방법 활용의 타당성<br />
                ⑨ 연구 결과 및 의도 도출의 적절성<br />
                ⑩ 논리 전개의 객관성 및 타당성<br />
                ⑪ 주제의 독창성<br />
                ⑫ 학문적 기여도<br />
                <br />
                2. 심사자는 항목별 심사결과를 종합하여 논문의 등급을 A(무수정 게재), B(수정 게재), C(수정 후 재심사), D(게재 불가)로 판정한다.<br />
                <br />
                3. 학술위원회는 심사자 3명의 논문심사결과보고서를 참조하여 다음과 같이 2단계로 판정한다.<br />
                ① 1단계(단, 논제가 학회지에 적합한 경우에 한함)<br />
                가) 게재 불가 : 심사자 3인의 평균 점수가 60점 미만<br />
                나) 게재 가능 : 심사자 3인의 평균 점수가 60점 이상<br />
                ② 2단계<br />
                가) 무수정 게재 : 평균 A등급<br />
                나) 수정 게재 : 평균 B등급<br />
                다) 수정 재심사 : 평균 C등급<br />
                라) 게재 불가 : 평균 C등급 미만<br />
                ③ 2단계 심사의 구체적 내용은 아래의 표와 같으며, ACD, AAD, ABD, BBD인 경우 학술위원장이 기존 심사위원 이외의 제 4의 심사위원에게 심사
                를 의뢰하여 최종 게재여부를 결정한다.<br />
            </span>
        </ContentBox>
        <Table style={{ margin: '2% 0' }}>
            <Tuple>
                <Tuple style={{ width: '50%' }} >
                    <Attributes style={{ width: '10%' }}>유형</Attributes>
                    <Attributes style={{ width: '30%' }}>심사자1</Attributes>
                    <Attributes style={{ width: '30%' }}>심사자2</Attributes>
                    <Attributes style={{ width: '30%' }}>심사자3</Attributes>
                </Tuple>
                <Attributes style={{ width: '50%' }}>최종판정</Attributes>
            </Tuple>
            <Tuple >
                <div style={{ width: '50%' }}>
                    <Tuple >
                        <Value style={{ width: '10%' }}>1</Value>
                        <Value style={{ width: '30%' }}>A</Value>
                        <Value style={{ width: '30%' }}>A</Value>
                        <Value style={{ width: '30%' }}>A</Value>
                    </Tuple>
                    <Tuple>
                        <Value style={{ width: '10%' }}>2</Value>
                        <Value style={{ width: '30%' }}>A</Value>
                        <Value style={{ width: '30%' }}>A</Value>
                        <Value style={{ width: '30%' }}>B</Value>
                    </Tuple>
                </div>
                <Value style={{ width: '50%' }}>A 수정/보완 없이 게재(평균 A등급) </Value>
            </Tuple>
            <Tuple >
                <div style={{ width: '50%' }}>
                    <Tuple >
                        <Value style={{ width: '10%' }}>3</Value>
                        <Value style={{ width: '30%' }}>A</Value>
                        <Value style={{ width: '30%' }}>A</Value>
                        <Value style={{ width: '30%' }}>C</Value>
                    </Tuple>
                    <Tuple>
                        <Value style={{ width: '10%' }}>4</Value>
                        <Value style={{ width: '30%' }}>A</Value>
                        <Value style={{ width: '30%' }}>A</Value>
                        <Value style={{ width: '30%' }}>D</Value>
                    </Tuple>
                    <Tuple>
                        <Value style={{ width: '10%' }}>5</Value>
                        <Value style={{ width: '30%' }}>A</Value>
                        <Value style={{ width: '30%' }}>B</Value>
                        <Value style={{ width: '30%' }}>B</Value>
                    </Tuple>
                    <Tuple>
                        <Value style={{ width: '10%' }}>6</Value>
                        <Value style={{ width: '30%' }}>A</Value>
                        <Value style={{ width: '30%' }}>B</Value>
                        <Value style={{ width: '30%' }}>C</Value>
                    </Tuple>
                    <Tuple>
                        <Value style={{ width: '10%' }}>7</Value>
                        <Value style={{ width: '30%' }}>A</Value>
                        <Value style={{ width: '30%' }}>B</Value>
                        <Value style={{ width: '30%' }}>D</Value>
                    </Tuple>
                    <Tuple>
                        <Value style={{ width: '10%' }}>8</Value>
                        <Value style={{ width: '30%' }}>B</Value>
                        <Value style={{ width: '30%' }}>B</Value>
                        <Value style={{ width: '30%' }}>B</Value>
                    </Tuple>
                    <Tuple>
                        <Value style={{ width: '10%' }}>9</Value>
                        <Value style={{ width: '30%' }}>B</Value>
                        <Value style={{ width: '30%' }}>B</Value>
                        <Value style={{ width: '30%' }}>C</Value>
                    </Tuple>
                </div>
                <Value style={{ width: '50%' }}>B 수정/보완 없이 게재(평균 B등급) </Value>
            </Tuple>
            <Tuple >
                <div style={{ width: '50%' }}>
                    <Tuple >
                        <Value style={{ width: '10%' }}>10</Value>
                        <Value style={{ width: '30%' }}>A</Value>
                        <Value style={{ width: '30%' }}>C</Value>
                        <Value style={{ width: '30%' }}>C</Value>
                    </Tuple>
                    <Tuple>
                        <Value style={{ width: '10%' }}>11</Value>
                        <Value style={{ width: '30%' }}>A</Value>
                        <Value style={{ width: '30%' }}>C</Value>
                        <Value style={{ width: '30%' }}>D</Value>
                    </Tuple>
                    <Tuple>
                        <Value style={{ width: '10%' }}>12</Value>
                        <Value style={{ width: '30%' }}>B</Value>
                        <Value style={{ width: '30%' }}>B</Value>
                        <Value style={{ width: '30%' }}>D</Value>
                    </Tuple>
                    <Tuple>
                        <Value style={{ width: '10%' }}>13</Value>
                        <Value style={{ width: '30%' }}>B</Value>
                        <Value style={{ width: '30%' }}>C</Value>
                        <Value style={{ width: '30%' }}>C</Value>
                    </Tuple>
                    <Tuple>
                        <Value style={{ width: '10%' }}>14</Value>
                        <Value style={{ width: '30%' }}>B</Value>
                        <Value style={{ width: '30%' }}>C</Value>
                        <Value style={{ width: '30%' }}>D</Value>
                    </Tuple>
                    <Tuple>
                        <Value style={{ width: '10%' }}>15</Value>
                        <Value style={{ width: '30%' }}>D</Value>
                        <Value style={{ width: '30%' }}>C</Value>
                        <Value style={{ width: '30%' }}>C</Value>
                    </Tuple>
                </div>
                <Value style={{ width: '50%' }}>C 수정/보완 후 재심(평균 C등급) </Value>
            </Tuple>
            <Tuple >
                <div style={{ width: '50%' }}>
                    <Tuple >
                        <Value style={{ width: '10%' }}>16</Value>
                        <Value style={{ width: '30%' }}>A</Value>
                        <Value style={{ width: '30%' }}>D</Value>
                        <Value style={{ width: '30%' }}>D</Value>
                    </Tuple>
                    <Tuple>
                        <Value style={{ width: '10%' }}>17</Value>
                        <Value style={{ width: '30%' }}>B</Value>
                        <Value style={{ width: '30%' }}>D</Value>
                        <Value style={{ width: '30%' }}>D</Value>
                    </Tuple>
                    <Tuple>
                        <Value style={{ width: '10%' }}>18</Value>
                        <Value style={{ width: '30%' }}>C</Value>
                        <Value style={{ width: '30%' }}>C</Value>
                        <Value style={{ width: '30%' }}>D</Value>
                    </Tuple>
                    <Tuple>
                        <Value style={{ width: '10%' }}>19</Value>
                        <Value style={{ width: '30%' }}>C</Value>
                        <Value style={{ width: '30%' }}>D</Value>
                        <Value style={{ width: '30%' }}>D</Value>
                    </Tuple>
                    <Tuple>
                        <Value style={{ width: '10%' }}>20</Value>
                        <Value style={{ width: '30%' }}>D</Value>
                        <Value style={{ width: '30%' }}>D</Value>
                        <Value style={{ width: '30%' }}>D</Value>
                    </Tuple>
                </div>
                <Value style={{ width: '50%' }}>D 게재불가 (평균 C미만) </Value>
            </Tuple>
        </Table>
        <ContentBox>
            <span>
                4. '무수정 게재' 판정을 받은 논문은 교정 및 교열을 거처 학회지에 게재하는 것으로 한다.<br />
                <br />
                5. '수정 게재' 판정을 받은 논문은 지정 기한 내에 논문을 수정하여 원 심사위원(부득이한 경우 학술위원)의 확인을 거쳐 학회지에 게재할 수 있다.<br />
                <br />
                6. '수정 재심사' 판정을 받은 투고자는 논문을 수정하여 재투고하여 재심사를 받아야 하며, 이 경우 소정의 심사비는 투고자가 부담하는 것으로 한다.<br />
                <br />
                7 . '게재 불가' 판정을 받은 투고자는 심사결과에 이의가 있을 경우에는 제6조 6항의 규정에 따라 이의를 신청할 수 있다.<br />
                <br />
                8 . 학술위원장은 심사자들간에 평가가 현저히 차이가 나는 경우 제4자에게 재심을 의뢰하거나 학술위원회의 자문을 받아 게재 여부를 결정할 수
                있다.<br />
                <br />
                9. 영문요약은 원어민 교정이 필수적으로 요구되며 교정한 결과를 입증해야 한다. 만일 투고자가 직접 원어민 교정이 어려운 경우 학술위원회에 위임
                할 수 있으며, 이러한 경우에 원어민 교정비용은 투고자가 부담하여야 한다.<br />
            </span>
        </ContentBox>
        <Chapter>
            제8조 (학회지 발간)
        </Chapter>
        <ContentBox>
            <span>
                ① 학회지의 발행 회수는 연4회이며, 추가 발행에 대해서는 학술위원회 회의에서 결정정한다.<br />
                또한 학회지의 발간 일자는 학술지 발간 월(3월,6월,9월,12월)의 30일로 한다.<br />
                ② 학회의 원로회원이나 학회의 재정 후원자 중 공헌이 많은 분의 수연(회갑, 정년퇴임, 고희, 희수, 팔순, 미수 등) 기념논문집을 발간하고자 할 때에는
                특별논문집을 발간할 수 있다.<br />
                ③ 세미나 및 학술대회의 발표논문에 대해 학술지와 동일한 심사를 거친 후 특집호를 발간할 수 있다.<br />
            </span>
        </ContentBox>
        <Chapter>
            제9조 (게재 순서의 결정)
        </Chapter>
        <ContentBox>
            <span>
                ① 게재 확정된 논문은 최초 투고순, 수정논문 접수순으로 게재하는 것을 원칙으로 하되, 학회지의 편집방침에 따라 학술위원회에서 조정할 수 있다.<br />
                ② 투고자의 요청이 있을 경우, 게재 확정 판정을 받은 논문에 대해 게재예정증명서를 발급할 수 있다.<br />
            </span>
        </ContentBox>
        <Chapter>
            제10조 (표절 등의 판정과 제재)
        </Chapter>
        <ContentBox>
            <span>
                1. 이중 게재 또는 표절된 논문은 원칙적으로 금지한다. 학술위원회는 학회지에 게재된 논문의 학술적 독창성에 대해 이의가 제기된 경우에는 6개월
                이내에 해당 논문의 표절, 이중게재, 절개, 독립 논문 등의 여부를 다음과 같은 절차에 따라 판정해야 한다.<br />
                <br />
                ① 학술위원장은 학회지에 게재된 논문의 투고자에게 해명을 요청하고, 원 심사자 3인에게 해당논문의 표절, 이중게재, 절개, 독립 논문 등의 판정을
                의뢰한다.<br />
                ② 학술위원장은 원 심사자의 의견이 현격하게 차이가 날 경우에는 우리 학회 회원이 아닌 제4의 전문가에게 논문의 검토를 의뢰할 수 있다.<br />
                ③ 학술위원장은 투고자의 해명서와 원 심사자 3인, 제4의 전문가의 의견을 학술위원회에 보고하고, 학술위원들의 의견을 청취하여 해당논문의 표절,
                이중게재, 절개, 독립 논문 등으로 판정한다.<br />
                ④ 학술대회 발표논문 및 세미나 Working paper와 학위 논문을 제출한 경우에는 논문의 첫 페이지에 이와 관련된 내용에 대해 주석으로 처리하는
                것을 권장한다.<br />
                <br />
                2. 용어의 정의<br />
                <br />
                ①‘표절’이란 타인의 연구내용과 주요 결과를 논문작성에 활용하면서 출처의 표기 없이 상당부분 차용하여 자신의 연구결과인 것처럼 발표하는 것을
                이른다.<br />
                ② ‘이중게재’란 논문작성에 활용된 자료와 연구방법이 같고, 논문의 주요 내용과 주제가 70% 이상 같은 논문을 다른 논문인 것처럼 게재함을 이른다.<br />
                ③ 절개’란 같은 자료와 유사한 유형의 연구 방법을 가지고 일반적으로 도출할 수 있는 연구결과를 단일 논문으로 작성하지 않고 논문의 내용을 일부
                절개하여 두 개의 논문으로 작성함을 이른다.<br />
                ④ ‘독립 논문’이란 논문의 주제, 방법론, 자료 등이 완전히 독립적인 논문임을 이른다.<br />
                <br />
                3. 제 재<br />
                <br />
                ① 표절로 판정된 논문은 게재를 취소하고, 그 집필자(공동 연구자 포함)의 회원 자격을 2년 동안 정지한다.<br />
                ② 이중게재로 판정된 논문은 게재를 취소하고, 그 집필자(공동 연구자 포함)의 회원 자격을 1년 동안 제한한다.<br />
                ③ 절개로 판정된 논문의 집필자에게는 경고 또는 최장 6개월간 학회 활동을 제한한다.<br />
                <br />
                4. 공 지<br />
                <br />
                ① 학술위원장은 최종 판정 결과를 집필자에게 통지하고, 그 사실을 학회지에 공지한다.<br />
                ② 게재 취소된 논문은 학회지 논문 데이터 베이스에서 삭제한다.<br />
            </span>
        </ContentBox>
        <Chapter>
            제11조 (학술발표회)
        </Chapter>
        <ContentBox>
            <span>
                ① 정기 학술발표회는 춘추 2회 개최함을 원칙으로 하고, 그밖에 필요에 따라 임시 학술발표회를 개최할 수 있다.<br />
                ② 학술발표회에서 발표할 주제는 지정 연구과제와 자유주제로 구분한다.<br />
                ③ 지정 연구과제는 위원회에서 미리 선정하여, 발표일로부터 적어도 3개월 이전에 전 회원에게 알리어 희망자를 모집한다.<br />
                ④ 회원 중 지정 연구과제의 발표를 희망하는 사람은 학술발표대회 예정 2개월 전까지 서면 또는 구두로 신청하여야 한다.<br />
                ⑤ 학술위원회가 필요하다고 인정할 때에는 발표할 회원을 미리 지명하여 연구 발표토록 할 수 있다.<br />
                ⑥ 자유주제 발표는 제2조의 범위 안에서 회원의 연구결과를 발표하는 것으로, 희망자는 학술대회 예정 2개월 전에 서면 또는 구두로 신청하여야
                한다.<br />
            </span>
        </ContentBox>
        <Chapter>
            제12조 (상)
        </Chapter>
        <ContentBox>
            <span>
                ① 학술위원회는 학문적 공헌도가 뛰어난 논문 및 저술에 대해 상을 수여할 수 있다.<br />
                ② 시상의 종류 및 선정 방법 등에 대해서는 학술위원회에서 별도로 정한다.<br />
            </span>
        </ContentBox>
        <Chapter>
            제13조 (수당 등)
        </Chapter>
        <ContentBox>
            <span>
                ① 학술위원회에 참석하는 위원에게는 예산의 범위 안에서 수당과 여비를 지급할 수 있다.<br />
                ② 학술위원회는 연구과제의 발표자에게 예산의 범위 안에서 연구비를 지급할 수 있다. 특히 지정 연구과제에 대하여 후원자로부터 특별 조치가 있을
                경우, 이사회의 승인을 받아 이를 예산외로 관리할 수 있다.<br />
            </span>
        </ContentBox>
        <Chapter>
            제14조 (저작권 활용 동의 절차 및 권한 명세)
        </Chapter>
        <ContentBox>
            <span>
                ① 본 학회지는 연구윤리 확보를 위한 지침(교육부훈령 제153호, 2015.11.3., 일부 개정)에서 규정하는 대로 연구자가 연구 활동을 통해 얻은 연구
                자료를 활용하여 도출한 체계화된 결과, 최종적으로 얻은 연구결과와 그것을 기술한 학술적 저작물과 지식재산을 존중한다.<br />
                ② 학회지의 게재는 원고의 저작권이 저자로부터 학회로 이양되는 것을 저자가 승인한 것으로 인정하며 연구자가 이 연구 결과물을 다른 학술지나
                서적에 추후 게재할 경우 학술위원의 서면 동의를 얻어야 한다.<br />
            </span>
        </ContentBox>
        <Chapter>
            부&emsp;칙
        </Chapter>
        <ContentBox>
            <span>
                01. 이 규칙은 1993년 03월 01일부터 시행한다.<br />
                02. 이 규칙의 시행과 동시에 ‘한국해운학회지 편집위원회 규칙’은 폐지한다.<br />
                03. 이 규칙은 2000년 05월 01일부터 시행한다.<br />
                04. 이 규칙은 2001년 04월 20일부터 시행한다.<br />
                05. 이 규칙은 2003년 02월 21일부터 시행한다.<br />
                06. 이 규칙은 2004년 02월 13일부터 시행한다.<br />
                07. 이 규칙은 2006년 09월 10일부터 시행한다.<br />
                08. 이 규칙은 2009년 12월 12일부터 시행한다.<br />
                09. 이 규칙은 2015년 02월 18일부터 시행한다.<br />
                10. 이 규칙은 2016년 02월 27일부터 시행한다.<br />
            </span>
        </ContentBox>
    </Container>
}

export default Rule;