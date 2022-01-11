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
    console.log('timer');

    const OPTIONS = timer.types;
    const CURRENT_KEY = timer.currentKey;
    const statTime = useRef(OPTIONS[CURRENT_KEY].duration)

    const [currentTime, setCurrentime] = useState(statTime.current);

    const [isRun, setIsRun] = useState(false);
    
    const MINUTES = Math.floor(currentTime / 60);
    const NEXT_MINUTE_POINT = statTime.current - (statTime.current - MINUTES * 60);
    const SECONDS = (currentTime - NEXT_MINUTE_POINT) ? (currentTime - NEXT_MINUTE_POINT) : '0.0';
    let timeOut = null;

    const stop = () => {
        clearTimeout(timeOut);
        setIsRun(false);
    }

    useEffect(() => {
        if (!isRun) return;
        
        if(currentTime === 0) {
            finish();
        } else {
            start();
        }

        return () => clearTimeout(timeOut)
    }, [currentTime, isRun]);

    const finish = () => {
        stop();

        const NEXT_KEY = (OPTIONS[CURRENT_KEY + 1]) ? CURRENT_KEY + 1 : 0;

        timer.handleCurrentKey(NEXT_KEY);

        statTime.current = OPTIONS[NEXT_KEY].duration;

        console.log('finish');
        setCurrentime(() => statTime.current)

        var audio = new Audio(song);
        setReport(OPTIONS[CURRENT_KEY]);
        audio.play();
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
            setCurrentime(() => currentTime - 1)
        }, 1000);
    }

    const clickStart = () => {
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
        <>
            <Title/>
            <p>{MINUTES} : {SECONDS}</p>
            {Btn()}
        </>
    )
}