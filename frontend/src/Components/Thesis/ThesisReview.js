import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fileAxios } from "../../ApiContext/RestApi";

const Container = styled.div`
padding-bottom: 10%;
`;

const Chapter = styled.h1`
    margin-top: 2%;
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
        font-size: 0.8em;
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
        font-size: 0.5em;
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
        font-size: 0.5em;
    }
`;

const Button = styled.a`
    display: block;
    background-color:#165fa3;
    width:20%;
    padding: 1.5% 5%;
    color: white;
    font-size: medium;
    text-align: center;
    margin-top:3%;
    @media only screen and (max-width: 653px) {
        width:50%
    }
`;



const ThesisReview = function () {
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
        <Chapter>
            심사규정(학술위원회 규칙의 제 7조 논문의 심사기준 및 최종 판정)
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
        {fileData.map(function (i) {
            return i.file.includes('evaluate') && <Button href={i.file}><span>논문심사결과보고서 파일 다운받기</span></Button>
        })}

    </Container>
}

export default ThesisReview;