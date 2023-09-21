import React, { useState } from "react";
import "./darkmode.css";
import {ReactComponent as Moon} from "./../../assets/images/Moon.svg"
import {ReactComponent as Sun} from "./../../assets/images/Sun.svg"

const DarkMode = () => {
   const [darkmode, setDarkMode] = useState(false);

    console.log("Darkmoon");
    const toggleDarkMode = ()=>{
        setDarkMode(!darkmode)
        console.log(darkmode);
    }
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleDarkMode}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
