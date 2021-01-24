import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

import Recommendations from 'src/components/Recommendations';
import ScrollBottom from 'src/components/ScrollBottom';
import Trail from '../components/Trail';

const Index = () => {
  const { t } = useTranslation();
  const [professionIndex, setProfessionIndex] = useState(0);

  const professions = ['composer', 'pianist', 'conductor'];

  useEffect(() => {
    const professionsTimeout = setInterval(() => {
      const currentProfessionIndex = professionIndex === 2 ? -1 : professionIndex;
      setProfessionIndex(currentProfessionIndex + 1);
    }, 3000);

    return () => {
      clearInterval(professionsTimeout);
    };
  }, [professionIndex]);

  return (
    <section className='section'>
      <Helmet title={`Anna Rocławska - Musiałczyk | ${ t('navigation.home') }`} />
      <div className='home-page-container'>
        <Trail itemHeight={170}>
          <h2 className='home-page__title'>
            <p className='home-page__title--name'>
              Anna
            </p>
            <p className='home-page__title--surname'>
              Rocławska-Musiałczyk
            </p>
          </h2>
        </Trail>

        <div className='professions'>
          {professions.map((profession, index) => {
            if (index === professionIndex) {
              return (
                <Trail
                  key={profession}
                  itemHeight={40}
                >
                  <span className='home-page__subtitle'>{t(profession)}</span>
                </Trail>
              );
            }
            return null;
          })}
        </div>
        <ScrollBottom />
      </div>
      <Recommendations />
    </section>
  );
};

export default Index;
