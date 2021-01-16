import React from 'react';
import PropTypes from 'prop-types';
import { ArtNVoicesPageTemplate } from 'src/templates/art-n-voices';

const ArtNVoicesPagePreview = ({ entry, widgetFor }) => (
  <ArtNVoicesPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

ArtNVoicesPagePreview.defaultProps = {
  entry: null,
  widgetFor: () => null,
};

ArtNVoicesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ArtNVoicesPagePreview;
