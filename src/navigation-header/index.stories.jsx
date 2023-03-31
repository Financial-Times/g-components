import NavigationHeader from './';

export default {
  title: 'Core/NavigationHeader',
  component: NavigationHeader,
};

export const WithTitle = {
  render: () => (
    <NavigationHeader
      title="Example title"
      links={[
        {
          text: 'Link 1',
          url: '#1',
        },
        {
          text: 'Link 2',
          url: '#2',
        },
        {
          text: 'Link 3',
          url: '#3',
        },
      ]}
      useDropdown={false}
    />
  ),

  name: 'With title',
};

export const WithoutTitle = {
  render: () => (
    <NavigationHeader
      links={[
        {
          text: 'Link 1',
          url: '#1',
        },
        {
          text: 'Link 2',
          url: '#2',
        },
        {
          text: 'Link 3',
          url: '#3',
        },
      ]}
      useDropdown={false}
    />
  ),

  name: 'Without title',
};

export const WithCurrentPage = {
  render: () => (
    <NavigationHeader
      title="Example title"
      links={[
        {
          text: 'Link 1',
          url: '#1',
        },
        {
          text: 'Link 2',
          url: '#2',
        },
        {
          text: 'Link 3',
          url: '#3',
        },
      ]}
      currentPage="#1"
      useDropdown={false}
    />
  ),

  name: 'With current page',
};

export const WithLinksOpeningInNewTab = {
  render: () => (
    <NavigationHeader
      title="Example title"
      links={[
        {
          text: 'Link 1',
          url: '#1',
        },
        {
          text: 'Link 2',
          url: '#2',
        },
        {
          text: 'Link 3',
          url: '#3',
        },
      ]}
      openLinksInNewTab
      useDropdown={false}
    />
  ),

  name: 'With links opening in new tab',
};

export const UsingDropdown = {
  render: () => (
    <NavigationHeader
      title="Example title"
      links={[
        {
          text: 'Link 1',
          url: '#1',
        },
        {
          text: 'Link 2',
          url: '#2',
        },
        {
          text: 'Link 3',
          url: '#3',
        },
      ]}
      currentPage="#1"
      openLinksInNewTab
      useDropdown
    />
  ),

  name: 'Using dropdown',
};

export const UsingDropdownWithNoCurrentPage = {
  render: () => (
    <NavigationHeader
      title="Example title"
      links={[
        {
          text: 'Link 1',
          url: '#1',
        },
        {
          text: 'Link 2',
          url: '#2',
        },
        {
          text: 'Link 3',
          url: '#3',
        },
      ]}
      openLinksInNewTab
      useDropdown
    />
  ),

  name: 'Using dropdown with no current page',
};
