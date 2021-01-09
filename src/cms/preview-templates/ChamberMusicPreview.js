import React from 'react';
import PropTypes from 'prop-types';
import { ChamberMusicPage } from 'src/templates/chamber-music-page';

const ChamberMusicPreview = ({ entry, widgetFor }) => (
  <ChamberMusicPage
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

ChamberMusicPreview.defaultProps = {
  entry: null,
  widgetFor: () => null,
};

ChamberMusicPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ChamberMusicPreview;
