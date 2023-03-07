import { GridContainer, GridRow, GridChild } from './';
import './_stories.scss';

export default {
  title: 'Core/Grid/GridContainer',
  component: GridContainer,

  parameters: {
    chromatic: {
      disable: true,
    },
  },
};

export const FullBleedGridContainer = {
  render: () => (
    <GridContainer bleed={true}>
      <GridRow>
        <GridChild colspan={6}>
          <div className="demo-cell">normal row</div>
        </GridChild>
        <GridChild colspan={6}>
          <div className="demo-cell">normal row</div>
        </GridChild>
      </GridRow>
      <GridRow compact={true}>
        <GridChild colspan={6}>
          <div className="demo-cell">compact row</div>
        </GridChild>
        <GridChild colspan={6}>
          <div className="demo-cell">compact row</div>
        </GridChild>
      </GridRow>
    </GridContainer>
  ),

  name: 'Full bleed grid container',
};

export const SnappyContainer = {
  render: () => (
    <GridContainer snappy={true}>
      <GridRow>
        <GridChild colspan={12}>
          <div className="demo-cell">
            <code>.o-grid-snappy</code>Applied to parent of full-width row
          </div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan={6}>
          <div className="demo-cell">
            <code>.o-grid-snappy</code>Applied to parent
          </div>
        </GridChild>
        <GridChild colspan={6}>
          <div className="demo-cell">
            <code>.o-grid-snappy</code>Applied to parent
          </div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan={6}>
          <div className="demo-cell">
            <code>.o-grid-snappy</code>Applied to parent of solo row
          </div>
        </GridChild>
      </GridRow>
    </GridContainer>
  ),

  name: 'Snappy container',
};
