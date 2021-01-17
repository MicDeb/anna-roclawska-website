import React from 'react';
import PropTypes from 'prop-types';
import { MainTemplate } from 'components/MainTemplate';

const ChoralMusicForChildrenPreview = ({ entry, widgetFor }) => (
  <MainTemplate
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
