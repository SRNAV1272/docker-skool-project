import { Navigate, Outlet } from "react-router-dom";
import jsCookie from 'js-cookie'

export default function TPrivateRoutes() {

    const auth = { token: jsCookie.get('login'), teacher: jsCookie.get('teacher') }

    return (
        <>
            {
                auth.token ?
                    auth.teacher ?
                        <Outlet /> : <Navigate to='/login' />
                    :
                    <Navigate to='/login' />
            }
        </>
    )

}