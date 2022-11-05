import { useMainLayout } from '../../contexts/LayoutContext'
import convertHM from '../../utils/convertHM/convertHM'
import './report.scss'
import { useTranslation } from 'react-i18next'

export default () => {
    const mainDate = useMainLayout()
    const CURRENT_DAY = new Date().toLocaleDateString(); 
    const { t, i18n } = useTranslation();

    return (
        <div className="mt-5">
            <p className="h5">{t('report.title')}</p>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">{t('report.labelDate')}</th>
                        <th scope="col">{t('report.labelWorking')}</th>
                        <th scope="col">{t('report.labelLearning')}</th>
                        <th scope="col">{t('report.labelRestinging')}</th>
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
                                <td>{convertHM(mainDate.report[item].learn)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}