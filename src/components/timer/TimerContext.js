import React, { useState } from 'react';
import config from '../../app-config'

const timerContext = React.createContext();

export const useTimer = () => React.useContext(timerContext);

export const TimerProvider = ({ children }) => {

    const handleCurrentKey = (key) => {

        setcurrentKey(() => key)
    }
    
    const [currentKey, setcurrentKey] = useState(0);

    return (
        <timerContext.Provider 
            value={{
                    currentKey, 
                    types: config.types,
                    handleCurrentKey
                }}>

            { children }
        </timerContext.Provider>
    )
}