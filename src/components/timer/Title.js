import { useTimer } from '../../contexts/TimerContext'

export default () => {

    const timer = useTimer();

    return (
        <p className="h5">Now is {timer.options[timer.currentKey].type}ing time</p>
    )
}