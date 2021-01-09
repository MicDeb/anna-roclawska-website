import React from 'react';
import PropTypes from 'prop-types';
import { ArrangementsTemplate } from 'src/templates/arrangements';

const ArrangementsPagePreview = ({ entry, widgetFor }) => (
  <ArrangementsTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

ArrangementsPagePreview.defaultProps = {
  entry: null,
  widgetFor: () => null,
};

ArrangementsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ArrangementsPagePreview;
