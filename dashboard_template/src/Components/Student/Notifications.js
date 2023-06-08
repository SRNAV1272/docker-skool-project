import { useEffect } from "react"
import { NavLink, Outlet, useNavigate } from "react-router-dom"

function NAV() {
    return (
        <>
            <div className="py-2 d-flex">
                <NavLink
                    style={({ isActive }) => {
                        console.log(isActive)
                        return {
                            color: isActive ? 'blue' : 'grey'
                        }
                    }}
                    to='/student/notifications/new'
                    className="d-flex align-items-center fw-bold text-decoration-none"
                >
                    <span>New</span>
                </NavLink>&emsp;&emsp;
                <NavLink
                    style={({ isActive }) => {
                        console.log(isActive)
                        return {
                            color: isActive ? 'blue' : 'grey'
                        }
                    }}
                    to='/student/notifications/read'
                    className="d-flex align-items-center fw-bold text-decoration-none"
                >
                    <span>Read</span>
                </NavLink>
            </div>
        </>
    )
}
export default function Notifications() {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/student/notifications/new')
    }, [])

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <h2>Notifications</h2>
                </div>
                <div className="col-12">
                    <NAV />
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}