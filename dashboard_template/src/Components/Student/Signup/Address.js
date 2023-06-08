import { useContext, useReducer } from "react";
import { SetContext } from "./Reducer";

export default function Address() {
    const StepContext = useContext(SetContext)

    return (
        <>
            <h1>Address Info</h1>
            <button className="btn border-primary" onClick={() => StepContext.dispatch({ payload: 'increase' })}>update</button>
        </>
    )
}