import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { useTrail, a } from 'react-spring';

export default function Trail({ children, itemHeight, ...props }) {
  const items = Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 1500, friction: 200 },
    opacity: 1,
    x: 0,
    height: itemHeight,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div
      className='trails-main'
      {...props}
    >
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index].type + items[index].key}
            className='trails-text'
            style={{ ...rest, transform: x.interpolate((position) => `translate3d(0,${ position }px,0)`) }}
          >
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  );
}

Trail.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  itemHeight: PropTypes.number.isRequired,
};
