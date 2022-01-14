import Timer from '../timer/Timer'
import Options from '../options/Options'

import { TimerProvider } from '../timer/TimerContext'
import { LayoutProvider } from '../../contexts/LayoutContext'
import { useMainLayout } from '../../contexts/LayoutContext'
import React, {useEffect, useState} from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import Report from '../report/Report';

export const MainContext = React.createContext();

export default () => {
    const mainData = useMainLayout();

    return (
        <LayoutProvider>
            <Container fluid="sm">
                
                <TimerProvider>
                    <Timer/>
                    <Options/>
                </TimerProvider>
                
                <Report/>
            </Container>
        </LayoutProvider>
    )
}