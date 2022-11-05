import React, {useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';

export default () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <span onClick={() => changeLanguage('ua')}>ua</span> | <span onClick={() => changeLanguage('en')}>en</span>
        </>
    )
}