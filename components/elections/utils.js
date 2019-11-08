/**
 * @file
 * Util functions for UK elections
 */

import removeAccents from 'remove-accents';

export const getPartyInfo = name => {
  const sanitisedName = removeAccents(name.toUpperCase().replace(/\s/g, ''));
  switch (sanitisedName) {
    case 'CONSERVATIVE':
      return {
        color: '#149adb',
        shortName: 'Con',
        formattedName: 'Conservative',
      };
    case 'LABOUR':
      return {
        color: '#cf4d3c',
        shortName: 'Lab',
        formattedName: 'Labour',
      };
    case 'LIBERALDEMOCRATS':
      return {
        color: '#f09000',
        shortName: 'Lib Dem',
        formattedName: 'Liberal Democrats',
      };
    case 'GREEN':
      return {
        color: '#8deb9d',
        shortName: 'Green',
        formattedName: 'Green',
      };
    case 'CHANGEUK':
      return {
        color: '#fc8b9d',
        shortName: 'TIGfC',
        formattedName: 'The Independent Group for Change',
      };
    case 'BREXIT':
      return {
        color: '#80cfd6',
        shortName: 'Brexit',
        formattedName: 'Brexit',
      };
    case 'UKIP':
      return {
        color: '#7200ab',
        shortName: 'UKIP',
        formattedName: 'Ukip',
      };
    case 'PLAIDCYMRU':
      return {
        color: '#990000',
        shortName: 'PC',
        formattedName: 'Plaid Cymru',
      };
    case 'SNP':
      return {
        color: '#ffdf00',
        shortName: 'SNP',
        formattedName: 'Scottish National party',
      };
    case 'SINNFEIN':
      return {
        color: '#006643',
        shortName: 'SF',
        formattedName: 'Sinn Féin',
      };
    case 'DUP':
      return {
        color: '#210066',
        shortName: 'DUP',
        formattedName: 'Democratic Unionist party',
      };
    case 'UUP':
      return {
        color: '#3f67cc',
        shortName: 'UUP',
        formattedName: 'Ulster Unionist party',
      };
    case 'SDLP':
      return {
        color: '#5ba373',
        shortName: 'SDLP',
        formattedName: 'Social Democratic and Labour party',
      };
    case 'ALLIANCE':
      return {
        color: '#ffbe18',
        shortName: 'APNI',
        formattedName: 'Alliance',
      };
    case 'INDEPENDENT/OTHER':
    case 'INDEPENDENT':
    case 'OTHER':
      return {
        color: '#d9cace',
        shortName: 'Ind/Oth',
        formattedName: 'Independent/Other',
      };
    default:
      throw new Error(`No party match found for ${name}`);
  }
};

export const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export default null;
