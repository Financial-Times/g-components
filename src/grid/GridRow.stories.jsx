import { GridContainer, GridRow, GridChild } from './';

export default {
  title: 'Core/Grid/GridRow',
  component: GridRow,

  parameters: {
    chromatic: {
      disable: true,
    },
  },
};

export const CompactAndGutterlessColumns = {
  render: () => (
    <GridContainer>
      <GridRow compact={true}>
        <GridChild colspan="6">
          <div className="demo-cell">no gutters (applied using o-grid-row--compact)</div>
        </GridChild>
        <GridChild colspan="6">
          <div className="demo-cell">no gutters (applied using o-grid-row--compact)</div>
        </GridChild>
      </GridRow>
      <GridRow compact={true}>
        <GridChild colspan="6 push6">
          <div className="demo-cell">First in source</div>
        </GridChild>
        <GridChild colspan="6 pull6">
          <div className="demo-cell">Last in source</div>
        </GridChild>
      </GridRow>
    </GridContainer>
  ),

  name: 'Compact and gutterless columns',

  parameters: {
    styles: [Promise.resolve(require('./_stories.scss'))],
  },
};
