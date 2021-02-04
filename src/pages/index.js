import React, { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Recommendations from 'src/components/Recommendations';
import ScrollBottom from 'src/components/ScrollBottom';
import Trail from 'src/components/Trail';
// import EmbeddedFacebookPost from 'src/components/EmbeddedFacebookPost';
// import Separator from 'components/Separator';
import { homePagePhotos } from 'src/helpers/homePagePhotos';

const Index = () => {
  const { t } = useTranslation();
  const [width, setWidth] = useState(window.innerWidth);
  const [professionIndex, setProfessionIndex] = useState(0);

  const professions = ['composer', 'pianist', 'conductor'];

  const onResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [onResize]);

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
        <div className='home-page-title-container'>
          <Trail itemHeight={width >= 1024 ? 120 : 170}>
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
        </div>

        <div className='home-page__desktop-photos'>
          {homePagePhotos.map((photo) => (
            <div
              key={photo.index}
              className={`home-page__desktop-photos--photo home-page__desktop-photos--photo-${ photo.index }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
              />
            </div>
          ))}
        </div>

        <ScrollBottom />
      </div>
      <Recommendations />
      {/* <Separator margin={3} /> */}
      {/* <EmbeddedFacebookPost /> */}
    </section>
  );
};

export default Index;
