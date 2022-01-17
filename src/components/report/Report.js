import { useMainLayout } from '../../contexts/LayoutContext'
import convertHM from '../../utils/convertHM/convertHM'
import './report.scss'

export default () => {
    const mainDate = useMainLayout()
    const CURRENT_DAY = new Date().toLocaleDateString(); 

    return (
        <div className="mt-5">
            <p className="h5">Report</p>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Working time</th>
                        <th scope="col">Resting time</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(mainDate.report).reverse().map((item, i)=>{
                        const PARENT_CLASS_NAME = (CURRENT_DAY === item) ? 'today' : ''

                        return (
                            <tr key={i} className={PARENT_CLASS_NAME}>
                                <td>{item}</td>
                                <td>{convertHM(mainDate.report[item].work)} </td>
                                <td>{convertHM(mainDate.report[item].rest)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}