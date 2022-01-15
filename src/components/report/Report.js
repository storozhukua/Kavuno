import { useMainLayout } from '../../contexts/LayoutContext'
import convertHM from '../../utils/convertHM/convertHM'

export default () => {
    const mainDate = useMainLayout()

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
                    {Object.keys(mainDate.report).map((item, i)=>{
                        return (
                            <tr key={i}>
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