import React from 'react';
import PropTypes from 'prop-types';
import { SymphonicAndOrchestorMusicPage } from 'src/templates/symphonic-and-orchestor-music-page';

const SymphonicAndOrchestorMusicPreview = ({ entry, widgetFor }) => (
  <SymphonicAndOrchestorMusicPage
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

SymphonicAndOrchestorMusicPreview.defaultProps = {
  entry: null,
  widgetFor: () => null,
};

SymphonicAndOrchestorMusicPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default SymphonicAndOrchestorMusicPreview;
