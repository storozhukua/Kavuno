import React, { useState } from 'react';

const timerContext = React.createContext();

export const useTimer = () => React.useContext(timerContext);

export const TimerProvider = ({ children }) => {

    const handleCurrentKey = (key) => {

        setcurrentKey(() => key)
    }

    const type =[
        {
            duration: 0.1 * 60,
            title: 'Work'
        },
        {
            duration: 0.2 * 60,
            title: 'Rest'
        }
    ]

    const [currentKey, setcurrentKey] = useState(0);

    return (
        <timerContext.Provider 
            value={{
                    currentKey, 
                    type,
                    handleCurrentKey
                }}>

            { children }
        </timerContext.Provider>
    )
}