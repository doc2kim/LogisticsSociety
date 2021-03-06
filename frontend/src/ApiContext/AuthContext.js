import { createContext, useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';



const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = function ({ children }) {

    const [authToken, setAuthToken] = useState(() => localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : null);
    const [user, setUser] = useState(() => localStorage.getItem('authToken') ? jwt_decode(localStorage.getItem('authToken')) : null);
    const [loading, setLoading] = useState(true)
    const history = useNavigate()

    const loginUser = async function (e) {
        e.preventDefault();
        const response = await axios.post('./api/token/', {
            headers: {
                'Content-Type': 'application/json'
            },
            email: e.target.email.value,
            password: e.target.password.value,

        }).catch(function (error) {
            if (error.response) {
                alert('요청에 대한 응답을 받았지만 뭔가 잘못됨 ㅎㅎ', error.response)
            } else if (error.request) {
                alert('요청에 대한 응답을 받지못함 ㅎㅎ', error.request)
            } else if (error.response.status === 401) {
                alert('아이디 또는 비밀번호 잘못됨 ㅎㅎ')
            } else {
                alert('에러에 대한 정보를 요청하는 중에 문제가 생김 ㅎㅎ', error.message)
            }
        })
        const { data } = response;
        if (response.status === 200) {
            setAuthToken(data);
            setUser(jwt_decode(data.access));
            localStorage.setItem('authToken', JSON.stringify(data));
            history('/')
        }
    }

    const logoutUser = function () {
        setAuthToken(null)
        setUser(null)
        localStorage.removeItem('authToken');
        history('/login')
    }

    const signUpUser = function (e) {
        console.log('가입중 ㅎㅎ')
        e.preventDefault();
        const regExpEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        const regExpPassword = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;
        // 정규 표현식으로 이메일과 비밀번호를 검증한 후 승인하여  D/B에 데이터를 보낸다
        regExpEmail.test(e.target.email.value) ?
            (regExpPassword.test(e.target.password.value) ?
                (e.target.password.value === e.target.password2.value ?
                    signUp() :
                    alert('비밀번호가 확인되지 않습니다')) :
                alert('비빌번호는 8~ 10자 영문 , 숫자 조합이어야 합니다')) :
            alert('이메일 형식이 잘못 되었습니다')

        async function signUp() {
            const response = await axios.post('./api/signup/', {
                headers: {
                    'Content-Type': 'application/json'
                },

                email: e.target.email.value,
                password: e.target.password.value,
                name: e.target.name.value,
                affiliated: e.target.affiliated.value,
                member_method: e.target.member_method.value,

            }).catch(function (error) {
                if (error.response) {
                    alert('요청에 대한 응답을 받았지만 뭔가 잘못됨 ㅎㅎ', error.response)
                } else if (error.request) {
                    alert('요청에 대한 응답을 받지못함 ㅎㅎ', error.request)
                } else {
                    alert('에러에 대한 정보를 요청하는 중에 문제가 생김', error.message)
                }
            })
            if (response.status === 201) {
                loginUser(e);
            }
        }
    }

    const changePassword = async function (e) {
        e.preventDefault();
        updateToken()
        if (e.target.change_password.value === e.target.change_password2.value) {
            console.log(authToken.access)
            const response = await axios.put("./api/change_password/", {
                new_password: e.target.change_password.value,
                old_password: e.target.password.value,
            },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${authToken.access}`
                    },
                }
            ).catch(function (error) {
                if (error.response) {
                    alert('요청에 대한 응답을 받았지만 뭔가 잘못됨 ㅎㅎ', error.response)
                } else if (error.request) {
                    alert('요청에 대한 응답을 받지못함 ㅎㅎ', error.request)
                } else {
                    alert('에러에 대한 정보를 요청하는 중에 문제가 생김', error.message)
                }
            })
            if (response.status === 200) {
                logoutUser();
            }
        } else {
            alert('변경 비밀번호가 확인 되지 않습니다')
        }
    }
    const changeProfile = async function (e) {
        e.preventDefault();
        updateToken()
        const response = await axios.put("./api/change_profile/", {
            name: e.target.name.value,
            affiliated: e.target.affiliated.value,
            member_method: e.target.member_method.value
        },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken.access}`
                },
            }
        ).catch(function (error) {
            if (error.response) {
                alert('요청에 대한 응답을 받았지만 뭔가 잘못됨 ㅎㅎ', error.response)
            } else if (error.request) {
                alert('요청에 대한 응답을 받지못함 ㅎㅎ', error.request)
            } else {
                alert('에러에 대한 정보를 요청하는 중에 문제가 생김', error.message)
            }
        })
        if (response.status === 200) {
            logoutUser();
            history("/profile")
        }

    }

    const updateToken = async function () {
        if (authToken !== null) {
            console.log('토큰을 갱신중임 ㅎㅎ')
            const response = await axios.post('./api/token/refresh/', {
                headers: {
                    'Content-Type': 'application/json'
                },
                refresh: authToken?.refresh,
            }).catch(function (error) {
                if (error.response) {
                    alert('요청에 대한 응답을 받았지만 뭔가 잘못됨 ㅎㅎ', error.response)
                } else if (error.request) {
                    alert('요청에 대한 응답을 받지못함 ㅎㅎ', error.request)
                } else {
                    alert('에러에 대한 정보를 요청하는 중에 문제가 생김', error.message)
                }
            })
            if (!response.error && response.status === 200) {
                const { data } = response;
                setAuthToken(data);
                setUser(jwt_decode(data.access));
                localStorage.setItem('authToken', JSON.stringify(data));
            } else {
                logoutUser()
            }
            if (loading) {
                setLoading(false)
            }
        }
    }

    const contextData = {
        user: user,
        authToken: authToken,
        setAuthToken: setAuthToken,
        loginUser: loginUser,
        setUser: setUser,
        logoutUser: logoutUser,
        signUpUser: signUpUser,
        changePassword: changePassword,
        changeProfile: changeProfile
    }


    useEffect(function () {
        if (authToken) {
            setUser(jwt_decode(authToken.access));
        }
        setLoading(false);
        if (loading) {
            updateToken()
        }
        const interval = setInterval(function () {
            if (authToken) {
                updateToken()
            }
        }, 1000 * 60 * 30)
        return function () {
            return clearInterval(interval)
        }
    }, [authToken, loading])
    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}