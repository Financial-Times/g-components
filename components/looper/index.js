/**
 * @file
 * Container component that surfaces a scrubber and repeat button for charts
 */

import React, { useState } from 'react';
import useInterval from '@use-it/interval';
import './styles.scss';

const GLooper = ({ children, className, autoplay, looping, duration, step }) => {
  const [progress, setProgress] = useState(0);
  const [isPlaying, togglePlaying] = useState(autoplay);
  const [isLooping, toggleLooping] = useState(looping);
  useInterval(
    () => {
      if (progress < 100) setProgress(progress + step);
      else if (isLooping) setProgress(0);
      else togglePlaying(false);
    },
    !isPlaying ? null : duration / (100 / step),
  );
  return (
    <div className={className}>
      <div>{children}</div>
      <div>
        <button
          type="button"
          onClick={() => {
            if (progress === 100 && !isLooping) {
              setProgress(0);
              togglePlaying(true);
            } else {
              togglePlaying(!isPlaying);
            }
          }}
          className={`${className}__play-pause${
            isPlaying
              ? ` ${className}__play-pause--is-playing`
              : ` ${className}__play-pause--is-paused`
          }`}
        />
        <button
          type="button"
          onClick={() => {
            toggleLooping(!isLooping);
          }}
          className={`${className}__toggle-looping${
            !isLooping ? ` ${className}__toggle-looping--off` : ''
          }`}
        />
        <input
          onChange={({ target }) => {
            togglePlaying(false);
            setProgress(+target.value);
            togglePlaying(true);
          }}
          type="range"
          max={100}
          min={0}
          step={step}
          value={progress}
        />
      </div>
    </div>
  );
};

GLooper.propTypes = {};

GLooper.defaultProps = {
  className: 'g-looper',
  autoplay: true,
  step: 5,
  duration: 5000,
  looping: true,
};

export default GLooper;
