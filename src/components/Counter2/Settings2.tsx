import React, {useState} from 'react';
import {Button2} from "./Button2";
import {Input2} from "./Input2";
import s from './Counter2.module.css';

type SettingsPropsType = {
    callback: () => void
    startValue: number
    maxValue: number
    setError1: (errorTitle: string | null) => void
    setError2: (errorTitle: string | null) => void
    error1: string | null
    error2: string | null
    disabledSet2: boolean
    setDisabledSet2: (value: boolean) => void
    onChangeInputMaxValue: (value: number) => void
    onChangeInputStartValue: (value: number) => void
};

export const Settings = (props: SettingsPropsType) => {

    const setValueToLS = () => {
        props.callback()
    };

    if (props.maxValue < 0) {
        props.setError1('Incorrect value')
        props.setDisabledSet2(true);
    } else {
        props.setError1(null)
    };

    if (props.startValue < 0) {
        props.setError2('Incorrect value')
        props.setDisabledSet2(true);
    } else {
        props.setError2(null)
    };

    if (props.maxValue === props.startValue || props.maxValue < props.startValue) {
        props.setError1('Incorrect value')
        props.setError2('Incorrect value')
        props.setDisabledSet2(true);
    };

    return (
        <div className={s.blockSettings}>
            <div className={s.settings}>
                <div>
                    <Input2
                        id={'maxValue'}
                        callback={props.onChangeInputMaxValue}
                        value={props.maxValue}
                        error={props.error1}
                        label={'maxValue'}
                    />
                </div>
                <div>
                    <Input2
                        id={'startValue'}
                        callback={props.onChangeInputStartValue}
                        value={props.startValue}
                        error={props.error2}
                        label={'startValue'}
                    />
                </div>
            </div>
            <div>
                <Button2
                    title={'SET'}
                    callback={setValueToLS}
                    count={0}
                    disabled={props.disabledSet2}
                />
            </div>
        </div>
    )
};
