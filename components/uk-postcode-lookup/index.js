/**
 * @file
 * UK postcode lookup component
 */

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import AutosuggestSearch from '../autosuggest-search';
import {
  getSuggestions,
  findMatch,
  isValidPostcode,
  getIdFromPostcode,
  containsNumber,
} from './helpers';

const UKPostcodeLookup = props => {
  const {
    placeholder,
    suggestionList,
    onSelect,
    outsideSuggestionListError,
    adminAreaAccessor,
  } = props;

  const formattedSuggestionList = useMemo(
    () =>
      suggestionList.map(({ value, display, ...d }) => ({
        value,
        display,
        ...d,
        words: display.toLowerCase().split(' '),
      })),
    [suggestionList],
  );

  const validateInput = input => {
    if (input === '' || (!findMatch(formattedSuggestionList, input) && !containsNumber(input))) {
      onSelect(null);
      return { isError: true, errorMessage: 'No match found' };
    }
    if (containsNumber(input) && !isValidPostcode(input)) {
      onSelect(null);
      return { isError: true, errorMessage: 'Invalid postcode' };
    }
    return { isError: false, errorMessage: '' };
  };

  const onSubmitCallback = async searchValue => {
    const match = findMatch(formattedSuggestionList, searchValue);

    if (match) {
      onSelect(match);
    } else {
      const matchId = await getIdFromPostcode(searchValue, adminAreaAccessor);
      if (matchId !== '') {
        const postcodeMatch = formattedSuggestionList.find(({ value }) => value === matchId);
        if (postcodeMatch) {
          onSelect(postcodeMatch);
        } else {
          onSelect(null);
          return { isError: true, errorMessage: outsideSuggestionListError };
        }
      } else {
        onSelect(null);
        return { isError: true, errorMessage: 'Server error' };
      }
    }
    return { isError: false, errorMessage: '' };
  };

  return (
    <div className="uk-postcode-lookup">
      <AutosuggestSearch
        placeholder={placeholder}
        searchList={formattedSuggestionList}
        getSuggestions={getSuggestions}
        onSelectCallback={onSelect}
        onSubmitCallback={onSubmitCallback}
        validateInput={validateInput}
        onClearFunction={() => onSelect(null)}
      />
    </div>
  );
};

UKPostcodeLookup.displayName = 'GUKPostcodeLookup';

UKPostcodeLookup.propTypes = {
  suggestionList: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      display: PropTypes.string,
    }),
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  outsideSuggestionListError: PropTypes.string.isRequired,
  adminAreaAccessor: PropTypes.func.isRequired,
};

export default UKPostcodeLookup;
