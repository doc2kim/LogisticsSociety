import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
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
  margin-top: 2%;
  color: #165fa3;
  font-size: x-large;
  padding-bottom: 1%;
  @media only screen and (max-width: 653px) {
    font-size: 1em;
  }
`;

const ContentBox = styled.div`
  padding-top: 1%;
  line-height: 25px;
  font-size: large;
  opacity: 0.6;
  @media only screen and (max-width: 653px) {
    font-size: 0.8em;
  }
`;

// const Table = styled.div`
//     border-bottom: 1px solid rgba(0, 0, 0, .3);
//     border-right: 1px solid rgba(0, 0, 0, .3);
// `;

// const Tuple = styled.div`
//     display: flex;
// `;

// const Attributes = styled.div`
//     font-size:medium;
//     background-color: rgba(0, 0, 0, .02);
//     border-top: 2px solid #16498b;
//     border-left: 1px solid rgba(0, 0, 0, .3);
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 1% 0;
//     @media only screen and (max-width: 653px) {
//         font-size:0.8em;
//     }
// `;

// const Value = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content:center;
//     border-top: 1px solid rgba(0, 0, 0, .5);
//     border-left: 1px solid rgba(0, 0, 0, .5);
//     opacity: 0.6;
//     font-size: medium;
//     line-height:25px;
//     padding: 1% 0;
//     text-align: center;
//     @media only screen and (max-width: 653px) {
//         font-size:0.8em;
//     }
// `;

const ManagementAward = function () {
  return (
    <Container>
      <Box>
        <Chapter>시상규칙</Chapter>
        <ContentBox>
          <span>
            제1조 (목적)
            <br />
            이 규칙은 사단법인 한국해운물류학회(이하 ‘학회’라 한다)가 수여하는
            ‘해운물류경영대상’ (영문표기 The Best CEO Award of Shipping and
            Logistics, 이하 ‘상’이라 한다)의 시상기준과 절차에 관한 사항을
            규정함을 목적으로 한다.
            <br />
            <br />
            제2조 (상의 목적)
            <br />
            이 상은 해운물류기업의 경쟁력 제고와 국가경제 발전을 위해 노력하고
            있는 해운물류기업 경영인을 발굴하여 경영의욕을 고취하고
            해운물류산업의 발전을 도모하도록 치하하며, 나아가 해운물류
            경영인에게 경영성공모델을 제시하고, 건전한 해운물류기업인 상과
            새로운 비즈니스 모델을 개발하여 우리 해운물류업계를 선도할 수 있도록
            방향을 제시하는 데 그 목적이 있다.
            <br />
            <br />
            제3조 (시상 시기)
            <br />
            이 상은 매년 정기총회에서 시상하는 것을 원칙으로 한다.
            <br />
            <br />
            제4조 (수상자의 자격)
            <br />
            수상자는 해운물류 부문과 관계된 경영인 중에서 전형위원회의 심사와
            추천을 거쳐 이사회의 승인을 받은 자로 한다.
            <br />
            <br />
            제5조 (수상자의 수)
            <br />
            각 부문 수상자는 매회 1인을 원칙으로 한다.
            <br />
            <br />
            제6조 (전형위원회의 구성)
            <br />
            ① 전조의 수상자를 선정하기 위해 회장은 학술위원회의 자문을 받아
            별도의 전형위원회를 구성하고, 그 위원장이 된다.
            <br />
            ② 전형위원은 다음 각호의 자격을 갖춘 자로 한다.
            <br />
            가. 우리 학회 학술위원과 그에 준하는 자격을 갖춘 학연계 인사
            <br />
            나. 위원장의 추천을 받은 산·관·언론계 인사
            <br />
            <br />
            제7조 (수상자의 선정 절차)
            <br />
            수상자는 다음과 같은 절차에 따라 선정한다.
            <br />
            ① 전형위원회 위원장은 제6조의 자격을 갖춘 전문가로 구성된 전형위원
            7명 내외를 지명하고, 전형위원들은 수상후보자로 적격하다고 인정되는
            경영인을 추천한다.
            <br />
            ② 전형위원회는 피추천된 수상후보자를 대상으로 1차 심사(결격사항
            확인), 2차 심사 (자체평가표에 의한 서류심사)를 실시하여 3인 이하의
            수상 후보자를 선정한다.
            <br />
            ③ 수상후보자를 대상으로 3차 심사(대면 심사)를 실시한다.
            <br />
            ④ 전형위원장은 전형위원회의 평가를 바탕으로 하여 최종 수상후보자
            1인을 선정하여 이사회에 추천하고, 이사회의 승인을 받아 수상자를
            확정한다.
            <br />
            <br />
            제 8 조 (평가 기준)
            <br />
            ① 평가는 1차 부적격 여부 판정, 2차 서류 심사, 3차 대면심사로 한다.
            <br />
            ② (1차 심사의 기준) 1차 심사에서는 수상자로서의 부적격 사유가
            있는지의 여부를 판단한다.
            <br />
            ③ (2차 서류 심사) 2차 심사에서는 국가공헌 및 사회기여, 해운물류업계
            기여도, 매출액, 수익성, 자기자본비율, 기술혁신, 기타 경영성과 등을
            서면 심사한다.
            <br />
            ④ (3차 대면 심사) 3차 심사는 방문 심사로 경영철학과 비전, 종업원의
            복지와 사회기여 등에 대한 경영자로서의 철학과 자질을 심사한다.
            <br />
            ⑤ 전형위원회는 해운업의 발전 추세에 따라 평가기준에 새로운 기준을
            추가할 수 있다.
            <br />
            <br />
            부 칙<br />
            1. 이 규칙은 2003년 2월 21일부터 시행한다.
            <br />
            2. 이 규칙은 2007년 1월 10일부터 시행한다.
            <br />
          </span>
        </ContentBox>
      </Box>
    </Container>
  );
};

export default ManagementAward;
