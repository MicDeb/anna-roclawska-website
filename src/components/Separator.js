import React from 'react';
import PropTypes from 'prop-types';

export default function Separator({ margin }) {
  return (
    <div className={`separator ${ margin ? `mt-${ margin } mb-${ margin }` : '' }`} />
  );
}

Separator.defaultProps = {
  margin: 0,
};

Separator.propTypes = {
  margin: PropTypes.number,
};
