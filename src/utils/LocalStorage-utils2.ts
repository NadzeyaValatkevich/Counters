
import {InitialStateType2} from "../redux/BLL2/counterReducer2";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state2');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState2 = (state: InitialStateType2) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state2', serializedState);
    } catch {
        // ignore write errors
    }
};