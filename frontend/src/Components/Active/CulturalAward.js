import React from "react";
import styled from "styled-components";

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
    @media only screen and (max-width: 768px) {
    }
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
    @media only screen and (max-width: 653px) {
        font-size:0.8em;
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
        font-size:0.8em;
    }
`;

const Value2 = styled(Value)`
    text-align: start;
    display: flex;
    justify-content: flex-start;
    @media only screen and (max-width: 768px) {
        font-size:0.8em;
    }
`;



const CulturalAward = function () {
    return <Container>
        <Box>
            <Chapter>시상규칙</Chapter>
            <ContentBox>
                <span>
                    第1條  (目的)  이 規則은 社團法人 韓國海運物流學會(이하 "學會"라 한다)가 授與하는 海事文化賞의 施賞基準과 節次에 관한 事項을
                    規定함을 目的으로 한다.<br />
                    <br />
                    第2條  (施賞의 原則)  海事文化賞은 제4조에 해당하는 자로서 海運學의 暢達과 海運産業의 發展에 이바지한 功勞가 顯著한 者에게 授與한다.<br />
                    <br />
                    第3條  (施賞時期)  이 賞은 學會의 每年 定期總會에서 施賞한다.<br />
                    <br />
                    第4條  (受賞者의 資格)  受賞者는 海運學, 海事法學 또는 海運物流産業의 發展에 寄與한 功勞가 顯著하며, 다음 各號의 1에 該當하는
                    者로서 理事 3人 以上 또는 회원(최근 2년 이상 연회비를 납부한 회원, 이하 같음) 10인 이상의 推薦(功績調書 添附)을 받아 銓衡委員會의
                    審議를 거쳐 理事會의 承認을 받은 者로 한다.<br />
                    1. 정규 교육기관과 연구기관에서 多年間 海運學 또는 海事法學을 연구하고 10篇 以上의 연구실적(著書를 包含한다)이 있는 者<br />
                    2. 海運物流業界에서 長期間 經營에 從事한 자<br />
                    3. 海運 및 港灣官廳에서 多年間 海運 港灣 行政에 從事한 者<br />
                    <br />
                    第5條  (受賞人員)  受賞者는 每回 1人으로 한다.<br />
                    <br />
                    第6條  (銓衡委員會)<br />
                    ① 前條의 受賞者를 審議하기 위하여 銓衡委員會를 두며, 그 委員은 前任 會長과 會長團 약간 명으로 構成하되 現任 會長이 委員長이 된다.<br />
                    ② 前項의 委員會는 滿場一致로 受賞者를 選定하는 것을 原則으로 한다.<br />
                    <br />
                    第7條 (수상자 선정 절차) 수상자는 다음과 같은 절차에 따라 선정한다.<br />
                    ① 사무국은 최소한 2달 이상 수상 후보자에 대한 추천을 공모해야 한다.<br />
                    ② 전형위원회는 접수된 수상 후보자의 공적조서 등을 면밀하게 검토하여 수상자를 결정하고, 최소 한달 이상 학회 홈페이지 등을 통해 공개해야 한다.<br />
                    ③ 회원 10인 이상이 수상 후보자 선정에 대해 이견을 표명하였을 때는 전형위원회는 수상자 선정을 재심할 수 있다.<br />
                    <br />
                    海事文化賞施賞規則<br />
                    <br />
                    附    則<br />
                    1. 이 規則은 1990年 3月 23日부터 施行한다.<br />
                    2. 이 規則은 2001年 4月 20日부터 施行한다.<br />
                    3. 이 規則은 2003年 2月 21日부터 施行한다.<br />
                </span>
            </ContentBox>
        </Box>
    </Container >
}

export default CulturalAward