import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { cdsList } from 'src/helpers/cdsList';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section className='section'>
      <Helmet title={`Anna Rocławska - Musiałczyk | ${ t('navigation.contact') }`} />
      <div>
        {cdsList.map((cd) => (
          <div key={cd.title}>
            <p>{cd.title}</p>
            <Link to={cd.path}>
              <img
                src={cd.img}
                alt={cd.title}
              />
            </Link>

          </div>

        ))}
      </div>
    </section>
  );
}
