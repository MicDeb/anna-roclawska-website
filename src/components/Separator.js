import React from 'react';
import PropTypes from 'prop-types';

export default function Separator({ margin }) {
  // eslint-disable-next-line no-console
  console.log('margin', margin);
  return (
    <div
      className={`separator ${ margin ? `m-${ margin }` : '' }`}
    >
      ⌘
    </div>
  );
}

Separator.defaultProps = {
  margin: 0,
};

Separator.propTypes = {
  margin: PropTypes.number,
};
