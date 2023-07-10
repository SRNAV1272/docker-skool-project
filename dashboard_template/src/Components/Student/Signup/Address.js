import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { SetContext } from "./Reducer";

export default function Address() {
    const StepContext = useContext(SetContext)
    const navigate = useNavigate()
    return (
        <>
            <h1>Address Info</h1>
            <button className="btn border-primary" onClick={() => {
                StepContext.dispatch({ payload: 'decrease' });
                navigate('/login')
            }}>Login</button>
        </>
    )
}