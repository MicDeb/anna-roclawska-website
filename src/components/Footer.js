import React from 'react';
import { useTranslation } from 'react-i18next';
import { contact } from 'src/helpers/contact';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      <div className='wrapper container'>
        <div className='row'>
          <div className='col-xs-12 col-md-4'>
            {`© ${ year } Anna Rocławska-Musiałczyk`}
          </div>
          <div className='col-xs-12 col-md-4'>
            {`${ t('mail') }: ${ contact.mail }`}
          </div>
          <div className='col-xs-12 col-md-4'>
            {`${ t('phone') }: ${ contact.phone }`}
          </div>
        </div>
      </div>
    </footer>
  );
}
