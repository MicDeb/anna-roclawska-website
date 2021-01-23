import '../styles/all.scss';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';
import trim from 'lodash/trim';
// import Footer from './Footer';
import Navbar from './navigation/Navbar';
// import SocialNavigation from './navigation/SocialNavigation';
import useSiteMetadata from './SiteMetadata';
import { withTrans } from '../i18n/withTrans';

const TemplateWrapper = ({
  children, uri, location,
}) => {
  const { title, description } = useSiteMetadata();
  const [mainClass, setMainClass] = useState('');
  useEffect(() => {
    setMainClass(uri === '/' ? 'home' : trim(uri, '/'));
  }, [uri]);

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
      <Navbar location={location} />
      <main
        id='main-container'
        className={mainClass}
      >
        {children}
      </main>
      {/* <SocialNavigation /> */}
      {/* <Footer /> */}
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
  uri: PropTypes.string.isRequired,
};

export default withTrans(TemplateWrapper);
