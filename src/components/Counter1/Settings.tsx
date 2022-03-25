import React, {useState} from 'react';
import {Button} from "./Button";
import {Input} from "./Input";
import s from './Counter1.module.css';

type SettingsPropsType = {
    callback: () => void
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    startValue: number
    maxValue: number
    setError1: (errorTitle: string | null) => void
    setError2: (errorTitle: string | null) => void
    error1: string | null
    error2: string | null
    disabledSet: boolean
    setDisabledSet: (value: boolean) => void
    setDisabledIncr: (value: boolean) => void
    setDisabledReset: (value: boolean) => void
};

export const Settings = (props: SettingsPropsType) => {
    const setValueToLS = () => {
        props.callback()
    };

    const onChangeInputMaxValue = (value: number) => {
        props.setMaxValue(value);
        props.setDisabledSet(false);
        props.setDisabledIncr(true);
        props.setDisabledReset(true);
    };

    const onChangeInputStartValue = (value: number) => {
        props.setStartValue(value);
        props.setDisabledSet(false);
        props.setDisabledIncr(true);
        props.setDisabledReset(true);
    };

    if (props.maxValue < 0) {
        props.setError1('Incorrect value')
    } else {
        props.setError1(null)
    };

    if (props.startValue < 0) {
        props.setError2('Incorrect value')
    } else {
        props.setError2(null)
    };

    if (props.maxValue === props.startValue) {
        props.setError1('Incorrect value')
        props.setError2('Incorrect value')
    };

    return (
        <div className={s.blockSettings}>
            <div className={s.settings}>
                <div>
                    <label className={s.labelInput} htmlFor='maxValue'>max value:</label>
                    <Input
                        className={props.error1 ? s.errorInput : ''}
                        id={'maxValue'}
                        callback={onChangeInputMaxValue}
                        value={props.maxValue}
                        error={props.error1}
                    />
                </div>
                <div>
                    <label className={s.labelInput} htmlFor='startValue'>start value:</label>
                    <Input
                        className={props.error2 ? s.errorInput : ''}
                        id={'startValue'}
                        callback={onChangeInputStartValue}
                        value={props.startValue}
                        error={props.error2}
                    />
                </div>
            </div>
            <div>
                <Button
                    title={'SET'}
                    callback={setValueToLS}
                    count={0}
                    disabled={props.disabledSet}
                />
            </div>
        </div>
    )
}
