import React, { useContext } from 'react';
import useLocalStorage from "use-local-storage";
import config from '../app-config'

const layoutContext = React.createContext();

export const useMainLayout = () => useContext(layoutContext);

export const LayoutProvider = ({ children }) => {
    const INITIAL_DAY = new Date().toLocaleDateString();

    const initialValue = {};
    initialValue[INITIAL_DAY] = {
        'rest': 0, 
        'work': 0,
        'learn': 0,
    };

    const [report, setReport] = useLocalStorage('report', initialValue);

    const handlerReport = (obj) => {
        const CURRENT_DAY = new Date().toLocaleDateString();

        if(!report[CURRENT_DAY]) {
            report[CURRENT_DAY] = {
                'rest': 0, 
                'work': 0,
                'learn': 0,
            };
        }

        const val = report[CURRENT_DAY][obj.type] + obj.duration;

        report[CURRENT_DAY][obj.type] = val ;

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