// Ported from https://github.com/Financial-Times/spark-lists/tree/master/src/client/components/Origami

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import OverlayContents from './overlayContents';
import { useOverlay } from './useOverlay';
import './styles.scss';

const Overlay = ({ children, isShowing, id, className }) => {
  // Initialise overlay
  const overlayState = useOverlay({
    id,
    visuallyHideTitle: true,
    oOverlayOptions: {
      modal: true,
      customclose: true,
      preventclosing: true,
      class: className,
    },
  });

  const { showOverlay, hideOverlay } = overlayState;

  useEffect(() => {
    if (isShowing) {
      showOverlay();
    } else if (isShowing === false) {
      hideOverlay();
    }
    // WARNING: Do *not* add showOverlay, hideOverlay to dependencies as this will cause multiple overlays to be mounted
  }, [isShowing]); // eslint-disable-line react-hooks/exhaustive-deps

  return <OverlayContents overlayState={overlayState}>{children}</OverlayContents>;
};

Overlay.propTypes = {
  isShowing: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
};

Overlay.defaultProps = {
  isShowing: false,
  id: 'overlay',
  className: 'overlay',
};

export default Overlay;
