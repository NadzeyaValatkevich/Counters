import {loadState} from "../../utils/LocalStorage-utils";

const initialState = {
    count: 0,
    maxValue: 5,
    startValue: 0,
};

export type IncCountActionType = {
    type: "INC-COUNT"
};

export type SetCountFromLDActionType = ReturnType<typeof setCountFromLSAC>;
export type ResetCountActionType = ReturnType<typeof resetCountAC>;
export type SetMaxValueActionType = ReturnType<typeof setMaxValueAC>;
export type SetStartValueActionType = ReturnType<typeof setStartValueAC>;

export type ActionsType = IncCountActionType
    | SetCountFromLDActionType
    | ResetCountActionType
    | SetMaxValueActionType
    | SetStartValueActionType


export type InitialStateType = typeof initialState;

export const counterReducer = (state:InitialStateType = loadState() || initialState, action:ActionsType): InitialStateType => {
    switch (action.type) {
        case "INC-COUNT":
            return {...state, count: state.count + 1}
        case "SET-COUNT-FROM-LOCAL-STORAGE":
            return {...state, count: action.startValue}
        case "RESET-COUNT":
            return {...state, count: state.startValue}
        case "SET-MAX-VALUE":
            return {...state, maxValue: action.maxValue}
        case "SET-START-VALUE":
            return {...state, startValue: action.startValue}
        default:
            return state;
    }
};

export const incCountAC = () => {return {type: "INC-COUNT"} as const};
export const setCountFromLSAC = (count:number) => {return {type: "SET-COUNT-FROM-LOCAL-STORAGE", startValue:count} as const};
export const resetCountAC = () => {return {type: "RESET-COUNT"} as const};
export const setMaxValueAC = (value: number) => {return {type: "SET-MAX-VALUE", maxValue: value} as const};
export const setStartValueAC = (value: number) => {return {type: "SET-START-VALUE", startValue: value} as const};