import AutosuggestSearch from './';

const basicMpSearchList = [
  { value: 'jeremycorbyn', display: 'Jeremy Corbyn' },
  { value: 'borisjohnson', display: 'Boris Johnson' },
  { value: 'joswinson', display: 'Jo Swinson' },
];

const validateInputFunction = (input) => {
  if (input === '') {
    return { isError: true, errorMessage: 'ERROR!!!' };
  }
  return { isError: false, errorMessage: '' };
};

export default {
  title: 'Core/Autosuggest Search',
  component: AutosuggestSearch,
};

export const Examples = {
  render: () => (
    <>
      MP lookup example:
      <AutosuggestSearch
        placeholder="Search here..."
        width={300}
        searchList={basicMpSearchList}
        validateInput={validateInputFunction}
        onClearFunction={() => console.log('clear')}
      />
      MP lookup example (with right positioned icon):
      <AutosuggestSearch
        placeholder="Search here..."
        width={300}
        searchList={basicMpSearchList}
        validateInput={validateInputFunction}
        onClearFunction={() => console.log('clear')}
        searchIconPosition="right"
      />
      MP lookup example (with right positioned icon and no clear button):
      <AutosuggestSearch
        placeholder="Search here..."
        width={300}
        searchList={basicMpSearchList}
        validateInput={validateInputFunction}
        searchIconPosition="right"
        showClearButton={false}
      />
      MP lookup example (without icon):
      <AutosuggestSearch
        placeholder="Search here..."
        width={300}
        searchList={basicMpSearchList}
        validateInput={validateInputFunction}
        onClearFunction={() => console.log('clear')}
        showSearchIcon={false}
      />
      MP lookup example (with default):
      <AutosuggestSearch
        placeholder="Search here..."
        width={300}
        searchList={basicMpSearchList}
        validateInput={validateInputFunction}
        onClearFunction={() => console.log('clear')}
        defaultValue="Jeremy Corbyn"
      />
      MP lookup example (with error message override):
      <AutosuggestSearch
        placeholder="Search here..."
        width={300}
        searchList={basicMpSearchList}
        validateInput={validateInputFunction}
        onClearFunction={() => console.log('clear')}
        errorMessageOverride={'THIS IS AN ERROR OVERRIDE!'}
      />
      MP lookup example (with select callback that errors):
      <AutosuggestSearch
        placeholder="Search here..."
        width={300}
        searchList={basicMpSearchList}
        validateInput={validateInputFunction}
        onClearFunction={() => console.log('clear')}
        onSelectCallback={({ display }) => {
          return {
            isError: true,
            errorMessage: `${display} does not exist`,
          };
        }}
      />
      Country lookup example (with selected values, small):
      <AutosuggestSearch
        placeholder="Search here..."
        width={300}
        searchList={[
          {
            value: 'uk',
            display: 'UK',
          },
          {
            value: 'us',
            display: 'US',
          },
          {
            value: 'fr',
            display: 'France',
          },
        ]}
        validateInput={validateInputFunction}
        onClearFunction={() => console.log('clear')}
        usingSelectedValues={true}
        selectedValues={['US', 'UK'].map((v) => ({
          display: v,
          value: v,
        }))}
        onSelectedValueRemove={(value) => alert(`Removing ${value}`)}
        showSearchIcon={false}
        showDropdownIcon={true}
      />
      Country lookup example (with selected values, large):
      <AutosuggestSearch
        placeholder="Search here..."
        width={600}
        searchList={[
          {
            value: 'uk',
            display: 'UK',
          },
          {
            value: 'us',
            display: 'US',
          },
          {
            value: 'fr',
            display: 'France',
          },
        ]}
        validateInput={validateInputFunction}
        onClearFunction={() => console.log('clear')}
        usingSelectedValues={true}
        selectedValues={['US', 'UK', 'France', 'Germany', 'Spain'].map((v) => ({
          display: v,
          value: v,
        }))}
        onSelectedValueRemove={(value) => alert(`Removing ${value}`)}
        showSearchIcon={false}
        showDropdownIcon={true}
      />
      MP lookup example (with disabled option):
      <AutosuggestSearch
        placeholder="Search here..."
        width={300}
        searchList={[
          {
            value: 'jeremycorbyn',
            display: 'Jeremy Corbyn',
          },
          {
            value: 'borisjohnson',
            display: 'Boris Johnson',
          },
          {
            value: 'joswinson',
            display: 'Jo Swinson',
            disabled: true,
          },
        ]}
        validateInput={validateInputFunction}
        onClearFunction={() => console.log('clear')}
      />
      MP lookup example (with on empty input backspace function):
      <AutosuggestSearch
        placeholder="Search here..."
        width={300}
        searchList={basicMpSearchList}
        validateInput={validateInputFunction}
        onClearFunction={() => console.log('clear')}
        onEmptyInputBackspace={() => alert('BACKSPACE!')}
      />
      MP lookup example (input disabled):
      <AutosuggestSearch
        placeholder="Search here..."
        width={300}
        searchList={basicMpSearchList}
        validateInput={validateInputFunction}
        onClearFunction={() => console.log('clear')}
        disabled={false}
      />
      MP lookup example (with on click callback):
      <AutosuggestSearch
        placeholder="Search here..."
        width={300}
        searchList={basicMpSearchList}
        validateInput={validateInputFunction}
        onClearFunction={() => console.log('clear')}
        disabled={false}
        onClickCallback={() => alert('hello')}
      />
      MP lookup example (with no input blur on suggestion selection):
      <AutosuggestSearch
        placeholder="Search here..."
        width={300}
        searchList={basicMpSearchList}
        validateInput={validateInputFunction}
        onClearFunction={() => console.log('clear')}
        blurInputOnSuggestionSubmit={false}
      />
    </>
  ),

  name: 'Examples',
};
