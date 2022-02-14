import React from "react";
import styled from "styled-components";
import 회장최용석 from "../../assets/회장최용석.png";
import 최용석 from "../../assets/최용석.png";
import subTitleImg from "../../assets/subTitleImg.png"



const Container = styled.div`
@media only screen and (max-width: 768px) {
    margin-bottom: 5%;
}
`;

const SubTitleImg = styled.div`
    margin: 1vw 0;
    width: 100%;
    height:9vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media only screen and (max-width: 768px) {
        height: 10em;
    }
`;

const TextContent = styled.span`
    font-size: 0.8vw;
    line-height:1.5vw;
    color : gray;
    @media only screen and (max-width: 768px) {
        font-size: 0.9em;
        line-height: 1.5em;   
    }
`;

const SubTitleText = styled.span`
    line-height: 2vw;
    color: white;
    font-size: 1.3vw;
    margin:0 5%;
    @media only screen and (max-width: 768px) {
        font-size: 1em;
        line-height:1.5em;
        padding:0 1em;
    @media only screen and (max-width: 653px) {
        padding: 0 0.5em;
    }

    }
`;

const ChairmanText = styled.img`
    position: absolute;
    width: 6vw;
    bottom: 1vw;
    right: 23vw;
    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const ChairmanImg = styled.img`
    margin-right: 5%;
    width:12vw;
    @media only screen and (max-width: 768px) {
        width:9em;
    }
    @media only screen and (max-width:280px){
        display: none
    }
    
`;


const Greeting = function () {

    return (<Container>
        <div style={{ position: 'relative' }}>
            <SubTitleImg style={{ background: `url(${subTitleImg})` }} >
                <SubTitleText>
                    한국해운물류학회는 변화에 대처할 능력을 배양하는데
                    직간접적으로 도움을 줄 수 있게 되기를 희망합니다.
                </SubTitleText>
                <ChairmanText src={회장최용석}></ChairmanText>
                <ChairmanImg src={최용석}></ChairmanImg>
            </SubTitleImg>
        </div>
        <TextContent>
            존경하는 한국해운물류학회 회원 여러분!
            <br />
            <br />
            &ensp;우리 학회는 작년으로 출발한지 30년이 되었습니다. 30여년의 시간동안 전임 회장님들을 비롯한 많은 회원들의 희생적이고 헌신적인 노력으로
            양적으로나 질적으로 괄목할만한 성장을 이루어 왔습니다.
            특히 지난 몇년간 우리 학회는 전임 회장님들의 지도아래 많은 숙원 사업을 성공적으로 마쳤습니다
            영문학회지인 AJSL(Asian Journal of Shipping and Logistics)이 SCOPUS에 등재되어 다년간 노력해 온 국제학술지로의 일보를
            내딛었고, 년 2회의 정기학술대회와 함께 우수연구자에 대한 시상, 국내 주요항만의 발전정책세미나 개최, 매년 1회의 정기 국제학술대회 개최 등으로
            관련분야의 산학연협동과 학문발전을 선도해 왔습니다.
            <br />
            <br />
            앞으로의 과제는 우리가 여기에 안주하지 않고, 어떻게 도약할 수 있는가 하는 점입니다. 이 점은 회장으로 있는 동안 지속적으로
            제가 고민해야 할 일이라고 생각합니다. 아니 저뿐만 아니라 임원들이 고민하고, 또 회원 여러분들 모두가 함께 풀어가야 할 과제라고 생각합니다.
            집행부가 새로이 구성되면 무엇부터 해 나가야 할지 논의해서 결정하고 여러분들에게 도움을 청하도록 하겠습니다.
            <br />
            <br />
            세상 모든 것이 늘 변하게 마련이지만, 해운물류분야는 1980년대부터 진행되어 온 해운과 물류의 통합이라는 변화의 흐름을 넘어 이제는 해운과
            물류, 해양산업의 통합이라는 새로운 변화가 진행되고 있는 것 같습니다. 제가 해운물류분야에 몸 담은지도 벌써 30여년이 지났습니다만, 요즈음처럼
            근 미래에 다가 올 변화를 크게 느껴본 적은 없었던 것 같습니다. 이를 위하여 우리 한국해운물류학회는 다음과 같은 준비를 하고자 합니다.
            <br />
            <br />
            첫째는 산학연협력의 강화입니다. 현재, 해운산업의 경기상황이 어려운 환경하에 있다고 하여도 장기적이고 글로벌한 관점에서 해결방안을
            찾는 것이 우리에게 주어진 책무라고 생각합니다. 이를 위하여 관련 업계단체, 해운물류기업, 관련 연구기관, 항만 등과의 협력을 더욱 강화해 나갈
            필요가 있습니다.
            <br />
            <br />
            둘째는 연구영역의 확장과 신규연구자의 발굴입니다. 새로운 성장분야인 해양산업으로 해운산업의 범위를 넓혀갈 때에 우리 학회의 영역도 더불어
            넓혀질 수 있습니다. 그러나 이를 포괄하지 못하면 우리의 연구영역도 좁아들 수밖에 없습니다. 따라서 한국해운물류학회가 관련 분야를 아우를 수
            있는 능력이 어느 때보다도 필요한 시기입니다. 또 학문 후세대인 대학원생과 학부생이 참여할 수 있는 제도적 틀을 만들어 지속적으로 신진 연구자가
            유입될 수 있도록 해야 합니다.
            <br />
            <br />
            셋째는 국제화를 선도하는 것입니다. 해운물류산업은 가장 오래된 글로벌 산업입니다. 한국해운이 축적해 온 좋은 경험을 전세계로 전파하기 위해서
            우리의 연구성과를 전세계의 연구자와 공유하는 노력은 필수입니다. 이를 위하여 AJSL의 SSCI등재 추진과 함께 국문학술지 "해운물류연구“도
            국제화하는 노력을 동시에 추진하여야 합니다.
            <br />
            <br />
            넷째는 전용 사무실 공간 및 스탭 확보입니다. 진정한 학회의 발전을 위해서는 회원 모두에게 열린 학회, 체계적인 업무운영이 이루어지는 학회,
            회장단의 교대에도 안정적인 운영이 이루어지는 학회가 되어야 한다고 생각합니다. 우리가 변화에 효율적으로 대응하면서 안정적인 학회운영을
            위해서는 전용사무실을 확보하고 전임스탭을 두어야 할 필요가 있습니다. 고문단과 회원 여러분의 의견수렴을 거쳐 전용사무실 공간을 확보하도록
            노력하겠습니다.
            <br />
            <br />
            새로운 변화는 위기와 함께 도전의 기회도 가져다줍니다. 이러한 변화의 시기에는 준비한 자만이 위기를 극복할 수 있으며, 또 기회를 차지하게
            됩니다. 아무쪼록 우리 학회가 여러분들이 이러한 변화에 대처할 능력을 배양하는데 직간접적으로 도움을 줄 수 있게 되기를 희망합니다.
        </TextContent>
    </Container>)
}

export default Greeting
