import React from 'react';
import PropTypes from 'prop-types';
import { MainTemplate } from 'components/MainTemplate';

const TheaterMusicAndSongsPagePreview = ({ entry, widgetFor }) => (
  <MainTemplate
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
