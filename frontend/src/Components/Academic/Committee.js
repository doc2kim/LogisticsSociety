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

const Committee = function () {

    return <Container>
        <Box>
            <Chapter>해운물류연구</Chapter>
            <Table>
                <Tuple>
                    <Tuple style={{ width: '50%' }}>
                        <Attributes style={{ width: '50%' }}>직책</Attributes>
                        <Attributes style={{ width: '50%' }}>성명</Attributes>
                    </Tuple>
                    <Attributes style={{ width: '50%' }}>소속</Attributes>
                </Tuple>
                <Tuple>
                    <Tuple style={{ width: '50%' }}>
                        <Value style={{ width: '50%' }}>위원장</Value>
                        <Value style={{ width: '50%' }}>안우철</Value>
                    </Tuple>
                    <Value style={{ width: '50%' }}>강릉원주대학교 교수</Value>
                </Tuple>
                <Tuple>
                    <Tuple style={{ width: '50%' }}>
                        <Value style={{ width: '50%' }}>부위원장</Value>
                        <Value style={{ width: '50%' }}>문상영</Value>
                    </Tuple>
                    <Value style={{ width: '50%' }}>한경대학교 교수</Value>
                </Tuple>
                <Tuple>
                    <Tuple style={{ width: '50%' }}>
                        <Value style={{ width: '50%' }}>위원</Value>
                        <div style={{ width: '50%' }}>
                            <Value>하병천</Value>
                            <Value>추봉성</Value>
                            <Value>배희성</Value>
                            <Value>허윤석</Value>
                            <Value>박두진</Value>
                            <Value>이성우</Value>
                            <Value>송민근</Value>
                            <Value>Vihn V. THAI</Value>
                        </div>
                    </Tuple>
                    <div style={{ width: '50%' }}>
                        <Value>서강대학교 교수</Value>
                        <Value>순천향대학교 교수</Value>
                        <Value>경기대학교 교수</Value>
                        <Value>제주대학교 교수</Value>
                        <Value>동명대학교 교수</Value>
                        <Value>한국해양수산개발원 연구위원</Value>
                        <Value>전주대학교 교수</Value>
                        <Value>RMIT Uni.Australia</Value>
                    </div>
                </Tuple>
                <Tuple>
                    <Tuple style={{ width: '50%' }}>
                        <Value style={{ width: '50%' }}>편집국장</Value>
                        <Value style={{ width: '50%' }}>정현재</Value>
                    </Tuple>
                    <Value style={{ width: '50%' }}>평택대학교 교수</Value>
                </Tuple>
            </Table>
        </Box>
    </Container>
}

export default Committee;