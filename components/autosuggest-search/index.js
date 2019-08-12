/**
 * @file
 * Autosuggest search component
 */

import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import './styles.scss';

// Default get suggestions method
const getSuggestions = (value, searchList) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  // Match from the beginning of the string
  return inputLength === 0
    ? []
    : searchList.filter(({ display }) => {
      const words = display.toLowerCase().split(' ');
      return words.some(word => word.toLowerCase().slice(0, inputLength) === inputValue);
    });
};

// Default component/function to render suggestion
const RenderSuggestion = ({ display }) => (
  <div>
    {display}
  </div>
);

// Default mapping from suggestion to value
const getSuggestionValue = ({ display }) => display;

const AutosuggestSearch = ({
  className,
  placeholder,
  width,
  searchList,
  getSuggestions,
  getSuggestionValue,
  renderSuggestion,
  onSelectCallback,
  onSubmitCallback,
  validateInput,
}) => {
  const inputRef = useRef();
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [errorState, setErrorState] = useState({ isError: false, errorMessage: '' });

  // Update suggestions based on search value
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value, searchList));
  };

  // Clear suggestions
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  // Run callback when suggestion selected from dropdown
  const onSuggestionSelected = (event, { suggestion, suggestionValue }) => {
    if (onSelectCallback) onSelectCallback(suggestion, suggestionValue);
    setSearchValue(suggestionValue);
    inputRef.current.input.blur();
  };

  // Run callback on submit (ENTER)
  const onSubmit = (event) => {
    event.preventDefault();
    if (onSubmitCallback) onSelectCallback(searchValue);
    if (validateInput) setErrorState(validateInput(searchValue));
    inputRef.current.input.blur();
  };

  // Update search value state on input change
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setSearchValue(value);
    setErrorState({ isError: false, errorMessage: '' });
  };

  const { isError, errorMessage } = errorState;
  // Generate form classes
  const formClasses = [className, isError && `${className}--error`].filter(i => i).join(' ');

  return (
    <form className={formClasses} onSubmit={onSubmit}>
      <Autosuggest
        ref={inputRef}
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        onSuggestionSelected={onSuggestionSelected}
        focusInputOnSuggestionClick={false}
        inputProps={{
          placeholder: placeholder || '',
          value: searchValue,
          onChange,
          style: { width },
        }}
      />
      {isError && (
      <div className={`${className}__error-message`}>
        {errorMessage}
      </div>
      )}
    </form>
  );
};

AutosuggestSearch.displayName = 'GAutosuggestSearch';

AutosuggestSearch.propTypes = {
  className: PropTypes.string,
  searchList: PropTypes.arrayOf(PropTypes.object),
  placeholder: PropTypes.string,
  getSuggestions: PropTypes.func,
  getSuggestionValue: PropTypes.func,
  renderSuggestion: PropTypes.func,
  onSelectCallback: PropTypes.func,
  onSubmitCallback: PropTypes.func,
  validateInput: PropTypes.func,
  errorMessage: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AutosuggestSearch.defaultProps = {
  className: 'g-autosuggest-search',
  getSuggestions,
  renderSuggestion: RenderSuggestion,
  getSuggestionValue,
  width: '100%',
};

export default AutosuggestSearch;
