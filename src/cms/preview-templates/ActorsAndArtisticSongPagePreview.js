import React from 'react';
import PropTypes from 'prop-types';
import { MainTemplate } from 'components/MainTemplate';

const ActorsAndArtisticSongPagePreview = ({ entry, widgetFor }) => (
  <MainTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

ActorsAndArtisticSongPagePreview.defaultProps = {
  entry: null,
  widgetFor: () => null,
};

ActorsAndArtisticSongPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ActorsAndArtisticSongPagePreview;
