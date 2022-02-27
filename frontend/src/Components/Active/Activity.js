import React from "react";
import styled from "styled-components";
import paper from "../../assets/paper.png"
import presentation from "../../assets/presentation.png"
import research from "../../assets/research.png"
import award from "../../assets/award.png"

const Container = styled.div`
    margin: 2vw 0;
`;

const GridBox = styled.div`
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 14vw 14vw;
    justify-content: center;
    row-gap: 1.5vw;
	column-gap: 1.5vw;
    @media only screen and (max-width: 768px) {
        grid-template-columns: 45vw 45vw;
    }
`;

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    border: 1px solid rgba(0, 0, 0, .3);
    text-align: center;
    height:14vw;
    @media only screen and (max-width: 768px) {
        height:48vw;
    }
`;

const ImageBox = styled.div`
    position: relative;
    width:45%;
    margin-top:2vw;
    @media only screen and (max-width: 768px) {
        width: 40%;
        margin-top: 10%;
    }
`;

const Circle = styled.div`
    padding-bottom:100%;
    background-color: #16498b;
    border-radius:50%;
`;

const TitleCircle = styled(Circle)`
    background-color: white;
    border: 2px solid #16498b;
    position: relative;
`;

const Title = styled.h1`
    position: absolute;
    width: 100%;
    top:1.9vw;
    left: 0.8vw;
    font-size:1.2vw;
    font-weight:bold;
    color:#16498b;
    @media only screen and (max-width: 768px) {
        font-size:3.5vw;
        top: 33%;
        left: 18%;
    }
`;

const TitleCircleBox = styled.div`
    position: absolute;
    width:10%;
    left:26.8vw;
    top:11.8vw;
    background-color: white;
    z-index:1;
    @media only screen and (max-width: 768px) {
        width:20vw;
        left:39%;
        top:39vw;
    }
`;

const ContentImg = styled.img`
    position: absolute;
    height: 3vw;
    top: 1.7vw;
    left:1.8vw;
    @media only screen and (max-width: 768px) {
        height: 50%;
        top: 26%;
        left:27%;
    }
`;

const ContentText = styled.span`
    padding:1vw;
    width: 13vw;
    font-size:1vw;
    color: #165fa3;
    @media only screen and (max-width: 768px) {
        font-size:3vw;
        width: 40vw;
        height: 100px;
        padding: 3vw;
    }
`;

const Text = styled.span`
    color: black;
    opacity: 0.5;
    font-size:0.6vw;
    @media only screen and (max-width: 768px) {
        font-size:3vw;
    }
`;

const Activity = function () {
    return <Container>
        <GridBox>
            <TitleCircleBox>
                <TitleCircle>
                    <Title>한국해운<br />
                        물류학회</Title>
                </TitleCircle>
            </TitleCircleBox>
            <ContentBox>
                <ImageBox>
                    <Circle>
                        <ContentImg src={paper} />
                    </Circle>
                </ImageBox>
                <ContentText>
                    ASIAN JOURNAL OF
                    SHIPPING AND LOGISTICS 발간<br />
                    (연 4회)
                </ContentText>
            </ContentBox>
            <ContentBox>
                <ImageBox>
                    <Circle>
                        <ContentImg src={research} />
                    </Circle>
                </ImageBox>
                <ContentText>
                    해운물류 연구 발간<br />
                    (연 4회)
                </ContentText>
            </ContentBox>
            <ContentBox>
                <ImageBox>
                    <Circle>
                        <ContentImg src={presentation} />
                    </Circle>
                </ImageBox>
                <ContentText>
                    학술발표회 개최(연 2회)<br />
                    <Text>
                        해마다 봄과 가을에 정기학술발표회를 개최하며
                        해운물류 부문의 시사적인 문제가 있을 경우
                        특별학술발표회를 개최함
                    </Text>
                </ContentText>
            </ContentBox>
            <ContentBox>
                <ImageBox>
                    <Circle>
                        <ContentImg src={award} />
                    </Circle>
                </ImageBox>
                <ContentText>
                    초청학술상 시상<br />
                    <Text>
                        최우수논문상 2년마다<br />
                        저술상 5년마다
                    </Text>
                </ContentText>
            </ContentBox>
        </GridBox>
    </Container >
}

export default Activity