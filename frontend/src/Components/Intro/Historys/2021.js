import React from "react";
import styled from "styled-components";


const HistoryBox = styled.div`
    position: relative;
`;

const DivideRight = styled.div`
    padding-left: 50%;
    @media only screen and (max-width: 768px) {
        padding:0;
    }
`;

const DivideLeft = styled.div`
    padding-right:50%;
    text-align:end;
    @media only screen and (max-width: 768px) {
        padding:0;
        text-align: start;
    }
`;

const Circle = styled.div`
    border:0.3em solid rgb(18, 95, 163);
    border-radius:50%;
    background-color:white;
    width:0.8em;
    height:0.8em;
    position:absolute;
    left:49.2%;
    margin-top:1.2em;
    @media only screen and (max-width: 768px) {
        width:1.2vw;
        height:1.2vw;
        border:0.5vw solid rgb(18, 95, 163);
        left: 0;
    }
`;

const Line = styled.div`
    height: 100%;
    width: 0.3em;
    background-color:rgba(0, 0, 0, .2);
    position: absolute;
    left: 50%;
    @media only screen and (max-width: 768px) {
        width:0.7vw;
        left: 0.8vw;
    }
`;



const ContentYear = styled.div`
    color:rgb(18, 95, 163);
    font-size:1.3em;
    font-weight:bold;
    padding: 1em 1.5em 0 1.6em;
    @media only screen and (max-width: 768px) {
        font-size: 1em;
        padding-left:6%;
    }
`;

const Content = styled.div`
    font-size:1em;
    display: flex;
    padding-top:1em;
    line-height:1.5em;
    width: 100%;
    @media only screen and (max-width: 768px) {
        font-size:0.8em;
        line-height:2em;
        padding: 0.8em 0;
        flex-direction: column;
    }
`;


const ContentLeft = styled(Content)`
    justify-content: end;
    @media only screen and (max-width: 768px) {
        justify-content: start;
    }
`;

const ContentSubYear = styled.span`
    opacity: 0.8;
    font-weight:bold;
    margin: 0 2.1em;
    @media only screen and (max-width: 768px) {
        margin: 0 6%;
    }
`;

const ConstSubYearLeft = styled(ContentSubYear)`
  order:1;
  @media only screen and (max-width: 768px) {
      order:0;
  }
`;

const ContentText = styled.span`
    opacity:0.7;
    @media only screen and (max-width: 768px) {
        padding:0 10%;
    }
    @media only screen and (max-width: 280px) {
        font-size:0.7em;
    }
`;


const History2021 = function () {
    return <HistoryBox >
        <Line />
        <Circle />
        <DivideRight>
            <ContentYear>2021</ContentYear>
            <Content>
                <ContentSubYear>12.10</ContentSubYear>
                <ContentText>
                    제78회 한국해운물류학회 추계 정기학술대회
                </ContentText>
            </Content>
            <Content>
                <ContentSubYear>12.3</ContentSubYear>
                <ContentText>
                    제14회 ICASL(International Conference of Asian Shipping and Logistics) 개최
                </ContentText>
            </Content>
            <Content>
                <ContentSubYear>8.27</ContentSubYear>
                <ContentText>
                    한국해운항만학술단체협의회 공동학술대회
                </ContentText>
            </Content>
            <Content>
                <ContentSubYear>5.28</ContentSubYear>
                <ContentText>
                    제77회 한국해운물류학회 춘계 정기학술대회
                </ContentText>
            </Content>

        </DivideRight>
    </HistoryBox>
}


export default History2021;