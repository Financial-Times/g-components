/**
 * @file
 * Helpers for UK constituency lookup component
 */

export const getConstituencyIdFromPostcode = async postcode => {
  try {
    const response = await fetch(`https://api.postcodes.io/postcodes/${postcode}`).then(response =>
      response.json(),
    );
    if (response.status === 200) {
      return response.result.codes.parliamentary_constituency;
    } else {
      return '';
    }
  } catch (e) {
    return '';
  }
};

const cleanSearchValue = searchValue => searchValue.toLowerCase().replace(/\s/g, '');

export const findMatch = (searchList, searchValue) => {
  return searchList.find(({ display }) => {
    const cleanedDisplay = cleanSearchValue(display);
    const cleanedSearchValue = cleanSearchValue(searchValue);
    return cleanedDisplay === cleanedSearchValue;
  });
};

const postcodeRegex = /^([Gg][Ii][Rr] ?0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) ?[0-9][A-Za-z]{2})$/i;

export const isValidPostcode = postcode => {
  const trimmedPostcode = postcode.trim();
  return postcodeRegex.test(trimmedPostcode);
};

export const containsNumber = string => {
  return /\d/.test(string);
};

export default null;
