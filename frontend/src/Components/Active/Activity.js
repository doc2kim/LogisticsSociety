import React from "react";
import styled from "styled-components";
import paper from "../../assets/paper.png"
import presentation from "../../assets/presentation.png"
import research from "../../assets/research.png"
import award from "../../assets/award.png"
import activity_title from "../../assets/activity_title.png"


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
    display:flex;
    justify-content: center;
`;

const Cont = styled.div`
    margin: 2em 0;
    position: relative;
`;

const GridBox = styled.div`
    display: grid;
    grid-template-columns: 20em 20em;
    justify-content: center;
    row-gap: 2em;
	column-gap: 2em;
    @media only screen and (max-width: 768px) {
        grid-template-columns: 43vw 43vw;
    }
`;

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    border: 1px solid rgba(0, 0, 0, .3);
    text-align: center;
    height:20em;
    @media only screen and (max-width: 768px) {
        height:48vw;
    }
`;

const ImageBox = styled.div`
    position: relative;
    width:45%;
    margin-top:3em;
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

const ActivityTitle = styled.img`
    width:7em;
    position: absolute;
    top:2.5em;
    left:0.9em;
    @media only screen and (max-width:768px){
        width:15vw;
        top:5.5vw;
        left:2.2vw;
    }
`;

const TitleCircleBox = styled.div`
    position: absolute;
    width:9em;
    top:16.5em;
    left: 39.5%;
    background-color: white;
    z-index:1;
    @media only screen and (max-width: 768px) {
        width:20vw;
        top:41vw;
    }
`;

const ContentImg = styled.img`
    position: absolute;
    height: 4em;
    top: 2.5em;
    left:2.5em;
    @media only screen and (max-width: 768px) {
        height: 50%;
        top: 26%;
        left:27%;
    }
`;

const ContentText = styled.span`
    padding:1em;
    width: 11em;
    font-size:1.2em;
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
    font-size:0.8em;
    @media only screen and (max-width: 768px) {
        font-size:3vw;
    }
`;

const Activity = function () {
    return <Container>
        <Box>
            <Cont>
                <TitleCircleBox>
                    <TitleCircle>
                        <ActivityTitle src={activity_title} />
                    </TitleCircle>
                </TitleCircleBox>
                <GridBox>
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
            </Cont >
        </Box>
    </Container>
}

export default Activity