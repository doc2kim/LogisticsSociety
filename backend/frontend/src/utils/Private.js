import { Outlet, Navigate } from "react-router-dom";
import { useContext } from 'react';
import AuthContext from "../ApiContext/AuthContext"


const PrivateRoute = function ({ children, ...rest }) {
    const { user } = useContext(AuthContext);
    return (
        user ? <Outlet {...rest} /> : <Navigate to="/login" />
    )

}

export default PrivateRoute;