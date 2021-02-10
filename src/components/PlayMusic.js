import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

export default function PlayMusic({ toggleMusic, isMusicPlay }) {
  const [playMusic, setPlayMusic] = useState(isMusicPlay);

  useEffect(() => {
    setPlayMusic(isMusicPlay);
  }, [isMusicPlay]);

  const togglePlayMusic = useCallback(() => {
    setPlayMusic((prevState) => (prevState === 'true' ? 'false' : 'true'));
    toggleMusic();
  }, [toggleMusic]);

  return (
    <button
      type='button'
      className='play-music'
      onClick={togglePlayMusic}
    >
      <FontAwesomeIcon icon={playMusic === 'true' ? faPause : faPlay} />
    </button>
  );
}

PlayMusic.defaultProps = {
  isMusicPlay: 'false',
};

PlayMusic.propTypes = {
  toggleMusic: PropTypes.func.isRequired,
  isMusicPlay: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
