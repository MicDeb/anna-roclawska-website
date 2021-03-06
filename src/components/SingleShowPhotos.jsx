import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Separator from 'components/Separator';
import GridGallery from 'components/GridGallery';

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
    withSeparator,
  } = props;

  return (
    <div className='single-show-photos'>
      <h4 className='single-show-photos__title'>{title}</h4>
      <GridGallery
        data={images}
        openLightbox={openLightbox}
      />
      {withSeparator && (
        <Separator margin={3} />
      )}
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
  withSeparator: true,
};

SingleShowPhotos.propTypes = {
  images: PropTypes.array.isRequired,
  title: PropTypes.string,
  withSeparator: PropTypes.bool,
};
