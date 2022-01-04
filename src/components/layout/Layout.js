import Timer from '../timer/Timer'
import { TimerProvider } from '../timer/TimerContext'
import React, {useEffect, useState} from 'react';

import {Container, Row, Col} from 'react-bootstrap';

export const MainContext = React.createContext();

export default () => {
    return (
        <TimerProvider>
            <MainContext.Provider value={{type: 'work'}}>
                <Container fluid="sm">
                    
                    <Timer/>
                    
                </Container>
            </MainContext.Provider>
        </TimerProvider>
    )
}