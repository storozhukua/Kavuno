import { useTimer } from './TimerContext'

export default () => {

    const timer = useTimer();

    return (
        <p>{timer.type[timer.currentKey].title}</p>
    )
}