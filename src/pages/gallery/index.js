import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Separator from 'components/Separator';
import { SingleShowPhotos } from 'components/SingleShowPhotos';
import {
  transatlantykPhotos,
  japkWorkshop,
  artNVoice,
  nearPiano,
  mlynarski,
  piosenkaAktorska,
  kohelet,
  pncm,
  midnightStories,
  trzyMarie,
  muzykaChoralna,
  differentPhotos,
} from 'components/photos';

export default function Gallery() {
  const { t } = useTranslation();

  const photosCatalog = [
    { images: transatlantykPhotos.photos, title: transatlantykPhotos.title },
    { images: japkWorkshop.photos, title: japkWorkshop.title },
    { images: artNVoice.photos, title: artNVoice.title },
    { images: nearPiano.photos, title: nearPiano.title },
    { images: mlynarski.photos, title: mlynarski.title },
    { images: piosenkaAktorska.photos, title: piosenkaAktorska.title },
    { images: kohelet.photos, title: kohelet.title },
    { images: pncm.photos, title: pncm.title },
    { images: midnightStories.photos, title: midnightStories.title },
    { images: trzyMarie.photos, title: trzyMarie.title },
    { images: muzykaChoralna.photos, title: muzykaChoralna.title },
    { images: differentPhotos.photos, title: differentPhotos.title },
  ];

  return (
    <section className='section'>
      <Helmet title={`Anna Rocławska - Musiałczyk | ${ t('navigation.gallery') }`} />
      <div>
        <h2 className='page__main-title'>
          {t('navigation.gallery')}
        </h2>
        <Separator margin={3} />
        <div className='wrapper container'>
          <div className='row'>
            {photosCatalog.map((catalog, index) => (
              <div
                key={catalog.title}
                className='col-xs-12 col-lg-12'
              >
                <SingleShowPhotos
                  images={catalog.images}
                  title={catalog.title}
                  withSeparator={photosCatalog.length < index + 1}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
