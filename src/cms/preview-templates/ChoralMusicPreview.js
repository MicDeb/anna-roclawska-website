import React from 'react';
import PropTypes from 'prop-types';
import { ChoralMusicPageTemplate } from 'src/templates/choral-music';

const ChoralMusicPreview = ({ entry, widgetFor }) => (
  <ChoralMusicPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

ChoralMusicPreview.defaultProps = {
  entry: null,
  widgetFor: () => null,
};

ChoralMusicPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ChoralMusicPreview;
