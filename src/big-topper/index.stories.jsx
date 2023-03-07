import BigTopper from './';

const props = {
  flags: {
    prod: false,
    errorReporting: true,
    analytics: false,
    googleAnalytics: false,
    ads: false,
    mainImage: true,
    summary: true,
    bylines: true,
    onwardjourney: true,
    shareButtons: false,
    header: true,
    footer: true,
    comments: true,
    data: false,
    dark: false,
  },
  url: 'https://www.ft.com/',
  summary: 'This is a standfirst',
  topic: {
    url: 'https://www.ft.com/visual-and-data-journalism',
    name: 'Visual & Data Journalism',
  },
  bylines: [
    { name: 'Person One', url: 'https://www.ft.com/' },
    { name: 'Person Two', url: 'https://www.ft.com/' },
  ],
  mainImage: {
    url: 'https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fft-ig-images-prod.s3-website-eu-west-1.amazonaws.com%2Fv1%2F8408723765-2qw52.png?source=ig',
  },
  headline: 'This is a headline',
  title: 'This is a title',
  id: '3a499586-b2e0-11e4-a058-00144feab7de',
  publishedDate: new Date('2018-07-25T17:43:37.00Z').toISOString(),
  buildTime: new Date('2018-07-25T17:43:37.00Z').toISOString(),
};

export default {
  title: 'Core/Big Topper',
  component: BigTopper,
};

export const Basic = {
  render: () => <BigTopper {...props} />,
  name: 'Basic',
};

export const WithBylineProps = {
  render: () => (
    <BigTopper
      {...props}
      byline={{
        prefix: 'Updated',
        dateFirst: true,
      }}
    />
  ),

  name: 'With byline props',
};

export const WithShareProps = {
  render: () => (
    <BigTopper
      {...props}
      flags={{
        ...props.flags,
        shareButtons: true,
      }}
      share={{
        size: 'small',
        separated: true,
      }}
    />
  ),

  name: 'With share props',
};
