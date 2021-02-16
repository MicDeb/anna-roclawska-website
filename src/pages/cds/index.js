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
        <div className='wrapper container'>
          <div className='row'>
            {cdsList.map((cd) => (
              <Fragment key={cd.title}>
                <div className='col-xs-12 col-md-6 col-lg-4'>
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
                        <p>
                          {t('details')}
                          {' '}
                          <span className='icon-details' />
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
