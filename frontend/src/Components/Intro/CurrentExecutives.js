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

const Table = styled.div`
    margin: 2% 0;
    border-bottom: 1px solid rgba(0, 0, 0, .3);
    border-right: 1px solid rgba(0, 0, 0, .3);
`;

const Tuple = styled.div`
    display: flex;
    @media only screen and (max-width: 768px) {
     flex-direction: column;
    }
`;

const Attributes = styled.div`
    font-size:medium;
    background-color: rgba(0, 0, 0, .02);
    border-top: 1px solid rgba(0, 0, 0, .3);
    border-left: 1px solid rgba(0, 0, 0, .3);
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1% 0;
    @media only screen and (max-width: 768px) {
     width: 100%;
    }
`;

const Value = styled.div`
    display: flex;
    align-items: center;
    width: 40%;
    border-top: 1px solid rgba(0, 0, 0, .5);
    border-left: 1px solid rgba(0, 0, 0, .5);
    opacity: 0.6;
    font-size: medium;
    line-height: 25px;
    padding: 1.5%;
    @media only screen and (max-width: 768px) {
     width: 97%;
     font-size:0.8em;
    }
`;


const CurrentExecutives = function () {

    return (<Container>
        <Box>
            <Table>
                <Tuple>
                    <Attributes>
                        <span>명예회장</span>
                    </Attributes>
                    <Value>
                        <span>&emsp;박현규&lt;한국해사문제연구소 이사장&gt;</span>
                    </Value>
                    <Value></Value>
                </Tuple>
                <Tuple>
                    <Attributes><span>고문</span></Attributes>
                    <Value>
                        <span>
                            &emsp;구종순&lt;충남대 교수&gt;<br />
                            &emsp;나종팔&lt;한국도선사협회장&gt;<br />
                            &emsp;모수원&lt;목포대 교수&gt;<br />
                            &emsp;민성규&lt;한국해양대 명예교수&gt;<br />
                            &emsp;박종규&lt;KSS해운고문&gt;<br />
                            &emsp;박현규&lt;한국해사문제연구소 이사장&gt;<br />
                            &emsp;박홍균&lt;순천대 교수&gt;

                        </span>
                    </Value>
                    <Value>
                        <span>
                            &emsp;여기태&lt;인천대 교수&gt;<br />
                            &emsp;이원철&lt;전 해사문제연구소 전무&gt;<br />
                            &emsp;이윤수&lt;KCTC 부회장&gt;<br />
                            &emsp;전준수&lt;서강대 교수&gt;<br />
                            &emsp;최재수&lt;KSS해운 사외이사&gt;<br />
                            &emsp;하영석&lt;계명대 교수&gt;<br />
                            &emsp;한종길&lt;성결대 교수&gt;<br />
                            &emsp;정태원&lt;성결대 교수&gt;
                        </span>
                    </Value>
                </Tuple>
                <Tuple>
                    <Attributes><span>회장</span></Attributes>
                    <Value>
                        &emsp;최용석&lt;순천대 교수&gt;
                    </Value>
                    <Value>
                    </Value>
                </Tuple>
                <Tuple>
                    <Attributes>부회장</Attributes>
                    <Value>
                        <span>
                            &emsp;김용덕&lt;숭실대 교수&gt;<br />
                            &emsp;김현&lt;법무법인 세창 대표 변호사&gt;<br />
                            &emsp;김형태&lt;KMI감사역&gt;<br />
                            &emsp;박영태&lt;동의대 교수&gt;<br />
                            &emsp;백석현&lt;SK해운 사장&gt;<br />
                            &emsp;이광배&lt;순천대 교수&gt;<br />
                            &emsp;이원근&lt;대구대 교수&gt;<br />
                            &emsp;조동현&lt;두양상선 사장&gt;

                        </span>
                    </Value>
                    <Value>
                        <span>
                            &emsp;백종실&lt;평택대 교수&gt;<br />
                            &emsp;이언승&lt;한남대 교수&gt;<br />
                            &emsp;서문성&lt;금강대 교수&gt;<br />
                            &emsp;양창호&lt;KMI 원장&gt;<br />
                            &emsp;이경재&lt;창명해운 회장&gt;<br />
                            &emsp;이상복&lt;범주해운 회장&gt;<br />
                            &emsp;안우철&lt;강릉원주대 교수&gt;<br />
                            &emsp;이현우&lt;농협물류 사장&gt;
                        </span>
                    </Value>
                </Tuple>
                <Tuple>
                    <Attributes><span>이사</span></Attributes>
                    <Value>
                        <span>
                            &emsp;강달원&lt;가톨릭관동대학교 교수&gt;<br />
                            &emsp;강승우&lt;인천테크노 팀장&gt;<br />
                            &emsp;강승호&lt;강릉원주대학교 교수&gt;<br />
                            &emsp;강인규&lt;당진시청 팀장&gt;<br />
                            &emsp;고현정&lt;군산대학교 교수&gt;<br />
                            &emsp;구교훈&lt;우송대학교 교수&gt;<br />
                            &emsp;구병모&lt;한세대학교 교수&gt;<br />
                            &emsp;권용장&lt;한국철도기술연구원 박사&gt;<br />
                            &emsp;김광희&lt;동명대학교 교수&gt;<br />
                            &emsp;김기영&lt;인천대학교 교수&gt;<br />
                            &emsp;김동열&lt;큐웨터 이사&gt;<br />
                            &emsp;김만길&lt;한남대학교 교수&gt;<br />
                            &emsp;김병화&lt;대구로지스틱스 본부장&gt;<br />
                            &emsp;김석&lt;인천테크노 팀장&gt;<br />
                            &emsp;김성범&lt;해양수산부 기획재정담당관&gt;<br />
                            &emsp;김성영&lt;인천콜드프라자 사장&gt;<br />
                            &emsp;김영국&lt;인천항만공사&gt;<br />
                            &emsp;김영근&lt;로제스웨이 대표이사&gt;<br />
                            &emsp;김영환&lt;한겨레 국장&gt;<br />
                            &emsp;김우선&lt;동명대학교/KMI 실장&gt;<br />
                            &emsp;김운수&lt;인천발전연구원 연구원&gt;<br />
                            &emsp;김율성&lt;한양대학교 교수&gt;<br />
                            &emsp;김은수&lt;한국해양수산개발원 센터장&gt;<br />
                            &emsp;김인현&lt;고려대학교 교수&gt;<br />
                            &emsp;김정이&lt;동명대학교 교수&gt;<br />
                            &emsp;김정훈&lt;인천항만공사&gt;<br />
                            &emsp;김창수&lt;부산대학교 교수&gt;<br />
                            &emsp;김현덕&lt;순천대학교 교수&gt;<br />
                            &emsp;김현석&lt;부산대학교 교수&gt;<br />
                            &emsp;김형호&lt;세한대학교 교수&gt;<br />
                            &emsp;류동근&lt;한국해양대학교 교수&gt;<br />
                            &emsp;류인철&lt;스마트비즈 이사&gt;<br />
                            &emsp;마문식&lt;세한대학교&gt;<br />
                            &emsp;박근식&lt;중앙대학교 교수&gt;<br />
                            &emsp;박두진&lt;동명대학교/KMI교수&gt;<br />
                            &emsp;박순태&lt;포스코 과장&gt;<br />
                            &emsp;박승우&lt;당진항만공사&gt;<br />
                            &emsp;박영일&lt;서린상사&gt;<br />
                            &emsp;박용안&lt;KMI 연구위원&gt;<br />
                            &emsp;박종룡&lt;KMI 연구위원&gt;<br />
                            &emsp;박주동&lt;경상대학교 조교&gt;<br />
                            &emsp;박호&lt;군산대학교 교수&gt;<br />
                            &emsp;배종욱&lt;전남대학교 교수&gt;<br />
                            &emsp;배희성&lt;경기대학교 교수&gt;<br />
                            &emsp;서수완&lt;동서대학교 교수&gt;<br />
                            &emsp;성기덕&lt;경인여자대학교 교수&gt;<br />
                            &emsp;성낙서&lt;금호렌터카 이사&gt;<br />
                            &emsp;송민근&lt;인천대학 교수&gt;<br />
                            &emsp;신광섭&lt;인천대학 교수&gt;<br />
                            &emsp;신학승&lt;동의대 무역유통학부 교수&gt;<br />
                            &emsp;최동호&lt;(주) 한국항만기술단 전무&gt;<br />
                            &emsp;남형식&lt;한국해양대학교 교수&gt;
                        </span>
                    </Value>
                    <Value>
                        <span>
                            &emsp;양승권&lt;관세청&gt;<br />
                            &emsp;염기운&lt;태웅글로벌 대표&gt;<br />
                            &emsp;염정호&lt;한국해운 중개협회&gt;<br />
                            &emsp;우종균&lt;동명정보대학교 교수&gt;<br />
                            &emsp;원동환&lt;덕성여자대학교 교수&gt;<br />
                            &emsp;유성재&lt;우련통운 이사&gt;<br />
                            &emsp;우승렬&lt;현대글로비즈&gt;<br />
                            &emsp;윤경준&lt;서산항만 팀장&gt;<br />
                            &emsp;윤대근&lt;목포해양대학교 교수&gt;<br />
                            &emsp;윤동하&lt;KIT 차장&gt;<br />
                            &emsp;이건우&lt;중앙대학교 교수&gt;<br />
                            &emsp;이경래&lt;한국무역보험공사&gt;<br />
                            &emsp;이동현&lt;평택대학교 교수&gt;<br />
                            &emsp;이수현&lt;순천대학교 물류학과 교수&gt;<br />
                            &emsp;이언경&lt;KMI&gt;<br />
                            &emsp;이재은&lt;순천대학교 교수&gt;<br />
                            &emsp;이종렬&lt;전남창조경제혁신센터 부센터장&gt;<br />
                            &emsp;이주완&lt;아르고마린토탈 이사&gt;<br />
                            &emsp;이준서&lt;성결대학교 교수&gt;<br />
                            &emsp;이지훈&lt;부산시의회&gt;<br />
                            &emsp;이충효&lt;한국수자원 공사&gt;<br />
                            &emsp;이태휘&lt;경상국립대학교 교수&gt;<br />
                            &emsp;이태희&lt;계명대학교 교수&gt;<br />
                            &emsp;임종석&lt;물류정책연구원 원장&gt;<br />
                            &emsp;임형윤&lt;여수항만공사&gt;<br />
                            &emsp;장현미&lt;부산대학교 교수&gt;<br />
                            &emsp;정길수&lt;인천대학교 교수&gt;<br />
                            &emsp;정동훈&lt;북방물류연구지원센터&gt;<br />
                            &emsp;정석재&lt;광운대학교 교수&gt;<br />
                            &emsp;정연봉&lt;제이엔텔솔루션 대표 변호사&gt;<br />
                            &emsp;정재훈&lt;현대자동차 팀장&gt;<br />
                            &emsp;정현대&lt;평택대학교 교수&gt;<br />
                            &emsp;조국연&lt;벤텍스 전무&gt;<br />
                            &emsp;조용철&lt;인천항만연구&gt;<br />
                            &emsp;조용현&lt;서원대학교 교수&gt;<br />
                            &emsp;조찬혁&lt;부경대학교 교수&gt;<br />
                            &emsp;최도원&lt;서해대학교 교수&gt;<br />
                            &emsp;최석범&lt;제주한라대학교 교수&gt;<br />
                            &emsp;최수범&lt;국보 상무&gt;<br />
                            &emsp;최승용&lt;스마트비즈 이사&gt;<br />
                            &emsp;최영로&lt;가야대학교 교수&gt;<br />
                            &emsp;최영석&lt;남성해운&gt;<br />
                            &emsp;하민호&lt;인천대학교 교수&gt;<br />
                            &emsp;한낙현&lt;경남대학교 교수&gt;<br />
                            &emsp;한승철&lt;제주발전연구원 연구원&gt;<br />
                            &emsp;함성필&lt;경성대학교 호텔관광외식 경영학부 교수&gt;<br />
                            &emsp;허남준&lt;아이엘아이앤디(주) 대표&gt;<br />
                            &emsp;허윤석&lt;제주대학 교수&gt;<br />
                            &emsp;허정석&lt;여수광야항만공사 부장&gt;<br />
                            &emsp;황경연&lt;충남대학교 교수&gt;<br />
                            &emsp;서정수&lt;계명대학교 교수&gt;<br />
                            &emsp;권승면&lt;대한무역투자진흥공사 과장&gt;

                        </span>
                    </Value>
                </Tuple>
                <Tuple>
                    <Attributes><span>감사</span></Attributes>
                    <Value>
                        <span>
                            &emsp;윤송한&lt;경희대 교수&gt;
                        </span>
                    </Value>
                    <Value>
                        <span>
                            &emsp;장정언&lt;보람법률사무소 변호사&gt;
                        </span>
                    </Value>
                </Tuple>
                <Tuple>
                    <Attributes><span>편집위원장</span></Attributes>
                    <Value>
                        <span>
                            &emsp;안우철&lt;강릉원주대 교수&gt;<br />
                        </span>
                    </Value>
                    <Value>
                    </Value>
                </Tuple>
            </Table>
        </Box>
    </Container>
    );
}

export default CurrentExecutives;