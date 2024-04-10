/**
 * @file
 * Autosuggest search component
 */

import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import classNames from 'classnames';
import './styles.scss';
import Icon from '../icon';

// Default get suggestions method
const defaultGetSuggestions = (value, searchList) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  // Match from the beginning of the string
  return inputLength === 0
    ? []
    : searchList.filter(({ display }) => {
        const words = display.toLowerCase().split(' ');
        return words.some((word) => word.toLowerCase().slice(0, inputLength) === inputValue);
      });
};

// Default component/function to render suggestion
const RenderSuggestion = ({ display, disabled }) => (
  <div className={classNames('suggestion', disabled && 'suggestion--disabled')}>{display}</div>
);

// Default mapping from suggestion to value
const defaultGetSuggestionValue = ({ display }) => display;

const SelectedValue = ({ className, display, value, onSelectedValueRemove }) => (
  <div className={`${className}__selected-value`} key={`selected-value__${value}`}>
    <span id={`selected-value__${value}`}>{display}</span>
    <button
      className={`${className}__selected-value-close-button`}
      aria-labelledby={`selected-value__${value}`}
      type="button"
      onClick={() => onSelectedValueRemove(value)}
    >
      <Icon
        className="remove-from-selection"
        iconName="cross"
        iconColor="ffffff"
        width={20}
        height={20}
      />
    </button>
  </div>
);

const AutosuggestSearch = ({
  className,
  width,
  placeholder,
  defaultValue,
  disabled,
  showSearchIcon,
  searchIconPosition,
  showClearButton,
  blurInputOnSuggestionSubmit,
  // Data to generate suggestions from
  searchList,
  // Selected values
  selectedValues,
  usingSelectedValues,
  selectedValueComponent: customSelectedValueComponent,
  // Suggestions
  getSuggestions,
  getSuggestionValue,
  renderSuggestion,
  // Callbacks and event handlers
  onSelectCallback,
  onSubmitCallback,
  onClickCallback,
  onClearFunction,
  onSelectedValueRemove,
  onEmptyInputBackspace,
  // Validation and errors
  validateInput,
  errorMessageOverride,
}) => {
  const inputRef = useRef();
  /* This is the last suggestion the user hovered or highlighted using keys
    - this is reset when the user presses any key other than enter
    in the input of if they click on the input  */
  const [activeSuggestion, setActiveSuggestion] = useState(null);
  const [searchValue, setSearchValue] = useState(defaultValue || '');
  const [suggestions, setSuggestions] = useState([]);
  const [errorState, setErrorState] = useState({ isError: false, errorMessage: '' });

  // Function to focus on input wherever you click
  const focusOnInput = () => inputRef.current.input.focus();
  // ...and the function that does the opposite
  const unfocusOnInput = () => inputRef.current.input.blur();

  const selectedValueComponent = customSelectedValueComponent || SelectedValue;

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
    if (onSelectCallback) {
      const callbackReturn = onSelectCallback(suggestion);
      if (callbackReturn) setErrorState(callbackReturn);
    }
    // If using selected values tokens, reset the search value each time
    setSearchValue(usingSelectedValues ? '' : suggestionValue);
  };

  // Run callback on submit (ENTER)
  const onSubmit = (event) => {
    event.preventDefault();
    // Don't run this if the submit event is triggered from the dropdown
    if (!activeSuggestion) {
      const validateInputResult = validateInput(searchValue);
      if (validateInput && validateInputResult.isError) setErrorState(validateInputResult);
      if (onSubmitCallback && !validateInputResult.isError) {
        const callbackReturn = onSubmitCallback(searchValue);
        if (callbackReturn) setErrorState(callbackReturn);
        // If using selected values tokens, reset the search value
        if (usingSelectedValues) setSearchValue('');
      }
      if (blurInputOnSuggestionSubmit) unfocusOnInput();
    }
  };

  // Update search value state on input change
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setSearchValue(value);
    setErrorState({ isError: false, errorMessage: '' });
  };

  // Handle key down event on input
  const onKeyDownHandler = (event) => {
    const { key } = event;
    if (searchValue === '' && key === 'Backspace') {
      onEmptyInputBackspace();
    }
    // If the user presses any key other than enter, reset the active suggestion
    if (key !== 'Enter') {
      setActiveSuggestion(null);
    }
  };

  const onClickHandler = (e) => {
    // Don't run the callback if the user has clicked on the selected token remove/cross button
    if (e.target.className !== 'remove-from-selection g-icon') {
      const callbackReturn = onClickCallback();
      if (callbackReturn) setErrorState(callbackReturn);
    }
    // Reset the active suggestion
    setActiveSuggestion(null);
  };

  // Clear search value on button click
  const clearSearch = () => {
    setSearchValue('');
    setErrorState({ isError: false, errorMessage: '' });
    focusOnInput();
    onClearFunction();
  };

  // Wraps function so that error can be set
  const onSelectedValueRemoveWrapper = (value) => {
    const error = onSelectedValueRemove(value);
    if (error) setErrorState(error);
  };

  const { isError: isErrorState, errorMessage: errorMessageState } = errorState;
  const isError = errorMessageOverride || isErrorState;
  const errorMessage = errorMessageOverride || errorMessageState;

  // Generate form classes
  const classes = classNames(
    className,
    isError && `${className}--error`,
    showSearchIcon && searchIconPosition === 'right' && `${className}--with-search-icon-right`,
  );

  const SearchIcon = ({ className }) => (
    <div className={className} onClick={focusOnInput}>
      <Icon iconName="search" iconColor="#66605C" width={30} height={30} />
    </div>
  );

  return (
    <form onSubmit={onSubmit} style={{ width }} onClick={onClickHandler}>
      <div className={classes}>
        {showSearchIcon && searchIconPosition === 'left' && (
          <SearchIcon className={`${className}__search-icon`} />
        )}
        <div className={`${className}__selected-values`}>
          {selectedValues.length > 0 &&
            selectedValues.map(({ display, value }) =>
              selectedValueComponent({
                className,
                display,
                value,
                onSelectedValueRemove: onSelectedValueRemoveWrapper,
              }),
            )}
        </div>
        <Autosuggest
          ref={inputRef}
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          onSuggestionSelected={onSuggestionSelected}
          onSuggestionHighlighted={({ suggestion }) => {
            /* When the dropdown is open, update the active suggestion to the suggestion
              the user is currently hovering over or has highlighted with arrow keys */
            if (suggestion && suggestion.display) {
              setActiveSuggestion(suggestion.display);
            }
          }}
          focusInputOnSuggestionClick={usingSelectedValues}
          inputProps={{
            'aria-label': placeholder,
            placeholder,
            value: searchValue,
            onChange,
            onKeyDown: onKeyDownHandler,
            disabled,
          }}
        />
        {showClearButton && searchValue !== '' && (
          <button className={`${className}__clear-button`} type="button" onClick={clearSearch}>
            <Icon iconName="cross" iconColor="#33302e" width={20} height={20} />
          </button>
        )}
        {showSearchIcon &&
          searchIconPosition === 'right' &&
          !(showClearButton && searchValue !== '') && (
            <SearchIcon className={`${className}__search-icon-right`} />
          )}
      </div>
      {isError && <div className={`${className}__error-message`}>{errorMessage}</div>}
    </form>
  );
};

AutosuggestSearch.displayName = 'GAutosuggestSearch';

AutosuggestSearch.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  showSearchIcon: PropTypes.bool,
  searchIconPosition: PropTypes.oneOf(['left', 'right']),
  showClearButton: PropTypes.bool,
  blurInputOnSuggestionSubmit: PropTypes.bool,
  searchList: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedValues: PropTypes.array,
  usingSelectedValues: PropTypes.bool,
  selectedValueComponent: PropTypes.func,
  getSuggestions: PropTypes.func,
  getSuggestionValue: PropTypes.func,
  renderSuggestion: PropTypes.func,
  onSelectCallback: PropTypes.func,
  onSubmitCallback: PropTypes.func,
  onClickCallback: PropTypes.func,
  onClearFunction: PropTypes.func,
  onSelectedValueRemove: PropTypes.func,
  onEmptyInputBackspace: PropTypes.func,
  validateInput: PropTypes.func,
  errorMessageOverride: PropTypes.string,
};

AutosuggestSearch.defaultProps = {
  className: 'g-autosuggest-search',
  width: '100%',
  placeholder: '',
  disabled: false,
  showSearchIcon: true,
  searchIconPosition: 'left',
  showClearButton: true,
  blurInputOnSuggestionSubmit: true,
  selectedValues: [],
  usingSelectedValues: false,
  getSuggestions: defaultGetSuggestions,
  getSuggestionValue: defaultGetSuggestionValue,
  renderSuggestion: RenderSuggestion,
  onSelectCallback: () => {},
  onSubmitCallback: () => {},
  onClickCallback: () => {},
  onClearCallback: () => {},
  onSelectedValueRemove: () => {},
  onEmptyInputBackspace: () => {},
  validateInput: () => {},
};

export default AutosuggestSearch;
