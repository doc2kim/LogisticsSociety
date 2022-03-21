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

const Chapter2 = styled(Chapter)`
@media only screen and (max-width: 768px) {
        display: none;
    }
`;


const ContentBox = styled.div`
    padding-top:1%;
    line-height:25px;
    font-size:large;
    opacity: 0.6;
    @media only screen and (max-width: 768px) {
        font-size:0.8em;
    }
`;

const Table = styled.div`  
    border-bottom: 1px solid rgba(0, 0, 0, .3);
    border-right: 1px solid rgba(0, 0, 0, .3);
    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const Tuple = styled.div`
    display: flex;
    @media only screen and (max-width: 768px) {
    }
`;

const Attributes = styled.div`
    font-size:medium;
    background-color: rgba(0, 0, 0, .02);
    border-top: 2px solid #16498b;
    border-left: 1px solid rgba(0, 0, 0, .3);
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1% 0;
    @media only screen and (max-width: 653px) {
        font-size:0.8em;
    }
`;

const Value = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    border-top: 1px solid rgba(0, 0, 0, .5);
    border-left: 1px solid rgba(0, 0, 0, .5);
    opacity: 0.6;
    font-size: medium;
    line-height:25px;
    padding: 1% 0;
    text-align: center;
    @media only screen and (max-width: 768px) {
        font-size:0.8em;
    }
`;

const Value2 = styled(Value)`
    text-align: start;
    display: flex;
    justify-content: flex-start;
    @media only screen and (max-width: 768px) {
        font-size:0.8em;
    }
`;



const CulturalAward = function () {
    return <Container>
        <Box>
            <Chapter>시상규칙</Chapter>
            <ContentBox>
                <span>
                    第1條  (目的)  이 規則은 社團法人 韓國海運物流學會(이하 "學會"라 한다)가 授與하는 海事文化賞의 施賞基準과 節次에 관한 事項을
                    規定함을 目的으로 한다.<br />
                    <br />
                    第2條  (施賞의 原則)  海事文化賞은 제4조에 해당하는 자로서 海運學의 暢達과 海運産業의 發展에 이바지한 功勞가 顯著한 者에게 授與한다.<br />
                    <br />
                    第3條  (施賞時期)  이 賞은 學會의 每年 定期總會에서 施賞한다.<br />
                    <br />
                    第4條  (受賞者의 資格)  受賞者는 海運學, 海事法學 또는 海運物流産業의 發展에 寄與한 功勞가 顯著하며, 다음 各號의 1에 該當하는
                    者로서 理事 3人 以上 또는 회원(최근 2년 이상 연회비를 납부한 회원, 이하 같음) 10인 이상의 推薦(功績調書 添附)을 받아 銓衡委員會의
                    審議를 거쳐 理事會의 承認을 받은 者로 한다.<br />
                    1. 정규 교육기관과 연구기관에서 多年間 海運學 또는 海事法學을 연구하고 10篇 以上의 연구실적(著書를 包含한다)이 있는 者<br />
                    2. 海運物流業界에서 長期間 經營에 從事한 자<br />
                    3. 海運 및 港灣官廳에서 多年間 海運 港灣 行政에 從事한 者<br />
                    <br />
                    第5條  (受賞人員)  受賞者는 每回 1人으로 한다.<br />
                    <br />
                    第6條  (銓衡委員會)<br />
                    ① 前條의 受賞者를 審議하기 위하여 銓衡委員會를 두며, 그 委員은 前任 會長과 會長團 약간 명으로 構成하되 現任 會長이 委員長이 된다.<br />
                    ② 前項의 委員會는 滿場一致로 受賞者를 選定하는 것을 原則으로 한다.<br />
                    <br />
                    第7條 (수상자 선정 절차) 수상자는 다음과 같은 절차에 따라 선정한다.<br />
                    ① 사무국은 최소한 2달 이상 수상 후보자에 대한 추천을 공모해야 한다.<br />
                    ② 전형위원회는 접수된 수상 후보자의 공적조서 등을 면밀하게 검토하여 수상자를 결정하고, 최소 한달 이상 학회 홈페이지 등을 통해 공개해야 한다.<br />
                    ③ 회원 10인 이상이 수상 후보자 선정에 대해 이견을 표명하였을 때는 전형위원회는 수상자 선정을 재심할 수 있다.<br />
                    <br />
                    海事文化賞施賞規則<br />
                    <br />
                    附    則<br />
                    1. 이 規則은 1990年 3月 23日부터 施行한다.<br />
                    2. 이 規則은 2001年 4月 20日부터 施行한다.<br />
                    3. 이 規則은 2003年 2月 21日부터 施行한다.<br />
                </span>
            </ContentBox>
            <Chapter2>역대 해사문화상 수상자</Chapter2>
            <Table>
                <Tuple>
                    <Attributes style={{ width: '15%' }}><span>시상일</span></Attributes>
                    <Attributes style={{ width: '15%' }}><span>수상자</span></Attributes>
                    <Attributes style={{ width: '70%' }}><span>주요약력</span></Attributes>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '15%', borderBottom: 'none' }}><span></span></Value>
                    <Value style={{ width: '15%' }}><span> 故 윤상송</span></Value>
                    <Value2 style={{ width: '70%' }}>
                        <span style={{ marginLeft: '5%' }}>
                            1918년 함북 회령 출생, 1940년 일본 동경상선대학 졸업,<br />
                            1960-62년 한국해양대학교 학장,<br />
                            1971-85년 해사문제연구소<br />
                            이사장, 1975년 '해운론' 출간, 1994년 사망
                        </span>
                    </Value2>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '15%', borderTop: 'none' }}>
                        <span>
                            제1회 < br />
                            (1992.4.17)
                        </span>
                    </Value>
                    <Value style={{ width: '15%' }}><span> 故 한동호</span></Value>
                    <Value2 style={{ width: '70%' }}>
                        <span style={{ marginLeft: '5%' }}>
                            1923년 함남 함주 출생, 1986-90년 한국해운학회 회장,<br />
                            저서 14종 출판, 해상보험 관련 논문 68편 집필,<br />
                            1991년 사망
                        </span>
                    </Value2>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '15%', borderTop: 'none' }}><span></span></Value>
                    <Value style={{ width: '15%' }}><span> 故 남동희</span></Value>
                    <Value2 style={{ width: '70%' }}>
                        <span style={{ marginLeft: '5%' }}>
                            1917년 경남 함안 출생, 1950-58년 교통부 및 해무청 근무,<br />
                            1955년 '해운10년약사'간행
                        </span>
                    </Value2>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '15%' }}>
                        <span>
                            제2회 < br />
                            (1993.3.26)
                        </span>
                    </Value>
                    <Value style={{ width: '15%' }}><span> 故 김선모</span></Value>
                    <Value2 style={{ width: '70%' }}>
                        <span style={{ marginLeft: '5%' }}>
                            1923년 중국 천진 출생, 운수부, 교통부, 대한해운공사,< br />
                            대한조선공사, 한국선주협회근무, 1979년 사망
                        </span>
                    </Value2>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '15%' }}>
                        <span>
                            제3회 < br />
                            (1994.4.1)
                        </span>
                    </Value>
                    <Value style={{ width: '15%' }}><span> 故 황부길</span></Value>
                    <Value2 style={{ width: '70%' }}>
                        <span style={{ marginLeft: '5%' }}>
                            1906년 함북 경성 출생, 1929년 동경고등상선학교 입학,< br />
                            1948년 초대 해무국장,< br />
                            1953년 해양대학장, 1960년 해무청장, < br />
                            1994년 사망
                        </span>
                    </Value2>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '15%' }}>
                        <span>
                        </span>
                    </Value>
                    <Value style={{ width: '15%' }}><span> 故 이시형</span></Value>
                    <Value2 style={{ width: '70%' }}>
                        <span style={{ marginLeft: '5%' }}>
                            1910년 평북 신의주 출생, 1930년 동경상선대 기관과 입학,< br />
                            한국해양대학 초대,3,5,7대 학장 역임, 1985년 사망
                        </span>
                    </Value2>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '15%', borderTop: 'none' }}>
                        <span>
                            제4회 < br />
                            (1995.3.30)
                        </span>
                    </Value>
                    <Value style={{ width: '15%' }}><span> 故 허동식</span></Value>
                    <Value2 style={{ width: '70%' }}>
                        <span style={{ marginLeft: '5%' }}>
                            1924년 4월 5일 평북 출생, 1948년 한국해양대학 졸업,< br />
                            1960년 한국선급협회 창립, 1992년 사망
                        </span>
                    </Value2>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '15%' }}>
                        <span>
                            제5회 < br />
                            (1996.3.23)
                        </span>
                    </Value>
                    <Value style={{ width: '15%' }}><span>손태현</span></Value>
                    <Value2 style={{ width: '70%' }}>
                        <span style={{ marginLeft: '5%' }}>
                            1922년 경남 밀양 출생, 1948년 한국해양대학 항해학과 졸업,< br />
                            1963년 한국해양대학장, 1982년 '한국해운사' 출판
                        </span>
                    </Value2>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '15%' }}>
                        <span>
                            제6회 < br />
                            (1997.4.4)
                        </span>
                    </Value>
                    <Value style={{ width: '15%' }}><span>서병기</span></Value>
                    <Value2 style={{ width: '70%' }}>
                        <span style={{ marginLeft: '5%' }}>
                            1926년 서울 출생, 1950년 한국해양대학 졸업, 1978년 동지< br />
                            상선 대표이사, 1989년 한국해기사협회 회장
                        </span>
                    </Value2>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '15%' }}>
                        <span>
                            제7회 < br />
                            (1998.4.25)
                        </span>
                    </Value>
                    <Value style={{ width: '15%' }}><span>이준수</span></Value>
                    <Value2 style={{ width: '70%' }}>
                        <span style={{ marginLeft: '5%' }}>
                            1928년 서울 출생,< br />
                            1948년 한국해양대학교 졸업, 한국해양대학장(12대-13대), 한국항해학회 회장, 한국해기사협회 회장,< br />
                            해양소년단 연맹 총재, 한국항만학회 회장, 한국해운학회 회장
                        </span>
                    </Value2>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '15%' }}>
                        <span>
                            제8회 < br />
                            (1999.4.23)
                        </span>
                    </Value>
                    <Value style={{ width: '15%' }}><span>이맹기</span></Value>
                    <Value2 style={{ width: '70%' }}>
                        <span style={{ marginLeft: '5%' }}>
                            1925년 경북 고령 출생, 1947년 해군사관학교 졸업,< br />
                            1962-64 해군참모총장, 1964-68 대한해운공사 사장,< br />
                            1968-88년 대한해운 사장/ 회장,< br />
                            1975-82년 재향군인회 회장,< br />
                            1991년 한국해양대학교 명예경영학 박사
                        </span>
                    </Value2>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '15%' }}>
                        <span>
                            제9회 < br />
                            (2000.4.29)
                        </span>
                    </Value>
                    <Value style={{ width: '15%' }}><span>박현규</span></Value>
                    <Value2 style={{ width: '70%' }}>
                        <span style={{ marginLeft: '5%' }}>
                            1927년 7월 3일 경북 울산 출생, 1948년 한국해양대학 졸업,< br />
                            1973년 고려콘테이너터미날 대표, 1980년 고려해운 대표,< br />
                            1987년 한국해사문제연구소 이사장,< br />
                            1990년 평화통일정책자문 회의 자문위원,< br />
                            1992년 한국해양대학교 명예경영학박사,< br />
                            1999년 국제로타리 3640지구 총재
                        </span>
                    </Value2>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '15%' }}>
                        <span>
                            제10회 < br />
                            (2001.4.20)
                        </span>
                    </Value>
                    <Value style={{ width: '15%' }}><span>박종규</span></Value>
                    <Value2 style={{ width: '70%' }}>
                        <span style={{ marginLeft: '5%' }}>
                            1935년 출생, 1961년 서울대 졸업,< br />
                            1960-69년 대한해운공사, 1970-95년 KSS해운 사장,< br />
                            1993-97년 바른경제동인회 이사장,경실련 중앙위원회 의장,< br />
                            1992년 은탑산업훈장
                        </span>
                    </Value2>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '15%' }}>
                        <span>
                            제11회 < br />
                            (2002.2.27)
                        </span>
                    </Value>
                    <Value style={{ width: '15%' }}><span>강창성</span></Value>
                    <Value2 style={{ width: '70%' }}>
                        <span style={{ marginLeft: '5%' }}>
                            1927년 출생, 1949년 육사 졸업, 1971 보안사령관,< br />
                            1976-80년 초대 해운항만청장, 1987-92 명지대학교 교수,< br />
                            1992년 민주당 국회의원, 1998년 한나라당 부총재
                        </span>
                    </Value2>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '15%' }}>
                        <span>
                            제12회 < br />
                            (2003.2.21)
                        </span>
                    </Value>
                    <Value style={{ width: '15%' }}><span>故 조중훈</span></Value>
                    <Value2 style={{ width: '70%' }}>
                        <span style={{ marginLeft: '5%' }}>
                            1920년 2월 11일(음력) 서울출생,< br />
                            1937년 진해고등해원양성소 기관과 별과 수료, 고려대 경영대학원 졸업,< br />
                            1945년 한진상사 설립,< br />
                            1977년 한진해운 설립, 1984년 대한항공 회장< br />
                            1986년 벨기에 오드레 드 레오폴드 훈장, 1988년 국민훈장 모란장,< br />
                            1990년 불란서 레지옹 도뇌르-그랑 오피시에 훈장,< br />
                            1996년 네덜란드 명예훈장,< br />
                            2002년 11월 17일 사망
                        </span>
                    </Value2>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '15%' }}>
                        <span>
                            제13회 < br />
                            (2004.2.23)
                        </span>
                    </Value>
                    <Value style={{ width: '15%' }}><span>신태범</span></Value>
                    <Value2 style={{ width: '70%' }}>
                        <span style={{ marginLeft: '5%' }}>
                            1950년 한국해양대 항해학과 졸업< br />
                            1978년 6월 서울대 경영대학원 수료, 고려종합운수 사장·회장< br />
                            1984년 3월 한국주선업협회 회장< br />
                            1985년 2월 고려해운 사장< br />
                            1985년 4 월 서울상공회의소 상임위원< br />
                            1988년 3월 한국관세협회 회장< br />
                            1999년 한국항만하역협회 회장< br />
                            1982년 2월 동탑산업훈장 수훈, 1990년 11월 교통부장관상 수상
                        </span>
                    </Value2>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '15%' }}>
                        <span>
                            제14회 < br />
                            (2005.2.17)
                        </span>
                    </Value>
                    <Value style={{ width: '15%' }}><span>홍성문</span></Value>
                    <Value2 style={{ width: '70%' }}>
                        <span style={{ marginLeft: '5%' }}>
                            1920. 11. 7. 출생< br />
                            1939. 3. 25 만주 遼陽 상업학교 졸업< br />
                            1945 北京大學 法文學院 연구< br />
                            1952 교통부 포항 해사국 해항과장< br />
                            1955 해무청 통영 해사국 해항과장< br />
                            1958 부산해무청 항무담임관으로 퇴직< br />
                            1985, 1995 해사대법전 편찬
                        </span>
                    </Value2>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '15%' }}>
                        <span>
                            제15회 < br />
                            (2006.2.26)
                        </span>
                    </Value>
                    <Value style={{ width: '15%' }}><span>배순태</span></Value>
                    <Value2 style={{ width: '70%' }}>
                        <span style={{ marginLeft: '5%' }}>
                            1945년 3월 진해고등해원 양성소 본과 및 연습과 졸업< br />
                            1966년 8월 고려대학교 경영대학원 수료< br />
                            1952년 6월 갑종선장 면허장 취득(제18호)(교통부)< br />
                            1958년 10월 인천항 도선사 면허 취득(제 9호)(교통부)< br />
                            1948년 7월 국립 부산수산대학 조교수< br />
                            1950년 9월 해군사관학교 항해과 교수< br />
                            1968년 4월 명성학원 이사장 취임< br />
                            2002년 한국해양대학교 명예공학박사 영득
                        </span>
                    </Value2>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '15%' }}>
                        <span>
                            제16회 < br />
                            (2007.2.24)
                        </span>
                    </Value>
                    <Value style={{ width: '15%' }}><span>김상진</span></Value>
                    <Value2 style={{ width: '70%' }}>
                        <span style={{ marginLeft: '5%' }}>
                            1926년 4월 27일 출생< br />
                            1948. 2 : 한국해양대학교 졸업< br />
                            1967. 2 : 서울대학교 행정대학원 졸업(행정학 석사)< br />
                            1962 - 1971 : 교통부 해운국 해사과장, 선원과장< br />
                            1978. 3 : 부산컨테이너부두운영공사 창립총회 의장< br />
                            1979 : 부산해운항만청장(관리관)< br />
                            1980. 6 - 1986. 3: 한국선급협회 이사장 및 회장< br />
                            1972. 7 : 홍조근정훈장 수훈< br />
                            1984. 3 : 동탑산업훈장 수훈
                        </span>
                    </Value2>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '15%' }}>
                        <span>
                            제17회 < br />
                            (2008.2.12)
                        </span>
                    </Value>
                    <Value style={{ width: '15%' }}><span>배병태</span></Value>
                    <Value2 style={{ width: '70%' }}>
                        <span style={{ marginLeft: '5%' }}>
                            1932. 7. 28 출생< br />
                            1975. 2 : 연세대학교 법학박사 취득< br />
                            1964 - 1978 : 한국해양대학교 교수< br />
                            1981 - 1986 : 한바다해운 대표이사< br />
                            1981 - 1983 : 교통부 정책자문위원< br />
                            1991 - 1994 : 해운산업연구원 원장< br />
                            1993 - 2005 : 한국해법학회 회장< br />
                            2007 : 한국해법학회 해상법개정 위원회 위원장
                        </span>
                    </Value2>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '15%' }}>
                        <span>
                            제18회 < br />
                            (2009.2.20)
                        </span>
                    </Value>
                    <Value style={{ width: '15%' }}><span>정영훈</span></Value>
                    <Value2 style={{ width: '70%' }}>
                        <span style={{ marginLeft: '5%' }}>
                            1932년 경기 광주 출생< br />
                            1958년 연세대학교 법학과 졸업< br />
                            1958 -1980 교통부 관광국 기획과장, 해운국 기획과장 등< br />
                            제14-15대 국회의원< br />
                            상훈 : 녹조근정훈장, 홍조근정훈장, 체육훈장맹호장
                        </span>
                    </Value2>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '15%' }}>
                        <span>
                            제19회 < br />
                            (2010.2.17)
                        </span>
                    </Value>
                    <Value style={{ width: '15%' }}><span>조정제</span></Value>
                    <Value2 style={{ width: '70%' }}>
                        <span style={{ marginLeft: '5%' }}>
                            1939. 10. 16 출생< br />
                            서울대 영문학(학사), 서울대 행정학(석사), 미국 Kansas주립대 경제학(박사)< br />
                            주요경력 : 경제기획원 자금계획과장, 국토개발연구원 부원장, 대한국토도시계획학회 회장,< br />
                            해양수산부장관, 해양문화재단이사장,< br />
                            (현)소설가
                        </span>
                    </Value2>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '15%' }}>
                        <span>
                            제20회 < br />
                            (2011.2.11)
                        </span>
                    </Value>
                    <Value style={{ width: '15%' }}><span>최재수</span></Value>
                    <Value2 style={{ width: '70%' }}>
                        <span style={{ marginLeft: '5%' }}>
                            1935. 9. 20 출생< br />
                            건국대학교 학사, 서울대학교 석사, 중앙대학교 박사 졸업< br />
                            1962 - 1979 : 행정고시 13회 합격 후 교통부 및 해운항만청 근무< br />
                            1979 - 1986 : 선주협회 전무< br />
                            1980 - 1984 : 사단법인 한국해운항만정보센터 이사장< br />
                            1986 - 1988 : 두양상선 부사장< br />
                            1988 - 2001 : 한국해양대학교 교수< br />
                            1998 - 1999 : 한국국제상학회 회장< br />
                            2000 - 2001 : 한국해운물류학회 회장< br />
                            2001 - 2008 : 한국해사문제연구소 소장< br />
                            상훈: 1982 - 철탑산업훈장
                        </span>
                    </Value2>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '15%' }}>
                        <span>
                            제21회 < br />
                            (2012.2.11)
                        </span>
                    </Value>
                    <Value style={{ width: '15%' }}><span>이윤수</span></Value>
                    <Value2 style={{ width: '70%' }}>
                        <span style={{ marginLeft: '5%' }}>
                            1936. 9. 10 출생< br />
                            1960. 3 한국해양대학교 항해학과 졸업< br />
                            1987. 8 서울大學校 經營大學最高經營者課程 修了< br />
                            1989. 6 延世大學校 經營大學院最高經營者課程 修了< br />
                            1994. 1 高麗大學校 國際大學院最高國際管理課程 修了졸업< br />
                            주요경력 :< br />
                            1988. 2-2004. 8 昭洋海運株式會社 社長< br />
                            1997. 2     韓國船舶代理店協會 會長< br />
                            1998. 4     海洋水産部 海運振興審議會 委員< br />
                            1998. 4     海洋水産部 行政規制改革委員會 委員< br />
                            2002. 3     韓國航海港灣學會 會長< br />
                            2007. 3     株式會社 케이씨티시(KCTC) 代表理事 副會長被任(現在)< br />
                            상훈 :< br />
                            1981. 3     第 5回 海運의 날 副總理 表彰 受賞< br />
                            1985. 3     第 9回 海運의 날 銅塔産業勳章 受賞
                        </span>
                    </Value2>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '15%' }}>
                        <span>
                            제22회 < br />
                            (2013.2.22)
                        </span>
                    </Value>
                    <Value style={{ width: '15%' }}><span>장두찬</span></Value>
                    <Value2 style={{ width: '70%' }}>
                        <span style={{ marginLeft: '5%' }}>
                            1939. 9. 23 출생< br />
                            1962. 해군사관학교 졸업< br />
                            1991~2011  KSS해운 대표이사 부사장, 사장, 회장< br />
                            1995-2003  한국선주협회 수석부회장< br />
                            2003-2007  한국항해항만학회 회장< br />
                            2004-2007  한국선주협회 회장< br />
                            2007-현재   한국해사재단 이사장< br />
                            상훈 :< br />
                            1995.5     은탑산업훈장
                        </span>
                    </Value2>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '15%' }}>
                        <span>
                            제23회 < br />
                            (2014.2.21)
                        </span>
                    </Value>
                    <Value style={{ width: '15%' }}><span>이윤재</span></Value>
                    <Value2 style={{ width: '70%' }}>
                        <span style={{ marginLeft: '5%' }}>
                            한국선주협회 회장< br />
                        </span>
                    </Value2>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '15%' }}>
                        <span>
                            제24회 < br />
                            (2015.2.26)
                        </span>
                    </Value>
                    <Value style={{ width: '15%' }}><span>김수금</span></Value>
                    <Value2 style={{ width: '70%' }}>
                        <span style={{ marginLeft: '5%' }}>
                            대륙상운 회장< br />
                            1928. 5. 20 출생< br />
                            1951. 3  한국해양대학교 항해학과 졸업 1960 .1-1964. 11  한국해양대학교 교수< br />
                            1964 .11  유니온선박(주) 사장< br />
                            1968. 11-1974. 9  마리타임 오버씨즈 부산지사 지사장< br />
                            1975 .3-1997. 10인천항 도선사< br />
                            1997. 10-현재대륙상운(주), 한창산업(주), 동보선박(주) 회장(現在)< br />
                            2005. 12-현재대륙상운(주), 한창산업(주) 회장(現在)
                        </span>
                    </Value2>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '15%' }}>
                        <span>
                            제25회 < br />
                            (2016.2.26)
                        </span>
                    </Value>
                    <Value style={{ width: '15%' }}><span>김종길</span></Value>
                    <Value2 style={{ width: '70%' }}>
                        <span style={{ marginLeft: '5%' }}>
                            전 해운항만청장< br />
                            생년월일 1937. 7. 9< br />
                            ○ 학력< br />
                            1957  광주고등학교 졸업< br />
                            1961  한국해양대학교 항해학과 졸업< br />
                            1976  노르웨이 해운아카데미< br />
                            1984  서울대학교 행정대학원 발전정책과정< br />
                            1987  국방대학원 국가정책과정< br />
                            ○ 경력< br />
                            1982  해운항만청 선원선박국장< br />
                            1985  인천해운항만청장< br />
                            1988  해운항만청 운영국장< br />
                            1991  부산해운항만청장< br />
                            1993  해운항만청 해운국장
                        </span>
                    </Value2>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '15%' }}>
                        <span>
                            제26회 < br />
                            (2017.2.24)
                        </span>
                    </Value>
                    <Value style={{ width: '15%' }}><span>정태순</span></Value>
                    <Value2 style={{ width: '70%' }}>
                        <span style={{ marginLeft: '5%' }}>
                            장금상선 회장< br />
                            ○ 생년월일 1948. 12. 20< br />
                            ○ 학력< br />
                            1968  서울 동성고등학교 졸업< br />
                            1971  한국해양대학교 항해학과 졸업< br />
                            ○ 경력< br />
                            1972-89  동남아해운 상무이사< br />
                            1989-99  장금유한공사 대표이사< br />
                            1999-현재  장금상선 대표이사 회장< br />
                            2013-현재  한국선주협회 부회장< br />
                            前 황해정기선사협회 회장< br />
                            前 바다살리기국민운동본부 총재< br />
                            前 부산항만공사 항만위원장< br />
                            ○ 상훈< br />
                            금탑산업훈장 수여(2015년)
                        </span>
                    </Value2>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '15%' }}>
                        <span>
                            제27회 < br />
                            (2018.2.24)
                        </span>
                    </Value>
                    <Value style={{ width: '15%' }}><span>허일</span></Value>
                    <Value2 style={{ width: '70%' }}>
                        <span style={{ marginLeft: '5%' }}>
                            前 한국해양대학교 교수< br />
                            ○ 생년월일 1941. 2. 17 (출생지:서울)< br />
                            ○ 학력< br />
                            1959  경기기계공업고등학교 졸업< br />
                            1963  한국해양대학교 항해학과 졸업< br />
                            1979  한국해양대학교 대학원 졸업< br />
                            2000  국립 부경대학교 대학원 졸업(공학박사)< br />
                            ○ 경력< br />
                            1963-69  삼신해운, 범우해운 승선 근무< br />
                            1969-76  한국해양대 해사대 운항시스템공학과 전임강사< br />
                            1975-83  한국해양대 실습선 한바다호 선장< br />
                            1976-2006  한국해양대 해사대 운항시스템공학부 교수< br />
                            1996-2000  한국항해항만학회 회장< br />
                            1998-2006  한국해양대 부설 장보고연구소 소장< br />
                            2006-현재  한국해양대학교 명예교수< br />
                            1997-현재  중국 대련해사대학 객좌교수< br />
                            前 한국해양대 해사박물관 관장< br />
                            前 대한요트협회 이사
                        </span>
                    </Value2>
                </Tuple>
                <Tuple>
                    <Value style={{ width: '15%' }}>
                        <span>
                            제28회 < br />
                            (2019.3.8)
                        </span>
                    </Value>
                    <Value style={{ width: '15%' }}><span>오거돈</span></Value>
                    <Value2 style={{ width: '70%' }}>
                        <span style={{ marginLeft: '5%' }}>
                            부산시장< br />
                            ○ 생년월일 1948. 10. 28 (출생지:부산)< br />
                            ○ 학력< br />
                            1967  경남중고등학교 졸업< br />
                            1971  서울대학교 문리대 철학과졸업< br />
                            1973  서울대학교 행정대학원 행정학과 석사졸업< br />
                            2003  동아대학교 대학원 행정학 박사 졸업< br />
                            2006  부산대학교 국제전문대학원 석사 졸업< br />
                            2012  말레이시아 MSU대학교 경영학 명예박사< br />
                            ○ 경력< br />
                            1973  제 14회 행정고시 합격< br />
                            2000  부산광역시 정무부시장, 행정부시장, 부산광역시 시장 권한대행< br />
                            2005. 1 해양수산부 장관 (2005. 1. 5 ~ 2006. 3. 21)< br />
                            2008. 3 한국해양대학교 총장< br />
                            2008  한국조선기자재연구원 공동이사장< br />
                            2008  해양산업발접협의회, 부산과학기술협의회 이사< br />
                            2010-2012  세계해양대학총장협의회 (IAMU) 의장< br />
                            2012. 3  (사)대한민국해양연맹 총재< br />
                            2012. 6  한국해양대학교 석좌교수< br />
                            2014. 11  (사)대한민국해양연맹 총재, 부산대학교 석좌교수< br />
                            2018. 7- 현재  부산광역시 시장< br />
                            ○ 포상< br />
                            1999  홍조근정훈장< br />
                            2006  청조근정훈장< br />
                            2011  제12회 부산문화대상 해양부문
                        </span>
                    </Value2>
                </Tuple>
            </Table>
        </Box>
    </Container >
}

export default CulturalAward