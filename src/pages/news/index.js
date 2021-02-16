import React from 'react';

import BlogRoll from 'components/BlogRoll';
import Separator from 'components/Separator';

import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

export default function NewsIndexPage() {
  const { t } = useTranslation();
  return (
    <section className='section'>
      <Helmet title={`Anna Rocławska - Musiałczyk | ${ t('navigation.news') }`} />
      <div>
        <h2 className='page__main-title'>
          {t('navigation.news')}
        </h2>
        <Separator margin={3} />
        <div className='wrapper container'>
          <div className='row center-xs'>
            <BlogRoll />
          </div>
        </div>
      </div>
    </section>
  );
}
