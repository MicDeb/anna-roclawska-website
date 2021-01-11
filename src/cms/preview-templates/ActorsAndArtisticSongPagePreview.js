import React from 'react';
import PropTypes from 'prop-types';
import { ActorsAndArtisticSongTemplate } from 'src/templates/actors-and-artistic-song';

const ActorsAndArtisticSongPagePreview = ({ entry, widgetFor }) => (
  <ActorsAndArtisticSongTemplate
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
