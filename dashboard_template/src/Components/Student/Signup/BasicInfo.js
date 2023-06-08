import { useContext, useReducer } from "react";
import UpdateState, { SetContext, initialState } from "./Reducer";
import { useNavigate } from "react-router-dom";

export default function BasicInfo() {
    const StepContext = useContext(SetContext)
    const navigate = useNavigate()

    return (
        <>
            <h1>Basic Info</h1>
            <button className="btn border-primary" onClick={() => { StepContext.dispatch({ payload: 'increase' }); navigate('/signup/address') }}>update</button>
        </>
    )
}