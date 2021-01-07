import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section className='section'>
      <Helmet title={`Anna Rocławska - Musiałczyk | ${ t('navigation.classical_music') }`} />
      <div>
        MUZYKA KLASYCZNA
      </div>
    </section>
  );
}
