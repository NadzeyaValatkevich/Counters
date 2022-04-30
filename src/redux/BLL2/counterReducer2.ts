import {loadState} from "../../utils/LocalStorage-utils2";

const initialState = {
    count: 0,
    maxValue: 5,
    startValue: 0,
};

export type IncCountActionType = {
    type: "INC-COUNT2"
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


export type InitialStateType2 = typeof initialState;

export const counterReducer2 = (state:InitialStateType2 = loadState() || initialState, action:ActionsType): InitialStateType2 => {
    switch (action.type) {
        case "INC-COUNT2":
            return {...state, count: state.count + 1}
        case "SET-COUNT-FROM-LOCAL-STORAGE2":
            return {...state, count: action.startValue}
        case "RESET-COUNT2":
            return {...state, count: state.startValue}
        case "SET-MAX-VALUE2":
            return {...state, maxValue: action.maxValue}
        case "SET-START-VALUE2":
            return {...state, startValue: action.startValue}
        default:
            return state;
    }
};

export const incCountAC = () => {return {type: "INC-COUNT2"} as const};
export const setCountFromLSAC = (count:number) => {return {type: "SET-COUNT-FROM-LOCAL-STORAGE2", startValue:count} as const};
export const resetCountAC = () => {return {type: "RESET-COUNT2"} as const};
export const setMaxValueAC = (value: number) => {return {type: "SET-MAX-VALUE2", maxValue: value} as const};
export const setStartValueAC = (value: number) => {return {type: "SET-START-VALUE2", startValue: value} as const};