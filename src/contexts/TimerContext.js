import React, { useContext, useState } from 'react';
import useLocalStorage from "use-local-storage";
import config from '../app-config'

const timerContext = React.createContext();

export const useTimer = () => useContext(timerContext);

export const TimerProvider = ({ children }) => {

    const handleCurrentKey = (key) => {

        setcurrentKey(() => key) 
    }

    const [options, setOptions] = useLocalStorage('options', config.options);

    const handlersetOptions = (arr) => {
        setOptions((prev) => arr)
    }
    
    const [currentKey, setcurrentKey] = useState(0);

    return (
        <timerContext.Provider
            value={{
                    currentKey,
                    options,
                    handleCurrentKey,
                    handlersetOptions
                }}>

            { children }
        </timerContext.Provider>
    )
}