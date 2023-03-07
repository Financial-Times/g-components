import Share from './';

export default {
  title: 'Core/Share',
  component: Share,
};

export const Examples = {
  render: () => (
    <>
      Default:
      <Share text="My favourite website" url="https://www.ft.com/visual-and-data-journalism" />
      Separated:
      <Share
        text="My favourite website"
        url="https://www.ft.com/visual-and-data-journalism"
        separated
      />
      Dark (white icons):
      <div className="dark">
        <Share
          text="My favourite website"
          url="https://www.ft.com/visual-and-data-journalism"
          dark
        />
      </div>
      Small:
      <Share
        text="My favourite website"
        url="https://www.ft.com/visual-and-data-journalism"
        size="small"
      />
      Small and separated:
      <Share
        text="My favourite website"
        url="https://www.ft.com/visual-and-data-journalism"
        separated
        size="small"
      />
    </>
  ),

  name: 'Examples',
};
