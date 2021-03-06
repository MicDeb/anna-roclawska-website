import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';
import Recommendations from 'src/components/Recommendations';
import ScrollBottom from 'src/components/ScrollBottom';
import BlogRoll from 'src/components/BlogRoll';
import Separator from 'src/components/Separator';
import { homePagePhotos } from 'src/helpers/homePagePhotos';

const Index = () => {
  const { t } = useTranslation();
  const professions = ['composer', 'pianist', 'conductor'];

  const settings = useMemo(() => (
    {
      dots: false,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      draggable: true,
      fade: true,
      pauseOnHover: true,
    }
  ), []);

  return (
    <section className='section'>
      <Helmet title={`Anna Rocławska - Musiałczyk | ${ t('navigation.home') }`} />
      <div className='home-page-container'>
        <div className='home-page-container__text'>
          <p className='name'>
            <span>A</span>
            nna
          </p>
          <p className='surname'>
            <span>R</span>
            ocławska
          </p>
          <p className='surname-second'>
            <span>M</span>
            usiałczyk
          </p>
        </div>

        <div className='home-page-container__photo-slider'>
          <div className='aspectratio-container aspect-2-3 fit-height'>
            <div className='aspectratio-content'>
              <Slider
                key='images-slider'
                {...settings}
              >
                {homePagePhotos.map((photo, index) => (
                  <div key={photo.index}>
                    <img
                      src={photo.src}
                      alt={photo.alt}
                    />
                    <span className='profession'>{t(professions[index])}</span>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <ScrollBottom />
      </div>
      <Recommendations />
      <div className='m-1'>
        <div className='wrapper container home-page__news'>
          <div className='row center-xs'>
            <div className='col-xs-12'>
              <h2 className='home-page__news--title'>{t('news')}</h2>
              <Separator margin={3} />
            </div>
            <BlogRoll />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
