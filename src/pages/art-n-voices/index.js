import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section className='section'>
      <Helmet title={`Anna Rocławska - Musiałczyk | ${ t('navigation.art_n_voices') }`} />
      <div>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Art'n'Voices
      </div>
    </section>
  );
}
