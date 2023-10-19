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

const Cont = styled.div`
  border-right: 1px solid rgba(0, 0, 0, 0.5);
  border-left: 1px solid rgba(0, 0, 0, 0.5);
`;

const Chapter = styled.h1`
  margin-top: 2%;
  color: #165fa3;
  font-size: x-large;
  padding-bottom: 1%;
  border-bottom: 2px solid #165fa3;
`;

const Tuple = styled.div`
  display: flex;
  font-size: large;
  line-height: 25px;
  @media only screen and (max-width: 768px) {
    font-size: 0.9em;
  }
`;

const Article = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  background-color: rgba(0, 0, 0, 0.02);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(0, 0, 0, 0.3);
`;

const Content = styled.div`
  width: 100%;
  opacity: 0.6;
  padding: 1%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  @media only screen and (max-width: 768px) {
    font-size: 0.8em;
  }
`;

const Articles = function () {
  return (
    <Container>
      <Box>
        <Chapter>제1장 총칙</Chapter>
        <Cont>
          <Tuple>
            <Article>
              <span>제1조</span>
            </Article>
            <Content>
              <span>
                (명칭) 우리 학회는 사단법인 한국해운물류학회(영문으로는 THE
                KOREAN ASSOCIATION OF SHIPPING AND LOGISTICS INCORPORATED,약칭
                KASL)라 한다.
              </span>
            </Content>
          </Tuple>
          <Tuple>
            <Article>
              <span>제2조</span>
            </Article>
            <Content>
              <span>
                (소재지) 우리 학회의 본부는 서울특별시에 두고 자방에 지부를 둘
                수 있다.
              </span>
            </Content>
          </Tuple>
          <Tuple>
            <Article>
              <span>제3조</span>
            </Article>
            <Content>
              <span>
                (목적) 우리 학회는 해운과 물류에 관한 연구와 산학협동, 연구교류,
                상호협력으로 해운과 물류에 관한 이론과 해운산업의 발전에
                이바지함을 목적으로 한다.(2023.10.13 개정)
              </span>
            </Content>
          </Tuple>
          <Tuple>
            <Article>
              <span>제4조</span>
            </Article>
            <Content>
              <span>
                (사업) 우리 학회의 목적을 달성하기 위하여 다음과 같은 사업을
                한다.
                <br />
                1.해운과 물류에 관한 이론 및 실무에 관련된 조사와 연구
                <br />
                2.연구발표, 강연회 및 강좌의 개최
                <br />
                3.회지 및 서지 등 간행물의 발간
                <br />
                4.자문 및 연구의 수탁과 건의
                <br />
                5.국내외 관련기관과의 제휴 및 국제협력
                <br />
                6.기타 우리 학회의 목적 달성에 관련되는 사항
                <br />
              </span>
            </Content>
          </Tuple>
        </Cont>
        <Chapter>제2장 회원</Chapter>
        <Cont>
          <Tuple>
            <Article>
              <span>제5조</span>
            </Article>
            <Content>
              <span>
                (회원의 구분) 본회의 회원은 개인회원, 단체회완. 명예회원으로
                대별하고, 개인회원 일반회원, 종신회원, 학생회원 으로, 단체회원은
                단체 특별회원과 단체 일반회원, 단체 준회원으로 각각
                구분한다.(2001.4.20개정)
              </span>
            </Content>
          </Tuple>
          <Tuple>
            <Article>
              <span>제6조</span>
            </Article>
            <Content>
              <span>
                (회원의 자격) ① 개인 일반회원은 다음 각호에 해당하는 자로
                한다.(2001. 4. 20 개정)
                <br />
                1. 대학의 강사 이상의 교직자
                <br />
                2. 법조인 및 연구소의 연구원
                <br />
                3. 정규 대학 출신자로서 해운 및 해운분야에 3년 이상 근무한 자
                <br />
                4. 이상과 동등한 자격이 있다고 인정되는 자<br />
                ② 개인 학생회원은 대학의 학부생과 대학원의 석사학위 과정에 있는
                학생으로 한다.(2001. 4. 20 신설)
                <br />
                ③ 단체 특별회원은 해운업 및 해운 관계산업의 법인과 단체로 한다.
                <br />④ 명예회원은 해운발전에 현저한 공로가 있다고 인정된 자로서
                이사회의 승인을 받은 자로 한다.(1996. 3. 23 개정)
              </span>
            </Content>
          </Tuple>
          <Tuple>
            <Article>
              <span>제7조</span>
            </Article>
            <Content>
              <span>
                (회원의 권리와 의무) 우리 학회의 회원은 우리 학회가 추진하는
                사업에 참가할 수 있으며, 회원은 이사회에서 정한 소정의 회비를
                납부하여야 한다.(2001. 4. 20 개정)
              </span>
            </Content>
          </Tuple>
          <Tuple>
            <Article>
              <span>제8조</span>
            </Article>
            <Content>
              <span>
                (회원의 제명) 회원으로서 품위를 손상시키는 행위를 하거나 우리
                학회의 목적에 위배되는 행위를 하는 자는 이사회의 결의로써 제명할
                수 있다.
              </span>
            </Content>
          </Tuple>
        </Cont>
        <Chapter>제3장 임원</Chapter>
        <Cont>
          <Tuple>
            <Article>
              <span>제9조</span>
            </Article>
            <Content>
              <span>
                (임원의 종류와 정수) 우리 학회에 다음의 임원을 둔다.
                <br />
                1. 회장 1인
                <br />
                2. 부회장 약간명
                <br />
                3. 이사 5인 이상
                <br />
                4. 감사 2인
              </span>
            </Content>
          </Tuple>
          <Tuple>
            <Article>
              <span>제10조</span>
            </Article>
            <Content>
              <span>
                (임원의 선임 및 임기) ① 회장은 이사회의 추천을 받아 총회에서
                선임한다.(2005. 2.17 개정)
                <br />
                ② 감사를 제외한 임원은 총회에서 선임한다. 단, 총회의 위임이 있을
                경우 회장은 명예회장 및 고문과 협의하여 임원을 선임할 수
                있다.(1994. 4. 1 개정, 1996. 3. 23 개정, 2005. 2.17 개정)
                <br />
                ③ 감사는 총회에서 선임한다.(2005. 2.17 개정)
                <br />
                ④ 회장의 임기는 1년으로 하고, 1차에 한하여 연임할 수 있으며, 그
                외 임원의 임기는 1년으로 하고, 연임할 수 있다.
                <br />
                (2008. 2. 12 개정)
                <br />
                ⑤보궐 선임된 임원의 임기는 전임자의 잔여임기로 한다.(2005. 2. 17
                개정)
                <br />
              </span>
            </Content>
          </Tuple>
          <Tuple>
            <Article>
              <span>제11조</span>
            </Article>
            <Content>
              <span>
                (회장, 부회장의 직무)
                <br />
                ① 회장은 우리 학회를 대표하고 會務에 관한 사항을 통할하며 총회
                및 이사회를 소집하고 그 의장이 된다.
                <br />② 부회장은 회장을 보좌하고, 회장으로부터 위임받은 사항을
                처리하며, 회장 유고시에는 지정된 순으로 그 직무를
                대행한다.(1996. 3. 23 개정).
              </span>
            </Content>
          </Tuple>
          <Tuple>
            <Article>
              <span>제12조</span>
            </Article>
            <Content>
              <span>
                (감사의 직무) 감사는 우리 학회의 회계와 업무집행을 감사하며,
                총회에 보고하고, 이사회에 출석하여 의견을 개진 할 수 있다.
              </span>
            </Content>
          </Tuple>
          <Tuple>
            <Article>
              <span>제13조</span>
            </Article>
            <Content>
              <span>
                (명예회장 및 고문) 명예회장 및 고문은 우리 학회의 사업에 크게
                이바지할 수 있는 자로서 이사회의 결의를 거쳐 회장이 위촉한다.
                명예회장 및 고문은 이사회에 출석하여 의견을 개진할 수
                있다.(1996. 3. 23 개정)
              </span>
            </Content>
          </Tuple>
        </Cont>
        <Chapter>제4장 총회와 이사회</Chapter>
        <Cont>
          <Tuple>
            <Article>
              <span>제14조</span>
            </Article>
            <Content>
              <span>
                (회의의 구성 및 결의)
                <br />
                ① 총회는 출석회원으로 성립되고 출석회원 과반수의 찬성으로
                의결한다.
                <br />
                ② 이사회는 재적 과반수 출석으로 성립되고 출석 이사 과반수
                찬성으로 의결하되 가부 동수일 경우에는 회장이
                <br />
                결정한다.(1996. 3. 23 개정)
                <br />③ 이사회에 출석이 불가능할 경우에는 위임장으로 회장 또는
                다른 이사에게 당해 회의에서의 모든 권한을 위임할 수 있다.
              </span>
            </Content>
          </Tuple>
          <Tuple>
            <Article>
              <span>제15조</span>
            </Article>
            <Content>
              <span>
                (총회)
                <br />
                ① 총회는 정기총회와 임시총회로 한다.
                <br />
                ② 정기총회는 매년 1회 결산기로부터 3월 내에 개최한다.
                <br />
                ③ 임시총회는 이사회의 결의 또는 회원 3분의 1 이상의 요구에
                의하여 회장이 소집한다.
                <br />
              </span>
            </Content>
          </Tuple>
          <Tuple>
            <Article>
              <span>제16조</span>
            </Article>
            <Content>
              <span>
                (총회의 권한) 총회는 다음 사항을 심의의결한다.
                <br />
                1. 정관의 제정 및 개정
                <br />
                2. 임원의 선임
                <br />
                3. 사업계획 및 예산의 심의 승인(1996. 3. 23 신설)
                <br />
                4. 결산의 승인
                <br />
                5. 기타 이사회의 의결에 의하여 부의된 사항
              </span>
            </Content>
          </Tuple>
          <Tuple>
            <Article>
              <span>제17조</span>
            </Article>
            <Content>
              <span>
                (이사회) 이사회는 회장이 필요하다고 인정할 때, 또는 이사
                과반수의 요청이 있을 때에 회장이 소집한다.
              </span>
            </Content>
          </Tuple>
          <Tuple>
            <Article>
              <span>제18조</span>
            </Article>
            <Content>
              <span>
                (이사회의 권한) 이사회는 다음 사항을 심의 의결한다.(1988. 3. 21
                신설)
                <br />
                1. 정관의 제정 및 개정안
                <br />
                2. 사업계획 및 학회 운영에 관한 사항
                <br />
                3. 예산안
                <br />
                4. 중요한 재산의 취득, 처분 및 관리에 관한 사항
                <br />
                5. 기금의 관리와 운영(1996. 3. 23 신설)
                <br />
                6. 사무국의 직제와 제 규정의 제정 및 개정
                <br />
                7. 총회에 부의할 안건
                <br />
                8. 기타 총회에서 위임받은 사항
              </span>
            </Content>
          </Tuple>
          <Tuple>
            <Article>
              <span>제19조</span>
            </Article>
            <Content>
              <span>
                (서면결의) 회장은 이사회의 개최가 불가능하거나 회의의 소집이
                불필요하다고 인정되는 사항은 서면으로 결의할 수 있다.
              </span>
            </Content>
          </Tuple>
        </Cont>
        <Chapter>제5장 사무국</Chapter>
        <Cont>
          <Tuple>
            <Article>
              <span>제20조</span>
            </Article>
            <Content>
              <span>
                (사무국) 우리 학회의 제반 사무를 처리하기 위하여 사무국을 둔다.
              </span>
            </Content>
          </Tuple>
          <Tuple>
            <Article>
              <span>제21조</span>
            </Article>
            <Content>
              <span>
                (사무국의 직제)
                <br />
                ① 사무국의 직제는 별도로 이사회에서 정한다.
                <br />
                ② 사무국장은 회장이 임명한다.
                <br />③ 회장은 사무국의 연속성을 위해 전임 사무국 구성원 전원을
                동시에 교체해서는 안된다.(2008. 2. 12 신설)
              </span>
            </Content>
          </Tuple>
        </Cont>
        <Chapter>제6장 재정</Chapter>
        <Cont>
          <Tuple>
            <Article>
              <span>제22조</span>
            </Article>
            <Content>
              <span>
                (재정)
                <br />
                ① 우리 학회의 재정은 다음 수입금으로 충당한다.
                <br />
                1. 회원의 회비
                <br />
                2. 해운업체 및 관련 단체의 찬조금
                <br />
                3. 기타 수입금
                <br />
                ② 회비는 입회비, 연회비 및 특별회비로 하고, 종신회비를 납부한
                자에게는 그 후의 연회비를 면제한다.
                <br />③ 우리 학회에 기금을 둘 수 있다. 기금의 관리와 운영에 관한
                사항은 이사회의 결의에 따른다.(1996. 3. 23. 신설)
                <br />④ 본회의 자산은 공익을 위하여 사용하고, 사업의 직접
                수혜자는 불특정 다수가 되도록 한다.(2023. 10. 13. 신설)
                <br />⑤ 연간 기부금 모금액 및 활용실적은 본회 홈페이지를 통해
                공개한다.(2023. 10. 13. 신설)
              </span>
            </Content>
          </Tuple>
          <Tuple>
            <Article>
              <span>제23조</span>
            </Article>
            <Content>
              <span>
                (회계년도) 우리 학회의 회계년도는 매년 1월 1일부터 12월
                31일까지로 한다.
              </span>
            </Content>
          </Tuple>
        </Cont>
        <Chapter>제7장 해산 및 기타</Chapter>
        <Cont>
          <Tuple>
            <Article>
              <span>제24조</span>
            </Article>
            <Content>
              <span>
                (해산)
                <br /> ① 우리학회는 재적회원 3분의 2 이상의 동의로 해산할
                수있다.
                <br />② 본회의 해산시 잔여 재산은 국가 또는 지방자치단체나 또는
                유사한 목적을 가진 비영리법인에 귀속하도록 한다.(2023. 10. 13.
                신설)
              </span>
            </Content>
          </Tuple>
          <Tuple>
            <Article>
              <span>제25조</span>
            </Article>
            <Content>
              <span>
                (기타) 이 정환에 없는 사항은 일반통례에 따른다.(1996.3.23 개정)
              </span>
            </Content>
          </Tuple>
        </Cont>
        <Chapter>부칙</Chapter>
        <Cont>
          <Tuple>
            <Content>
              <span>
                (1) 이 정관은 1982년 8월 27일부터 효력을 가진다.
                <br />
                (2) 초대 임원의 임기는 1984년 3월 말까지로 한다.(1983. 3. 19
                신설)
                <br />
                (3) 임원의 임기에 관한 사항은 개정 당시의 임원에게도 적용하는
                것으로 한다.(1989. 3. 21 신설)
                <br />
                (4) 이 정관의 개정 조항은 해운항만청장의 승인을 받은 날로부터
                발효한다.(1989. 3. 21 신설, 1992. 4. 17 삭제)
                <br />
                (5) 이 정관의 개정 조항은 총회에서 의결된 날로부터
                발효한다.(1996. 3. 23 신설)
              </span>
            </Content>
          </Tuple>
        </Cont>
      </Box>
    </Container>
  );
};

export default Articles;
