import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Logo from 'src/components/Logo';

export default function StartPageWithMusic({ setStartWithMusic }) {
  const { t } = useTranslation();

  const handleSetToSessionStorage = useCallback((value) => {
    sessionStorage.setItem('startPageWithMusic', value);
    setStartWithMusic(value);
  }, [setStartWithMusic]);

  return (
    <section className='section'>
      <div className='start-music-container'>
        <Logo className='logo-start-music' />

        <div className='start-music-text'>
          <span>
            {t('star_with_music')}
          </span>
          <div className='start-music-buttons'>
            <button
              type='button'
              onClick={() => handleSetToSessionStorage('true')}
            >
              {t('yes')}
            </button>
            <button
              type='button'
              onClick={() => handleSetToSessionStorage('false')}
            >
              {t('no')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

StartPageWithMusic.propTypes = {
  setStartWithMusic: PropTypes.func.isRequired,
};
