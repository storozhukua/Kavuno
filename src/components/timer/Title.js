import { useTimer } from '../../contexts/TimerContext'
import { useTranslation } from 'react-i18next'

export default () => {
    const { t, i18n } = useTranslation();
    const timer = useTimer();
    const currentType = timer.options[timer.currentKey].type;

    console.log('currentType', currentType)

    return (
        <p className="h5">{t('title.general_'+currentType)}</p>
    )
}