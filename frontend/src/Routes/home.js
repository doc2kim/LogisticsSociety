import React, { useContext, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import jsonKoResults from "../Components/Academic/Thesis/json_ko_results.json";
import jsonEnResults from "../Components/Academic/Thesis/json_en_results.json";
import home_img from "../assets/home_img.png";
import slide_img from "../assets/slide.png";
import icasl_icon from "../assets/icasl_icon.png";
import academic_icon from "../assets/academic_icon.png";
// import AuthContext from "../ApiContext/AuthContext"
import { noticeAxios } from "../ApiContext/RestApi"
import { newsAxios } from "../ApiContext/RestApi"
import { throttle } from 'lodash';


const Container = styled.div`
    width:100%;
    height:47em;
    padding-top:6.2em;
    @media only screen and (max-width: 768px) {
        padding-top:3em;
        height:430vw;
    }
`;

const Title = styled.h1`
    padding-top:0.5em;
    font-size:2.5em;
    font-weight:bold;
    color:white;
    text-align: center;
    @media only screen and (max-width: 768px) {
        font-size: 2em;
    }
    @media only screen and (max-width: 280px) {
        font-size: 1.9em;
    }
`;

const SubTitle = styled.span`
    font-size:1.5em;
    color:white;
    text-align: center;
    @media only screen and (max-width: 768px) {
        font-size: 1.1em;
    }
    @media only screen and (max-width: 280px) {
        font-size: 0.9em;
    }
`;

const TitleImage = styled.div`
    width: 100%;
    height:26em;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    @media only screen and (max-width: 768px) {
        height: 80vw;
    }
    `;

const InfoContainer = styled.div`
    position: absolute;
    top: 24em;
    right: 0;
    left: 0; 
    @media only screen and (max-width: 768px) {
        top: 67vw;
    }
`;


const FlexBox = styled.div`
    display: flex;
    justify-content: center;
`;


const Box = styled.div`
    width: 1130px;
    margin: 0 3%;
    @media only screen and (max-width: 768px) {
        width: 94%;
    }
`;


const InfoBox = styled.div`
    display: flex;
    justify-content: space-between;
    height:16em;
    @media only screen and (max-width: 768px) {
        display: block;
        height: auto;
    }
`;


const NoticeBox = styled.ul`
    display:flex;
    justify-content: space-between;
    z-index: 1;
    @media only screen and (max-width: 768px) {
        display: block;
    }
`;


const SlideBox = styled.div`
    width: 49%;
    display: flex;
    @media only screen and (max-width: 768px) {
        width: 100%;
        height: 50vw;
        padding-bottom:5vw;
    }
`;

const NoticeSlide = styled.div`
    width: 100%;
    display: flex;
    color: white;
    position: relative;
`;

const SlideButton = styled.div`
    width:1.5em;
    height:1.5em;
    line-height:1.5em;
    font-size:1em;
    text-align: center;
    border:1px solid rgba(0, 0, 0, .4);
    border-radius: 2px;
    opacity: 0.8;
    cursor: pointer;
    @media only screen and (max-width: 768px) {
        width: 5vw;
        height: 5vw;
        font-size:4vw;
        line-height:4.5vw;
    }
`;

const SlideNumberButton = styled(SlideButton)`
    cursor: default;
    @media only screen and (max-width: 768px) {
        font-size: 3vw;
    }
`;

const SlideButtonBox = styled.div`
    position: absolute;
    display: flex;
    justify-content:end;
    right:0;
`;

const SlideContent = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10%;

`;

const SlideTitle = styled.h3`
    font-size: 1.5em;
    line-height: 1.5em;
    color: white;
    padding-bottom:7%;
    @media only screen and (max-width: 768px) {
        font-size: 5vw;
        padding-bottom: 5%;
    }
`;

// const Login = styled.div`
//     width: 24.5%;
//     margin-right: 0.5%;
//     background-color:#16498b;
//     display: flex;
//     align-items: center;
//     @media only screen and (max-width: 768px) {
//         display: none;
//     }
// `;

// const LoginBox = styled.div`
//     padding: 10% 15%;
// `;

// const LoginForm = styled.form`
//     display: flex;
//     align-items: center;
//     padding-top:3%;
//     &:div{ 
//         width:66.666%;
//         display: flex;
//         flex-direction: column;
//     }
// `;

// const SignUpFindID = styled.span`
//     color: white;
//     display: flex;
//     padding: 6% 5% 0 5%;
//     justify-content: space-around;
//     line-height:1vw;
// `;

// const SignUp = styled.span`
//     font-size: 0.5vw;
// `;

// const FindId = styled.span`
//     font-size: 0.5vw;
// `;

// const LoginTitle = styled.h3`
//     color: white;
//     font-size: 1.3vw;
//     text-align: center;
//     padding-top: 2vw;
// `;

// const LoginInput = styled.input`
//     padding:0;
//     width: 100%;
//     height:2vw;
//     background-color:#16498b;
//     border: 1px solid rgba(255,255,255,0.5);
//     color: white;
//     padding-left: 0.5vw;
//     &::placeholder{
//         font-size: 0.6vw;
//         color: rgba(255,255,255,0.5);
//     }
// `;

// const LoginButton = styled.button`
//     width: 33.3333%;
//     height: 4vw;
//     background-color: white;
//     margin-left:0.6vw;
//     font-size: 0.7vw;
// `;

const Paper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    width: 49%;
    @media only screen and (max-width: 768px) {
        width: 100%;
        height: 50vw;
        margin-bottom:5vw;
    }
`;

const PaperBox = styled.div`
    padding: 0 10%;
    height: 69%;
    background-color:#31a4d1;
`;

const PaperTitle = styled.h3`
    color: white;
    font-size: 1.7em;
    text-align: center;
    padding-top: 0.5em;
    @media only screen and (max-width: 768px) {
        font-size: 4vw;
    }
`;

const PaperText = styled.span`
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    display: block;
    padding-top: 1em;
    color: white;
    opacity: 0.6;
    text-align: center;
    font-size: 0.8em;
    @media only screen and (max-width: 768px) {
        font-size: 3vw;
        padding-bottom:3vw;
    }
`;

const SearchForm = styled.form`
    display: flex;
`;

const SearchCategory = styled.select`
    margin-top: 1em;
    background-color: #31a4d1;
    border: 2px solid white;
    border-right: none;
    color: white;
    height: 3.85em;
    font-size: 0.8em;
    @media only screen and (max-width: 768px) {
        height: 9vw;
        font-size: 3vw;
        margin-top: 0;
    }
`;

const PaperSearch = styled.input`
    margin-top: 0.9em;
    padding:0;
    border: 2px solid white;
    background-color: #31a4d1;
    color: white;
    width: 100%;
    height: 3.4em;
    padding-left: 1em;
    font-size: 0.9em;
    &::placeholder{
        font-size: 0.9em;
        color: rgba(255,255,255,0.7);
    }
    @media only screen and (max-width: 768px) {
        height: 9vw;
        font-size: 3vw;
        margin-top: 0;
            &::placeholder{
            font-size: 3vw;
            padding-left: 1vw;
            color: rgba(255,255,255,0.7);
        }   
    }
`;



const PaperSubmission = styled.a`
    padding: 1em;
    display: block;
    color: rgba(255,255,255,0.8);
    text-align: center;
    font-size: 0.9em;
    @media only screen and (max-width: 768px) {
        padding: 4vw;
        font-size:2.5vw;
    }
`;



const NoticeSections = styled.div`
    width: 49%;
    @media only screen and (max-width: 768px) {
        width:100%;
        padding-top: 5%;
    }
`;

const Notice = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom: 0.5em;
    border-bottom: 0.2em solid rgba(0, 0, 0, .3);
`;

const NoticeTitle = styled.h3`
    font-size:1em;
    padding: 0.8em 0;

`;

const PlusButton = styled.div`
    width:1.5em;
    height:1.5em;
    line-height:1.5em;
    font-size:1em;
    opacity: 0.4 ;
    text-align: center;
    border:1px solid rgba(0, 0, 0, .4);
    border-radius: 2px;
    cursor:pointer;
    &:before {
        content: "+";
    }
    @media only screen and (max-width: 768px) {
        width: 15vw;
        height:5vw;
        line-height:5vw;
        opacity: 0.8;
        font-size: 3vw;
        &:before {
            content: "더보기 +";
        }
        
    }
`;

const NoticeList = styled.li`
    list-style: inside;
    opacity:0.7;
    font-size: 0.9em;
    @media only screen and (max-width: 768px) {
        overflow:hidden;
        white-space:nowrap;
        text-overflow:ellipsis;
        font-size: 3.5vw;
        line-height:7vw;
        width: 80%;
    }
`;

const ListBox = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    line-height: 2em;
    @media only screen and (max-width: 768px) {
        
    }

`;

const NewsBox = styled.div`
    display: flex;
    justify-content:space-between;
    @media only screen and (max-width: 768px) {
        display:block;
    }
`;

const News = styled.div`
    width: 32.333333%;
    line-height:1.2em;
    @media only screen and (max-width: 768px) {
        text-align: center;
        padding-bottom: 5vw;
        width:100%;
    }
`;

const NewsImg = styled.img`
    width:100%;
    height: 7em;
    @media only screen and (max-width: 768px) {
        height: 50vw;   
    }
`;

const NewsContent = styled.span`
    width: 90%;
    display:block;
    font-size:0.8em;
    opacity: 0.8;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    height: 1.3em;
    @media only screen and (max-width: 768px) {
        line-height:3vw;
        height: 4vw;
        font-size:3vw; 
    }
`;

const TimeStamp = styled.div`
    width: 5.4em;
    opacity:0.2;
    font-size:0.8em;
    text-align: end;
    @media only screen and (max-width: 768px) {
        font-size:3vw;
    }
    @media only screen and (max-width: 280px) {
        display:none;
    }
`;

const NewsInfo = styled.span`
    font-size:0.1em;
    opacity:0.5;
    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const Conference = styled.div`
    height: 29%;
    display: flex;
    justify-content: space-between;
`;

const Academic = styled(Link)`
    background-color: #31a4d1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 49.5%;
    color: white;
    
`;

const AcademicInfo = styled.div`
    text-align: center;
`;

const AcademicImage = styled.img`
    width: 3em; 
    height: 3em;
    @media only screen and (max-width: 768px) {
        width: 10vw;
        height: 10vw;
    }
`;

const IcaslImage = styled.img`
 @media only screen and (max-width: 768px) {
        width: 12vw;
        height: 12vw;
    }
`;

const AcademicTitle = styled.h1`
    font-size: 1.5em;
    @media only screen and (max-width: 768px) {
        font-size: 4vw;
    }
`;

const AcademicText = styled.span`
    font-size: 0.8em;
    @media only screen and (max-width: 768px) {
        font-size: 2vw;
    }
`;






// const SearchIcon = styled.span`
//     font-size: 1vw;
//     transform: scaleX(-1) scaleY(-1);
//     opacity:0.7; 
//     color: white; 
//     position: absolute; 
//     top: 1.9vw; 
//     left: 8.7vw;
//     @media only screen and (max-width: 768px) {
//         display:none;
//     }
// `;



// const LoginContent = styled.div`
//     color: white;
//     font-size:1vw;
//     display: flex;
//     align-items: center;
// `;

// const Content = styled.div`
//     width: 100%;
//     padding: 2vw;
//     line-height: 2vw;
//     font-size: 1vw;
// `;

const TitleSet = styled.div`
    opacity: ${({ animate }) => (animate > 0 && 1 - (animate * 0.008))};
`;

const EventText = styled.span`
    line-height: 1.5em;
    @media only screen and (max-width: 768px) {
        font-size: 3vw;
    }
`;





function useScroll() {
    const [scrollY, setScrollY] = useState(0);
    const listener = () => {
        if (window.pageYOffset < 350)
            setScrollY(window.pageYOffset);
    };

    const delay = 20;

    useEffect(() => {
        if (window.pageYOffset < 350)
            window.addEventListener('scroll', throttle(listener, delay));
        return () => window.removeEventListener('scroll', listener);
    });

    return {
        scrollY
    };
}
// eslint-disable-next-line import/no-anonymous-default-export

const Home = function () {
    const slideData = []
    const { scrollY } = useScroll()
    // const { user, loginUser } = useContext(AuthContext)
    const [noticeData, setNoticeData] = useState(null)
    const [newsData, setNewsData] = useState(null)
    const [slide, setSlide] = useState(null)
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);
    const navigator = useNavigate()

    const searchHandler = function (e) {
        e.preventDefault()
        const searchResult = [];
        const optionValue = e.target[1].selectedOptions[0].value;
        const journalValue = e.target[0].selectedOptions[0].value;
        let jsonResults = journalValue === "국문지" ? jsonKoResults : jsonEnResults;
        if (optionValue === "논문명") {
            for (const i of jsonResults) {
                const titleData = i.articleInfo["title-group"]["article-title"]
                if (titleData[0] && titleData[0]["#text"]) {
                    if (titleData[0]["#text"].includes(e.target.search.value)) {
                        searchResult.push(i)
                    }
                } else {
                    if (titleData["#text"].includes(e.target.search.value)) {
                        searchResult.push(i)
                    }
                }
            }
        } else if (optionValue === "저자") {
            for (const i of jsonResults) {
                const authorData = i.articleInfo["author-group"]["author"]
                if (typeof authorData === "object") {
                    for (const j of authorData) {
                        if (j.includes(e.target.search.value)) {
                            searchResult.push(i)
                        } else {
                            continue
                        }
                    }
                } else {
                    if (authorData.includes(e.target.search.value)) {
                        searchResult.push(i)
                    }
                }
            }
        } else if (optionValue === "발행년도") {
            for (const i of jsonResults) {
                const issueData = i.journalInfo["pub-year"];
                if (issueData.includes(e.target.search.value)) {
                    searchResult.push(i)
                }
            }
        }
        navigator("/academic/thesis-search",
            {
                state:
                {
                    searchResult: searchResult,
                    journalValue: e.target[0].selectedOptions[0].value,
                    selectValue: e.target[1].selectedOptions[0].value,
                    searchValue: e.target.search.value
                }
            });
    }


    const NextSlide = function () {
        if (currentSlide >= 2) {
            setCurrentSlide(0)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
    };

    const PrevSlide = function () {
        if (currentSlide === 0) {
            setCurrentSlide(2);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    }

    const notice = async function () {
        const { data } = await noticeAxios();
        for (const i of data) {
            if (i.home_fixed) {
                slideData.push(i)
                slideData.sort((a, b) => b.id - a.id)
            }
        }
        setSlide(slideData)
        setNoticeData(data)
    }
    const news = async function () {
        const { data } = await newsAxios();
        setNewsData(data)
    }

    useEffect(function () {
        if (!noticeData) {
            notice()
        }
        if (!newsData) {
            news()
        }
    }, [])
    return noticeData && newsData && slide &&
        (
            <Container>
                <TitleImage style={{ background: `url(${home_img})`, backgroundSize: 'cover' }}>
                    <TitleSet animate={scrollY}>
                        <SubTitle>해운산업의 미래와 학술진흥을 책임지는</SubTitle>
                        <Title>한국해운물류학회</Title>
                    </TitleSet>
                </TitleImage>
                <InfoContainer>
                    <FlexBox>
                        <Box>
                            <InfoBox>
                                <SlideBox ref={slideRef}>
                                    {slide.map(function (i, index) {
                                        return index <= 2 && index === currentSlide &&
                                            <NoticeSlide key={index} style={{ background: `url(${slide_img})`, backgroundSize: 'cover' }}>
                                                <SlideButtonBox>
                                                    <SlideNumberButton>{index + 1}/3</SlideNumberButton>
                                                    <SlideButton onClick={PrevSlide}>&lt;</SlideButton>
                                                    <SlideButton onClick={NextSlide}>&gt;</SlideButton>
                                                </SlideButtonBox>
                                                <SlideContent to={`community/notice/${i.id}`} state={{ data: i.id, allData: noticeData, index: index }}>
                                                    <SlideTitle>{i.title}</SlideTitle>
                                                    <EventText>일시: {i.schedule}</EventText><br />
                                                    <EventText>장소: {i.place}</EventText>
                                                </SlideContent>
                                            </NoticeSlide>
                                    })}
                                </SlideBox>
                                {/* <Login>{
                                user ?
                                    <LoginContent>
                                        <Content>
                                            안녕하세요 <span>{user.name}</span>님.<br />
                                            <br />
                                            한국해운물류학회에<br />
                                            오신 것을 환영합니다.
                                        </Content>
                                    </LoginContent>
                                    : <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <LoginTitle>로그인</LoginTitle>
                                        <LoginBox>
                                            <LoginForm onSubmit={loginUser}>
                                                <div>
                                                    <LoginInput name='email' type='text' autoFocus placeholder='이메일' required />
                                                    <LoginInput name='password' type='password' placeholder='비밀번호' style={{ marginTop: '1%' }} required />
                                                </div>
                                                <LoginButton type='submit'>로그인</LoginButton>
                                            </LoginForm>
                                            <SignUpFindID>
                                                <SignUp><Link to='/signup'>회원가입</Link></SignUp> | <FindId>아이디/비밀번호 찾기</FindId>
                                            </SignUpFindID>
                                        </LoginBox>
                                    </div>}
                            </Login> */}
                                <Paper>
                                    <PaperBox>
                                        <PaperTitle>논문검색</PaperTitle>
                                        <PaperText>학술지 논문을 검색하실 수 있습니다.</PaperText>
                                        <SearchForm onSubmit={searchHandler}>
                                            <SearchCategory name='journal'>
                                                <option value="국문지" title="국문지">국문지</option>
                                                <option value="영문지" title="영문지">영문지</option>
                                            </SearchCategory>
                                            <SearchCategory>
                                                <option value="논문명">논문명</option>
                                                <option value="저자">저자</option>
                                                <option value="발행년도">발행년도</option>
                                            </SearchCategory>
                                            <PaperSearch style={{ position: 'relative' }} name='search' type='search' placeholder='KCI API 논문검색' required />
                                        </SearchForm>
                                        <PaperSubmission href='https://jsl.jams.or.kr/co/main/jmMain.kci' target="_blank">논문투고 jams 시스템 바로가기</PaperSubmission>
                                    </PaperBox>
                                    <Conference>
                                        <Academic to="/active/conference">
                                            <AcademicImage src={academic_icon} />
                                            <AcademicInfo>
                                                <AcademicTitle>학술대회</AcademicTitle>
                                                <AcademicText>논문 바로가기</AcademicText>
                                            </AcademicInfo>
                                        </Academic>
                                        <Academic to="/active/icasl">
                                            <IcaslImage src={icasl_icon} />
                                            <AcademicInfo>
                                                <AcademicTitle>ICASL</AcademicTitle>
                                                <AcademicText>논문 바로가기</AcademicText>
                                            </AcademicInfo>
                                        </Academic>
                                    </Conference>
                                </Paper>
                            </InfoBox>
                            <NoticeBox>
                                <NoticeSections>
                                    <Notice>
                                        <NoticeTitle>공지사항</NoticeTitle><Link to="/community/notice"><PlusButton /></Link>
                                    </Notice>
                                    {noticeData && noticeData
                                        .sort((a, b) => b.id - a.id)
                                        .map(function (i, index) {
                                            return index <= 4 && <ListBox key={index}>
                                                <NoticeList>
                                                    <Link to={`community/notice/${i.id}`} state={{ data: i.id, allData: noticeData, index: index }}>
                                                        {i.title}
                                                    </Link>
                                                </NoticeList>
                                                <TimeStamp>{i.created_date.substr(0, 10)}</TimeStamp>
                                            </ListBox>
                                        })}
                                </NoticeSections>
                                <NoticeSections>
                                    <Notice>
                                        <NoticeTitle>학회소식</NoticeTitle><Link to="/community/news"><PlusButton /></Link>
                                    </Notice>
                                    <NewsBox>
                                        {newsData && newsData
                                            .sort((a, b) => b.id - a.id)
                                            .map(function (i, index) {
                                                return index <= 2 &&
                                                    <News key={index}>
                                                        <Link to={`community/news/${i.id} `} state={{ data: i.id, allData: newsData, index: index }}>
                                                            <NewsImg style={{ background: `url(/media/${i.cover_image})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat", backgroundPosition: "center" }} />
                                                            <NewsContent>{i.title}</NewsContent>
                                                        </Link >
                                                        <NewsInfo>{i.created_date.substr(0, 10)}</NewsInfo>
                                                    </News >
                                            })}
                                    </NewsBox >
                                </NoticeSections >
                            </NoticeBox >
                        </Box>
                    </FlexBox>
                </InfoContainer >
            </Container >
        );
}

export default Home;