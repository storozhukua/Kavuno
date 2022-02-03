import { useForm } from 'react-hook-form'
import {Accordion} from 'react-bootstrap'
import { useTimer } from '../../contexts/TimerContext'
import {Button} from 'react-bootstrap'
import './options.scss'

export default () => {
    const timer = useTimer()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({mode: 'onChange', nativeValidation: false,})
      const onSubmit = (data) => {
          
        const options = Object.keys(timer.options).map((item, i) => {
            const current = timer.options[item]

            current.duration = parseInt(data[current.type]) * 60

            return current
        })

        //update current type (work/learn)
        options[0].type = data.type

        timer.handlersetOptions(options)
        
    }

    let cheEl = (`<div className="form-check">
            <input className="form-check-input" type="checkbox" value=""  
            defaultChecked="checked"/>
            <label className="form-check-label"
                Checked checkbox
            </label>
        </div>`);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div >
                <Accordion className="mt-5">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><b>Options</b></Accordion.Header>
                            <Accordion.Body>
                                <div className="form-group mb-3">
                                    <label for="type"><b>Change to:</b></label>
                                    <select id="type" {...register('type', { required: true})} className="form-select" aria-label="Default select">
                                        <option value="work" selected>Working time</option>
                                        <option value="learn">Learning time</option>
                                    </select>
                                </div>
                                {Object.keys(timer.options).map((item, i) => {
                                    return (
                                        <div key={i+'-type'}>
                                           
                                            <div className="form-group mb-3">
                                                <div className={errors[timer.options[item].type] && 'error'}>
                                                    
                                                    <label for={timer.options[item].type}><b>Set {timer.options[item].type} time (min.)</b></label>
                                                    <input 
                                                        type="number" 
                                                        className="form-control" 
                                                        id={timer.options[item].type}
                                                        defaultValue={timer.options[item].duration / 60}
                                                        {...register(timer.options[item].type, { required: true, min: 1 })}/>
                                                    {errors.rest && <p className="mt-2" role="alert">{timer.options[item].title} is required.</p>}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                
                                <Button type="submit" variant="success">Save</Button> 
                               
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </form>
        </>
    )
}