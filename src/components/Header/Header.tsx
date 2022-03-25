import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.headerContainer}>
            <div className={s.item}>
                <NavLink to={'/counter1/*'}  className={({isActive}) => (isActive ? s.active : s.item)}>Counter1</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={'/counter2'} className={({isActive}) => (isActive ? s.active : s.item)}>Counter2</NavLink>
            </div>
        </div>
    );
};

export default Header;
