import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";


function NAV() {
    return (
        <>
            <div className="py-4 d-flex">
                <NavLink
                    style={({ isActive }) => {
                        console.log(isActive)
                        return {
                            color: isActive ? 'blue' : 'grey'
                        }
                    }}
                    to='/student/profile/about'
                    className="d-flex align-items-center fw-bold text-decoration-none"
                >
                    <span>About</span>
                </NavLink>&emsp;&emsp;
                <NavLink
                    style={({ isActive }) => {
                        console.log(isActive)
                        return {
                            color: isActive ? 'blue' : 'grey'
                        }
                    }}
                    to='/student/profile/password'
                    className="d-flex align-items-center fw-bold text-decoration-none"
                >
                    <span>Password</span>
                </NavLink>
            </div>
        </>
    )
}

export default function StudentProfile() {
    let address = "AddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddressAddress"
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/student/profile/about')
    }, [])
    return (
        <>
            <div className="row">
                <div className="col-12 d-flex justify-content-start align-items-center">
                    <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Profile</p>
                </div>
                <div className="col-12 col-lg-4 d-flex align-items-center">&emsp;&emsp;
                    <img
                        src="https://www.shutterstock.com/image-photo/micro-peacock-feather-hd-imagebest-260nw-1127238599.jpg"
                        alt="https://www.shutterstock.com/image-photo/micro-peacock-feather-hd-imagebest-260nw-1127238599.jpg"
                        className={`rounded-circle  shadow-lg`}
                    />&emsp;&emsp;
                </div>
                <div className="col-12 col-lg-4 d-flex flex-column justify-content-center">
                    <h4 className="fw-bold text-secondary">K Sai Rajesh</h4>
                    <h6 className="fw-bold text-primary">Student</h6>
                    <h6 className="fw-bold text-danger shadow-lg overflow-auto" style={{ fontSize: '10px', width: '400px' }}>
                        {address.substring(0, 150)}
                    </h6>
                </div>
                <div className="col-12 col-lg-4 d-flex flex-column justify-content-center">
                    <h4 className="fw-bold text-secondary">1272</h4>
                    <h6 className="fw-bold text-primary">IV - D</h6>
                </div>
                <div className="col-12 d-flex justify-content-end align-items-center px-5">
                    <NAV />
                </div>
            </div >

            <div className="row">
                <Outlet />
            </div>
        </>
    )
}