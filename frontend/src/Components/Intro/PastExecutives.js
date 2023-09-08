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

const Table = styled.div`
  margin: 2% 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(0, 0, 0, 0.3);
`;

const Tuple = styled.div`
  display: flex;
`;

const Attributes = styled.div`
  font-size: medium;
  background-color: rgba(0, 0, 0, 0.02);
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1% 0;
`;

const Value = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  border-left: 1px solid rgba(0, 0, 0, 0.5);
  opacity: 0.6;
  font-size: medium;
  line-height: 40px;
  padding: 1% 0;
  text-align: center;
  @media only screen and (max-width: 653px) {
    font-size: 0.8em;
  }
`;

const PastExecutives = function () {
  return (
    <Container>
      <Box>
        <Table>
          <Tuple>
            <Attributes>
              <span>직위</span>
            </Attributes>
            <Attributes style={{ width: "40%" }}>
              <span>이름</span>
            </Attributes>
            <Attributes style={{ width: "40%" }}>
              <span>재위 기간</span>
            </Attributes>
          </Tuple>
          <Tuple>
            <Value>
              <span>회장</span>
            </Value>
            <Value style={{ width: "40%" }}>
              <span>
                윤상송
                <br />
                한동호
                <br />
                이준수
                <br />
                민성규
                <br />
                최재수
                <br />
                오세영
                <br />
                윤일현
                <br />
                모수원
                <br />
                하영석
                <br />
                구종순
                <br />
                한종길
                <br />
                박홍균
                <br />
                여기태
                <br />
                정태원
                <br />
                최용석
                <br />
                안우철
                <br />
              </span>
            </Value>
            <Value style={{ width: "40%" }}>
              <span>
                1982-1984
                <br />
                1985-1988
                <br />
                1989-1994
                <br />
                1995-1999
                <br />
                2000-2001
                <br />
                2002-2005.2
                <br />
                2005.2-2007.2
                <br />
                2007.2-2009.2
                <br />
                2009.2-2011.2
                <br />
                2011.2-2013.2
                <br />
                2013.2-2015.2
                <br />
                2015.3-2017.2
                <br />
                2017.3-2019.2
                <br />
                2019.3-2021.3
                <br />
                2021.3-2023.3
                <br />
                2023.3-현재
              </span>
            </Value>
          </Tuple>
          <Tuple>
            <Value>
              <span>학술위원장</span>
            </Value>
            <Value style={{ width: "40%" }}>
              <span>
                민성규
                <br />
                최재수
                <br />
                오세영
                <br />
                이태우
                <br />
                윤일현
                <br />
                하영석
                <br />
                구종순
                <br />
                김길수
                <br />
                박홍균
                <br />
                여기태
                <br />
                이제현
                <br />
                최용석
                <br />
                안우철
                <br />
                이정선
              </span>
            </Value>
            <Value style={{ width: "40%" }}>
              <span>
                1994-1995
                <br />
                1996-1998
                <br />
                1999-2001
                <br />
                2002-2003.3
                <br />
                2003.4-2005.2
                <br />
                2005.2-2009.2
                <br />
                2009.2-2011.2
                <br />
                2011.2-2013.2
                <br />
                2013.2-2015.2
                <br />
                2015.3-2017.2
                <br />
                2017.3-2019.2
                <br />
                2019.3-2021.2
                <br />
                2021.2-2023.3
                <br />
                2023.3-현재
              </span>
            </Value>
          </Tuple>
          <Tuple>
            <Value>
              <span>사무국장</span>
            </Value>
            <Value style={{ width: "40%" }}>
              <span>
                이원철
                <br />
                오세영
                <br />
                김성준
                <br />
                한종길
                <br />
                안우철
                <br />
                정현재
                <br />
                전준우
                <br />
                김선구
                <br />
                강달원
              </span>
            </Value>
            <Value style={{ width: "40%" }}>
              <span>
                1982-1998
                <br />
                1998-2001
                <br />
                2002.2-2009.2
                <br />
                2009.2-2013.2
                <br />
                2013.2-2021.2
                <br />
                2016.2-2019.2
                <br />
                2019.3-2021.2
                <br />
                2021.2-2023.2
                <br />
                2023.3-현재
              </span>
            </Value>
          </Tuple>
        </Table>
      </Box>
    </Container>
  );
};

export default PastExecutives;
