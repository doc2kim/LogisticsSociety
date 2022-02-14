import React, { useContext } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
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
       width:100%;
    }
`;

const Content = styled.div`

`;

const ContentInfo = styled.div`
    display: flex;
    line-height:35px;
    padding-top:5%;
    align-items:center;
    @media only screen and (max-width: 768px) {
       flex-direction: column;
    }
`;
const Title = styled.h1`
    color: black;
    font-size: x-large;
    text-align: center;
    padding-bottom:5%;
    @media only screen and (max-width:768px) {
       font-size:1.3em;
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
       width:100%;
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


const Bar = styled.span`
    color:#bdbebd;
    padding:0 0.5%;
    font-weight: bold;
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

const ChangeProfile = styled.div`
`;

const ChangeMemberInfo = styled.div`
`;


const ChangePassword = function () {
    let { user, changePassword } = useContext(AuthContext)
    return <Container>
        <Box>
            <ContentBox>
                <Title>비밀번호 변경</Title>
                <Content>
                    <ContentInfo style={{ justifyContent: 'center', borderBottom: '1px solid' }}><Text>{user.email}</Text></ContentInfo>
                </Content>
                <form onSubmit={changePassword}>
                    <ContentInfo><ProfileSubTitle>현재비밀번호</ProfileSubTitle><Input type="password" name="password" autoFocus required /></ContentInfo>
                    <ContentInfo><ProfileSubTitle>변경비밀번호</ProfileSubTitle><Input type="password" name="change_password" required /></ContentInfo>
                    <ContentInfo><ProfileSubTitle>변경비밀번호확인</ProfileSubTitle><Input type="password" name="change_password2" required /></ContentInfo>
                    <ContentInfo><Button type="submit" value="비밀번호 변경" /></ContentInfo>
                </form>
                <EditInfo>
                    <ChangeMemberInfo><Link to="/profile">회원정보</Link></ChangeMemberInfo>
                    <Bar>|</Bar>
                    <ChangeProfile><Link to="/profile/change-profile">회원정보 변경</Link></ChangeProfile>
                </EditInfo>
            </ContentBox>
        </Box>
    </Container>
}

export default ChangePassword;