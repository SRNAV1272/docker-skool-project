import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {

    const [rotate, setRotate] = useState({
        menu: 0,
        pro: 0
    })
    const [bell, setBell] = useState({
        bell: '',
        notification: 100
    })

    useEffect(() => {
        document.getElementById('image').style.transform = `rotate(${rotate.pro}deg)`
    }, [rotate.pro])


    useEffect(() => {
        document.getElementById('menu').style.transform = `rotate(${rotate.menu}deg)`
    }, [rotate.menu])

    useEffect(() => {
        if (bell.notification > 1) setBell(prev => {
            return {
                ...prev,
                bell: 'bell'
            }
        })

        setTimeout(() => {
            setBell(prev => {
                return {
                    ...prev,
                    bell: ''
                }
            })
        }, 2000)

    }, [bell.notification])

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    return (
        <>
            <div id="mySidenav" className="sidenav">
                <span
                    className={`closebtn ${rotate.menu === 180 ? "" : "d-lg-none"}`}
                    onClick={() => {
                        if (window.innerWidth > 1023) {
                            document.getElementById("mySidenav").style.width = "60px";
                            setRotate(prev => {
                                return {
                                    ...prev,
                                    menu: 0
                                }
                            })
                        } else {
                            closeNav()
                            setRotate(prev => {
                                return {
                                    ...prev,
                                    menu: 0
                                }
                            })
                        }
                    }}
                >&times;</span>
                <div className="h-100">
                    <i class="fa-solid fa-border-all"></i>
                </div>
            </div>

            <div id="main">
                <div className="bg-white d-flex justify-content-between">
                    <div className="col-2 d-flex align-items-center p-2">
                        <i
                            class="fa-solid fa-chevron-left"
                            id="menu"
                            onClick={() => {
                                if (rotate.menu === 0) {
                                    setRotate(prev => {
                                        return {
                                            ...prev,
                                            menu: 180
                                        }
                                    })
                                    document.getElementById("mySidenav").style.width = "150px";
                                }
                                else
                                    setRotate(prev => {
                                        return {
                                            ...prev,
                                            menu: 0
                                        }
                                    })
                            }}
                        ></i>
                    </div>
                    <div className="col-6 d-flex p-1 align-items-center justify-content-end border-bottom border-1 border-dark-50 ">
                        <div className="position-relative p-1 d-flex justify-content-center align-items-center">
                            <i
                                className={`${bell.bell} fa fa-bell fs-5 text-black-50`}
                            ></i> &emsp;
                            <span className="position-absolute bottom-50 start-50 text-danger p-1">{
                                bell.notification >= 100 ? `${99}+` : bell.notification
                            }</span>
                        </div>
                        <div className="d-flex align-items-center p-1">
                            <li
                                className="dropdown"
                                style={{ cursor: 'pointer' }}
                                onClick={(e) => { e.preventDefault() }}
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
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                ></i>
                                <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-9">
                                    <li>
                                        <Link className="text-decoration-none text-dark" to='/dashboard/student/profile'>Profile</Link>
                                    </li>
                                    <li>Logout</li>
                                </ul>
                            </li>
                        </div>&emsp;
                        <div className="d-flex">
                            <div>
                                <img
                                    src="https://www.shutterstock.com/image-photo/micro-peacock-feather-hd-imagebest-260nw-1127238599.jpg"
                                    className="rounded-circle"
                                    alt="..."
                                    width={"40px"}
                                    height={"40px"}
                                />
                            </div>
                            &ensp;
                            <div className="d-flex flex-column justify-content-center">
                                <h6 style={{ fontSize: '12px' }}>K Sai Rajesh</h6>
                                <h6 style={{ fontSize: '10px' }}>Student</h6>
                            </div>&ensp;
                        </div>
                    </div>
                </div>
                <Outlet />
            </div>
        </>
    )
}