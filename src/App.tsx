import React from 'react';
import s from './App.module.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Counter1 from "./components/Counter1/Counter1";
import Counter2 from "./components/Counter2/Counter2";

const App = () => {
    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header/>
                <div className={s.appWrapperContent}>
                    <Routes>
                        <Route path={'/counter1/*'} element={<Counter1/>}/>
                        <Route path={'/counter2'} element={<Counter2/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default App;
