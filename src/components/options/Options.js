import { useForm } from 'react-hook-form'
import { useTimer } from '../timer/TimerContext'
import {Button} from 'react-bootstrap';
import './options.scss'

export default () => {
    const timer = useTimer()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({mode: 'onChange', nativeValidation: false,})
      const onSubmit = (data) => {

        const types = Object.keys(timer.types).map((item, i) => {
            const current = timer.types[item]

            current.duration = parseInt(data[current.type]) * 60

            return current
        })

        timer.handlerSetTypes(types)
        
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-5">
                    <p className="h5">Options</p>

                    {Object.keys(timer.types).map((item, i) => {
                        return (
                            <div key={i+'-type'}>
                                <div className="form-group mb-3">
                                    <div className={errors[timer.types[item].type] && 'error'}>
                                        <label for={timer.types[item].type}><b>Set {timer.types[item].type} time (min.)</b></label>
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            id={timer.types[item].type}
                                            defaultValue={timer.types[item].duration / 60}
                                            {...register(timer.types[item].type, { required: true })}/>
                                        {errors.rest && <p className="mt-2" role="alert">{timer.types[item].title} is required.</p>}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <Button type="submit" variant="success">Save</Button>
            </form>
        </>
    )
}