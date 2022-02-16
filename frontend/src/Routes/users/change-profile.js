import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import AuthContext from "../../ApiContext/AuthContext"


const Container = styled.div`
    margin: 0 20%;
    padding-top:7em;
    @media only screen and (max-width: 768px) {
        margin: 0 3%;
        padding-top:3em;
    }
`;
const Box = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    padding:5%;
`;


const ContentBox = styled.div`
    width:50%;
    padding: 4%;
    @media only screen and (max-width: 768px) {
       width:100%
    }
`;

const Content = styled.div`

`;

const ContentInfo = styled.div`
    display: flex;
    line-height:35px;
    padding-top:5%;
    align-items:center;
`;

const Bar = styled.span`
    color:#bdbebd;
    padding:0 0.5%;
    font-weight: bold;
`;

const Title = styled.h1`
    color: black;
    font-size: x-large;
    text-align: center;
    @media only screen and (max-width: 768px) {
        font-size: 1.5em;
    }
    @media only screen and (max-width: 280px) {
        font-size: 1em;
    }
`;

const ProfileSubTitle = styled.h1`
    width: 30%;
    padding-right: 10%;
    opacity:0.7;
    @media only screen and (max-width: 768px) {
       font-size:0.8em;
    }
`;

const Input = styled.input`
    padding:2%;
    margin: 2% 0;
    width: 60%;
    border: 1px solid black;
    border-radius:3px;
`;

const Button = styled.input`
    padding: 3%;
    margin: 5% 0;
    width: 100%;
    background-color: white;
`;


const MemberLists = styled.select`
    padding:2%;
    margin:2% 0;
    width:60%;
`;

const Text = styled.span`
    font-size:medium;
`;

const EditInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top:5%;
    font-size: small;
`;

const ChangePassword = styled.div`
`;

const ChangeMemberInfo = styled.div`
`;

const ChangeProfile = function () {
    let { user, changeProfile } = useContext(AuthContext)
    return <Container>
        <Box>
            <ContentBox>
                <Title>회원정보 변경</Title>
                <Content>
                    <ContentInfo style={{ justifyContent: 'center', borderBottom: '1px solid' }}><Text>{user.email}</Text></ContentInfo>
                </Content>
                <form onSubmit={changeProfile}>
                    <ContentInfo><ProfileSubTitle>이름</ProfileSubTitle><Input type="text" name="name" required /></ContentInfo>
                    <ContentInfo><ProfileSubTitle>소속</ProfileSubTitle><Input type="text" name="affiliated" required /></ContentInfo>
                    <ContentInfo><ProfileSubTitle>회원구분</ProfileSubTitle>
                        <MemberLists name="member_method" placeholder={user.member_method}>
                            <option value="general">일반 : 대학의 박사과정생, 교수, 연구원, 업계 종사자</option>
                            <option value="student">학생 : 대학의 석사과정생, 학부생</option>
                            <option value="group_general">단체 일반 : 대학의 도서관</option>
                            <option value="group_spacial">단체 특별 : 기업체와 법인단체</option>
                        </MemberLists></ContentInfo>
                    <ContentInfo><Button type="submit" value="회원정보 변경" /></ContentInfo>
                </form>
                <EditInfo>
                    <ChangeMemberInfo><Link to="/profile">회원정보</Link></ChangeMemberInfo>
                    <Bar>|</Bar>
                    <ChangePassword><Link to="/profile/change-password">비밀번호 변경</Link></ChangePassword>
                </EditInfo>
            </ContentBox>
        </Box>
    </Container>
}

export default ChangeProfile;