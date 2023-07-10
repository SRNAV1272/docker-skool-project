import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useState } from "react"
import jsCookie from 'js-cookie'
import { login } from "../../routeURLs"

export default function Login() {

    const navigate = useNavigate()
    const [state, setState] = useState({
        username: '',
        password: ''
    })

    function Submit(e) {
        e.preventDefault()
        try {

            axios.post(login, state)
                .then(res => {
                    console.log(res.data)
                    if (res.data.login) {
                        jsCookie.set('login', res.data.login)
                        if (res.data.student) {
                            jsCookie.set('student', true)
                            navigate('/student')
                        } else if (res.data.teacher) {
                            jsCookie.set('teacher', true)
                            navigate('/teacher')
                        }
                    }
                })
                .catch(err => console.log(err))

        } catch (e) {
            console.log(e)
        }

        navigate('/student', { replace: true })
    }

    return (
        <>
            <div
                className="container-fluid p-1 w-100"
                style={{
                    height: window.innerHeight,
                    width: window.innerWidth - 10,
                    backgroundColor: '#F7F7FA'
                }}
            >
                <div className="row px-1 w-100 h-100">
                    <div className="col-12 px-1 w-100 h-100 d-flex justify-content-center align-items-center">
                        <div
                            className="card h-75 w-75 shadow-lg d-flex flex-row"
                            style={{ borderRadius: '20px' }}
                        >
                            <div className="h-100 w-50 d-none d-lg-flex">
                                <img
                                    src="https://preschool.dreamguystech.com/template/assets/img/login.png"
                                    style={{ backgroundColor: '#18AEFA', borderRadius: '20px' }}
                                    alt="7"
                                    width={"100%"}
                                    height={"100%"}
                                />
                            </div>
                            <div className={`h-100 ${window.innerWidth < 1024 ? 'w-100' : 'w-50'}`}>
                                <h1>Login</h1>
                                <div className="px-4 py-2">
                                    <span className="fw-bold text-primary" style={{ fontSize: '10px' }}><span className="text-danger">username:</span> student@student.com</span>&emsp;|&emsp;
                                    <span className="fw-bold text-primary" style={{ fontSize: '10px' }}><span className="text-danger">password:</span> password123</span>
                                </div>
                                <div>
                                    <form className="row g-3 needs-validation px-4 py-2" onSubmit={Submit} novalidate>
                                        <div className="col-12">
                                            <label for="validationCustomUsername" className="form-label">Username</label>
                                            <div className="input-group has-validation">
                                                <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="validationCustomUsername"
                                                    aria-describedby="inputGroupPrepend"
                                                    required
                                                    onChange={(e) => setState(prev => { return { ...prev, username: e.target.value } })}
                                                />
                                                <div className="invalid-feedback">
                                                    Please choose a username.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label for="validationCustomUsername" className="form-label">Password</label>
                                            <div className="input-group has-validation">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="validationCustomUsername"
                                                    aria-describedby="inputGroupPrepend"
                                                    required
                                                    onChange={(e) => setState(prev => { return { ...prev, password: e.target.value } })}
                                                />
                                                <div className="invalid-feedback">
                                                    Please choose a password.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary" type="submit">Login</button>&emsp;
                                            <button className="btn fw-bold" type="submit">
                                                <span className="text-decoration-underline" onClick={() => navigate('/signup')}>Sign Up</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}