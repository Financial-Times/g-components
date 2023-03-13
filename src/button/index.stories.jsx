import Button, { ButtonGroup, ButtonPaginationGroup } from './';

export default {
  title: 'Core/Button',
  component: Button,

  parameters: {
    chromatic: {
      disable: true,
    },
  },
};

export const Examples = {
  render: () => (
    <>
      Secondary/default button:
      <div>
        <Button>Secondary/default</Button>
        <Button big>Secondary/default</Button>
        <Button icon="arrow-right">Secondary/default</Button>
        <Button big disabled>
          Secondary/default
        </Button>
      </div>
      Primary button:
      <div>
        <Button type="primary">Primary</Button>
        <Button type="primary" big>
          Primary
        </Button>
        <Button type="primary" icon="arrow-right">
          Primary
        </Button>
        <Button type="primary" big disabled>
          Primary
        </Button>
      </div>
      Secondary/default button (inverse):
      <div>
        <Button inverse>Primary</Button>
        <Button inverse big>
          Secondary/default
        </Button>
        <Button inverse icon="arrow-right">
          Secondary/default
        </Button>
        <Button inverse big disabled>
          Secondary/default
        </Button>
      </div>
      Primary button (inverse):
      <div>
        <Button inverse type="primary">
          Primary
        </Button>
        <Button inverse type="primary" big>
          Primary
        </Button>
        <Button inverse type="primary" icon="arrow-right">
          Primary
        </Button>
        <Button inverse type="primary" big disabled>
          Primary
        </Button>
      </div>
      Secondary/default button (mono):
      <div>
        <Button theme="mono">Primary</Button>
        <Button theme="mono" big>
          Secondary/default
        </Button>
        <Button theme="mono" icon="arrow-right">
          Secondary/default
        </Button>
        <Button theme="mono" big disabled>
          Secondary/default
        </Button>
      </div>
      Primary button (mono):
      <div>
        <Button theme="mono" type="primary">
          Primary
        </Button>
        <Button theme="mono" type="primary" big>
          Primary
        </Button>
        <Button theme="mono" type="primary" icon="arrow-right">
          Primary
        </Button>
        <Button theme="mono" type="primary" big disabled>
          Primary
        </Button>
      </div>
      B2C theme:
      <div>
        <Button type="primary" theme="b2c">
          B2C theme
        </Button>
        <Button type="primary" theme="b2c">
          B2C theme
        </Button>
        <Button type="primary" theme="b2c" icon="arrow-right">
          B2C theme
        </Button>
        <Button type="primary" theme="b2c" big>
          B2C theme
        </Button>
      </div>
      Grouped layout:
      <div>
        <ButtonGroup>
          <Button selected>John</Button>
          <Button>Paul</Button>
          <Button>George</Button>
          <Button>Ringo</Button>
        </ButtonGroup>
      </div>
      Icon buttons:
      <div>
        <div>
          <h2>Currently supported icons</h2>
          <Button icon="arrow-left">Go back</Button>
          <Button icon="arrow-right">Go forward</Button>
          <Button icon="upload">Upload</Button>
          <Button icon="download">Download</Button>
          <Button icon="warning">Danger</Button>
          <Button icon="arrow-down">Show</Button>
          <Button icon="arrow-up">Hide</Button>
          <Button icon="tick">Tick</Button>
          <Button icon="plus">Plus</Button>
          <Button icon="grid">Grid</Button>
          <Button icon="list">List</Button>
          <Button icon="edit">Edit</Button>
          <Button icon="search">Search</Button>
          <br />
          <br />
          <Button big icon="arrow-left">
            Go back
          </Button>
          <Button big icon="arrow-right">
            Go forward
          </Button>
          <Button big icon="upload">
            Upload
          </Button>
          <Button big icon="download">
            Download
          </Button>
          <Button big icon="warning">
            Danger
          </Button>
          <Button big icon="arrow-down">
            Show
          </Button>
          <Button big icon="arrow-up">
            Hide
          </Button>
          <Button big icon="tick">
            Tick
          </Button>
          <Button big icon="plus">
            Plus
          </Button>
          <Button big icon="grid">
            Grid
          </Button>
          <Button big icon="list">
            List
          </Button>
          <Button big icon="edit">
            Edit
          </Button>
          <Button big icon="search">
            Search
          </Button>
          <h2>Icon buttons without text</h2>
          <Button icon="arrow-left" label="Go back" />
          <Button icon="arrow-right" label="Go forward" />
          <Button icon="upload" label="Upload" />
          <Button icon="download" label="Download" />
          <Button icon="warning" label="Danger" />
          <Button icon="arrow-down" label="Show" />
          <Button icon="arrow-up" label="Hide" />
          <Button icon="tick" label="Tick" />
          <Button icon="plus" label="Plus" />
          <Button icon="grid" label="Grid" />
          <Button icon="list" label="List" />
          <Button icon="edit" label="Edit" />
          <Button icon="search" label="Search" />
          <br />
          <br />
          <Button big icon="arrow-left" label="Go back" />
          <Button big icon="arrow-right" label="Go forward" />
          <Button big icon="upload" label="Upload" />
          <Button big icon="download" label="Download" />
          <Button big icon="warning" label="Danger" />
          <Button big icon="arrow-down" label="Show" />
          <Button big icon="arrow-up" label="Hide" />
          <Button big icon="tick" label="Tick" />
          <Button big icon="plus" label="Plus" />
          <Button big icon="grid" label="Grid" />
          <Button big icon="list" label="List" />
          <Button big icon="edit" label="Edit" />
          <Button big icon="search" label="Search" />
        </div>
      </div>
      Pagination layout:
      <div>
        <ButtonPaginationGroup>
          <Button icon="arrow-left" disabled label="Fewer results" />
          <Button selected>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <div className="faux-inline-block">...</div>
          <Button>25</Button>
          <Button>26</Button>
          <Button>27</Button>
          <Button icon="arrow-right" label="More results" />
        </ButtonPaginationGroup>
        <ButtonPaginationGroup>
          <Button icon="arrow-left" disabled label="Fewer results" big />
          <Button big selected>
            1
          </Button>
          <Button big>2</Button>
          <Button big>3</Button>
          <div className="faux-inline-block">...</div>
          <Button big>25</Button>
          <Button big>26</Button>
          <Button big>27</Button>
          <Button big icon="arrow-right" label="More results" />
        </ButtonPaginationGroup>
      </div>
    </>
  ),

  name: 'Examples',
};
