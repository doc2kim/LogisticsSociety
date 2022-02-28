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

const LoginBox = styled.div`
    margin-top: 5%;
    display: flex;
    justify-content:center;
    align-items:center;
`;

const LoginTitle = styled.h3`
    font-size: 1.5vw;
    text-align: center; 
    @media only screen and (max-width: 768px) {
        font-size: 1.5em;
    }
    @media only screen and (max-width: 280px) {
        font-size: 1em;
    }
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width:40%;
    padding: 3%;
    @media only screen and (max-width: 768px) {
       width: 100%;
    }
`;

const LoginInput = styled.input`
    padding:3%;
    margin: 2% 0;
    border: 1px solid;
    border-radius:3px;
`;

const LoginButton = styled.input`
    padding: 3%;
    margin: 5% 0;
    background-color: white;
`;

const SignUpFindID = styled.div`
    
    display: flex;
    padding: 6% 5% 0 5%;
    font-size: small;
    justify-content: space-around;
`;

const SignUp = styled.span`
`;

const FindId = styled.span`
`;

const InputName = styled.span`
    font-size: 1em;
    margin-top:4%;
`;


const Login = function () {
    // useContext는 createContext로 만들어진 object를 가져온다
    let { loginUser } = useContext(AuthContext)
    return (
        <Container>
            <LoginBox>
                <LoginForm onSubmit={loginUser}>
                    <LoginTitle>로그인</LoginTitle>
                    <InputName>이메일</InputName>
                    <LoginInput type="email" name="email" required />
                    <InputName>비밀번호</InputName>
                    <LoginInput type="password" name="password" required />
                    <LoginButton type="submit" value="로그인" />
                    <SignUpFindID>
                        <SignUp><Link to="/signup">회원가입</Link></SignUp> | <FindId>아이디/비밀번호 찾기</FindId>
                    </SignUpFindID>
                </LoginForm>
            </LoginBox>
        </Container>
    )

}

export default Login;