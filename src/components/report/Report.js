import { useMainLayout } from '../../contexts/LayoutContext'

export default () => {
    const mainDate = useMainLayout()

    return (
        <div>
            Report
            {Object.keys(mainDate.report).map((item, i)=>{
                return <div key={i}>
                        <p >Work time in {item} was: {mainDate.report[item].work / 60} min.</p>
                        <p>Rest time in {item} was: {mainDate.report[item].rest / 60} min.</p>
                    </div>
            })}
        </div>
    )
}