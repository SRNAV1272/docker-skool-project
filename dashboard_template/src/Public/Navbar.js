import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Home.css'

export default function Navbar() {

    const [Class, setClass] = useState('')

    return (
        <>
            <div className='container-fluid'>
                <div className='row justify-content-end border-bottom border-2'>
                    <div className='col-6 d-flex justify-content-end p-4'>
                        <div
                            id="nav-icon1"
                            className={`d-flex d-lg-none bg-light ${Class}`}
                            onClick={() => setClass('open')}
                            data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                        >

                            {/* <button type="button" class="btn btn-primary" >
                                Launch static backdrop modal
                            </button> */}
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="container topLeftBorders d-none d-lg-flex w-25 fw-bold" style={{ fontSize: '12px' }}>
                            <NavLink
                                to='/'
                                className={({ isActive }) => {
                                    if (isActive)
                                        return 'text-primary'
                                    else
                                        return 'text-secondary'
                                }}
                            >
                                HOME
                            </NavLink>
                            <NavLink
                                to='/portfolio'
                                className={({ isActive }) => {
                                    if (isActive)
                                        return 'text-primary'
                                    else
                                        return 'text-secondary'
                                }}
                            >
                                PORTFOLIO
                            </NavLink>
                            <NavLink
                                to='/about'
                                className={({ isActive }) => {
                                    if (isActive)
                                        return 'text-primary'
                                    else
                                        return 'text-secondary'
                                }}
                            >
                                ABOUT
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <Outlet />
                </div>
            </div >

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={() => setClass('')}
                            ></button>
                        </div>
                        <div class="modal-body">
                            <div class="d-flex flex-column align-items-center w-100 fw-bold" style={{ fontSize: '12px' }}>
                                <NavLink
                                    to='/'
                                    className={({ isActive }) => {
                                        if (isActive)
                                            return 'text-primary'
                                        else
                                            return 'text-secondary'
                                    }}
                                >
                                    HOME
                                </NavLink>
                                <NavLink
                                    to='/portfolio'
                                    className={({ isActive }) => {
                                        if (isActive)
                                            return 'text-primary'
                                        else
                                            return 'text-secondary'
                                    }}
                                >
                                    PORTFOLIO
                                </NavLink>
                                <NavLink
                                    to='/about'
                                    className={({ isActive }) => {
                                        if (isActive)
                                            return 'text-primary'
                                        else
                                            return 'text-secondary'
                                    }}
                                >
                                    ABOUT
                                </NavLink>
                                <NavLink
                                    to='/contact'
                                    className={({ isActive }) => {
                                        if (isActive)
                                            return 'text-primary'
                                        else
                                            return 'text-secondary'
                                    }}
                                >
                                    CONTACT
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}