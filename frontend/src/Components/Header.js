import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import navigate from "./Navigate";
// import AuthContext from "../ApiContext/AuthContext"
import over_logo from "../assets/ν΄μΈνν_logo.png"
import hamburger from "../assets/hamburger.png"
import { HeaderLogo } from "./Logo.js"


const Container = styled.div`
    width: 100%;
    position: fixed;
    z-index:9999;
`;

const Box = styled.div`
    width: 1130px;
    margin: 0 3%;
    display: flex;
`;

const TopListBox = styled(Box)`
    justify-content: end ;
`;

const LogoContainerBox = styled(Box)`
    justify-content: space-between;
    padding: 0.3em 0;
`;

// const TopBox = styled(Box)`
// @media only screen and (min-width: 1940px) {
//     justify-content: center; 
// }`;

const Bar = styled.span`
    color:#bdbebd;
    padding:0 1em;
    font-weight: bold;
    font-size:0.5em;
`;

const TopList = styled.ul`
    background-color:#4d5362;
    color: #eaeaea;
    display: flex;
    justify-content: center;
    line-height: 1.2em;
    @media only screen and (max-width: 768px) {
        display: none;
  }
`;



const TopItem = styled.li`
    cursor: pointer;
    font-size:0.7em;
    list-style-type : none;
    @media only screen and (max-width: 768px) {
        color: white;
        text-align: center;
    }
`;

const LogoContainer = styled.div`
    background-color: #ffff;
    display: flex;
    justify-content: center; 
    border-bottom: 2px solid rgba(0, 0, 0, .1);
    
    @media only screen and (max-width: 768px) {
        padding:1% 3%;
        background-color: #165fa3;
    }
`;

const MenuButton = styled.div`
    display: none;
    @media only screen and (max-width: 768px) {
        display:block;
        width:25px;
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
    align-items: center;
    text-align:start;
    position: relative;
    @media only screen and (max-width: 768px) {
        justify-content:center;
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

    /* @media only screen and (max-width: 1070px) {
            height: 0.7em; */
    /* } */
    @media only screen and (max-width: 768px) {
            display: none;
    }
`;

const OverText = styled.span`
    font-size: 0.7em;
    color: #165fa3;
    @media only screen and (max-width: 768px) {
            display: none;
    }
`;


const NavContainer = styled.div`
    background-color:white;
    display:flex;
    justify-content:center;
    border-bottom:2px solid  #165fa3;
    @media only screen and (max-width: 768px) {
        display: none;
    }
`;


const NavBox = styled(Box)`
    
    @media only screen and (max-width: 768px) {
        margin: 0;
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
        justify-content:center;
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
    font-size:1em;
    line-height: 1.5em;
    border-bottom:1px solid rgba(0, 0, 0, .1);
    cursor:pointer;
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
    opacity: 0.8;
    @media only screen and (max-width: 768px) {
        justify-content: space-between;    
        padding:0.7em 0 0.7em 1.5em;
    }
`;

const SubNavTitleContent = styled.li`
    opacity: 0.7;
    list-style: inside;
    @media only screen and (max-width: 768px) {
        padding-left:1.5em;   
    }
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
    if (document.querySelector('.nav').style.display !== 'flex') {
        document.querySelector('.nav').style.display = 'flex';
    } else {
        document.querySelector('.nav').style.display = 'none';
    }
}

function CategoryHandler(e) {
    const navTitle = document.querySelectorAll('.nav_title')
    const subTitle = document.querySelectorAll('.subTitle')
    for (const i of navTitle) {
        i.childNodes[0].childNodes[0].childNodes[1].innerHTML = 'β'
        i.childNodes[0].style.color = 'black';
        i.childNodes[0].style.borderBottom = 'none';
    }
    for (const i of subTitle) {
        if (i.className.includes(e.currentTarget.className)) {
            if (i.style.display !== 'block') {
                i.style.display = 'block';
                e.currentTarget.style.color = '#165fa3';
                e.currentTarget.style.borderBottom = '1px solid #165fa3';
                e.currentTarget.childNodes[0].childNodes[1].innerHTML = 'β'
            } else {
                i.style.display = 'none';
                e.currentTarget.childNodes[0].childNodes[1].innerHTML = 'β'
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
    // const { user, logoutUser } = useContext(AuthContext)
    window.onresize = function () {
        const innerWidth = window.innerWidth;
        let nav = document.querySelector('.nav');
        innerWidth >= "768" ? nav.style.display = 'flex' : nav.style.display = 'none'
    }
    return (
        <Container>
            <TopList>
                <TopListBox>
                    {/* {user ?
                    <>
                        <TopItem><Link to="/profile">νμμ λ³΄κ΄λ¦¬</Link></TopItem>
                        <Bar>|</Bar>
                        <TopItem onClick={logoutUser}>λ‘κ·Έμμ</TopItem>
                    </> : <>
                        <TopItem><Link to="/login">λ‘κ·ΈμΈ</Link></TopItem>
                        <Bar>|</Bar>
                        <TopItem><Link to="/signup">νμκ°μ</Link></TopItem>
                    </>}
                <Bar>|</Bar> */}
                    <TopItem><Link to="/">ν</Link></TopItem>
                    <Bar>|</Bar>
                    <TopItem><Link to={'/sitemap'} state={{ navigate }}>μ¬μ΄νΈλ§΅</Link></TopItem>
                </TopListBox>
            </TopList>
            <LogoContainer>
                <LogoContainerBox>
                    <IntroBox>
                        <MenuButton onClick={NavHandler}>
                            <Hamburger src={hamburger}></Hamburger>
                        </MenuButton>
                        <LogoBox to='/'>
                            <HeaderLogo />
                        </LogoBox>
                        <MenuButton></MenuButton>
                    </IntroBox>
                    <OverLogoBox href="http://www.ajsl.info/" target="_blank">
                        <OverLogo src={over_logo} />
                        <OverText>Steering of international Shipping and Logistics</OverText>
                    </OverLogoBox>
                </LogoContainerBox>
            </LogoContainer>
            <NavContainer className='nav'>
                <NavBox>
                    <div style={{ width: '100%' }}>
                        <Login>
                            <TopItem style={{ width: "50%" }} ><Link to="/">ν</Link></TopItem>
                            <Bar>|</Bar>
                            <TopItem style={{ width: "50%" }}><Link to={'/sitemap'} state={{ navigate }}>μ¬μ΄νΈλ§΅</Link></TopItem>
                            {/* {user ?
                                <>
                                    <TopItem><Link to="/profile">νμμ λ³΄</Link></TopItem>
                                    <Bar>|</Bar>
                                    <TopItem onClick={logoutUser}>λ‘κ·Έμμ</TopItem>
                                </> : <>
                                    <TopItem><Link to="/login">λ‘κ·ΈμΈ</Link></TopItem>
                                    <Bar>|</Bar>
                                    <TopItem><Link to="/signup">νμκ°μ</Link></TopItem>
                                </>} */}
                        </Login>
                        <NavLists onMouseLeave={CategoryHandler}>
                            {navigate

                                .map(function (i) {
                                    return <NavTitle className='nav_title' key={i.index}>
                                        <div onClick={CategoryHandler} className={`${i.title}`}>
                                            <NavTitleContent>{i.title}<PlusMinus>β</PlusMinus></NavTitleContent>
                                        </div>
                                        <NavSubTitle className={`${i.title} subTitle`}>
                                            {i.subNav
                                                .filter((element) => {
                                                    if (element.id !== 17 && element.id !== 18) {
                                                        return true;
                                                    }
                                                    return false;
                                                })
                                                .map(function (j) {
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
                    <Xbox onClick={NavHandler}>β</Xbox>
                </NavBox>
            </NavContainer>
        </Container >
    )
};
export default Header;