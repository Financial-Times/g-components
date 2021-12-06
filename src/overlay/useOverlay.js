import { useState, useEffect } from 'react';
import Overlay from '@financial-times/o-overlay';

/**
 * Overlay hook to wrap oOverlay methods and state
 *
 * Wraps oOverlay functionality and exposes its API and internal state
 * eg, open/close methods and whether the overlay is shown or not.
 *
 * Use in conjunction with `<OverlayContents>` to specify the contents of
 * the overlay.
 *
 * See https://registry.origami.ft.com/components/o-overlay/readme
 *
 * @param {OverlayOptions} options
 * @param {string} options.id - The id for the overlay
 * @param {string} options.title - The title of the overlay
 * @param {boolean} [options.headingShaded=false] - Whether the heading is shaded or not
 * @param {boolean} [options.oLayerContext=document.body] - Where overlay event listeners are added
 * @param {Object} [options.oOverlayOptions] - Extra oOverlay options. See https://registry.origami.ft.com/components/o-overlay/readme#option-reference
 */
export const useOverlay = ({
  id,
  title,
  headingShaded = false,
  visuallyHideTitle = false,
  oLayerContext = document.body,
  oOverlayOptions,
} = {}) => {
  const [isShowing, setIsShowing] = useState(false);
  const [overlay, setOverlay] = useState(null);

  useEffect(() => {
    // Only create the overlay once, otherwise oOverlay errors
    if (!overlay) {
      const oOverlay = new Overlay(id, {
        // Nothing in html, but will be replaced by a React portal to
        // replace the contents
        html: ' ', // Requires a non-empty value
        heading: {
          title: (visuallyHideTitle && !title && 'Overlay') || title,
          visuallyhidetitle: visuallyHideTitle,
          shaded: headingShaded,
        },
        ...oOverlayOptions,
      });

      // NOTE: In conjunction with setting `isShowing` in the hide
      // overlay method below, this event listener catches any race
      // conditions where React does not set `isShowing` in time when
      // oOverlay is closed
      oLayerContext.addEventListener('oOverlay.layerClose', () => {
        setIsShowing(false);
      });

      setOverlay(oOverlay);
    }
  }, [headingShaded, id, oLayerContext, oOverlayOptions, overlay, title, visuallyHideTitle]);

  const showOverlay = () => {
    if (!overlay) {
      return;
    }
    overlay.open();
    setIsShowing(true);
  };

  const hideOverlay = () => {
    // NOTE: `isShowing` needs to be set here in case oOverlay events
    // don't trigger the React lifecycle in time
    setIsShowing(false);

    if (!overlay) {
      return;
    }
    if (overlay.visible) overlay.close();
  };

  const oOverlayContentsSelector = `.o-overlay--${id} .o-overlay__content`;

  return {
    isShowing,
    showOverlay,
    hideOverlay,
    overlay,
    oOverlayContentsSelector,
  };
};
