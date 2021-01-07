import React from 'react';
import PropTypes from 'prop-types';
import { AboutPageTemplate } from '../../templates/bio-page';

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

AboutPagePreview.defaultProps = {
  entry: null,
  widgetFor: () => null,
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default AboutPagePreview;
