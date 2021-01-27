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
  return (
    <section className='section'>
      <Helmet title={`Anna Rocławska - Musiałczyk | ${ t('navigation.gallery') }`} />
      <div>
        <h2 className='page__main-title'>
          {t('navigation.gallery')}
        </h2>
        <Separator margin={3} />
        <SingleShowPhotos
          images={transatlantykPhotos.photos}
          title={transatlantykPhotos.title}
        />
        <SingleShowPhotos
          images={japkWorkshop.photos}
          title={japkWorkshop.title}
        />
        <SingleShowPhotos
          images={artNVoice.photos}
          title={artNVoice.title}
        />
        <SingleShowPhotos
          images={nearPiano.photos}
          title={nearPiano.title}
        />
        <SingleShowPhotos
          images={mlynarski.photos}
          title={mlynarski.title}
        />
        <SingleShowPhotos
          images={piosenkaAktorska.photos}
          title={piosenkaAktorska.title}
        />
        <SingleShowPhotos
          images={kohelet.photos}
          title={kohelet.title}
        />
        <SingleShowPhotos
          images={pncm.photos}
          title={pncm.title}
        />
        <SingleShowPhotos
          images={midnightStories.photos}
          title={midnightStories.title}
        />
        <SingleShowPhotos
          images={trzyMarie.photos}
          title={trzyMarie.title}
        />
        <SingleShowPhotos
          images={muzykaChoralna.photos}
          title={muzykaChoralna.title}
        />
        <SingleShowPhotos
          images={differentPhotos.photos}
          title={differentPhotos.title}
        />
      </div>
    </section>
  );
}
