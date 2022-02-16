import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import navigate from "./Navigate";
import Home from "../Routes/home"
import Intro from "../Routes/introductions"
import Active from "../Routes/activities"
import Academic from "../Routes/academic"
import ThesisSubmission from "../Routes/thesisSubmission"
import SignUpInfo from "../Routes/signUpInfo"
import Community from "../Routes/community"
import SiteMap from "../Routes/sitemap"
import Login from "../Routes/users/login"
import SignUp from "../Routes/users/signup"
import Profile from "../Routes/users/profile"
import ChangePassword from "../Routes/users/change-password"
import ChangeProfile from "../Routes/users/change-profile"
import PrivateRoute from '../utils/Private';
import Footer from './Footer';
import Header from "./Header";
import { AuthProvider } from "../ApiContext/AuthContext"
import NoticeDetail from "../Components/Community/NoticeDetail"
import NewsDetail from "../Components/Community/NewsDetail"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <Router>
            <AuthProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/" element={<PrivateRoute />}>
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/profile/change-password" element={<ChangePassword />} />
                        <Route path="/profile/change-profile" element={<ChangeProfile />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/sitemap" element={<SiteMap />} />
                    {navigate.map(function (i) {
                        return i.subNav.map(function (j) {
                            return <Route key={j.id}
                                path={`${i.path + j.subPath}`}
                                element={
                                    i.path === '/intro' ? <Intro /> :
                                        i.path === '/active' ? <Active /> :
                                            i.path === '/academic' ? <Academic /> :
                                                i.path === '/thesis-submission' ? <ThesisSubmission /> :
                                                    i.path === '/signupinfo' ? <SignUpInfo /> :
                                                        i.path === '/community' && <Community />} />
                        })
                    })}
                    <Route path="/community/notice/:id" element={<NoticeDetail />}></Route>
                    <Route path="/community/news/:id" element={<NewsDetail />}></Route>
                </Routes>
                <Footer />
            </AuthProvider>
        </Router >
    )
}