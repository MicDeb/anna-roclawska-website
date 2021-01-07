/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

function SEO({
  lang, title,
}) {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
    />
  );
}

SEO.defaultProps = {
  lang: 'en',
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  lang: PropTypes.string,
};

export default SEO;
