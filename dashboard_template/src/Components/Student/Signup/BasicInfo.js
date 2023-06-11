import { useContext, useEffect, useReducer, useState } from "react";
import UpdateState, { SetContext, initialState } from "./Reducer";
import { useNavigate } from "react-router-dom";

export default function BasicInfo() {
    const StepContext = useContext(SetContext)
    const navigate = useNavigate()
    const [acc, setAcc] = useState({
        email: '',
        password: '',
        emailErr: '',
        passErr: ''
    })

    function onChange(e) {
        e.preventDefault()

        var emailRegex = /^([A-Z a-z 0-9 \. _]+)@([a-z A-Z]+).([a-z A-Z]{2,6})(.[a-z A-Z]{2,6})?$/       // g for global : i case sensitive

        switch (e.target.name) {
            case "email":
                if (emailRegex.test(e.target.value))
                    setAcc(prev => {
                        return {
                            ...prev,
                            emailErr: "",
                            [e.target.name]: e.target.value
                        }
                    })
                else
                    setAcc(prev => {
                        return {
                            ...prev,
                            emailErr: "Invalid email address !"
                        }
                    })
                break;
            case "password":
                if (/\d/.test(e.target.value) && /[a-z]/.test(e.target.value) && /[A-Z]/.test(e.target.value))
                    setAcc(prev => {
                        return {
                            ...prev,
                            passErr: "",
                            [e.target.name]: e.target.value
                        }
                    })
                else {
                    setAcc(prev => {
                        return {
                            ...prev,
                            passErr: "Password should Capital, Small, and a Digit characters !"
                        }
                    })

                }
                break;
        }
    }

    function Submit(e) {
        e.preventDefault()
        if (acc.email !== '' && acc.password !== '' && acc.passErr === '' && acc.emailErr === '') {
            console.log("Display")
            StepContext.dispatch({ payload: 'increase' });
            navigate('/signup/address')
        }
    }

    return (
        <div className="col-12">
            <h1>Create an Account !</h1>
            <form className="row g-3 px-5 py-2" onSubmit={Submit}>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" id="inputEmail4" onChange={onChange} required />
                    <p className="text-danger fw-bold p-1" style={{ fontSize: '9px' }}>{acc.emailErr}</p>
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Password</label>
                    <input type="password" minLength={3} maxLength={20} name="password" className="form-control" id="inputPassword4" onChange={onChange} required />
                    <p className="text-danger fw-bold p-1" style={{ fontSize: '9px' }}>{acc.passErr}</p>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    )
}