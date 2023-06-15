import { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import jsCookie from 'js-cookie'


function NAV(props) {
    const { rotate } = props
    return (
        <>
            <div className="py-4">
                <NavLink
                    style={({ isActive }) => {
                        console.log(isActive)
                        return {
                            color: isActive ? 'blue' : 'grey'
                        }
                    }}
                    to='/student/dashboard'
                    className="d-flex align-items-center fw-bold"
                >
                    <i class="fa-solid fa-border-all"></i>&ensp;
                    <span className={`${rotate.menu === 180 ? 'd-flex' : 'd-none'}`}>Dashboard</span>
                </NavLink>
                <NavLink
                    style={({ isActive }) => {
                        console.log(isActive)
                        return {
                            color: isActive ? 'blue' : 'grey'
                        }
                    }}
                    to='/student/fees'
                    className="d-flex align-items-center fw-bold"
                >
                    <i class="fa-solid fa-comment-dollar"></i>&ensp;
                    <span className={`${rotate.menu === 180 ? 'd-flex' : 'd-none'}`}>Fees</span>
                </NavLink>
            </div>
        </>
    )
}

export default function SDashboard() {

    const navigate = useNavigate()
    const [Class, setClass] = useState('')

    const [rotate, setRotate] = useState({
        menu: 0,
        pro: 0
    })
    const [ring, setRing] = useState({
        bell: '',
        notification: 100
    })
    const [display, setDisplay] = useState(window.innerWidth < 1024 ? 'd-none' : 'd-flex')

    useEffect(() => {
        document.getElementById('image').style.transform = `rotate(${rotate.pro}deg)`
    }, [rotate.pro])

    useEffect(() => {
        if (ring.notification > 1) setRing(prev => {
            return {
                ...prev,
                bell: 'bell'
            }
        })

        setTimeout(() => {
            setRing(prev => {
                return {
                    ...prev,
                    bell: ''
                }
            })
        }, 2000)

    }, [ring.notification])

    function Toggle() {
        setDisplay('d-flex')
        if (window.innerWidth > 1023) {
            if (rotate.menu === 0) {
                setRotate(prev => {
                    return {
                        ...prev,
                        menu: 180
                    }
                })
                document.getElementById("mySidenav").style.width = "150px";
                document.getElementById("main").style.marginLeft = "150px";
            }
            else {
                document.getElementById("mySidenav").style.width = "60px";
                document.getElementById("main").style.marginLeft = "60px";
                setRotate(prev => {
                    return {
                        ...prev,
                        menu: 0
                    }
                })
            }
        } else {
            if (rotate.menu === 0) {
                setRotate(prev => {
                    return {
                        ...prev,
                        menu: 180
                    }
                })
                document.getElementById("mySidenav").style.width = "150px";
                document.getElementById("main").style.marginLeft = "150px";
            }
            else {
                document.getElementById("mySidenav").style.width = "0px";
                document.getElementById("main").style.marginLeft = "0px";
                setRotate(prev => {
                    return {
                        ...prev,
                        menu: 0
                    }
                })
            }
        }
    }

    return (
        <>
            <div id="mySidenav" className="sidenav">
                <div className={`${display} h-100 flex-column align-items-center py-3`}>
                    <div>
                        <img
                            src="https://www.shutterstock.com/image-photo/micro-peacock-feather-hd-imagebest-260nw-1127238599.jpg"
                            className="rounded-circle"
                            alt="3"
                            width={"40px"}
                            height={"40px"}
                        />
                    </div>
                    <NAV rotate={rotate} />
                </div>
            </div >

            <div id="main">
                <div className="sticky-top bg-white d-flex justify-content-between border-bottom border-1 border-dark-50">
                    <div className="col-6 d-flex align-items-center px-4">
                        <div id="nav-icon1" className={`${Class}`} onClick={() => {
                            if (Class === 'open') setClass('')
                            else setClass('open')
                            Toggle()
                        }}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="col-6 d-flex p-1 align-items-center justify-content-end">
                        <div className="position-relative p-1 d-flex justify-content-center align-items-center">
                            <i
                                onClick={() => navigate('/student/notifications')}
                                className={`${ring.bell} fa fa-bell fs-5 text-black-50`}
                            ></i> &emsp;
                            <span className="position-absolute bottom-50 start-50 text-danger p-1">{
                                ring.notification >= 100 ? `${99}+` : ring.notification
                            }</span>
                        </div>
                        <div className="d-flex align-items-center p-1">
                            <li
                                className="dropdown"
                                style={{ cursor: 'pointer' }}
                                onMouseEnter={() => {
                                    setRotate(prev => {
                                        return {
                                            ...prev,
                                            pro: 180
                                        }
                                    })
                                }}
                                onMouseLeave={() => {
                                    setRotate(prev => {
                                        return {
                                            ...prev,
                                            pro: 0
                                        }
                                    })
                                }}
                            >
                                <i
                                    id="image"
                                    className="fa-solid fa-chevron-down"
                                    aria-expanded="false"
                                ></i>
                                <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-9 shadow-lg">
                                    <li>
                                        <NavLink className="text-decoration-none text-dark fw-bold" to='/student/profile'>Profile</NavLink>
                                    </li>
                                    <li
                                        onClick={() => { navigate('/login', { replace: true }); jsCookie.remove('login') }}
                                        className="fw-bold"
                                    >Logout</li>
                                </ul>
                            </li>
                        </div>&emsp;
                        <div className="d-flex">
                            <div>
                                <img
                                    src="https://www.shutterstock.com/image-photo/micro-peacock-feather-hd-imagebest-260nw-1127238599.jpg"
                                    className="rounded-circle"
                                    alt="4"
                                    width={"40px"}
                                    height={"40px"}
                                />
                            </div>
                            &ensp;
                            <div className="d-flex flex-column justify-content-center">
                                <h6 className="fw-bold text-primary" style={{ fontSize: '12px' }}>K Sai Rajesh</h6>
                                <h6 className="fw-bold text-secondary" style={{ fontSize: '11px' }}>Student</h6>
                            </div>&ensp;&ensp;
                        </div>
                    </div>
                </div>
                <div className="container-fluid overflow-auto" style={{ height: window.innerHeight - 59.5 }}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}