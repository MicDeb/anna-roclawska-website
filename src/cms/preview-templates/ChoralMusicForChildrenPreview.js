import React from 'react';
import PropTypes from 'prop-types';
import { ChoralMusicForChildrenPageTemplate } from 'src/templates/choral-music-for-children';

const ChoralMusicForChildrenPreview = ({ entry, widgetFor }) => (
  <ChoralMusicForChildrenPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

ChoralMusicForChildrenPreview.defaultProps = {
  entry: null,
  widgetFor: () => null,
};

ChoralMusicForChildrenPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ChoralMusicForChildrenPreview;
