/**
 * @file
 * UK constituency lookup component
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AutosuggestSearch from '../../autosuggest-search';
import {
  getConstituencyIdFromPostcode,
  findMatch,
  isValidPostcode,
  containsNumber,
} from './helpers.js';
import './styles.scss';

const ConstituencyLookup = ({
  className,
  title,
  subhead,
  constituencyList,
  setOpenConstituency,
}) => {
  const formattedConstituencyList = constituencyList.map(({ id, name }) => ({
    value: id,
    display: name,
  }));

  const onSelectCallback = suggestion => {
    const { value } = suggestion;
    setOpenConstituency(value);
  };

  const onSubmitCallback = async searchValue => {
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

  const validateInput = input => {
    if (input === '' || (!findMatch(formattedConstituencyList, input) && !containsNumber(input))) {
      return { isError: true, errorMessage: 'No match found' };
    }
    if (!isValidPostcode(input)) {
      return { isError: true, errorMessage: 'Invalid postcode' };
    }
    return { isError: false, errorMessage: '' };
  };

  return (
    <div className={className}>
      <h2 className={`${className}__title`}>{title}</h2>
      <h3 className={`${className}__subhead`}>{subhead}</h3>
      <AutosuggestSearch
        placeholder="Search"
        width={'100%'}
        searchList={formattedConstituencyList}
        onSelectCallback={onSelectCallback}
        onSubmitCallback={onSubmitCallback}
        validateInput={validateInput}
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
  setOpenConstituency: PropTypes.func.isRequired,
};

ConstituencyLookup.defaultProps = {
  className: 'g-constituency-lookup',
  title: 'Results by constituency',
  subhead: 'Search by constituency name or postcode',
};

export default ConstituencyLookup;
