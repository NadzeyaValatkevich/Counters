import {Button} from "./Button";
import React from "react";
import s from './Counter1.module.css'

type CounterPropsType = {
    count: number
    addCount: () => void
    countReset: () => void
    maxValue: number
    startValue: number
    error1: string | null
    error2: string | null
    disabledReset: boolean
    disabledIncr: boolean
    disabledSet: boolean
    setDisabledIncr: (value: boolean) => void
};

export function Counter(props: CounterPropsType) {

    if (props.count === props.maxValue) {
    }
    return (
        <div className={s.blockCounter1}>
            <div className={s.counter1}>
                {(props.error1 || props.error2) ?
                    <div className={s.textError}>{props.error1 || props.error2}</div> :
                    (!props.disabledSet) ?
                        <div className={s.textBlock}>"Enter values and press 'set'"</div> :
                        <div className={`${props.count === props.maxValue ? s.counterActive : s.counter} ${s.counter}`}>{props.count}</div>}

            </div>
            <div className={s.blockBtn}>
                <Button title={'INCR'}
                        callback={props.addCount}
                        count={props.count}
                        disabled={props.disabledIncr || props.count === props.maxValue}
                />
                <Button title={'RESET'}
                        callback={props.countReset}
                        count={props.count}
                        disabled={props.disabledReset}
                />
            </div>
        </div>
    )
}
