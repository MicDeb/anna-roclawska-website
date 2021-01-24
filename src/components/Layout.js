import '../styles/all.scss';
import React, {
  useCallback, useEffect, useState, useRef,
} from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';
import { Spring } from 'react-spring/renderprops';
// import Footer from './Footer';
// import SocialNavigation from './navigation/SocialNavigation';
import BibiMusic from 'src/img/Bibi.mp3';
import trim from 'lodash/trim';
import Navbar from './navigation/Navbar';
import useSiteMetadata from './SiteMetadata';
import StartPageWithMusic from './StartPageWithMusic';
import { withTrans } from '../i18n/withTrans';

const TemplateWrapper = ({
  children, uri, location,
}) => {
  const music = useRef({ current: null });
  const { title, description } = useSiteMetadata();
  const [mainClass, setMainClass] = useState('');
  const [startWithMusic, setStartWithMusic] = useState(null);
  const [isLocationChange, setIsLocationChange] = useState(false);

  const locationChange = useCallback(async () => {
    await setIsLocationChange(true);
    setIsLocationChange(false);
  }, []);

  useEffect(() => {
    setStartWithMusic(sessionStorage.getItem('startPageWithMusic'));
  }, []);

  useEffect(() => {
    setMainClass(uri === '/' ? 'home' : trim(uri, '/'));
  }, [uri]);

  useEffect(() => {
    if (music.current) {
      if (startWithMusic === 'true') {
        music.current.play();
      } else {
        music.current.pause();
      }
    }

    return () => {
      sessionStorage.setItem('startPageWithMusic', 'false');
    };
  }, [music, startWithMusic]);

  useEffect(() => {
    if (music.current && startWithMusic === 'true') {
      music.current.onended = () => setStartWithMusic('false');
    }
  }, [music, startWithMusic]);

  useEffect(() => {
    locationChange();
  }, [location, locationChange]);

  const togglePlayMusic = useCallback(() => {
    setStartWithMusic((prevState) => (prevState === 'true' ? 'false' : 'true'));
  }, []);

  return (
    <div>
      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <meta
          name='description'
          content={description}
        />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href={`${ withPrefix('/') }img/apple-touch-icon.png`}
        />
        <link
          rel='icon'
          type='image/png'
          href={`${ withPrefix('/') }img/favicon-32x32.png`}
          sizes='32x32'
        />
        <link
          rel='icon'
          type='image/png'
          href={`${ withPrefix('/') }img/favicon-16x16.png`}
          sizes='16x16'
        />

        <link
          rel='mask-icon'
          href={`${ withPrefix('/') }img/safari-pinned-tab.svg`}
          color='#ff4400'
        />
        <meta
          name='theme-color'
          content='#fff'
        />

        <meta
          property='og:type'
          content='business.business'
        />
        <meta
          property='og:title'
          content={title}
        />
        <meta
          property='og:url'
          content='/'
        />
        <meta
          property='og:image'
          content={`${ withPrefix('/') }img/og-image.jpg`}
        />
      </Helmet>
      <audio
        controls
        src={BibiMusic}
        type='audio/mpeg'
        ref={music}
        className='main-audio-player'
      >
        <track kind='captions' />
      </audio>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ mass: 1, tension: 500, friction: 1200 }}
        reset={isLocationChange}
      >
        {(props) => (
          <div style={props}>
            {!startWithMusic ? (
              <StartPageWithMusic
                setStartWithMusic={(value) => {
                  locationChange();
                  setStartWithMusic(value);
                }}
              />
            ) : (
              <>
                <Navbar
                  location={location}
                  isMusicPlay={startWithMusic}
                  toggleMusic={togglePlayMusic}
                />
                <main
                  id='main-container'
                  className={mainClass}
                >
                  {children}
                </main>
                {/* <SocialNavigation /> */}
                {/* <Footer /> */}
              </>
            )}
          </div>
        )}
      </Spring>
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
  uri: PropTypes.string.isRequired,
};

export default withTrans(TemplateWrapper);
