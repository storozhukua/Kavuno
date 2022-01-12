import { useTimer } from './TimerContext'

export default () => {

    const timer = useTimer();

    return (
        <p className="h6">Now is {timer.types[timer.currentKey].type}ing time</p>
    )
}