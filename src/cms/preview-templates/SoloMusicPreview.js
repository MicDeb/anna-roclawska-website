import React from 'react';
import PropTypes from 'prop-types';
import { SoloMusicPageTemplate } from 'src/templates/compositions/solo-music-page';

const SoloMusicPreview = ({ entry, widgetFor }) => (
  <SoloMusicPageTemplate
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
