import { Navigate, Outlet } from "react-router-dom";

export default function TPrivateRoutes() {

    const auth = { token: true, teacher: true }

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