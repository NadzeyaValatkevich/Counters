import React, {useEffect, useState} from 'react';
import {Counter} from "./Counter";
import {Settings} from "./Settings";
import s from './Counter1.module.css'

const Counter1 = () => {
    const startCount = 0;

    const [count, setCount] = useState(startCount)
    const [maxValue, setMaxValue] = useState(5);
    const [startValue, setStartValue] = useState(0);
    const [error1, setError1] = useState<string | null>(null);
    const [error2, setError2] = useState<string | null>(null);
    const [disabledSet, setDisabledSet] = useState<boolean>(true);
    const [disabledIncr, setDisabledIncr] = useState<boolean>(false);
    const [disabledReset, setDisabledReset] = useState<boolean>(false);

    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count));
    }, [count]);

    const addCount = () => {
        if (count < maxValue) {  // кнопка должна быть тупой, она не должна контролировать
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
        setDisabledSet(true);
        setDisabledIncr(false);
        setDisabledReset(false);
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

    return (
        <div className={s.blockCounters}>
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
                disabledSet={disabledSet}
                setDisabledSet={setDisabledSet}
                setDisabledIncr={setDisabledIncr}
                setDisabledReset={setDisabledReset}
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
