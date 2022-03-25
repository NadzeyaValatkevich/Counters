import React, {ChangeEvent} from 'react';
import s from "./Counter.module.css";

type InputPropsType = {
    id: string,
    callback: (value: number) => void,
    value: number
    error: string | null
    className: string
}

export function Input(props: InputPropsType) {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callback(parseInt(e.currentTarget.value))
    };

    return (
            <input
                className={props.className}
                key={props.id} value={props.value} type={'number'} onChange={onChangeHandler}/>
    )
}
