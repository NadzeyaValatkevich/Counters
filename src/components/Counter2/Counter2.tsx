import React, {useEffect, useState} from 'react';
import s from "./Counter2.module.css";
import {Button2} from "./Button2";
import {Settings} from "./Settings2";

const Counter2 = () => {

    const startCount = 0;

    const [count, setCount] = useState(startCount)
    const [maxValue, setMaxValue] = useState(5);
    const [startValue, setStartValue] = useState(0);
    const [error1, setError1] = useState<string | null>(null);
    const [error2, setError2] = useState<string | null>(null);
    const [disabledSet1, setDisabledSet1] = useState<boolean>(false);
    const [disabledSet2, setDisabledSet2] = useState<boolean>(false);
    const [disabledIncr, setDisabledIncr] = useState<boolean>(false);
    const [disabledReset, setDisabledReset] = useState<boolean>(false);

    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count));
    }, [count]);

    const addCount = () => {
        if (count < maxValue) {
            setCount(count + 1);
        }
    };

    const countReset = () => {
        setCount(startCount)
    };

    const setLocalStorage = () => {
        localStorage.setItem('startValue', JSON.stringify(startValue));
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
        setCount(startValue);
        setDisabledSet1(false);
    };

    useEffect(() => {
        let newStartValue = localStorage.getItem('startValue')
        if (newStartValue) {
            setStartValue(JSON.parse(newStartValue))
            setCount(JSON.parse(newStartValue))
        }
    }, []);

    useEffect(() => {
        let newMaxValue = localStorage.getItem('maxValue')
        if (newMaxValue) {
            setMaxValue(JSON.parse(newMaxValue))
        }
    }, []);

    const showSettings = () => {
        setDisabledSet1(true);
    }

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
                    setStartValue={setStartValue}
                    setMaxValue={setMaxValue}
                    startValue={startValue}
                    maxValue={maxValue}
                    setError1={setError1}
                    setError2={setError2}
                    error1={error1}
                    error2={error2}
                    disabledSet2={disabledSet2}
                    setDisabledSet2={setDisabledSet2}
                    setDisabledIncr={setDisabledIncr}
                    setDisabledReset={setDisabledReset}/>
            }
        </div>
    );
};

export default Counter2;
