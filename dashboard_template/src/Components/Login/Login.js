import { useNavigate } from "react-router-dom"

export default function Login() {

    const navigate = useNavigate()

    function Submit(e) {
        e.preventDefault()
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
                                    width={"100%"}
                                    height={"100%"}
                                />
                            </div>
                            <div className={`h-100 ${window.innerWidth < 1024 ? 'w-100' : 'w-50'}`}>
                                <h1>Login</h1>
                                <div>
                                    <form class="row g-3 needs-validation px-4 py-2" onSubmit={Submit} novalidate>
                                        <div class="col-12">
                                            <label for="validationCustomUsername" class="form-label">Username</label>
                                            <div class="input-group has-validation">
                                                <span class="input-group-text" id="inputGroupPrepend">@</span>
                                                <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                                <div class="invalid-feedback">
                                                    Please choose a username.
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <label for="validationCustomUsername" class="form-label">Password</label>
                                            <div class="input-group has-validation">
                                                <input type="password" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                                <div class="invalid-feedback">
                                                    Please choose a password.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-primary" type="submit">Login</button>
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