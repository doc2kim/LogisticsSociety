import React from "react";
import styled from "styled-components";
import subTitleImg from "../../assets/subTitleImg.png";



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

const SubTitleImg = styled.div`
    margin: 1em 0;
    width: 100%;
    height:9em;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 768px) {
        height: 10em;
    }
`;

const SubTitleText = styled.span`
    line-height: 1.5em;
    color: white;
    font-size: 1.5em;
    padding: 3em;
    @media only screen and (max-width: 768px) {
        font-size: 1em;
        line-height:1.5em;
        padding:0 2vw;
    }
`;

const TextContent = styled.span`
    font-size: 1em;
    line-height:1.7em;
    color : gray;
    @media only screen and (max-width: 768px) {
        font-size: 0.9em;
        line-height: 1.5em;
        
    }
`;


const OverView = function () {
    return (<Container>
        <Box>
            <SubTitleImg style={{ background: `url(${subTitleImg})` }} >
                <SubTitleText>
                    한국해운물류학회는 해운물류에 관한 연구와 산학협동, 회원간의 연구 교류,
                    상호협력으로 해운 물류에 관한 이론과 해운물류 산업의 발전에 기여하고자 합니다.
                </SubTitleText>
            </SubTitleImg>
            <TextContent>
                &ensp;사단법인 한국해운물류학회는 1981년 8월 16일 발기인 총회를 개최한 뒤 1년간의 준비를 거쳐 1982년 8월 27일 창립총회와 제 1회 창립 학술발표회를 개최함으로써 정식으로 성립된 학술연구단체입니다.
                우리 학회는 당초 한국해운학회로 출범하였으나 해운산업이 점차 물류산업과 통홥되어 가는 시대적 추세에 발맞추기 위하여 2003년 2월 21일부터 한국해운물류학회로 변경하였습니다.
                우리 학회의 설립 목적은 "해운물류에 관한 연구와 산학협동, 회원 간의 연구 교류, 상호협력으로 해운물류에 관한 이론과 해운물류산업의 발전에 기여하는 것"입니다.
                <br />
                <br />
                우리 학회는 위의 목적을 달성하기 위해 학술지⌜해운물류연구⌟를 발간하고 있고, 해마다 봄, 가을에 학술대회를 열고 있으며, 해사문화 창달에 이바지한 분에게 해사문화상을 시상하고 있으며,
                2002년부터 해운물류 관련 학술진흥을 진작하기 위해 초청학술상을 제정하여 시상하고 있습니다.
                <br />
                <br />
                회원은 대학 학부생 이상의 자격을 갖춘 해운 및 관련 분야에 종사하는 사람이면 누구나 가입할 수 있으며, 회원이 되시면 학회가 주최하는 각종 세미나와 학술대회에서 발표할 수 있으며, 학회지에도 투고할 수 있습니다.
                우리 한국해운학회는 2001년 4월 일본해운경제학회와 2005년 3월 중화항운협회・중화 해운연구협회 등과 정식 학술교류를 체결하여 매년 양 학회가 추천하는 우수논문을 상대 학회지에 게재하고,
                기타 해운 관련 주제에 대해 공동으로 학술대회를 개최하기로 하였습니다.
            </TextContent>
        </Box>
    </Container>)
}
export default OverView
