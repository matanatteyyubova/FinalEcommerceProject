import React from 'react';
import { useTranslation } from "react-i18next";

const EndBarner = () => {
    const { t } = useTranslation();

    return (
        <div className='endbarner-sec'>
      
             <div className="row">
                 <div className="col col-lg-12">
                     <h3>{t('text75')}</h3>
                 </div>
             </div>
        
        </div>
    );
};

export default EndBarner;