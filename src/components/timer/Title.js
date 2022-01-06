import { useTimer } from './TimerContext'

export default () => {

    const timer = useTimer();

    return (
        <p>{timer.types[timer.currentKey].title}</p>
    )
}