import React from 'react';
import s from "./Counter1.module.css";

type ButtonPropsType = {
    title:string
    callback: () => void
    count: number
    disabled: boolean
}

export const Button = (props:ButtonPropsType) => {
    return (
        <button className={s.counterBtn} onClick={props.callback} disabled={props.disabled}>{props.title}</button>
    )
}
