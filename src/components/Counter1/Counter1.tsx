import React, {useState} from 'react';
import {Counter} from "./Counter";
import {Settings} from "./Settings";
import s from './Counter1.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/BLL1/store";
import {incCountAC, resetCountAC, setMaxValueAC, setStartValueAC} from "../../redux/BLL1/counterReducer";
import {setCountFromLSAC} from "../../redux/BLL1/counterReducer";

const Counter1 = () => {

    const count = useSelector<AppStateType, number>(state => state.counter.count)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const dispatch = useDispatch();

    const addCount = () => {
        if (count < maxValue) {  // кнопка должна быть тупой, она не должна контролировать
                    dispatch(incCountAC());
                }
        };

    const countReset = () => {
        dispatch(resetCountAC())
        };

    const [error1, setError1] = useState<string | null>(null);
    const [error2, setError2] = useState<string | null>(null);
    const [disabledSet, setDisabledSet] = useState<boolean>(true);
    const [disabledIncr, setDisabledIncr] = useState<boolean>(false);
    const [disabledReset, setDisabledReset] = useState<boolean>(false);

    const setLocalStorage = () => {
        dispatch(setCountFromLSAC(startValue))
        setDisabledSet(true);
        setDisabledIncr(false);
        setDisabledReset(false);
    };

    const onChangeInputMaxValue = (value: number) => {
        dispatch(setMaxValueAC(value))
        setDisabledSet(false);
        setDisabledIncr(true);
        setDisabledReset(true);
    };

    const onChangeInputStartValue = (value: number) => {
        dispatch(setStartValueAC(value))
        setDisabledSet(false);
        setDisabledIncr(true);
        setDisabledReset(true);
    };

    return (
        <div className={s.blockCounters}>
            <Settings
                callback={setLocalStorage}
                startValue={startValue}
                maxValue={maxValue}
                setError1={setError1}
                setError2={setError2}
                error1={error1}
                error2={error2}
                disabledSet={disabledSet}
                setDisabledSet={setDisabledSet}
                onChangeInputMaxValue={onChangeInputMaxValue}
                onChangeInputStartValue={onChangeInputStartValue}
            />
            <Counter count={count}
                     maxValue={maxValue}
                     startValue={startValue}
                     addCount={addCount}
                     countReset={countReset}
                     error1={error1}
                     error2={error2}
                     disabledIncr={disabledIncr}
                     disabledReset={disabledReset}
                     disabledSet={disabledSet}
                     setDisabledIncr={setDisabledIncr}
            />
        </div>
    );
};
export default Counter1;
