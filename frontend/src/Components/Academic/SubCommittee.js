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
    @media only screen and (max-width: 653px) {
        font-size:1em;
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
    font-size: 0.8em;
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
    font-size: 0.8em;
}
`;

const SubCommittee = function () {

    return <Container>
        <Box>
            <Chapter>학술위원회 산하 분과위원회</Chapter>
            <Table>
                <Tuple>
                    <Attributes>분과위원회</Attributes>
                    <Attributes>위원장</Attributes>
                    <Attributes style={{ width: '50%' }}>위원</Attributes>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '25%' }}>학술 및 포상 심사위원회</Value>
                    <Value style={{ width: '25%' }}>이제현(한남대)</Value>
                    <div style={{ width: '50%' }}>
                        <Value>김창범(전남대)</Value>
                        <Value>안우철(강릉원주대)</Value>
                        <Value>정태원(성결대)</Value>
                        <Value>조혁수(충남대)</Value>
                    </div>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '25%' }}>국제협력위원회</Value>
                    <Value style={{ width: '25%' }}>한종길(성결대)</Value>
                    <div style={{ width: '50%' }}>
                        <Value>이정선(경남과학기술대)</Value>
                        <Value>여기태(인천대)</Value>
                        <Value>정태원(성결대)</Value>
                        <Value>정현재(평택대)</Value>
                        <Value>조혁수(충남대)</Value>
                        <Value>안우철(강릉원주대)</Value>
                    </div>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '25%' }}>윤리위원회</Value>
                    <Value style={{ width: '25%' }}>하영석(계명대)</Value>
                    <div style={{ width: '50%' }}>
                        <Value>이제헌(한남대)</Value>
                        <Value>이홍걸(경남대)</Value>
                        <Value>추봉성(순천향대)</Value>
                    </div>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '25%' }}>산학협력위원회</Value>
                    <Value style={{ width: '25%' }}>박영태(동의대)</Value>
                    <div style={{ width: '50%' }}>
                        <Value>정태원(성결대)</Value>
                        <Value>하병천(서강대)</Value>
                        <Value>이성우(KMI)</Value>
                    </div>
                </Tuple>
            </Table>
        </Box>
    </Container>
}

export default SubCommittee;