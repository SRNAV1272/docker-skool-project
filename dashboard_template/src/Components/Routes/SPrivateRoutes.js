import { Navigate, Outlet } from "react-router-dom";

export default function SPrivateRoutes() {

    const auth = { token: true, student: false }

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