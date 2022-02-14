import React from "react";
import styled from "styled-components";


const Container = styled.div`
padding-bottom: 10%;
`;


const ContentBox = styled.div`
    padding-top:2%;
    line-height:25px;
    font-size:large;
    opacity: 0.6;
    @media only screen and (max-width:768px){
        font-size:0.8em;
    }
`;


const ThesisWriting = function () {
    return <Container>
        <ContentBox>
            <span>
                『해운물류연구』에 투고할 논문은 다음 원칙에 따라 집필하십시오. 이 원칙을 따르지 않을 경우 논문심사시 불이익을 받을 수 있습니다.<br />
                <br />
                1. 투고논문은 다른 학술지에 이미 발표되었거나 심사를 받고 있지 않은 것을 원칙으로 한다.<br />
                <br />
                2. 이중 게재 또는 논문 표절로 인한 문제 발생 시 논문의 투고(작성)자가 전적으로 책임을 진다. 그리고 학술대회 발표논문 및 세미나 Working
                paper와 학위 논문을 제출한 경우에는 논문의 첫 페이지에 이와 관련된 내용에 대해 주석으로 처리하는 것을 권장한다.<br />
                <br />
                3. 영문요약은 원어민 교정이 필수적으로 요구되며 교정한 결과를 입증해야 한다. 만일 투고자가 직접 원어민 교정이 어려운 경우 학술위원회에 위임
                할 수 있으며, 이러한 경우에 원어민 교정비용은 투고자가 부담하여야 한다.<br />
                <br />
                4. 사용 언어<br />
                한글로 작성하는 것을 원칙으로 한다.<br />
                <br />
                5. 원고 작성 및 분량<br />
                한글 워드프로세서(HWP)를 사용하여 작성하는 것을 원칙으로 하고, 분량은 A4 용지(편집용지 기준) 18매 이내여야 한다. 이를 초과할 경우 소정의
                추가 인쇄비는 필자가 부담한다.<br />
                <br />
                6. 논문의 양식<br />
                학회 홈페이지의 논문투고 안내 하단 샘플 논문을 참조하여 작성한다.<br />
                <br />
                7. 논문의 작성<br />
                1) 논문은 국문 제목,국문 저자명과 소속 및 직위,전자메일 주소,차례,국문요약,주제어,본문,참고문헌,영문제목,영문저자명과 소속 및 직위,영문요약,
                key word 순으로 배열한다. 다만,공동연구인 경우에는‘주저자,교신저자,공동연구,논문지도‘등으로 공동연구자의 역할을 구분하여 명기하여야 한다.<br />
                2) 국문요약의 분량은 400∼420字(공백 제외) 이내, 영문요약의 분량은 문자수 기준 900∼1,000字 또는 단어수 기준 150∼160(공백 포함, 영문
                제목·영문저자·Key word는 제외) 로 작성한다.<br />
                3) 각 장 및 절의 표기는 I, 1, (1), 가)의 순으로 하고, 숫자는 만 단위로 읽는다.<br />
                예) 3,000 --&gt; 3000, 123,456 --&gt; 12만 3456, 123,456,789 --&gt; 1억 2345만 6789<br />
                4) 논문은 온라인투고 및 심사시스템(JAMS)에 접수한다.<br />
                5) 논문 본문의 각주는 다음과 같은 양식에 따라 작성하여야 한다.<br />
                ① 인용이나 참고한 문헌의 출처는 본문의 괄호 속에 저자의 이름과 출판연도를 쉼표로 구분하여 밝히며, 경우에 따라서는 출판연도 옆에 인용한 쪽
                번호를 밝히기도 한다. 저자의 인용순서는 가나다 또는 알파벳순으로 구분한다. 같은 연도의 것이 2편 이상일 때에는 연도 다음에 a, b, c … 등을
                구분한다. 2명 이상의 저자를 인용할 경우 세미콜론으로 구분하며, 저자가 같고 연도가 다른 문헌을 함께 언급할 때에는 쉼표로 구분하여 연도만
                나열한다. 외국저자의 경우에는 성(last name)과 연도를 쓴다.<br />
                ② [본문 문헌의 인용 예시]<br />
                &emsp;· 1인의 경우: (하영석, 2014), (Kim, 2011)<br />
                &emsp;· 2인 공동의 경우: (모수원·이광배, 2014), (Chu and Hyun, 2012)<br />
                &emsp;· 3인 이상 공동의 경우: (모수원외 2인, 2011), (Kim, et. al., 2015)<br />
                &emsp;· 연속 두 개 문헌을 인용하는 경우: (모수원, 2013; 하영석, 2015)<br />
                &emsp;· 저자가 같고 연도가 다른 경우: (모수원, 2011, 2013)(Kim, et. al., 2013, 2015)<br />
                ③ [본문의 문헌에 직접 인용 예시]<br />
                &emsp;· 단독저자 직접 언급 시: 이성우(2014), Kim(2015), Kumbhakar(1992)<br />
                &emsp; · 2인 저자 직접 언급 시: 이명헌·김일중(1998), 최용석(2006)<br />
                &emsp;&emsp;- 이명헌·김일중(1998)은 국내 철강업의 공해저감시설에 -중략-<br />
                &emsp;&emsp;- 최용석(2006)과 김현덕·이광배(2007)는 계층분석과정을 -중략-<br />
                &emsp;· 3인 저자 이상 직접 언급 시: 하영석외 2인(2011), Kim, et. al.(2015)<br />
                ④ 영문 참고문헌의 저자 표기는 반드시 저자 수에 관계없이 성(last name), 이름(first name)순서로 표기한다.<br />
                &emsp;· Atkinson, S.E. and Cornwell, C.(1994)<br />
                &emsp;· Kmenta, J.(1986)<br />
                &emsp;· Mackinnon, J.G., Haug, A.A. and Michelis, L.(1999)<br />
                ⑤ 저자가 3명 이상일 경우 처음 인용할 때는 저자의 이름을 모두 밝히고, 그 다음에 나올 때에는 저자 다음에 김창범외 2인(2015)과
                Lee, et. al.(2015)의 형태로 표기한다.<br />
                ⑥ 같은 연도에 동일인의 자료가 여러 편인 경우 출판연도 뒤에 a, b, c 등으로 구분한다.<br />
                &emsp;· 이명헌(1996a), 이명헌(1996b)<br />
                ⑦ 본문과 각주에서 언급된 모든 문헌은 참고문헌에서 모두 밝힌다.<br />
                ⑧ 필요한 경우는 일련번호를 붙이고 그 내용을 해당 면 하단에 내용주를 삽입할 수 있다.<br />
                ⑨ 인용쪽수 표기 방법<br />
                &emsp;· pp.15-9 (그름) --&gt; pp.15-19.<br />
                &emsp;· pp.150-9(그름) --&gt; pp.150-59 또는 pp.150-159.<br />
                &emsp;· pp. 105-09 또는 105-9 (그름) --&gt; pp.105-109.<br />
                6) 참고문헌은 국문문헌, 외국문헌, 인터넷 웹사이트 순서로 적되, 국문은 가나다 순, 외국문헌은 저자의 성을 기준으로 ABC 순으로 배열하고,
                다음과 같은 양식에 따라 작성하여야 한다.<br />
                ① 東洋書 단행본 : 저자(연도),『서명』, (出版地), 출판사, 쪽수<br />
                &emsp;· 손태현(1982),『韓國海運史』, (부산), 한국선원선박문제연구소, p.123.<br />
                ② 東洋書 논문 : 필자(연도),「논제」『,게재지명』, 호수, 쪽수<br />
                &emsp;· 임석민(1999), 「선하증권의 제시와 보증도」,『 한국해운학회지』, 28호, p.35.<br />
                ③ 西洋書 단행본 : 저자(출판년도), 서명(이탤릭체), (출판지), 출판사, 쪽수<br />
                &emsp;· Fayle, E.(1933), A Short History of the World's Shipping Industry, (London), George Allen & Unwin Ltd., p.456.<br />
                ④ 西洋書 논문 : 필자(연도), “논제" ,게재지명(이탤릭체), 호수, 쪽수<br />
                &emsp;· Nasseri, K.(1988), “The Multimodal Convention," Journal of Maritime Law & Commerce, Vol.19, No.2, p.45.<br />
                ⑤ 西洋書의 國譯書 : 원저자(출판년도), 원서명(이탤릭체), 출판사, 출판연도, 譯者,譯書名, 출판사, 쪽수<br />
                &emsp;· Cuyvers, Luc(1993), Sea Power : A Global Journey, US Naval Institute, 김성준 역(1999), 『역사와 바다 : 해양력의 세계여행』,
                한국해사문제연구소, p.89.<br />
                ⑥ 신문, 잡지 등에 게재된 글 : 필자(연도), “제목”, 게재지(영문은 이탤릭체), (출판기관), 게재면 또는 호수<br />
                &emsp;· 김현(2000), “선하증권의 법적 효력,” 코리아쉬핑가제트, (코리아쉬핑가제트사), 5.1.<br />
                ⑦ 인터넷상의 웹사이트를 인용하는 경우에는 웹사이트의 주소를 가능한 한 상세하게 명기하고, 반드시 참고 연월일자를 밝혀야 한다.<br />
                <br />
                8. 게재확정을 받은 논문의 교정과 교열은 위의 원칙에 따라 전적으로 투고자가 행하여야 하며, 위의 규칙을 어길 시 불이익을 받을 수 있음.<br />
                <br />
                9. 여기에 규정하지 않은 사항은 일반적인 논문작성 원칙에 따른다.<br />
            </span>
        </ContentBox>
    </Container>
}


export default ThesisWriting;