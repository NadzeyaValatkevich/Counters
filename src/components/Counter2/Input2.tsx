import React, {ChangeEvent} from "react";
import {TextField} from "@material-ui/core";

type InputPropsType = {
    id: string,
    callback: (value: number) => void,
    value: number
    error: string | null
    label: string
};

export function Input2(props: InputPropsType) {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callback(parseInt(e.currentTarget.value))
    };

    return (
        <TextField
            variant={'outlined'}
            label={props.label}
            color={'primary'}
            focused
            error={!!props.error}
            helperText={props.error}
            key={props.id} value={props.value} type={'number'} onChange={onChangeHandler}/>
    )
};
