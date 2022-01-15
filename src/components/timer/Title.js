import { useTimer } from './TimerContext'

export default () => {

    const timer = useTimer();

    return (
        <p className="h6">Now is {timer.options[timer.currentKey].type}ing time</p>
    )
}