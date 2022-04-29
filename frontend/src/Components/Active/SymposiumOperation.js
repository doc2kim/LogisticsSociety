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
    @media only screen and (max-width: 768px) {
        font-size:1em;
    }
`;

const ContentBox = styled.div`
    padding-top:1%;
    line-height:25px;
    font-size:large;
    opacity: 0.6;
    @media only screen and (max-width: 768px) {
        font-size:0.7em;
    }
`;



const SymposiumOperation = function () {

    return <Container>
        <Box>
            <Chapter>정기학술대회</Chapter>
            <ContentBox>
                해운물류에 관한 트렌드와 주제별 미래 상생방안들을 발표하고 토론.<br />
                기조발표, 일반발표논문, 대학원생/학부생 경진세션으로 나누어 매년 2회 개최.
            </ContentBox>
            <Chapter>ICASL(International Conference of the Asian Shipping and Logistics)</Chapter>
            <ContentBox> ICASL is an annual international event
                devoted to shipping and logistics studies. It aims to provide a platform for academics, researchers, policy
                makers, specialists, and practitioners working in port, shipping, aviation transportation and logistics.
                We are expecting a wide range of attendances from Asia-Pacific and other overseas regions to this annual
                international event.<br />
                <br />
                In the beginning the conference started as ICAJSL(the International Conference of the Asian Journal of Shipping
                and Logistics) in 2009. The first 3 conferences were organized by the KASL as the above title. In 2011, the title
                of the conference was changed ICASL for attracting more specialists and scholars from all over the world.<br />
                <br />
                At least one of the authors of each paper must register for the conference to present their paper at the conference and/or to
                publish it on the Asian Journal of Shipping and Logistics published by The Korean Association of Shipping and Logistics
                with cooperation of Chinese Maritime Institute and Japan Society of Logistics and Shipping Economics and Produced hosted
                by Elsevier B.V.<br />
            </ContentBox>
        </Box>
    </Container>
}

export default SymposiumOperation;