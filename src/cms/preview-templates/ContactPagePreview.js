import React from 'react';
import PropTypes from 'prop-types';
import { MainTemplate } from 'components/MainTemplate';

const ContactPagePreview = ({ entry, widgetFor }) => (
  <MainTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

ContactPagePreview.defaultProps = {
  entry: null,
  widgetFor: () => null,
};

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ContactPagePreview;
