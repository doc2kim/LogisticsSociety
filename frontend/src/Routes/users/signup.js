import React, { useContext } from 'react';
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

const SignUpBox = styled.div`
    margin-top: 5%;
    display: flex;
    justify-content:center;
    align-items:center;
`;

const SignUpTitle = styled.h3`
    
    font-size: x-large;
    text-align: center;
    @media only screen and (max-width: 768px) {
        font-size: 1.5em;
    }
    @media only screen and (max-width: 280px) {
        font-size: 1em;
    }
`;


const SignUpForm = styled.form`
    display: flex;
    flex-direction: column;
    width:40%;
    padding: 3%;
    
    @media only screen and (max-width: 768px) {
       width: 100%;
    }
`;

const SignUpInput = styled.input`
    padding:3%;
    margin: 2% 0;
    border: 1px solid ;
    border-radius: 3px;
`;

const SignUpButton = styled.input`
    padding: 3%;
    margin: 5% 0;
    background-color: white;
`;

const InputName = styled.span`
    
    font-size: small;
    margin-top: 4%;
    @media only screen and (max-width: 768px) {
        font-size:1em;
    }
`;

const MemberLists = styled.select`
    padding:2%;
    margin: 2% 0;
    font-size: 14px;
`;

const SignUp = function () {
    let { signUpUser } = useContext(AuthContext)

    return <Container>
        <SignUpBox>
            <SignUpForm onSubmit={signUpUser}>
                <SignUpTitle>회원가입</SignUpTitle>
                <InputName>이메일</InputName>
                <SignUpInput type="email" name="email" required />
                <InputName>비밀번호</InputName>
                <SignUpInput type="password" name="password" required />
                <InputName>비밀번호 확인</InputName>
                <SignUpInput type="password" name="password2" required />
                <InputName>이름</InputName>
                <SignUpInput type="text" name="name" required />
                <InputName>소속</InputName>
                <SignUpInput type="text" name="affiliated" required />
                <InputName>회원 구분</InputName>
                <MemberLists name="member_method">
                    <option value="general">일반 : 대학의 박사과정생, 교수, 연구원, 업계 종사자</option>
                    <option value="student">학생 : 대학의 석사과정생, 학부생</option>
                    <option value="group_general">단체 일반 : 대학의 도서관</option>
                    <option value="group_spacial">단체 특별 : 기업체와 법인단체</option>
                </MemberLists>
                <SignUpButton type="submit" value="가입하기" />
            </SignUpForm>
        </SignUpBox>
    </Container>
}

export default SignUp;