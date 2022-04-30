import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {loadState, saveState} from "../../utils/LocalStorage-utils";
import {saveState2} from "../../utils/LocalStorage-utils2";
import {counterReducer2} from "../BLL2/counterReducer2";

const rootReducer = combineReducers({
    counter: counterReducer,
    counter2: counterReducer2,
});

export const store = createStore(rootReducer);

//при изменении store будет отрабатывать этот кусок кода
store.subscribe(() => {
    saveState(
        store.getState().counter
    )

    saveState2(
        store.getState().counter2
    )
});

export type AppStateType = ReturnType<typeof rootReducer>