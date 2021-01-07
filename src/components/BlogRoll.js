import React from 'react';
import PropTypes from 'prop-types';

class BlogRoll extends React.Component {
  render() {
    return (
      <div className='columns is-multiline'>
        test
      </div>
    );
  }
}

BlogRoll.defaultProps = {
  data: null,
};

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

// eslint-disable-next-line react/prop-types
export default ({ data, count }) => (
  <BlogRoll
    data={data}
    count={count}
  />
);
