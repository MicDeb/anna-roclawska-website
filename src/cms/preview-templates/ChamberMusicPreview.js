import React from 'react';
import PropTypes from 'prop-types';
import { ChamberMusicPageTemplate } from 'src/templates/chamber-music';

const ChamberMusicPreview = ({ entry, widgetFor }) => (
  <ChamberMusicPageTemplate
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
