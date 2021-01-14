import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Separator from 'components/Separator';

const Index = () => {
  const { t } = useTranslation();

  return (
    <section className='section'>
      <Helmet title={`Anna Rocławska - Musiałczyk | ${ t('navigation.home') }`} />
      <div className='home-page-container'>
        <h2 className='home-page__title'>
          <p className='home-page__title--name'>
            Anna
          </p>
          <p className='home-page__title--surname'>
            Rocławska-Musiałczyk
          </p>
        </h2>
        <Separator />
        <p>kompozytorka</p>
      </div>
    </section>
  );
};

export default Index;
