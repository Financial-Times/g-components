/**
 * @file
 * Various helper functions
 */

import React from 'react';
import removeMarkdown from 'remove-markdown';
import { getGridBreakpoints } from '@financial-times/o-grid/main';

export function plain(str, stripListLeaders = true) {
  return removeMarkdown(str, { stripListLeaders, gfm: true });
}

export function encodedJSON(_data) {
  const data = _data instanceof String ? JSON.parse(_data) : _data;
  try {
    return encodeURIComponent(JSON.stringify(data, null, ''));
  } catch (e) {
    return '';
  }
}

export function spoorTrackingPixel(data) {
  const jsonString = encodedJSON(data);

  return (
    <noscript data-o-component="o-tracking">
      <img src={`https://spoor-api.ft.com/px.gif?data=${jsonString}`} height="1" width="1" />
    </noscript>
  );
}

export function imageUUID(uuid) {
  return `https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A${uuid}?source=ig`;
}

export function getMainImage(img = {}) {
  if (Object.prototype.hasOwnProperty.call(img, 'uuid')) return imageUUID(img.uuid);
  if (Object.prototype.hasOwnProperty.call(img, 'url')) return img.url;
  return '';
}

// Via: https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html

export const makeCancelable = (promise) => {
  let hasCanceled = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    /* eslint-disable prefer-promise-reject-errors */
    promise.then(
      (val) => (hasCanceled ? reject({ isCanceled: true }) : resolve(val)),
      (error) => (hasCanceled ? reject({ isCanceled: true }) : reject(error)),
    );
    /* eslint-enable */
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled = true;
    },
  };
};

export const registerLayoutChangeEvents = () => {
  // Create a map containing all breakpoints exposed via html:before
  const { layouts } = getGridBreakpoints();
  if (layouts) {
    const breakpoints = new Map([...Object.entries(layouts), ['default', '240px']]);
    const decr1 = (val) => `${Number(val.replace('px', '') - 1)}px`;

    const setupQuery = (query, size) => {
      // matchMedia listener handler: Dispatch `o-grid.layoutChange` event if a match
      const handleMQChange = (mql) => {
        if (mql.matches) {
          window.dispatchEvent(
            new CustomEvent('o-grid.layoutChange', {
              detail: size,
            }),
          );
        }
      };

      const mql = window.matchMedia(query);
      mql.addListener(handleMQChange);
      handleMQChange(mql);

      return [query, handleMQChange];
    };

    // Generate media queries for each
    return [...breakpoints].map(([size, width]) => {
      switch (size) {
        case 'S':
          return setupQuery(
            `(min-width: ${width}) and (max-width: ${decr1(breakpoints.get('M'))})`,
            size,
          );
        case 'M':
          return setupQuery(
            `(min-width: ${width}) and (max-width: ${decr1(breakpoints.get('L'))})`,
            size,
          );
        case 'L':
          return setupQuery(
            `(min-width: ${width}) and (max-width: ${decr1(breakpoints.get('XL'))})`,
            size,
          );
        case 'XL':
          return setupQuery(`(min-width: ${width})`, size);
        case 'default':
        default:
          return setupQuery(`(max-width: ${decr1(breakpoints.get('S'))})`, size);
      }
    });
  }

  throw new Error(
    'To enable grid layout change events, include oGridSurfaceLayoutSizes in your Sass',
  );
};

export const unregisterLayoutChangeEvents = (listeners) => {
  const { layouts } = getGridBreakpoints();
  if (layouts) {
    const breakpoints = new Map([...Object.entries(layouts), ['default', '240px']]);
    const decr1 = (val) => `${Number(val.replace('px', '') - 1)}px`;

    const removeQuery = (query) => {
      const [, listener] = listeners.find(([q]) => q === query);
      const mql = window.matchMedia(query);
      mql.removeListener(listener);
    };

    breakpoints.forEach((width, size) => {
      switch (size) {
        case 'S':
          removeQuery(
            `(min-width: ${width}) and (max-width: ${decr1(breakpoints.get('M'))})`,
            size,
          );
          break;
        case 'M':
          removeQuery(
            `(min-width: ${width}) and (max-width: ${decr1(breakpoints.get('L'))})`,
            size,
          );
          break;
        case 'L':
          removeQuery(
            `(min-width: ${width}) and (max-width: ${decr1(breakpoints.get('XL'))})`,
            size,
          );
          break;
        case 'XL':
          removeQuery(`(min-width: ${width})`, size);
          break;
        case 'default':
        default:
          removeQuery(`(max-width: ${decr1(breakpoints.get('S'))})`, size);
          break;
      }
    });
  }
};

/**
 * @function
 * Tests whether an object is a DOM node.
 * Via: https://stackoverflow.com/a/384380/467760
 */
export function isNode(o) {
  return typeof Node === 'object'
    ? o instanceof Node
    : o &&
        typeof o === 'object' &&
        typeof o.nodeType === 'number' &&
        typeof o.nodeName === 'string';
}

/**
 * @function
 * Tests whether an object is a DOM element.
 * Via: https://stackoverflow.com/a/384380/467760
 */
export function isElement(o) {
  return typeof HTMLElement === 'object'
    ? o instanceof HTMLElement // DOM2
    : o &&
        typeof o === 'object' &&
        o !== null &&
        o.nodeType === 1 &&
        typeof o.nodeName === 'string';
}
