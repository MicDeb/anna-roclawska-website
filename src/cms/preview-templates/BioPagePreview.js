import React from 'react';
import PropTypes from 'prop-types';
import { AboutPageTemplate } from 'src/templates/bio-page';

const BioPagePreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

BioPagePreview.defaultProps = {
  entry: null,
  widgetFor: () => null,
};

BioPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default BioPagePreview;
