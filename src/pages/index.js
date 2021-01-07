import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

const Index = () => {
  const { t } = useTranslation();

  return (
    <section className='section'>
      <Helmet title={`Anna Rocławska - Musiałczyk | ${ t('navigation.home') }`} />
      <div>
        Strona główna
      </div>
    </section>
  );
};

export default Index;
