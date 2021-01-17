import React from 'react';
import PropTypes from 'prop-types';
import { MainTemplate } from 'components/MainTemplate';

const SymphonicAndOrchestorMusicPreview = ({ entry, widgetFor }) => (
  <MainTemplate
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
