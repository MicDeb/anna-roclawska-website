import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { cdsList } from 'src/helpers/cdsList';
import Separator from 'components/Separator';

export default function Cds() {
  const { t } = useTranslation();
  return (
    <section className='section'>
      <Helmet title={`Anna Rocławska - Musiałczyk | ${ t('navigation.contact') }`} />
      <div>
        <h2 className='page__main-title'>
          {t('navigation.cds')}
        </h2>
        <Separator margin={3} />
        {cdsList.map((cd, index) => (
          <Fragment key={cd.title}>
            <div
              className='box cds-box'
            >
              <p className='cds-box__title'>{cd.title}</p>
              <Link to={cd.path}>
                <img
                  src={cd.img}
                  alt={cd.title}
                />
                <div className='cds-box__details'>
                  <span>{t('details')}</span>
                </div>
              </Link>
            </div>
            {index < (cdsList.length - 1) && (
              <Separator margin={3} />
            )}
          </Fragment>

        ))}
      </div>
    </section>
  );
}
