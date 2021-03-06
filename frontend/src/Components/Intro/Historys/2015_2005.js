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
                        ???3??? ???????????? ??????(???)??? ??????????????????
                    </ContentText>
                </Content>
                <Content>
                    <ContentSubYear>12.3~4</ContentSubYear>
                    <ContentText>
                        ???????????? ????????????(LOGISTICS CONFERENCE<br />
                        FOR NORTHERN REGION)??????
                    </ContentText>
                </Content>
                <Content>
                    <ContentSubYear>10.20~21</ContentSubYear>
                    <ContentText>
                        &#34;???????????? ???????????? ?????????????????? ????????????&#34;<br />
                        ??????????????? ????????????
                    </ContentText>
                </Content>
                <Content>
                    <ContentSubYear>6.24~27</ContentSubYear>
                    <ContentText>
                        ???8??? 2015 INTERNATIONAL CONFERENCE<br />
                        OF ASIAN SHIPPING AND LOGISTICS ??????<br />
                    </ContentText>
                </Content>
                <Content>
                    <ContentSubYear>4.24</ContentSubYear>
                    <ContentText>
                        ???61??? ?????????????????? ?????? ??????????????????
                    </ContentText>
                </Content>
                <Content>
                    <ContentSubYear>2.26</ContentSubYear>
                    <ContentText>
                        ???60??? ?????????????????? ??????????????????
                    </ContentText>
                </Content>
            </DivideRight>

            <Circle />

            <DivideLeft>
                <ContentYear >2014</ContentYear>
                <ContentLeft  >
                    <ConstSubYearLeft>11.28</ConstSubYearLeft>
                    <ContentText>
                        ???59??? ???????????????????????? ?????????????????? ??? <br />
                        ???2??? ???????????? ??????(???)??? ????????????????????????
                    </ContentText>
                </ContentLeft>
                <ContentLeft  >
                    <ConstSubYearLeft>10.30~11.1</ConstSubYearLeft>
                    <ContentText>
                        ???7??? INTERNATIONAL CONFERENCE OF<br />
                        ASIAN SHIPPING AND LOGISTICS ??????
                    </ContentText>
                </ContentLeft>
                <ContentLeft  >
                    <ConstSubYearLeft>5.30</ConstSubYearLeft>
                    <ContentText>
                        ???58??? ?????????????????? ?????????????????? ??????
                    </ContentText>
                </ContentLeft>
                <ContentLeft>
                    <ConstSubYearLeft>2.21</ConstSubYearLeft>
                    <ContentText>
                        ???57??? ?????????????????? ?????????????????? ??????
                    </ContentText>
                </ContentLeft>
            </DivideLeft>

            <Circle />
            <DivideRight>
                <ContentYear>2013~2011</ContentYear>
                <Content>
                    <ContentSubYear>2013.8.30~31</ContentSubYear>
                    <ContentText>
                        THE 6TH ICASL ??????<br />
                        (FUKAE CAMPUS OF KOBE UNIV)
                    </ContentText>
                </Content>
                <Content>
                    <ContentSubYear>2013.7.5</ContentSubYear>
                    <ContentText>
                        2013??? ???1??? ????????????????????????<br />
                        (??????????????????)
                    </ContentText>
                </Content>
                <Content>
                    <ContentSubYear>2012.12.14</ContentSubYear>
                    <ContentText>
                        ????????? ASIAN JOURNAL OF SHIPPING<br />
                        AND LOGISTICS SCOPUS ?????? ??????
                    </ContentText>
                </Content>
                <Content>
                    <ContentSubYear>2012.6.4</ContentSubYear>
                    <ContentText>
                        ?????????????????? ???????????? ???????????????<br />
                        ???????????? ?????? ??????(??????????????????)
                    </ContentText>
                </Content>
                <Content >
                    <ContentSubYear>2011.5.5~6</ContentSubYear>
                    <ContentText>
                        ???4??? INTERNATIONAL CONFERENCE<br />
                        OF ASIAN SHIPPING AND LOGISTICS ??????
                    </ContentText>
                </Content>
            </DivideRight>

            <Circle />
            <DivideLeft>
                <ContentYear>2010~2005</ContentYear>
                <ContentLeft>
                    <ConstSubYearLeft>2010.4.20-23</ConstSubYearLeft>
                    <ContentText>
                        ???6??? ????????????????????? ???<br />
                        ???3??? AJSL??????????????????
                    </ContentText>
                </ContentLeft>
                <ContentLeft>
                    <ConstSubYearLeft>2009.6.10~11</ConstSubYearLeft>
                    <ContentText>
                        ????????????????????????????????? ?????? ??????<br />
                        ????????? ?????? ??? ???2??? ASIAN JOURNAL<br />
                        OF SHIPPING AND LOGISTICS ??????????????????
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
                        ???4??? ????????????????????? ??? ??????????????????<br />
                        50??? ?????? ?????? ?????????????????? ??????
                    </ContentText>
                </ContentLeft>
                <ContentLeft>
                    <ConstSubYearLeft>2005.2.17</ConstSubYearLeft>
                    <ContentText>
                        ???1??? ??????????????? ??????<br />
                        (SEVEN MOUNTAIN PRIZE)??????
                    </ContentText>
                </ContentLeft>
            </DivideLeft>

        </HistoryBox>
    )
}
export default History2005