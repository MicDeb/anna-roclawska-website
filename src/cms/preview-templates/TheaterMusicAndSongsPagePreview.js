import React from 'react';
import PropTypes from 'prop-types';
import { TheaterMusicAndSongsTemplate } from 'src/templates/theater-music-and-song';

const TheaterMusicAndSongsPagePreview = ({ entry, widgetFor }) => (
  <TheaterMusicAndSongsTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

TheaterMusicAndSongsPagePreview.defaultProps = {
  entry: null,
  widgetFor: () => null,
};

TheaterMusicAndSongsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default TheaterMusicAndSongsPagePreview;
