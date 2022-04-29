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



const JournalPublication = function () {

    return <Container>
        <Box>

            <Chapter>해운물류연구</Chapter>
            <ContentBox>학회의 설립 목적인 “해운물류에 관한 연구와 산학협동, 회원간의 연구 교류,<br />
                상호협력으로 해운물류에 관한 이론과 해운물류산업의 발전에 기여 함"을 달성하기 위해 학술지 『海運物流硏究』를 매년 3, 6, 9, 12월 말 4회 발간.</ContentBox>
            <Chapter>AJSL(Asian Journal of Shipping and Logistics)</Chapter>
            <ContentBox>
                The Asian Journal of Shipping and Logistics (AJSL) is intended to be an outlet for theoretical and empirical research contributions for scholars and specialists in the business of shipping and logistics. A multi-disciplinary and international refereed journal, it brings together papers on the many different topics that concern the fields of shipping and logistics.<br />
                <br />
                AJSL invites manuscripts particularly in the areas of management, finance, accounting, insurance, international business, and marketing in the fields of shipping, port, transport and logistics of Asia. Application of theory and research in these areas to related fields of inquiry are highly welcomed.<br />
                <br />
                The Asian Journal of Shipping and Logistics aims for contributing to the development of human beings by way of fostering and supporting the researches in the fields of shipping and logistics by the Asians, of the Asians, and for the Asians. Upon acceptance of an article by the journal, the author(s) will be asked to transfer copyright in the article to the publisher. This will ensure the widest possible dissemination of information under the Copyright Law in Korea.<br />
                <br />
                The Asian Journal of Shipping and Logistics is published by Elsevier B.V. on behalf of the Korean Association of Shipping and Logistics, Inc.
            </ContentBox>
        </Box>
    </Container>
}

export default JournalPublication;