import React, { useContext } from 'react';
import useLocalStorage from "use-local-storage";

const layoutContext = React.createContext();

export const useMainLayout = () => useContext(layoutContext);

export const LayoutProvider = ({ children }) => {
    const currentDay = new Date().toISOString().slice(0,10);
    const initialValue = {};
    initialValue[currentDay] = {
        'rest': 0, 
        'work': 0
    };

    const [report, setReport] = useLocalStorage('report', initialValue);

    const handlerReport = (obj) => {
       
        const val = report[currentDay][obj.type] + obj.duration;

        report[currentDay][obj.type] = val ;

        setReport((prev)=> ({
            ...prev,
        }))
    }

    return (
        <layoutContext.Provider
            value={{
                    report,
                    handlerReport
                }}>

            { children }
        </layoutContext.Provider>
    )
}