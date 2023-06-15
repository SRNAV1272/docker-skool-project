import { Navigate, Outlet } from "react-router-dom";
import jsCookie from 'js-cookie'

export default function SPrivateRoutes() {

    const auth = { token: jsCookie.get('login'), student: jsCookie.get('student') }

    console.log("auth", auth)

    return (
        <>
            {
                auth.token ?
                    auth.student ?
                        <Outlet /> : <Navigate to='/login' />
                    :
                    <Navigate to='/login' />
            }
        </>
    )

}