import { useForm } from 'react-hook-form'
import {Accordion} from 'react-bootstrap'
import { useTimer } from '../timer/TimerContext'
import {useRef} from 'react'
import {Button} from 'react-bootstrap'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
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

        timer.handlersetOptions(options)
        
    }

  
   

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div >
                <Accordion className="mt-5">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><b>Options</b></Accordion.Header>
                            <Accordion.Body>
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