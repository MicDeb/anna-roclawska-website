import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default function Logo({ className }) {
  return (
    <Link to='/'>
      <div className={`logo ${ className }`}>
        <p>M</p>
        <p>R</p>
        <span />
      </div>
    </Link>
  );
}

Logo.defaultProps = {
  className: '',
};

Logo.propTypes = {
  className: PropTypes.string,
};
