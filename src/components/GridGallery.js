import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import useMeasure from 'components/useMeasure';
import useMedia from 'components/useMedia';
import { a, useTransition } from 'react-spring';

export default function GridGallery({ data, openLightbox }) {
  // Hook1: Tie media queries to the number of columns
  const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], [3, 3, 2], 2);
  // Hook2: Measure the width of the container element
  const [bind, { width }] = useMeasure();
  // Hook3: Hold items
  const [items] = useState(data);
  // eslint-disable-next-line no-console
  console.log('items', items);
  // Hook5: Form a grid of stacked items using width & columns we got from hooks 1 & 2
  const [heights, gridItems] = useMemo(() => {
    // eslint-disable-next-line no-shadow
    const heights = new Array(columns).fill(0); // Each column gets a height starting with zero
    // eslint-disable-next-line no-shadow
    const gridItems = items.map((child) => {
      // Basic masonry-grid placing, puts tile into the smallest column using Math.min
      const column = heights.indexOf(Math.min(...heights));
      // X = container width / number of columns * column index,
      // Y = it's just the height of the current column
      const xy = [
        (width / columns) * column,
        (heights[column] += child.height / 2) - child.height / 2,
      ];
      return {
        ...child, xy, width: width / columns, height: child.height / 2,
      };
    });
    return [heights, gridItems];
  }, [columns, items, width]);
  // Hook6: Turn the static grid values into animated transitions,
  // any addition, removal or change will be animated
  const transitions = useTransition(gridItems, (item) => item.src, {
    // eslint-disable-next-line no-shadow
    from: ({ xy, width, height }) => ({
      xy, width, height, opacity: 0,
    }),
    // eslint-disable-next-line no-shadow
    enter: ({ xy, width, height }) => ({
      xy, width, height, opacity: 1,
    }),
    // eslint-disable-next-line no-shadow
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });
  // Render the grid
  return (
    <div
      {...bind}
      className='list'
      style={{ height: Math.max(...heights) }}
    >
      {transitions.map(({ item, props: { xy, ...rest }, key }, index) => (
        <a.div
          key={key}
          style={{ transform: xy.interpolate((x, y) => `translate3d(${ x }px,${ y }px,0)`), ...rest }}
        >
          <div
            style={{ backgroundImage: `url(${ item.src })` }}
            onClick={() => openLightbox(index)}
          />
        </a.div>
      ))}
    </div>
  );
}

GridGallery.propTypes = {
  data: PropTypes.array.isRequired,
  openLightbox: PropTypes.func.isRequired,
};
