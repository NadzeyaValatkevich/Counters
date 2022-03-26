import React from 'react';
import s from "./Counter2.module.css";
import {Button} from "@material-ui/core";


type ButtonPropsType = {
    title: string
    callback: () => void
    count: number
    disabled: boolean
}

export const Button2 = (props: ButtonPropsType) => {
    return (
        <Button
            variant={'contained'}
            color={'primary'}
            onClick={props.callback}
            disabled={props.disabled}
        >{props.title}</Button>
    )
};
