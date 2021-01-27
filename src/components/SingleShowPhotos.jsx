import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import Carousel, { Modal, ModalGateway } from 'react-images';
import useMeasure from 'components/useMeasure';
import useMedia from 'components/useMedia';
import Separator from 'components/Separator';
import { a, useTransition } from 'react-spring';

function GridGallery({ data, openLightbox }) {
  // Hook1: Tie media queries to the number of columns
  const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], [5, 4, 3], 2);
  // Hook2: Measure the width of the container element
  const [bind, { width }] = useMeasure();
  // Hook3: Hold items
  const [items] = useState(data);
  // // Hook4: shuffle data every 2 seconds
  // useEffect(() => void setInterval(() => set(shuffle), 2000), []);
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

export function SingleShowPhotos(props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  }, []);

  const {
    images,
    title,
  } = props;

  return (
    <div className='single-show-photos'>
      <h4 className='single-show-photos__title'>{title}</h4>
      <GridGallery
        data={images}
        openLightbox={openLightbox}
      />
      <Separator margin={3} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={images.map((photo) => ({
                ...photo,
                caption: photo.caption,
              }))}
              hideControlsWhenIdle={100000}
              showNavigationOnTouchDevice
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

SingleShowPhotos.defaultProps = {
  title: '',
};

SingleShowPhotos.propTypes = {
  // data: PropTypes.array.isRequired,
  images: PropTypes.array.isRequired,
  // withFigcaption: PropTypes.bool,
  title: PropTypes.string,
};
