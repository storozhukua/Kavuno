import { useMainLayout } from '../../contexts/LayoutContext'

export default () => {
    const mainDate = useMainLayout()

    return (
        <div className="mt-5">
            <p className="h5">Report</p>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Summary working time</th>
                        <th scope="col">Summary resting timest</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(mainDate.report).map((item, i)=>{
                        return (
                            <tr key={i}>
                                <td>{item}</td>
                                <td>{mainDate.report[item].work / 60} min.</td>
                                <td>{mainDate.report[item].rest / 60} min.</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}