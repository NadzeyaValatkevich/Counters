import React, {useEffect, useState} from 'react';
import s from "./Counter2.module.css";
import {Button2} from "./Button2";
import {Settings} from "./Settings2";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/BLL1/store";

import {
    incCountAC,
    resetCountAC,
    setCountFromLSAC,
    setMaxValueAC,
    setStartValueAC
} from "../../redux/BLL2/counterReducer2";

const Counter2 = () => {

    const count = useSelector<AppStateType, number>(state => state.counter2.count)
    const maxValue = useSelector<AppStateType, number>(state => state.counter2.maxValue)
    const startValue = useSelector<AppStateType, number>(state => state.counter2.startValue)
    const dispatch = useDispatch();

    const [error1, setError1] = useState<string | null>(null);
    const [error2, setError2] = useState<string | null>(null);
    const [disabledSet1, setDisabledSet1] = useState<boolean>(false);
    const [disabledSet2, setDisabledSet2] = useState<boolean>(false);
    const [disabledIncr, setDisabledIncr] = useState<boolean>(false);
    const [disabledReset, setDisabledReset] = useState<boolean>(false);

    const addCount = () => {
        if (count < maxValue) {
            dispatch(incCountAC());
        }
    };

    const countReset = () => {
        dispatch(resetCountAC())
    };

    const setLocalStorage = () => {
        dispatch(setCountFromLSAC(startValue))
        setDisabledSet1(false);
    };

    const showSettings = () => {
        setDisabledSet1(true);
    };

    const onChangeInputMaxValue = (value: number) => {
        dispatch(setMaxValueAC(value))
        setDisabledSet2(false);
    };

    const onChangeInputStartValue = (value: number) => {
        dispatch(setStartValueAC(value))
        setDisabledSet2(false);
    };
    return (
        <div className={s.blockCounters}>
            {(!disabledSet1) ?
                <div className={s.blockCounter2}>
                    <div className={s.counter2}>
                        <div
                            className={`${count === maxValue ? s.counterActive : s.counter} ${s.counter}`}>{count}</div>
                    </div>
                    <div className={s.blockBtn}>
                        <Button2 title={'INCR'}
                                 callback={addCount}
                                 count={count}
                                 disabled={disabledIncr || count === maxValue}
                        />
                        <Button2 title={'RESET'}
                                 callback={countReset}
                                 count={count}
                                 disabled={disabledReset}
                        />
                        <Button2 title={'SET'}
                                 callback={showSettings}
                                 count={count}
                                 disabled={disabledSet1}
                        />
                    </div>
                </div>
                :
                <Settings
                    callback={setLocalStorage}
                    onChangeInputMaxValue={onChangeInputMaxValue}
                    onChangeInputStartValue={onChangeInputStartValue}
                    startValue={startValue}
                    maxValue={maxValue}
                    setError1={setError1}
                    setError2={setError2}
                    error1={error1}
                    error2={error2}
                    disabledSet2={disabledSet2}
                    setDisabledSet2={setDisabledSet2}
                    />
            }
        </div>
    );
};

export default Counter2;
