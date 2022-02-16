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
    @media only screen and (max-width:280px) {
        font-size:0.7em;
    }
`;

const History2005 = function () {

    return (
        <HistoryBox >
            <Line />
            <Circle />
            <DivideRight>
                <ContentYear>2015</ContentYear>
                <Content>
                    <ContentSubYear>12.4</ContentSubYear>
                    <ContentText>
                        제3회 해운물류 대학(원)생 논문경진대회
                    </ContentText>
                </Content>
                <Content>
                    <ContentSubYear>12.3~4</ContentSubYear>
                    <ContentText>
                        북방물류 컨퍼런스(LOGISTICS CONFERENCE<br />
                        FOR NORTHERN REGION)주관
                    </ContentText>
                </Content>
                <Content>
                    <ContentSubYear>10.20~21</ContentSubYear>
                    <ContentText>
                        &#34;통일대비 한반도의 북방물류시장 연계방안&#34;<br />
                        국제세미나 공동주최
                    </ContentText>
                </Content>
                <Content>
                    <ContentSubYear>6.24~27</ContentSubYear>
                    <ContentText>
                        제8회 2015 INTERNATIONAL CONFERENCE<br />
                        OF ASIAN SHIPPING AND LOGISTICS 개최<br />
                    </ContentText>
                </Content>
                <Content>
                    <ContentSubYear>4.24</ContentSubYear>
                    <ContentText>
                        제61회 해운물류학회 춘계 정기학술대회
                    </ContentText>
                </Content>
                <Content>
                    <ContentSubYear>2.26</ContentSubYear>
                    <ContentText>
                        제60회 해운물류학회 정기학술대회
                    </ContentText>
                </Content>
            </DivideRight>

            <Circle />

            <DivideLeft>
                <ContentYear >2014</ContentYear>
                <ContentLeft  >
                    <ConstSubYearLeft>11.28</ConstSubYearLeft>
                    <ContentText>
                        제59회 한국해운물류학회 정기학술대회 및 <br />
                        제2회 해운물류 대학(원)생 논문경진대회개최
                    </ContentText>
                </ContentLeft>
                <ContentLeft  >
                    <ConstSubYearLeft>10.30~11.1</ConstSubYearLeft>
                    <ContentText>
                        제7회 INTERNATIONAL CONFERENCE OF<br />
                        ASIAN SHIPPING AND LOGISTICS 개최
                    </ContentText>
                </ContentLeft>
                <ContentLeft  >
                    <ConstSubYearLeft>5.30</ConstSubYearLeft>
                    <ContentText>
                        제58회 해운물류학회 춘계학술대회 개최
                    </ContentText>
                </ContentLeft>
                <ContentLeft>
                    <ConstSubYearLeft>2.21</ConstSubYearLeft>
                    <ContentText>
                        제57회 해운물류학회 정기학술대회 개최
                    </ContentText>
                </ContentLeft>
            </DivideLeft>

            <Circle />
            <DivideRight>
                <ContentYear>2013~2011</ContentYear>
                <Content>
                    <ContentSubYear>2013.8.30~31</ContentSubYear>
                    <ContentText>
                        THE 6TH ICASL 개최<br />
                        (FUKAE CAMPUS OF KOBE UNIV)
                    </ContentText>
                </Content>
                <Content>
                    <ContentSubYear>2013.7.5</ContentSubYear>
                    <ContentText>
                        2013년 제1회 해운물류정책포럼<br />
                        (한국선주협회)
                    </ContentText>
                </Content>
                <Content>
                    <ContentSubYear>2012.12.14</ContentSubYear>
                    <ContentText>
                        영문지 ASIAN JOURNAL OF SHIPPING<br />
                        AND LOGISTICS SCOPUS 색인 등재
                    </ContentText>
                </Content>
                <Content>
                    <ContentSubYear>2012.6.4</ContentSubYear>
                    <ContentText>
                        경인아라뱃길 개통기념 물류활성화<br />
                        대토론회 공동 주관(경인아라뱃길)
                    </ContentText>
                </Content>
                <Content >
                    <ContentSubYear>2011.5.5~6</ContentSubYear>
                    <ContentText>
                        제4회 INTERNATIONAL CONFERENCE<br />
                        OF ASIAN SHIPPING AND LOGISTICS 개최
                    </ContentText>
                </Content>
            </DivideRight>

            <Circle />
            <DivideLeft>
                <ContentYear>2010~2005</ContentYear>
                <ContentLeft>
                    <ConstSubYearLeft>2010.4.20-23</ConstSubYearLeft>
                    <ContentText>
                        제6회 광양항국제포럼 및<br />
                        제3회 AJSL국제학술대회
                    </ContentText>
                </ContentLeft>
                <ContentLeft>
                    <ConstSubYearLeft>2009.6.10~11</ConstSubYearLeft>
                    <ContentText>
                        포항국제컨테이너터미널 개장 기념<br />
                        마케팅 페어 및 제2회 ASIAN JOURNAL<br />
                        OF SHIPPING AND LOGISTICS 국제학술대회
                    </ContentText>
                </ContentLeft>
                <ContentLeft>
                    <ConstSubYearLeft>2008.10.22~23</ConstSubYearLeft>
                    <ContentText>
                        INTERNATIONAL CONFERENCE<br />
                        FOR LAUNCHING THE ASIAN JOURNAL<br />
                        OF SHIPPING AND LOGISTICS<br />
                        (VENUE:SEJONG HOTEL)
                    </ContentText>
                </ContentLeft>
                <ContentLeft>
                    <ConstSubYearLeft>2006.4.19~22</ConstSubYearLeft>
                    <ContentText>
                        제4회 광양항국제포럼 및 해운물류연구<br />
                        50호 발간 기념 국제학술대회 개최
                    </ContentText>
                </ContentLeft>
                <ContentLeft>
                    <ConstSubYearLeft>2005.2.17</ConstSubYearLeft>
                    <ContentText>
                        제1회 초청학술상 저술<br />
                        (SEVEN MOUNTAIN PRIZE)시상
                    </ContentText>
                </ContentLeft>
            </DivideLeft>

        </HistoryBox>
    )
}
export default History2005