/**
 * @file
 * UK constituency lookup component
 */

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { uk } from '@financial-times/politics';
import AutosuggestSearch from '../../autosuggest-search';
import {
  getConstituencyIdFromPostcode,
  findMatch,
  isValidPostcode,
  containsNumber,
} from './helpers.js';
import './styles.scss';

const { getPartyInfo } = uk;

const ConstituencyLookup = ({
  className,
  title,
  subhead,
  constituencyList,
  candidateList,
  setOpenConstituency,
}) => {
  const formattedConstituencyList = useMemo(
    () => [
      ...constituencyList.map(({ id, name }) => ({
        value: id,
        display: name,
        type: 'constituency',
        words: name.toLowerCase().split(' '),
      })),
      ...candidateList.map(({ id, constituencyName, partyName, candidateName }) => ({
        value: id,
        display: candidateName,
        displayConstituency: constituencyName,
        partyName,
        type: 'candidate',
        words: candidateName.toLowerCase().split(' '),
      })),
    ],
    [constituencyList, candidateList],
  );

  const RenderSuggestion = ({ display, type, displayConstituency, partyName }) => {
    const color = type === 'candidate' ? getPartyInfo(partyName).color : 'black';
    return (
      <div className={`suggestion-entry suggestion-entry--${type}`}>
        {type === 'candidate' ? (
          <i className="candidate-icon" style={{ backgroundColor: color }} />
        ) : (
          <i className="constituency-icon" />
        )}
        <div className="suggestion-entry__text">
          {type === 'candidate' ? display : <div className="candidate-constituency">{display}</div>}
          {type === 'candidate' && (
            <div className="candidate-constituency">{displayConstituency}</div>
          )}
        </div>
      </div>
    );
  };

  const getSuggestionValue = ({ display, type, displayConstituency }) =>
    type === 'constituency' ? display : displayConstituency;

  const getSuggestions = (value, searchList) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    const inputValueWords = inputValue.split(' ');

    // Match from the beginning of the string, after N characters
    const minimumInputLength = 2;
    if (inputLength < minimumInputLength) {
      return [];
    }
    const scoredList = formattedConstituencyList.map(({ display, words, ...d }) => {
      const scores = words.reduce((acc, word) => {
        const match = inputValueWords.find(
          (inputValueWord) => word.toLowerCase().slice(0, inputValueWord.length) === inputValueWord,
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

    return scoredList.filter((d) => d.score > minimumInputLength).sort((a, b) => b.score - a.score);
  };

  const onSelectCallback = (suggestion) => {
    const { value } = suggestion;
    setOpenConstituency(value);
  };

  const onSubmitCallback = async (searchValue) => {
    const constituencyMatch = findMatch(formattedConstituencyList, searchValue);
    if (constituencyMatch) {
      const { value } = constituencyMatch;
      setOpenConstituency(value);
    } else {
      const constituencyId = await getConstituencyIdFromPostcode(searchValue);
      if (constituencyId !== '') {
        setOpenConstituency(constituencyId);
      } else {
        return { isError: true, errorMessage: 'Server error' };
      }
    }
    return { isError: false, errorMessage: '' };
  };

  const validateInput = (input) => {
    if (input === '' || (!findMatch(formattedConstituencyList, input) && !containsNumber(input))) {
      return { isError: true, errorMessage: 'No match found' };
    }
    if (containsNumber(input) && !isValidPostcode(input)) {
      return { isError: true, errorMessage: 'Invalid postcode' };
    }
    return { isError: false, errorMessage: '' };
  };

  return (
    <div className={className}>
      <AutosuggestSearch
        placeholder="Search"
        width="100%"
        searchList={formattedConstituencyList}
        onSelectCallback={onSelectCallback}
        onSubmitCallback={onSubmitCallback}
        validateInput={validateInput}
        getSuggestions={getSuggestions}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={RenderSuggestion}
        onClearFunction={() => setOpenConstituency('')}
      />
    </div>
  );
};

ConstituencyLookup.displayName = 'GConstituencyLookup';

ConstituencyLookup.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  subhead: PropTypes.string,
  constituencyList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
  candidateList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      constituencyName: PropTypes.string,
      partyName: PropTypes.string,
      candidateName: PropTypes.string,
    }),
  ),
  setOpenConstituency: PropTypes.func.isRequired,
};

ConstituencyLookup.defaultProps = {
  className: 'g-constituency-lookup',
};

export default ConstituencyLookup;
