import React, { useContext, useState } from 'react';
import config from '../../app-config'

const timerContext = React.createContext();

export const useTimer = () => useContext(timerContext);

export const TimerProvider = ({ children }) => {

    const [types, setTypes] = useState(config.types);

    const handleCurrentKey = (key) => {

        setcurrentKey(() => key)
    }

    const handlerSetTypes = (arr) => {
        console.log(arr);
        setTypes((prev) => arr)
    }
    
    const [currentKey, setcurrentKey] = useState(0);

    return (
        <timerContext.Provider
            value={{
                    currentKey,
                    types,
                    handleCurrentKey,
                    handlerSetTypes
                }}>

            { children }
        </timerContext.Provider>
    )
}