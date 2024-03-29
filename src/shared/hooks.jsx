/**
 * @file
 * Sundry hooks that have multiple use-cases
 */

import { useRef, useEffect, useState } from 'react';
import { isElement, registerLayoutChangeEvents, unregisterLayoutChangeEvents } from './helpers';

/**
 * @function
 * Provides a standardised way of creating the container DOM elements for portals
 * Usage:
  ```
  const SomeComponent = () => {
    const target = usePortal();
    return createPortal(<div>my modal</div>, target);
  }
  ```
 *
 * Modified from: https://www.jayfreestone.com/writing/react-portals-with-hooks/
 */
export const usePortal = (parent) => {
  const rootRef = useRef(null);

  useEffect(() => {
    if (!rootRef.current) {
      const rootEl = document.createElement('div');
      rootEl.classList.add('g-portal');
      rootRef.current = rootEl;
    }
    /* eslint-disable no-nested-ternary */
    const parentEl = isElement(parent)
      ? parent
      : typeof parent === 'string'
      ? document.querySelector(parent) || document.createElement('div')
      : document.createElement('div');
    /* eslint-enable no-nested-ternary */

    // Unmounted
    if (!parentEl.parentElement) {
      parentEl.classList.add('g-portal-parent');
      document.body.insertBefore(parentEl, document.body.firstElementChild);
    }

    parentEl.appendChild(rootRef.current);

    return () => {
      rootRef.current.remove();
      // Remove parent element if empty.
      if (parentEl.childNodes.length === 0) parentEl.remove();
    };
  }, [parent]);

  return rootRef.current;
};

/**
 * @function
 * Initialises o-ads
 */
export const useAds = (config, enabled = true) => {
  useEffect(() => {
    // Async side-effects should be in an IIFE in useEffect; don't make the CB async!
    (async () => {
      const { default: OAds } = await import('@financial-times/ads-legacy-o-ads');
      try {
        if (enabled) {
          const initialised = await OAds.init({
            gpt: {
              network: 5887,
              site: config.gptSite || 'ft.com',
              zone: config.gptZone || 'unclassified',
            },
            targeting: config.targeting,
            lazyLoad: true,
          });

          const slots = Array.from(document.querySelectorAll('.o-ads, [data-o-ads-name]'));
          slots.forEach(initialised.slots.initSlot.bind(initialised.slots));
        }
      } catch (e) {
        if (typeof global === 'undefined' || !global?.STORYBOOK_ENV) console.error(e); // eslint-disable-line no-console
      }
    })();
  }, [config, enabled]);
};

/**
 * @function
 * Initialises o-grid's layout change events on first call;
 * then returns the current breakpoint.
 */
export const useLayoutChangeEvents = () => {
  const [breakpoint, setBreakpoint] = useState({breakpoint:'default'});

  const listenersRef = useRef();

  const update = ({ detail }) => {
    setBreakpoint({ breakpoint: detail });
  };

  useEffect(() => {
    try {
      window.addEventListener('o-grid.layoutChange', update);
      listenersRef.current = registerLayoutChangeEvents();

      return () => {
        unregisterLayoutChangeEvents(listenersRef.current);
        window.removeEventListener('o-grid.layoutChange', update);
      };
    } catch (e) {
      // Suppress errors in Jest
      if (typeof global === 'undefined' || !global?.STORYBOOK_ENV) console.error(e); // eslint-disable-line no-console
    }
  }, []);

  return breakpoint;
};

/**
 * @file
 * Sets up global keyboard shortcuts
 */
export const useKeyboardShortcuts = (shortcuts) => {
  const handlers = useRef(null);
  useEffect(() => {
    handlers.current = shortcuts;
  }, [shortcuts]);
  useEffect(() => {
    const listener = ({ keyCode, target }) => {
      if (target === document.body && handlers.current[keyCode]) {
        handlers.current[keyCode]();
      }
    };

    document.addEventListener('keydown', listener);
    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  // Returns synthetic event listeners
  return Object.entries(shortcuts).reduce(
    (a, [k, v]) => ({
      ...a,
      [k]: ({ keyPress }) => keyPress === k && v(),
    }),
    {},
  );
};

export default {
  usePortal,
  useAds,
  useLayoutChangeEvents,
  useKeyboardShortcuts,
};
