/**
 * @file
 * Autosuggest search component
 */

import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import './styles.scss';

// Default get suggestions method
const defaultGetSuggestions = (value, searchList) => {
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
const RenderSuggestion = ({ display }) => <div>{display}</div>;

// Default mapping from suggestion to value
const defaultGetSuggestionValue = ({ display }) => display;

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
  const onSuggestionSelected = (event, { suggestionValue, suggestion }) => {
    if (onSelectCallback) onSelectCallback(suggestion);
    setSearchValue(suggestionValue);
    inputRef.current.input.blur();
  };

  // Run callback on submit (ENTER)
  const onSubmit = async event => {
    event.preventDefault();
    const validateInputResult = validateInput(searchValue);
    if (validateInput && validateInputResult.isError) setErrorState(validateInputResult);
    if (onSubmitCallback && !validateInputResult.isError) {
      const callbackReturn = await onSubmitCallback(searchValue);
      if (callbackReturn) setErrorState(callbackReturn);
    }
    inputRef.current.input.blur();
  };

  // Update search value state on input change
  const onChange = event => {
    const {
      target: { value },
    } = event;
    setSearchValue(value);
    setErrorState({ isError: false, errorMessage: '' });
  };

  // Clear search value on button click
  const clearSearch = () => {
    setSearchValue('');
    setErrorState({ isError: false, errorMessage: '' });
    inputRef.current.input.focus();
  };

  const { isError, errorMessage } = errorState;
  // Generate form classes
  const formClasses = [className, isError && `${className}--error`].filter(i => i).join(' ');

  return (
    <form className={formClasses} onSubmit={onSubmit} style={{ width }}>
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
          placeholder,
          value: searchValue,
          onChange,
        }}
      />
      {isError && <div className={`${className}__error-message`}>{errorMessage}</div>}
      {searchValue !== '' && (
        <button className={`${className}__clear-button`} type="button" onClick={clearSearch}>
          <i className="icon" style={{ width: 20, height: 20 }} />
        </button>
      )}
    </form>
  );
};

AutosuggestSearch.displayName = 'GAutosuggestSearch';

AutosuggestSearch.propTypes = {
  className: PropTypes.string,
  searchList: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeholder: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  getSuggestions: PropTypes.func,
  getSuggestionValue: PropTypes.func,
  renderSuggestion: PropTypes.func,
  onSelectCallback: PropTypes.func,
  onSubmitCallback: PropTypes.func,
  validateInput: PropTypes.func,
};

AutosuggestSearch.defaultProps = {
  className: 'g-autosuggest-search',
  placeholder: '',
  width: '100%',
  getSuggestions: defaultGetSuggestions,
  getSuggestionValue: defaultGetSuggestionValue,
  renderSuggestion: RenderSuggestion,
  onSelectCallback: () => {},
  onSubmitCallback: () => {},
  validateInput: () => {},
};

export default AutosuggestSearch;
