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
    border:0.2vw solid rgb(18, 95, 163);
    border-radius:50%;
    background-color:white;
    width:0.5vw;
    height:0.5vw;
    position:absolute;
    left:49.4%;
    margin-top:1.2vw;
    @media only screen and (max-width: 768px) {
        width:1.2vw;
        height:1.2vw;
        border:0.5vw solid rgb(18, 95, 163);
        left: 0;
    }
`;

const Line = styled.div`
    height: 100%;
    width: 0.2vw;
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
    font-size:1.3vw;
    font-weight:bold;
    padding: 1vw 1.5vw 0 1.7vw;
    @media only screen and (max-width: 768px) {
        font-size: 1em;
        padding-left:6%;
    }
`;

const Content = styled.div`
    font-size:0.8vw;
    display: flex;
    padding-top:1vw;
    line-height:1.5vw;
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
    margin: 0 6%;
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

const History2016 = function () {
    return (
        <HistoryBox >
            <Line />
            <Circle />
            <DivideRight>
                <ContentYear>2019</ContentYear>
                <Content>
                    <ContentSubYear>11.8</ContentSubYear>
                    <ContentText>
                        제74회 한국해운물류학회 추계 정기학술대회 및
                        제8회 해운물류 대학(원)생 논문 경진대회
                    </ContentText>
                </Content>
                <Content>

                    <ContentSubYear>6.27~29</ContentSubYear>

                    <ContentText>
                        제12회 아시아해운물류국제학술대회 참가
                    </ContentText>
                </Content>
                <Content>

                    <ContentSubYear>5.24</ContentSubYear>

                    <ContentText>
                        제73회 한국해운물류학회 춘계 정기학술대회 및
                        제7회 해운물류 대학(원)생 논문 경진대회
                    </ContentText>
                </Content>
                <Content>

                    <ContentSubYear>3.8</ContentSubYear>

                    <ContentText>
                        제72회 한국해운물류학회 정기총회 및 정기학술대회
                    </ContentText>
                </Content>
            </DivideRight>

            <Circle />

            <DivideLeft>
                <ContentYear >2018</ContentYear>
                <ContentLeft>
                    <ConstSubYearLeft>10.26</ConstSubYearLeft>
                    <ContentText>
                        제71회 한국해운물류학회 추계 정기학술대회 및
                        제6회 해운물류 대학(원)생 논문경진대회개최
                    </ContentText>
                </ContentLeft>
                <ContentLeft>
                    <ConstSubYearLeft>6.21~23</ConstSubYearLeft>
                    <ContentText>
                        제11회 아시아해운물류국제학술대회 참가
                    </ContentText>
                </ContentLeft>
                <ContentLeft >
                    <ConstSubYearLeft>5.25</ConstSubYearLeft>
                    <ContentText>
                        제70회 한국해운물류학회 춘계 정기학술대회 및
                        제5회 해운물류 대학(원)생 논문경진대회개최
                    </ContentText>
                </ContentLeft>
                <ContentLeft>
                    <ConstSubYearLeft>2.23</ConstSubYearLeft>
                    <ContentText>
                        제69회 한국해운물류학회 추계 정기학술대회 및
                        해운물류학회 이사회 및 정기총회
                    </ContentText>
                </ContentLeft>
            </DivideLeft>

            <Circle />

            <DivideRight>
                <ContentYear>2017</ContentYear>
                <Content>
                    <ContentSubYear>10.20</ContentSubYear>
                    <ContentText>
                        제68회 한국해운물류학회 추계 정기학술대회
                        및 해양수산부 장관상
                    </ContentText>
                </Content>
                <Content>
                    <ContentSubYear>6.22~24</ContentSubYear>
                    <ContentText>
                        제10회 아시아해운물류국제학술대회 참가
                    </ContentText>
                </Content>
                <Content>
                    <ContentSubYear>5.19</ContentSubYear>
                    <ContentText>
                        제67회 한국해운물류학회 춘계 정기학술대회
                    </ContentText>
                </Content>
                <Content>
                    <ContentSubYear>2.24</ContentSubYear>
                    <ContentText>
                        제66회 해운물류학회 정기 학술대회, 해운물류
                        학회 이사회 및 정기총회
                    </ContentText>
                </Content>
            </DivideRight>

            <Circle />

            <DivideLeft>
                <ContentYear >2016</ContentYear>
                <ContentLeft>
                    <ConstSubYearLeft>10.12</ConstSubYearLeft>
                    <ContentText>
                        제4회 해운물류 대학(원)생 논문경진대회
                    </ContentText>
                </ContentLeft>
                <ContentLeft>
                    <ConstSubYearLeft>10.12</ConstSubYearLeft>
                    <ContentText>
                        2016년 인천항 물동량 창출을 위한 학술포럼 세미나 개최
                    </ContentText>
                </ContentLeft>
                <ContentLeft>
                    <ConstSubYearLeft>7.6~9</ConstSubYearLeft>
                    <ContentText>
                        제9회 2016 INTERNATIONAL CONFERENCE
                        OF ASIAN SHIPPING AND LOGISTICS 개최
                    </ContentText>
                </ContentLeft>
                <ContentLeft>
                    <ConstSubYearLeft>5.27</ConstSubYearLeft>
                    <ContentText>
                        제64회 한국해운물류학회 춘계 정기학술대회
                    </ContentText>
                </ContentLeft>
            </DivideLeft>
        </HistoryBox >
    )
}
export default History2016