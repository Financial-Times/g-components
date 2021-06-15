/**
 * @file
 * Helpers for UK postcode lookup component
 */

export const getSuggestions = (value, searchList) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  const inputValueWords = inputValue.split(' ');

  // Match from the beginning of the string, after N characters
  const minimumInputLength = 2;
  if (inputLength < minimumInputLength) {
    return [];
  }
  const scoredList = searchList.map(({ display, words, ...d }) => {
    const scores = words.reduce((acc, word) => {
      const match = inputValueWords.find(
        inputValueWord => word.toLowerCase().slice(0, inputValueWord.length) === inputValueWord,
      );
      return [
        ...acc,
        {
          matchLength: match ? match.length : 0,
          wordLength: word.length,
          pcMatch: match ? match.length / word.length : 0,
        },
      ];
    }, []);

    const score = scores.reduce((acc, { matchLength, pcMatch }) => acc + matchLength, 0);

    return {
      display,
      ...d,
      score,
    };
  });

  return scoredList.filter(d => d.score > minimumInputLength).sort((a, b) => b.score - a.score);
};

const cleanSearchValue = searchValue => searchValue.toLowerCase().replace(/\s/g, '');

export const findMatch = (searchList, searchValue) =>
  searchList.find(({ display }) => {
    const cleanedDisplay = cleanSearchValue(display);
    const cleanedSearchValue = cleanSearchValue(searchValue);
    return cleanedDisplay === cleanedSearchValue;
  });

const postcodeRegex = /^([Gg][Ii][Rr] ?0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) ?[0-9][A-Za-z]{2})$/i;

export const getIdFromPostcode = async (postcode, adminAreaAccessor) => {
  try {
    const response = await fetch(`https://api.postcodes.io/postcodes/${postcode}`).then(response =>
      response.json(),
    );
    if (response.status === 200) {
      return adminAreaAccessor(response.result);
    }
    return '';
  } catch (e) {
    return '';
  }
};

export const isValidPostcode = postcode => {
  const trimmedPostcode = postcode.trim();
  return postcodeRegex.test(trimmedPostcode);
};

export const containsNumber = string => /\d/.test(string);

export default null;
