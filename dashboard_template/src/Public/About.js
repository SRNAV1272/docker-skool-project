import { NavLink, Outlet } from "react-router-dom";

export default function About() {


    return (
        <>
            <div className="col-12 px-5 py-2">
                <div className="bg-white shadow-lg d-flex flex-column rounded flex-md-row justify-content-md-between align-items-lg-center px-5 py-3">
                    <NavLink
                        to='/about'
                        className={({ isActive }) => {
                            if (isActive)
                                return window.innerWidth < 768 ? 'text-primary fs-3 text-decoration-underline'
                                    : 'text-primary fs-3 text-decoration-underline'
                            else
                                return window.innerWidth < 768 ? 'text-secondary fs-6 text-decoration-none'
                                    : 'text-secondary fs-5 text-decoration-none'
                        }}
                    >
                        Education
                    </NavLink>
                    <NavLink
                        to='/about/skills'
                        className={({ isActive }) => {
                            if (isActive)
                                return window.innerWidth < 768 ? 'text-primary fs-3 text-decoration-underline'
                                    : 'text-primary fs-3 text-decoration-underline'
                            else
                                return window.innerWidth < 768 ? 'text-secondary fs-6 text-decoration-none'
                                    : 'text-secondary fs-5 text-decoration-none'
                        }}
                    >
                        Professional Skills
                    </NavLink>
                    <NavLink
                        to='/about/experience'
                        className={({ isActive }) => {
                            if (isActive)
                                return window.innerWidth < 768 ? 'text-primary fs-3 text-decoration-underline'
                                    : 'text-primary fs-3 text-decoration-underline'
                            else
                                return window.innerWidth < 768 ? 'text-secondary fs-6 text-decoration-none'
                                    : 'text-secondary fs-5 text-decoration-none'
                        }}
                    >
                        Experience
                    </NavLink>
                </div>
            </div>
            <div className="col-12 rounded px-5 py-2">
                <Outlet />
            </div>
        </>
    )
}