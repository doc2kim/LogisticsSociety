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
        font-size: 1em;
    }
`;

const SubChapter = styled.h3`
    margin-top: 2% ;
    opacity: 0.8;
    font-size: large;
    @media only screen and (max-width: 768px) {
        font-size: 0.8em;
    }
`;

const ContentBox = styled.div`
    padding-top:1%;
    line-height:25px;
    font-size:large;
    opacity: 0.6;
    @media only screen and (max-width: 768px) {
        font-size: 0.8em;
    }
`;

const Ethics = function () {
    return <Container>
        <Box>
            <ContentBox style={{ marginTop: '2%' }}>
                <span>
                    2008. 06. 13 개정<br />
                    <br />
                    한국해운물류학회 연구윤리규정은 학회 회원이 논문투고 및 논문심사 과정에서 지켜야 할 연구윤리의 원칙과 기준을 정하는 것을 목적으로 한다.<br />
                </span>
            </ContentBox>
            <Chapter>제1절 저자로서 지켜야 할 연구윤리규정</Chapter>
            <SubChapter>제1조 표절 등의 행위 금지</SubChapter>
            <ContentBox>
                <span>
                    저자는 자신이 행하지 않은 연구나 타인의 주장의 일부분을 자신의 연구 결과이거나 주장인 것처럼 논문이나 저술에 활용하지 않는다. 저자는 타인의
                    연구 결과나 주장을 인용할 때는 그 출처를 명시하여야 하고, 그러하지 아니할 때는 표절에 해당하며 이러한 행위는 엄격히 금지된다. 저자는 존재하지
                    않는 연구자료 등을 허위로 만들거나(위조), 연구 과정 등을 인위적으로 조작 또는 임의로 변형ㆍ삭제 함으로써 연구내용 또는 결과를 왜곡하지
                    말아야 한다.<br />
                </span>
            </ContentBox>
            <SubChapter>제2조 출판 업적의 명기</SubChapter>
            <ContentBox>
                <span>
                    (1) 저자는 자신이 실제로 행하였거나 기여한 연구에 대해서만 저자로서 업적을 인정받아야 하며, 저자로 등재된 논문이나 연구결과에 대해서는
                    책임을 져야 한다.<br />
                    (2) 논문이나 기타 출판의 저자(역자 포함)의 순서는 상대적 지위에 관계없이 연구에 기여한 정도에 따라 공정하게 정해져야 한다. 연구나 저술에 대한
                    기여도가 낮을 경우, 각주, 서문, 사의 등에서 고마움을 표하는 것으로 한다.<br />
                </span>
            </ContentBox>
            <SubChapter>제3조 연구물의 중복 투고 및 게재 혹은 이중 출판 금지</SubChapter>
            <ContentBox>
                <span>
                    저자는 국내외를 막론하고 이전에 출판된 자신의 연구물을 새로운 연구물인 것처럼 투고해서는 아니 되며, 동일한 연구물을 유사 학회 등에 중복하여
                    투고해서도 아니 된다. 투고 이전에 출판된 연구물의 일부를 사용하여 출판하고자 할 경우에는 출판사의 동의와 허가를 얻어야 한다.
                </span>
            </ContentBox>
            <SubChapter>제4조 인용 및 참고 표시</SubChapter>
            <ContentBox>
                <span>
                    (1) 저자가 공개된 학술 자료를 인용할 경우에는 참고서지 및 자료에 대해 정확하게 기술하도록 노력해야 하고, 상식에 속하는 자료가 아닌 한 반드시
                    그 출처를 명확히 밝혀야 한다. 개인적인 접촉을 통해서 얻은 자료의 경우에는 그 정보를 제공한 연구자의 동의를 받은 이후라야 인용할 수 있다.<br />
                    (2) 저자가 다른 사람의 글을 인용하거나 다른 사람의 의견이나 주장을 참고할 경우에는 각주를 통해 인용 및 참고 여부를 밝혀야 하며, 이러한 표기를
                    통해 선행연구의 결과와, 본인의 독창적인 주장이나 해석인지의 여부를 독자들이 파악할 수 있도록 해야 한다.<br />
                </span>
            </ContentBox>
            <Chapter>제2절 학술위원으로서 지켜야 할 연구윤리규정</Chapter>
            <SubChapter>제5조</SubChapter>
            <ContentBox>
                <span>
                    학술위원장은 투고된 논문의 평가를 해당 분야의 전문적 지식과 공정한 판단 능력을 지닌 심사위원에게 의뢰해야 한다. 심사 의뢰 시는 저자와 동향,
                    동학, 개인적 친분이 있거나 적대적인 심사위원을 피함으로써 객관적인 평가가 이루어질 수 있도록 노력해야 한다.
                </span>
            </ContentBox>
            <SubChapter>제6조</SubChapter>
            <ContentBox>
                <span>
                    학술위원은 투고된 논문의 게재 여부를 결정하는 책임을 지며, 저자의 독립성을 존중해야 한다.
                </span>
            </ContentBox>
            <SubChapter>제7조</SubChapter>
            <ContentBox>
                <span>
                    학술위원은 투고 논문심사와 관련하여 문제제기가 있을 경우, 윤리위원회에서 규정된 절차와 규정에 따라 적절히 대응하여야 한다.
                </span>
            </ContentBox>
            <Chapter>제3절 논문 심사자로서 지켜야 할 연구윤리규정</Chapter>
            <SubChapter>제8조</SubChapter>
            <ContentBox>
                <span>
                    논문 심사자는 학술위원장이 의뢰한 논문을 성실하게 평가하고 평가 결과를 학술위원장에게 통보해 주어야 한다. 만약 자신이 논문의 내용을 평가하기에 적임자가 아니라고 판단될 경우에는 학술위원장에게 그 사실을 즉시 통보하여야 한다.
                </span>
            </ContentBox>
            <SubChapter>제9조</SubChapter>
            <ContentBox>
                <span>
                    논문 심사자는 논문을 개인적인 학술적 신념이나 저자와의 사적인 친분 관계를 떠나 객관적 기준에 의해 공정하게 평가하여야 한다. 충분한 근거를 명시하지 않은 채 논문 저자에게 불이익을 주거나, 심사자 본인의 관점이나 해석과 상충된다는 이유로 ‘게재 불가’ 판정을 해서는 안된다.
                </span>
            </ContentBox>
            <SubChapter>제10조</SubChapter>
            <ContentBox>
                <span>
                    논문 심사자는 심사의뢰 받은 논문이 이미 다른 학술지에서 출판되었거나 중복심사 중이거나 혹은 기타 문제를 발견하였을 때에는 학술위원장에게 해당 사실을 즉시 알려야 한다.
                </span>
            </ContentBox>
            <SubChapter>제11조</SubChapter>
            <ContentBox>
                <span>
                    논문 심사자는 전문 지식인으로서의 저자의 독립성을 존중하여야 한다. 평가 의견서에는 논문에 대한 자신의 판단을 밝히되, 보완이 필요하다고 생각되는 부분에 대해서는 그 이유와 근거를 명시해야 한다.
                </span>
            </ContentBox>
            <SubChapter>제12조</SubChapter>
            <ContentBox>
                <span>
                    논문 심사자는 심사 대상 논문에 대한 비밀을 지켜야 한다. 논문 평가를 위해 특별히 조언을 구하는 경우가 아니라면 논문을 다른 사람에게 보여주거나 논문의 내용이나 주장에 대해 다른 사람과 의논해서는 안된다.
                </span>
            </ContentBox>
            <Chapter>제4절 한국해운물류학회 연구윤리규정 시행지침</Chapter>
            <SubChapter>제1조 연구윤리규정 서약</SubChapter>
            <ContentBox>
                <span>
                    한국해운물류학회의 회원은 본 연구윤리규정을 준수할 것을 서약해야 한다. 본 학회의 회원이 학술지에 게재하기 위해 투고할 경우 본 윤리규정에 서약한 것으로 간주한다.
                </span>
            </ContentBox>
            <SubChapter>제2조 연구윤리규정 위반의 보고</SubChapter>
            <ContentBox>
                <span>
                    회원은 다른 회원이 연구윤리규정을 위반한 사실을 인지하였을 경우 그 회원에게 연구윤리규정을 환기시켜 줌으로써 문제를 바로잡도록 노력해야 한다. 그러나 문제가 바로잡히지 않거나 명백한 연구윤리규정 위반 사례가 드러날 경우에는 학회 윤리위원회에 보고할 수 있다. 윤리위원회는 문제를 제보한 회원의 신원을 외부에 공개해서는 안 된다.
                </span>
            </ContentBox>
            <SubChapter>제3조 윤리위원회의 구성 원칙</SubChapter>
            <ContentBox>
                <span>
                    윤리위원회는 학술위원회가 겸한다. 단, 각 위원은 당해 사건과 직접적인 이해관계가 있는 경우 그 안건의 조사ㆍ심의ㆍ의결에 참여할 수 없다.
                </span>
            </ContentBox>
            <SubChapter>제4조 윤리위원회의 권한</SubChapter>
            <ContentBox>
                <span>
                    윤리위원회는 연구윤리규정 위반으로 제보된 사안에 대하여 제보자, 피조사자, 증인, 참고인 및 증거자료 등을 통하여 폭넓게 조사를 실시한 후, 연구윤리규정 위반이 사실로 판정된 경우에는 그 내용과 범위에 따라 규정에 따라 적절한 징계 조치를 취할 수 있다.
                </span>
            </ContentBox>
            <SubChapter>제5조 윤리위원회의 조사 및 심의</SubChapter>
            <ContentBox>
                <span>
                    연구윤리규정 위반으로 제보된 회원은 윤리위원회에서 행하는 조사에 협조해야 한다. 정당한 조사에 협조하지 않거나 방해하는 것은 그 자체로 연구윤리규정 위반이 된다.
                </span>
            </ContentBox>
            <SubChapter>제6조 소명 기회의 보장</SubChapter>
            <ContentBox>
                <span>
                    연구윤리규정 위반으로 판정된 회원에게는 충분한 소명의 기회가 주어져야 한다.
                </span>
            </ContentBox>
            <SubChapter>제7조 조사 대상자에 대한 비밀 보호</SubChapter>
            <ContentBox>
                <span>
                    연구윤리규정 위반에 대해 학회의 최종적인 징계 결정이 내려질 때까지 윤리위원들은 해당 회원의 신원을 외부에 공개해서는 안 된다.
                </span>
            </ContentBox>
            <SubChapter>제8조 징계의 절차 및 내용</SubChapter>
            <ContentBox>
                <span>
                    1. 윤리위원회는 윤리규정을 위반한 논문에 대해 표절, 이중 게재, 절개 등의 판정을 내릴 수 있다.<br />
                    &emsp;① ‘표절’이란 타인의 연구내용과 주요 결과를 논문작성에 활용하면서 출처의 표기 없이 상당부분 차용하여 자신의 연구결과인 것처럼 발표하는 것을
                    이른다.<br />
                    &emsp;② ‘이중게재’란 논문작성에 활용된 자료와 연구방법이 같고, 논문의 주요 내용과 주제가 70% 이상 같은 논문을 다른 논문인 것처럼 게재함을 이른다.<br />
                    &emsp;③ ‘절개’란 같은 자료와 유사한 유형의 연구 방법을 가지고 일반적으로 도출할 수 있는 연구결과를 단일 논문으로 작성하지 않고 논문의 내용을 일부
                    절개하여 두 개의 논문으로 작성함을 이른다.<br />
                    &emsp;④ ‘독립 논문’이란 논문의 주제, 방법론, 자료 등이 완전히 독립적인 논문임을 이른다.<br />
                    <br />
                    2. 표절, 이중게재, 절개에 해당하는 논문 투고자에 대해 다음과 같은 징계를 결의할 수 있다.<br />
                    &emsp;① 표절로 판정된 논문은 게재를 취소하고, 그 집필자(공동 연구자 포함)의 회원 자격을 2년 동안 정지한다.<br />
                    &emsp;② 이중게재로 판정된 논문은 게재를 취소하고, 그 집필자(공동 연구자 포함)의 회원 자격을 1년 동안 제한한다.<br />
                    &emsp;③ 절개로 판정된 논문의 집필자에게는 경고 또는 최장 6개월간 학회 활동을 제한한다.<br />
                    <br />
                    3. 회장은 윤리위원회의 결의가 있을 경우 다음 절차에 따라 징계한다.<br />
                    &emsp;① 회원의 자격를 정지하기 위해서는 윤리위원회의 결의가 있은 지 2개월 이내에 이사회를 소집하여 이사회의 동의를 받아 이사회의 동의를 받은 지
                    1주일 이내에 전자우편, 일반등기우편, 전화 등 적절한 방법으로 논문 투고자에게 징계 사실을 통지하여야 한다.<br />
                    &emsp;② 회장은 윤리위원회의 의결을 통지받은 뒤 지체없이 회원 자격 제한의 사유와 기간을 명시하여 논문 투고자에게 적절한 방법으로 통지하여야 한다.<br />
                </span>
            </ContentBox>
            <SubChapter>제9조 연구윤리규정의 개정</SubChapter>
            <ContentBox>
                <span>
                    연구윤리규정의 개정 절차는 본 학회의 규정 개정절차에 준한다.
                </span>
            </ContentBox>
            <Chapter>부&emsp;칙</Chapter>
            <ContentBox>
                <span>
                    이 윤리 규정은 2008년 6월 14일부터 시행한다.
                </span>
            </ContentBox>
        </Box>
    </Container>
}

export default Ethics;