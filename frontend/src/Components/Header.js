import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import navigate from "./Navigate";
import AuthContext from "../ApiContext/AuthContext"
import logo from "../assets/학회_logo.png"
import over_logo from "../assets/해외학회_logo.png"
import hamburger from "../assets/hamburger.png"


const Container = styled.div`
    width: 100%;
    position: fixed;
    z-index:9999;
`;

const Bar = styled.span`
    color:#bdbebd;
    padding:0 0.5%;
    font-weight: bold;
    font-size:0.5em;
`;

const TopList = styled.ul`
    padding: 0 20%;   
    background-color:#4d5362;
    color: #eaeaea;
    display: flex;
    justify-content: end;
    line-height: 1.2vw;
    @media only screen and (max-width: 768px) {
        display: none;
  }
`;

// styled component 사용시 html= styled.###, react method = styled(###)

const TopItem = styled.li`
    cursor: pointer;
    font-size:0.7em;
    list-style-type : none;
    @media only screen and (max-width: 768px) {
        color: white;
    }
`;

const LogoContainer = styled.div`
    background-color: #ffff;
    padding: 0.5vw 20%;
    display: flex;
    border-bottom: 2px solid rgba(0, 0, 0, .1);
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
        padding:1% 3%;
        display: flex;
        background-color: #165fa3;
    }
`;

const MenuButton = styled.div`
    display: none;
    @media only screen and (max-width: 768px) {
        width:10%;
        display:block;
    }
`;

const Hamburger = styled.img`
    width:25px;
    cursor:pointer;
`;

const IntroBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media only screen and (max-width: 768px) {
        width: 100%;
        justify-content:space-between;
    }
`;

const LogoBox = styled(Link)`
    display:flex;
    align-items:center;
    @media only screen and (max-width: 768px) {
        justify-content:center;
    }
`;

const Logo = styled.img`
    filter: invert(25%) sepia(90%) saturate(8000%) hue-rotate(190deg) brightness(80%) contrast(100%);
    width:42px;
    @media only screen and (max-width: 768px) {
        filter: none;
    }
`;

const Texts = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center; 
    position: relative;
    height: 30px;
    padding-bottom:8px;
`;

const Title = styled.span`
    color: #165fa3;
    font-size: 1.6em;
    font-weight: bold;
    margin-left:5px;
    text-align: start;
    @media only screen and (max-width: 768px) {
        color: white;
    }
`;
const Content = styled.span`
    color: #165fa3;
    font-size:0.8em;
    width:300px;
    position: absolute;
    top: 27px;
    left: -23.5%;
    -webkit-transform:scale(0.67);
    -ms-transform:scale(0.67);
    text-align:start;
    @media only screen and (max-width: 768px) {
        
        
        color: white;
    }
`;

const OverLogoBox = styled.a`
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content:center;
    @media only screen and (max-width: 768px) {
            display: none;
    }
`;

const OverLogo = styled.img`

    @media only screen and (max-width: 1070px) {
            height: 0.7em;
    }
    @media only screen and (max-width: 768px) {
            display: none;
    }
`;

const OverText = styled.span`
    font-size: 0.5vw;
    color: #165fa3;
    @media only screen and (max-width: 768px) {
            display: none;
    }
`;


const NavBox = styled.div`
    padding:0 20%;
    background-color:white;
    border-bottom:2px solid  #165fa3;
    @media only screen and (max-width: 768px) {
        display: none;
    }
`;


const Nav = styled.div`
    width:100%;
    display: flex;
    @media only screen and (max-width: 768px) {
        width: 70%;
        position: absolute;
        left: 0;
        top: 0;    
    }
`;


const Login = styled.div`
    display: none;
    @media only screen and (max-width: 768px) {
        display: flex;
        justify-content:space-between;
        align-items: center;
        padding: 0 10%;
        background-color: #165fa3;
        height:35px;    
    }
`;

const Xbox = styled.div`
    display: none;
    @media only screen and (max-width: 768px) {
        display: block;
        background-color: black;
        color: white;
        line-height:1.9em;
        padding: 0 0.6em;
        font-size:1.2em;
        text-align:center;
        height:35px;
        cursor: pointer;
    }
`;

const NavLists = styled.ul`
    background-color:white;
    display:flex;
    justify-content:space-around;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const NavTitle = styled.div`
    display: flex;
    flex-direction: column;
    opacity:0.8;
    font-size:1em;
    line-height: 1.5vw;
    border-bottom:1px solid rgba(0, 0, 0, .1);
    cursor:pointer;
    @media only screen and (max-width: 1050px) {
            font-size:0.7em;
    }
    @media only screen and (max-width: 768px) {
        justify-content:space-between;
        font-size:0.7em;
        line-height:7vw;
    }
    @media only screen and (max-width: 280px) {
        
        line-height:2.5em;
    }
`;

const NavTitleContent = styled.ul`
    display: flex;
    padding: 0;
    justify-content: center;
    @media only screen and (max-width: 768px) {
        justify-content: space-between;    
        padding:0.7em 0 0.7em 1.5em;
    }
`;

const SubNavTitleContent = styled.li`
    opacity: 0.7;
    list-style: inside;
    padding-left:1.5em;
`;

const SubNavLink = styled(Link)`
    ${({ pathcolor }) => {
        return pathcolor ? 'color:#165fa3' : null;
    }}
`;

const PlusMinus = styled.span`
    display: none;
    @media only screen and (max-width: 768px) {
        display: block;
        padding-right: 1.5em;
        color: blue;    
    }
`;

const NavSubTitle = styled.ul`
    display: none;
`;

function NavHandler() {
    if (document.querySelector('.nav').style.display !== 'block') {
        document.querySelector('.nav').style.display = 'block';
    } else {
        document.querySelector('.nav').style.display = 'none';
    }
}

function CategoryHandler(e) {
    const navTitle = document.querySelectorAll('.nav_title')
    const subTitle = document.querySelectorAll('.subTitle')
    for (const i of navTitle) {
        i.childNodes[0].childNodes[0].childNodes[1].innerHTML = '➕'
        i.childNodes[0].style.color = 'black';
        i.childNodes[0].style.borderBottom = 'none';
    }
    for (const i of subTitle) {
        if (i.className.includes(e.currentTarget.className)) {
            if (i.style.display !== 'block') {
                i.style.display = 'block';
                e.currentTarget.style.color = '#165fa3';
                e.currentTarget.style.borderBottom = '1px solid #165fa3';
                e.currentTarget.childNodes[0].childNodes[1].innerHTML = '➖'
            } else {
                i.style.display = 'none';
                e.currentTarget.childNodes[0].childNodes[1].innerHTML = '➕'
                e.currentTarget.style.color = 'black';
                e.currentTarget.style.borderBottom = 'none'
            }
        } else {
            i.style.display = 'none';
        }
    }
}

const Header = function () {
    const path = useLocation();
    const { user, logoutUser } = useContext(AuthContext)
    window.onresize = function () {
        const innerWidth = window.innerWidth;
        let nav = document.querySelector('.nav');
        innerWidth >= "768" ? nav.style.display = 'block' : nav.style.display = 'none'
    }
    return (
        <Container>
            <TopList>
                {user ?
                    <>
                        <TopItem><Link to="/profile">회원정보관리</Link></TopItem>
                        <Bar>|</Bar>
                        <TopItem onClick={logoutUser}>로그아웃</TopItem>
                    </> : <>
                        <TopItem><Link to="/login">로그인</Link></TopItem>
                        <Bar>|</Bar>
                        <TopItem><Link to="/signup">회원가입</Link></TopItem>
                    </>}
                <Bar>|</Bar>
                <TopItem><Link to={'/sitemap'} state={{ navigate }}>사이트맵</Link></TopItem>
            </TopList>
            <LogoContainer>
                <IntroBox>
                    <MenuButton onClick={NavHandler}>
                        <Hamburger src={hamburger}></Hamburger>
                    </MenuButton>
                    <LogoBox to='/'>
                        <Logo src={logo} />
                        <Texts>
                            <Title>한국해운물류학회</Title>
                            <Content>The Korea association of shipping and logistics</Content>
                        </Texts>
                    </LogoBox>
                    <MenuButton></MenuButton>
                </IntroBox>
                <OverLogoBox href="http://www.ajsl.info/" target="_blank">
                    <OverLogo src={over_logo} />
                    <OverText>Steering of international Shipping and Logistics</OverText>
                </OverLogoBox>
            </LogoContainer>
            <NavBox className='nav'>
                <Nav>
                    <div style={{ width: '100%' }}>
                        <Login>
                            <TopItem><Link to="/">홈</Link></TopItem>
                            <Bar>|</Bar>
                            {user ?
                                <>
                                    <TopItem><Link to="/profile">회원정보</Link></TopItem>
                                    <Bar>|</Bar>
                                    <TopItem onClick={logoutUser}>로그아웃</TopItem>
                                </> : <>
                                    <TopItem><Link to="/login">로그인</Link></TopItem>
                                    <Bar>|</Bar>
                                    <TopItem><Link to="/signup">회원가입</Link></TopItem>
                                </>}
                        </Login>
                        <NavLists onMouseLeave={CategoryHandler}>
                            {navigate.map(function (i) {
                                return <NavTitle className='nav_title' key={i.index}>
                                    <div onClick={CategoryHandler} className={`${i.title}`}>
                                        <NavTitleContent>{i.title}<PlusMinus>➕</PlusMinus></NavTitleContent>
                                    </div>
                                    <NavSubTitle className={`${i.title} subTitle`}>
                                        {i.subNav.map(function (j) {
                                            return j.subPath ?
                                                <SubNavLink pathcolor={path.pathname.includes(j.subPath) ? 1 : undefined} to={`${i.path + j.subPath}`}>
                                                    <SubNavTitleContent>{j.subTitle}</SubNavTitleContent>
                                                </SubNavLink>
                                                : j.url && <a target="_blank" href={j.url}><SubNavTitleContent>{j.subTitle}</SubNavTitleContent></a>
                                        })}
                                    </NavSubTitle>
                                </NavTitle>
                            })}
                        </NavLists>
                    </div>
                    <Xbox onClick={NavHandler}>✕</Xbox>
                </Nav>
            </NavBox>
        </Container >
    )
};
export default Header;