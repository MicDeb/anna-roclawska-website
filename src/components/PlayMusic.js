import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import PauseIcon from 'src/img/pause-icon.png';
import PlayIcon from 'src/img/play-icon.png';

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
      <img
        src={playMusic === 'true' ? PauseIcon : PlayIcon}
        alt='music-icon'
      />
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
