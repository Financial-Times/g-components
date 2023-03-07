import ImageSet from './';

export default {
  title: 'Core/Image Set',
};

export const Example = {
  render: () => (
    <>
      <div>Basic image set</div>
      <ImageSet
        alt="Demo image set"
        sources={{
          small: '61b2c912-0d49-11ea-bb52-34c8d9dc6d84',
          medium: '5f35b8b6-0d49-11ea-bb52-34c8d9dc6d84',
          large: '5c9b8478-0d49-11ea-bb52-34c8d9dc6d84',
        }}
      />
      <div>Image set using SVGs, skipping the image service</div>
      <ImageSet
        alt="Demo image set"
        sources={{
          small: 'https://ig.ft.com/autograph/graphics/us-2020-polltracker.svg?frame=webS',
          medium: 'https://ig.ft.com/autograph/graphics/us-2020-polltracker.svg?frame=webM',
          large: 'https://ig.ft.com/autograph/graphics/us-2020-polltracker.svg?frame=webM',
        }}
        skipImageService
      />
    </>
  ),

  name: 'Example',
};
