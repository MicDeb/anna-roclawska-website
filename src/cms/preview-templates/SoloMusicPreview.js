import React from 'react';
import PropTypes from 'prop-types';
import { MainTemplate } from 'components/MainTemplate';

const SoloMusicPreview = ({ entry, widgetFor }) => (
  <MainTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

SoloMusicPreview.defaultProps = {
  entry: null,
  widgetFor: () => null,
};

SoloMusicPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default SoloMusicPreview;
