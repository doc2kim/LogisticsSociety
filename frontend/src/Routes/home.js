import React, { useContext, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import home_img from "../assets/home_img.png";
import slide_img from "../assets/slide.png";
import AuthContext from "../ApiContext/AuthContext"
import { noticeAxios } from "../ApiContext/RestApi"
import { newsAxios } from "../ApiContext/RestApi"
import { throttle } from 'lodash';


const Container = styled.div`
    padding-top:5vw;
    height:39.5vw;
    @media only screen and (max-width: 768px) {
        height:225vw;
    }
`;

const Title = styled.h1`
    padding-top:1vw;
    font-size:2vw;
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
    font-size:1.5vw;
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
    height:20vw;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    @media only screen and (max-width: 768px) {
        height: 80vw;
    }
`;

const StickyBox = styled.div`
`;

const InfoBox = styled.div`
    display: flex;
    padding: 0 20%;
    height: 13vw;
    @media only screen and (max-width: 768px) {
        display: block;
        padding: 5% 3%;
        height: auto;
    }
`;


const NoticeBox = styled.ul`
    padding: 2vw 20%;
    display:flex;
    justify-content: space-between;
    z-index: 1;
    @media only screen and (max-width: 768px) {
        padding:0 3%;
        display: block;
    }
`;

const Box = styled.div`
    position: absolute;
    top: 22vw;
    right: 0;
    left: 0;
    padding-top:1vw;
    @media only screen and (max-width: 768px) {
        top: 65vw;
    }
`;

const SlideBox = styled.div`
    width: 49%;
    margin-right: 1%;
    display: flex;
    @media only screen and (max-width: 768px) {
        width: 100%;
        height: 45vw;
        padding-bottom:5vw;
    }
`;

const NoticeSlide = styled.div`
    width: 100%;
    color: white;
`;

const SlideButton = styled.div`
    width:1.3vw;
    height:1.3vw;
    line-height:1.3vw;
    font-size:0.7em;
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
    display: flex;
    justify-content:flex-end;
`;

const SlideContent = styled(Link)`
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10%;
`;

const SlideTitle = styled.h3`
    font-size: 1.4vw;
    color: white;
    padding-bottom:2%;
    @media only screen and (max-width: 768px) {
        font-size: 5vw;
        padding-bottom: 5%;
    }
`;

const Login = styled.div`
    width: 24.5%;
    margin-right: 0.5%;
    background-color:#16498b;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const LoginBox = styled.div`
    padding: 10% 15%;
`;

const LoginForm = styled.form`
    display: flex;
    align-items: center;
    padding-top:3%;
    &:div{ 
        width:66.666%;
        display: flex;
        flex-direction: column;
    }
`;

const SignUpFindID = styled.span`
    color: white;
    display: flex;
    padding: 6% 5% 0 5%;
    justify-content: space-around;
    line-height:1vw;
`;

const SignUp = styled.span`
    font-size: 0.5vw;
`;

const FindId = styled.span`
    font-size: 0.5vw;
`;

const LoginTitle = styled.h3`
    color: white;
    font-size: 1.3vw;
    text-align: center;
    padding-top: 2vw;
`;

const LoginInput = styled.input`
    padding:0;
    width: 100%;
    height:2vw;
    background-color:#16498b;
    border: 1px solid rgba(255,255,255,0.5);
    color: white;
    padding-left: 0.5vw;
    &::placeholder{
        font-size: 0.6vw;
        color: rgba(255,255,255,0.5);
    }
`;

const LoginButton = styled.button`
    width: 33.3333%;
    height: 4vw;
    background-color: white;
    margin-left:0.6vw;
    font-size: 0.7vw;
`;

const Paper = styled.div`
    width: 24.5%;
    margin-left: 0.5%;
    background-color:#31a4d1;
    @media only screen and (max-width: 768px) {
        display: flex;
        justify-content:center;
        align-items: center;
        width: 100%;
        margin: 0;
        height: 35vw;
    }
`;
const PaperBox = styled.div`
    padding: 0 15%;
`;

const PaperTitle = styled.h3`
    color: white;
    font-size: 1.3vw;
    text-align: center;
    padding-top: 2vw;
    @media only screen and (max-width: 768px) {
        font-size: 4vw;        
    }
    
`;

const PaperText = styled.span`
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    display: block;
    padding-top: 1vw;
    color: white;
    opacity: 0.6;
    text-align: center;
    font-size: 0.5vw;
    @media only screen and (max-width: 768px) {
        font-size: 2.5vw;
        padding-bottom:2vw;
    }
`;

const PaperSearch = styled.input`
    margin-top: 1vw;
    padding:0;
    border: 2px solid white;
    background-color: #31a4d1;
    color: white;
    width: 94%;
    height: 2.5vw;
    padding-left: 0.5vw;
    &::placeholder{
        font-size: 0.7vw;
        color: rgba(255,255,255,0.7);
    }
    @media only screen and (max-width: 768px) {
        height: 7vw;
            &::placeholder{
            font-size: 3vw;
            color: rgba(255,255,255,0.7);
        }   
    }
`;

const PaperSubmission = styled.a`
    padding: 2em;
    display: block;
    color: rgba(255,255,255,0.8);
    text-align: center;
    font-size: 0.6vw;
    @media only screen and (max-width: 768px) {
        font-size:2.5vw;
    }
    `;

const NoticeSections = styled.div`
    width: 48%;
    @media only screen and (max-width: 768px) {
        width:100%;
        padding-bottom: 5%;
    }
`;

const Notice = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;
    border-bottom: 0.2vw solid rgba(0, 0, 0, .3);
    @media only screen and (max-width: 768px) {
        
    }
`;

const NoticeTitle = styled.div`
    font-size:1vw;
    font-weight:bold;
    padding: 0.5vw 0;
    @media only screen and (max-width: 768px) {
        font-size: 3vw;
    }
`;

const PlusButton = styled.div`
    width:1vw;
    height:1vw;
    line-height:1vw;
    font-size:0.7vw;
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
    width: 66%;
    list-style: inside;
    
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    opacity:0.7;
    font-size: 0.7vw;
    @media only screen and (max-width: 768px) {
        font-size: 3vw;
        line-height:5vw;
    }
`;

const ListBox = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: end;
    height:1.5vw;
    align-items: center;
    @media only screen and (max-width: 768px) {
        height: auto;   
    }

`;

const NewsBox = styled.div`
    display: flex;
    justify-content:space-between;
`;

const News = styled.div`
    width: 32.333333%;
    line-height:1vw;
`;

const NewsImg = styled.img`
    width:100%;
    height: 6vw;
    @media only screen and (max-width: 768px) {
        height: 20vw;   
    }
`;

const NewsContent = styled.span`
    width: 90%;
    display:block;
    font-size:0.7vw;
    opacity: 0.8;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    height: 1vw;
    @media only screen and (max-width: 768px) {
        line-height:3vw;
        height: 4vw;
        font-size:3vw; 
    }
`;

const TimeStamp = styled.div`
    opacity:0.2;
    font-size:0.7vw;
    
    @media only screen and (max-width: 768px) {
        font-size:3vw;
    }
`;

const NewsInfo = styled.span`
    font-size:0.1em;
    opacity:0.5;
    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const SearchIcon = styled.span`
    font-size: 1vw;
    transform: scaleX(-1) scaleY(-1);
    opacity:0.7; 
    color: white; 
    position: absolute; 
    top: 1.9vw; 
    left: 8.7vw;
    @media only screen and (max-width: 768px) {
        display:none;
    }
`;

const LoginContent = styled.div`
    color: white;
    font-size:1vw;
    display: flex;
    align-items: center;
`;

const Content = styled.div`
    width: 100%;
    padding: 2vw;
    line-height: 2vw;
    font-size: 1vw;
`;

const TitleSet = styled.div`
    opacity: ${({ animate }) => (animate > 0 && 1 - (animate * 0.008))};
`;

const EventText = styled.span`
    font-size:1vw;
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
    const { user, loginUser } = useContext(AuthContext)
    const [noticeData, setNoticeData] = useState(null)
    const [newsData, setNewsData] = useState(null)
    const [slide, setSlide] = useState(null)
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null)

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
            if (!newsData) {
                news()
            }
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
                <StickyBox>
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
                            <Login>{
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
                            </Login>
                            <Paper>
                                <PaperBox>
                                    <PaperTitle>논문검색</PaperTitle>
                                    <PaperText>한국해운학회의 논문을 검색하실 수 있습니다.</PaperText>
                                    <div style={{ position: 'relative' }}>
                                        <PaperSearch type='search' placeholder='논문 검색' />
                                        <SearchIcon>☌</SearchIcon>
                                    </div>
                                    <PaperSubmission href='https://jsl.jams.or.kr/co/main/jmMain.kci' target="_blank">논문투고 jams 시스템 바로가기</PaperSubmission>
                                </PaperBox>
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
                                <Notice style={{ borderBottom: 'none' }}>
                                    <NoticeTitle>학회소식</NoticeTitle><Link to="/community/news"><PlusButton /></Link>
                                </Notice>
                                <NewsBox style={{ paddingTop: '2px' }}>
                                    {newsData && newsData
                                        .sort((a, b) => b.id - a.id)
                                        .map(function (i, index) {
                                            return index <= 2 &&
                                                <News key={index}>
                                                    <Link to={`community/news/${i.id} `} state={{ data: i.id, allData: newsData, index: index }}>
                                                        <NewsImg style={{ background: `url(http://logistics5.ap-northeast-2.elasticbeanstalk.com/media/${i.cover_image})`, backgroundSize: 'cover' }} />
                                                        <NewsContent>{i.title}</NewsContent>
                                                    </Link >
                                                    <NewsInfo>{i.created_date.substr(0, 10)}</NewsInfo>
                                                </News >
                                        })}
                                </NewsBox >
                            </NoticeSections >
                        </NoticeBox >
                    </Box >
                </StickyBox >
            </Container >
        );
}

export default Home;