import {useEffect, useState, useRef} from 'react';
import { useMainLayout } from '../../contexts/LayoutContext'
import { useTimer } from './TimerContext'
import {Button} from 'react-bootstrap';
import './timer.scss'
import Title from './Title';
import song from "./../../static/a.mp3";


export default () => {
    
    const timer = useTimer();
    const mainDate = useMainLayout()

    const OPTIONS = timer.types;
    const CURRENT_KEY = timer.currentKey;
    const duration = useRef(OPTIONS[CURRENT_KEY].duration)
    const startTime = useRef(0);

    const [timerTime, setTimerTime] = useState(duration.current);

    const [isRun, setIsRun] = useState(false);
    
    const MINUTES = Math.floor(timerTime / 60);
    const NEXT_MINUTE_POINT = duration.current - (duration.current - MINUTES * 60);
    const SECONDS = (timerTime - NEXT_MINUTE_POINT) ? (timerTime - NEXT_MINUTE_POINT) : '0.0';
    let timeOut = null;

    const stop = () => {
        clearTimeout(timeOut);
        setIsRun(false);
    }

    useEffect(() => {
        if (!isRun) return;
        
        if(timerTime <= 0) {
            finish();
        } else {
            start();
        }

        return () => clearTimeout(timeOut)
    }, [timerTime, isRun]);

    const finish = () => {
        stop();

        const NEXT_KEY = (OPTIONS[CURRENT_KEY + 1]) ? CURRENT_KEY + 1 : 0;

        timer.handleCurrentKey(NEXT_KEY);

        duration.current = OPTIONS[NEXT_KEY].duration;

        setTimerTime(() => duration.current)

        var audio = new Audio(song);
        setReport(OPTIONS[CURRENT_KEY]);
        audio.play();
        startTime.current = 0;
    }

    const Btn = () => {
        if (isRun) {
            return <Button onClick={clickStop} variant="danger">Stop</Button>;
        } else {
            return <Button onClick={clickStart} variant="success">Start</Button>;
        }
    }

    const start = () => {

        timeOut = setTimeout(() => {
            const CURRENT_TIME = Math.floor(Date.now() / 1000); // Unix timestamp in seconds

            const T = duration.current - (CURRENT_TIME - startTime.current)

            setTimerTime(() => T)
        }, 1000);
    }

    const clickStart = () => {
        startTime.current = Math.floor(Date.now() / 1000) - (duration.current - timerTime); // Unix timestamp in seconds

        setIsRun(true);
        start();
    }

    const clickStop = () => {
        stop();
    }

    const setReport = (obj) => {
        mainDate.handlerReport(obj)
    }

    return (
        <div className="mt-3">
            <Title/>
            <p className="mt-4">{MINUTES} : {SECONDS}</p>
            {Btn()}
        </div>
    )
}