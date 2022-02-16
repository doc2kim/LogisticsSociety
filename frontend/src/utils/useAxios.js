// import { useContext } from 'react';
// import axios from "axios";
// import jwt_decode from "jwt-decode";
// import dayjs from "dayjs";
// import AuthContext from '../authorization/AuthContext'

// const baseURL = 'http://127.0.0.1:8000'


// const useAxios = function () {
//     const { authToken, setUser, setAuthToken } = useContext(AuthContext)

//     const axiosInstance = axios.create({
//         baseURL,
//         headers: { Authorization: `Bearer ${authToken.access}` }
//     });
//     console.log("엑시오스")
//     axiosInstance.interceptors.request.use(async req => {
//         const user = jwt_decode(authToken.access);
//         const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
//         console.log('is Expired')
//         if (!isExpired) return req

//         const response = await axios.post(`${baseURL}/api/token/refresh/`, {
//             refresh: authToken.refresh
//         })
//         localStorage.setItem('authToken', JSON.stringify(response.data))

//         setAuthToken(response.data)
//         setUser(jwt_decode(response.data.access))

//         req.headers.Authorization = `Bearer ${response.data.access}`
//         return req

//     })
//     return axiosInstance
// }

// export default useAxios;