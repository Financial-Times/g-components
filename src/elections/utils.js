/**
 * @file
 * Util functions for UK elections
 */

export { default as removeAccents } from 'remove-accents';

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export default null;
