import initStoryshots, { snapshotWithOptions } from '@storybook/addon-storyshots';

const mockedDate = new Date(2019, 1, 0);
const originalDate = Date;

global.Date = jest.fn(() => mockedDate);
global.Date.setDate = originalDate.setDate;
global.Date.now = () => Math.round(new Date().getTime() / 1000);
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: () => ({}),
  unobserve: () => ({}),
  disconnect: () => ({}),
}));

initStoryshots({
  framework: 'react',
  test: snapshotWithOptions({
    createNodeMock: (el) => {
      const ref = document.createElement(el.type);
      ref.className = el.props.className;
      ref.setAttribute('data-o-component', el.props['data-o-component']);

      return ref;
    },
  }),
});
