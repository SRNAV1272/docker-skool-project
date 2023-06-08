import { createContext } from "react"

export const SetContext = createContext()

export const initialState = {
    step: 1
}

export default function UpdateState(state, action) {
    switch (action.payload) {
        case 'increase':
            console.log('Display', action, state)
            return {
                step: state.step + 1
            }
        case 'decrease':
            return {
                step: state.step - 1
            }
        default:
            return state
    }
}