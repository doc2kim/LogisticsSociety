import React, { useContext, useEffect } from 'react';
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

const ProfileBox = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    padding:5%;
`;

const Bar = styled.span`
    color:#bdbebd;
    padding:0 0.5%;
    font-weight: bold;
`;

const ContentBox = styled.div`
    width:50%;
    padding: 4%;
    @media only screen and (max-width: 768px) {
       width: 100%;
    }
`;

const Content = styled.div`
`;

const ContentInfo = styled.div`
    display: flex;
    border-bottom: 1px solid;
    line-height:35px;
    padding-top:5%;
`;

const ProfileTitle = styled.h1`
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
    width: 25%;
    padding-right: 10%;
    opacity:0.7;
    @media only screen and (max-width: 768px) {
       font-size:1em;
    }
    @media only screen and (max-width: 280px) {
       font-size:0.8em;
    }
`;

const EditInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top:15%;
    font-size: small;
`;

const ChangePassword = styled.div`
`;

const ChangeMemberInfo = styled.div`
`;

const Text = styled.span`
    font-size:medium;
    @media only screen and (max-width: 768px) {
       font-size:1em;
    }
    @media only screen and (max-width: 280px) {
       font-size:0.8em;
    }
`;


const Profile = function () {
    let { user } = useContext(AuthContext)
    useEffect(function () {
    }, [user])
    return <Container>
        <ProfileBox>
            <ContentBox>
                <ProfileTitle>회원정보</ProfileTitle>
                <Content>
                    <ContentInfo>
                        <ProfileSubTitle>이메일</ProfileSubTitle><Text>{user.email}</Text>
                    </ContentInfo>
                    <ContentInfo>
                        <ProfileSubTitle>이름</ProfileSubTitle><Text>{user.name}</Text>
                    </ContentInfo>
                    <ContentInfo>
                        <ProfileSubTitle>소속</ProfileSubTitle><Text>{user.affiliated}</Text>
                    </ContentInfo>
                    <ContentInfo>
                        <ProfileSubTitle>회원구분</ProfileSubTitle><Text>{user.member_method}</Text>
                    </ContentInfo>
                </Content>
                <EditInfo>
                    <ChangeMemberInfo><Link to="/profile/change-profile">회원정보 변경</Link></ChangeMemberInfo>
                    <Bar>|</Bar>
                    <ChangePassword><Link to="/profile/change-password">비밀번호 변경</Link></ChangePassword>
                </EditInfo>
            </ContentBox>
        </ProfileBox>
    </Container>
}


export default Profile;