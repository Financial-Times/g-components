import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

/**
 * A wrapper for oOverlay contents
 *
 * Based on whether the overlay is shown or not (from `useOverlay`
 * state), create a [React portal](https://reactjs.org/docs/portals.html)
 * to insert the children of this component into oOverlay contents DOM
 * element.
 *
 * @param {Object} props
 * @param {*} props.children - The contents of the overlay
 * @param {Object} props.overlayState - The overlay state (result of `useOverlay`)
 * @param {Object} props.overlayState.isShowing - Whether to create the content or not
 * @param {Object} props.overlayState.oOverlayContentsSelector - A selector to get the DOM element to insert overlay contents into
 */
const OverlayContents = ({ children, overlayState }) => {
  const { isShowing, oOverlayContentsSelector } = overlayState;

  // Find where the overlay contents is, to create the portal
  const portalContainer = document.querySelector(oOverlayContentsSelector);

  // Only create a portal if the overlay is showing
  return isShowing ? ReactDOM.createPortal(children, portalContainer) : null;
};

OverlayContents.propTypes = {
  overlayState: PropTypes.shape({
    isShowing: PropTypes.bool,
    oOverlayContentsSelector: PropTypes.string,
  }).isRequired,
};

export default OverlayContents;
