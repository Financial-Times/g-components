import initStoryshots, { snapshotWithOptions } from '@storybook/addon-storyshots';

global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: () => ({}),
  unobserve: () => ({}),
  disconnect: () => ({}),
}));

initStoryshots({
  test: snapshotWithOptions({
    createNodeMock: (el) => {
      const ref = document.createElement(el.type);
      ref.className = el.props.className;
      ref.setAttribute('data-o-component', el.props['data-o-component']);

      return ref;
    },
  }),
});
