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


const History1981 = function () {
    return (
        <HistoryBox >
            <Line />
            <Circle />
            <DivideRight>
                <ContentYear>2004</ContentYear>
                <Content>
                    <ContentSubYear>12.16~17</ContentSubYear>
                    <ContentText>
                        제 2회 동해항국제심포지엄 개최 <br />
                        (강원도, 동해시와 공동주관)
                    </ContentText>
                </Content>
                <Content>
                    <ContentSubYear>8.31</ContentSubYear>
                    <ContentText>
                        국제해운물류정책토론회 개최(전경련 회관)<br />
                        주제 : 외국 선사의 전략화물운송시장 진입이<br />
                        국민경제에 미치는 영향
                    </ContentText>
                </Content>
                <Content>
                    <ContentSubYear>7.7~7.11</ContentSubYear>
                    <ContentText>
                        제1회 해운물류선상포럼 개최(평택-일조-곡부-태산)<br />
                        후원: 쎄븐마운틴그룹・황해페리・장금상선・조강해운<br />
                        국민경제에 미치는 영향
                    </ContentText>
                </Content>
                <Content>
                    <ContentSubYear>3.25</ContentSubYear>
                    <ContentText>
                        중화항운협회와 중화해운연구협회와<br />
                        학술교류협정 체결<br />
                    </ContentText>
                </Content>
                <Content >
                    <ContentSubYear>2.13</ContentSubYear>
                    <ContentText>
                        제13회 해사문화상・제2회 초청학술상<br />
                        제2회 해운물류 E-BIZ대상 시상<br />
                    </ContentText>
                </Content>
            </DivideRight>

            <Circle />
            <DivideLeft>
                <ContentYear >2003~2002</ContentYear>
                <ContentLeft >
                    <ConstSubYearLeft>2003.11</ConstSubYearLeft>
                    <ContentText>
                        &lt;해운연구 : 이론과 실천&gt;종간호(제6호)발행
                    </ContentText>
                </ContentLeft>
                <ContentLeft >
                    <ConstSubYearLeft>2003.8.29</ConstSubYearLeft>
                    <ContentText>
                        동해항 활성화에 관한 심포지엄 개최<br />
                        (동해시 문화예술회관)
                    </ContentText>
                </ContentLeft>
                <ContentLeft >
                    <ConstSubYearLeft>2003.2.21</ConstSubYearLeft>
                    <ContentText>
                        사단법인 한국해운물류학회로 변경
                    </ContentText>
                </ContentLeft>
                <ContentLeft >
                    <ConstSubYearLeft>2002.8.16</ConstSubYearLeft>
                    <ContentText>
                        제1회 초청학술상 시상 및<br />
                        제1회 해운물류 E-비즈니스대상 시상
                    </ContentText>
                </ContentLeft>
                <ContentLeft>
                    <ConstSubYearLeft>2002.4.24-26</ConstSubYearLeft>
                    <ContentText>
                        창립 20주년 기념 국제학술대회 개최<br />
                        (공동주최:광양시)
                    </ContentText>
                </ContentLeft>
            </DivideLeft>

            <Circle />

            <DivideRight>
                <ContentYear>2001~2000</ContentYear>
                <Content>
                    <ContentSubYear>2001.5.5</ContentSubYear>
                    <ContentText>
                        &lt;알림판&gt; 창간
                    </ContentText>
                </Content>
                <Content>
                    <ContentSubYear>2001.4.20</ContentSubYear>
                    <ContentText>
                        ⌜해운연구:이론과 실천⌟ 창간
                    </ContentText>
                </Content>
                <Content>
                    <ContentSubYear>2001.4.20</ContentSubYear>
                    <ContentText>
                        일본해운경제학회(회장궁하국생)와<br />
                        학술교류협정 체결
                    </ContentText>
                </Content>
                <Content>
                    <ContentSubYear>2001.12.13</ContentSubYear>
                    <ContentText>
                        ⌜한국해운학회지⌟,한국학술진흥재단<br />
                        등재후보지 선정
                    </ContentText>
                </Content>
                <Content>
                    <ContentSubYear>2000.10.10-11</ContentSubYear>
                    <ContentText>
                        제30회 정기학술대회 기념 국제학술대회 개최
                    </ContentText>
                </Content>
            </DivideRight>

            <Circle />

            <DivideLeft>
                <ContentYear >1993~1984</ContentYear>
                <ContentLeft>
                    <ConstSubYearLeft>1993.10.19-21</ConstSubYearLeft>
                    <ContentText>
                        93 아시아태평양지역국제해운학술대회<br />
                        (APSCO)개최
                    </ContentText>
                </ContentLeft>
                <ContentLeft>
                    <ConstSubYearLeft>1992.4.17</ConstSubYearLeft>
                    <ContentText>
                        제1회해사문화상시상
                    </ContentText>
                </ContentLeft>
                <ContentLeft>
                    <ConstSubYearLeft>1990.6.28</ConstSubYearLeft>
                    <ContentText>
                        외항해운업 발전을 위한 합리적<br />
                        정책방향에 관한 연구 수탁(선주협회)
                    </ContentText>
                </ContentLeft>
                <ContentLeft>
                    <ConstSubYearLeft>1984.10.20</ConstSubYearLeft>
                    <ContentText>
                        ⌜한국해운학회지⌟ 창간
                    </ContentText>
                </ContentLeft>
                <ContentLeft>
                    <ConstSubYearLeft>1984.7.1</ConstSubYearLeft>
                    <ContentText>
                        법인설립 등<br />
                        (서울지방민사법원 등기번호 2060)
                    </ContentText>
                </ContentLeft>
                <ContentLeft>
                    <ConstSubYearLeft>1984.5.23</ConstSubYearLeft>
                    <ContentText>
                        사단법인 설립인가<br />
                        (해운항만청 허가번호 제217호)
                    </ContentText>
                </ContentLeft>
            </DivideLeft>

            <Circle />

            <DivideRight>
                <ContentYear>1982~1981</ContentYear>
                <Content>
                    <ContentSubYear>1982.8.27</ContentSubYear>
                    <ContentText>
                        창립기념 1회 학술발표회 개최
                    </ContentText>
                </Content>
                <Content>
                    <ContentSubYear>1982.8.27</ContentSubYear>
                    <ContentText>
                        창립 총회 개최(선주협회 회의실)<br />
                        회 장:윤상송<br />
                        부회장:한동호,박현규,서병기,신민교<br />
                        이 사:이광득,김동균 등 36인<br />
                        감 사:이균성,최재수<br />
                    </ContentText>
                </Content>
                <Content>
                    <ContentSubYear>1981.8.16</ContentSubYear>
                    <ContentText>
                        발기인 대회 개최(해사문제연구소 회의실)<br />
                        발기인 대표:윤상송(당시 한국해사문제연구소 이사장,사망)<br />
                        발기인:한동호(당시 성균관대학교 교수)<br />
                        &emsp;&emsp;&emsp;박은회(당시 성균관대학교 교수)<br />
                        &emsp;&emsp;&emsp;서병기(당시 동지상선 사장)<br />
                        &emsp;&emsp;&emsp;최재수(당시 선주협회 전무)<br />
                        &emsp;&emsp;&emsp;배병태(당시 한바다해운 대표)<br />
                        &emsp;&emsp;&emsp;이균성(외국어대학교 교수)<br />
                        &emsp;&emsp;&emsp;이원철(해사문제연구소 이사)<br />
                        &emsp;&emsp;&emsp;이준수(당시 한국해양대학교 교수)<br />
                        &emsp;&emsp;&emsp;민성규(당시 한국해양대학교 교수)<br />
                        &emsp;&emsp;&emsp;박현규(당시 고려해운 사장)<br />
                        &emsp;&emsp;&emsp;황근식(당시 해사문제연구소 전무)
                    </ContentText>
                </Content>
            </DivideRight>

        </HistoryBox >
    )
}
export default History1981