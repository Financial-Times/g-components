import { GridContainer, GridRow, GridChild } from './';
import './_stories.scss';

export default {
  title: 'Core/Grid/GridChild',
  component: GridChild,

  parameters: {
    chromatic: {
      disable: true,
    },
  },
};

export const DefaultUnresponsiveColumns = {
  render: () => (
    <GridContainer>
      <GridRow>
        <GridChild colspan="1">
          <div className="demo-cell">1</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="2">
          <div className="demo-cell">2</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="3">
          <div className="demo-cell">3</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="4">
          <div className="demo-cell">4</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="5">
          <div className="demo-cell">5</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="6">
          <div className="demo-cell">6</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="7">
          <div className="demo-cell">7</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="8">
          <div className="demo-cell">8</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="9">
          <div className="demo-cell">9</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="10">
          <div className="demo-cell">10</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="11">
          <div className="demo-cell">11</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="12">
          <div className="demo-cell">12</div>
        </GridChild>
      </GridRow>
    </GridContainer>
  ),

  name: 'Default unresponsive columns',
};

export const OverridabilityOfDefaultAndLayoutSpecificStylesByOtherLayouts = {
  render: () => (
    <GridContainer>
      <GridRow>
        <GridChild colspan="12 S0 M12 L11 XL10">
          <div className="demo-cell">12 S0 M12 L11 XL10</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="12 S1 M0 L12 XL11">
          <div className="demo-cell">12 S1 M0 L12 XL11</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="12 S2 M1 L0 XL12">
          <div className="demo-cell">12 S2 M1 L0 XL12</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="12 S3 M2 L1 XL0">
          <div className="demo-cell">12 S3 M2 L1 XL0</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="12 S4 M3 L2 XL1">
          <div className="demo-cell">12 S4 M3 L2 XL1</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="12 S5 M4 L3 XL2">
          <div className="demo-cell">12 S5 M4 L3 XL2</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="12 S6 M5 L4 XL3">
          <div className="demo-cell">12 S6 M5 L4 XL3</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="12 S7 M6 L5 XL4">
          <div className="demo-cell">12 S7 M6 L5 XL4</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="12 S8 M7 L6 XL5">
          <div className="demo-cell">12 S8 M7 L6 XL5</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="12 S9 M8 L7 XL6">
          <div className="demo-cell">12 S9 M8 L7 XL6</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="12 S10 M9 L8 XL7">
          <div className="demo-cell">12 S10 M9 L8 XL7</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="12 S11 M10 L9 XL8">
          <div className="demo-cell">12 S11 M10 L9 XL8</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="12 S12 M11 L10 XL9">
          <div className="demo-cell">12 S12 M11 L10 XL9</div>
        </GridChild>
      </GridRow>
    </GridContainer>
  ),

  name: 'Overridability of default and layout specific styles by other layouts',
};

export const OverridingOfDefaultWidth = {
  render: () => (
    <GridContainer>
      <GridRow>
        <GridChild colspan="0 M12 L11 XL10">
          <div className="demo-cell">0 M12 L11 XL10</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="1 M6 L12 XL11">
          <div className="demo-cell">1 M6 L12 XL11</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="3 M2 L1 XL12">
          <div className="demo-cell">3 M2 L1 XL12</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="12 S3 M4 L4 XL4">
          <div className="demo-cell">12 S3 M4 L4 XL4</div>
        </GridChild>
      </GridRow>
    </GridContainer>
  ),

  name: 'Overriding of default width',
};

export const FlexboxInteraction = {
  render: () => (
    <GridContainer>
      <GridRow>
        <GridChild className="demo-flex" colspan="12 S12 M12 L4 XL4">
          <div className="demo-cell">
            12 S12 M12 L4 XL4
            <br />
            and a lots and lots and lots and lots of extra text to make the columns different
            heights
          </div>
        </GridChild>
        <GridChild className="demo-flex" colspan="12 S12 M12 L8 XL8">
          <div className="demo-cell">12 S12 M12 L8 XL8</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild className="demo-flex" colspan="12 S12 M12 L4 XL4">
          <div className="demo-cell">12 S12 M12 L4 XL4</div>
        </GridChild>
        <GridChild className="demo-flex" colspan="12 S12 M12 L4 XL4">
          <div className="demo-cell">
            12 S12 M12 L4 XL4
            <br />
            and a lots and lots and lots and lots of extra text to make the columns different
            heights
          </div>
        </GridChild>
        <GridChild className="demo-flex" colspan="12 S12 M12 L4 XL4">
          <div className="demo-cell">12 S12 M12 L4 XL4</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild className="demo-flex" colspan="12 S12 M12 L8 XL8">
          <div className="demo-cell">12 S12 M12 L8 XL8</div>
        </GridChild>
        <GridChild className="demo-flex" colspan="12 S12 M12 L4 XL4">
          <div className="demo-cell">
            12 S12 M12 L4 XL4
            <br />
            and a lots and lots and lots and lots of extra text to make the columns different
            heights
          </div>
        </GridChild>
      </GridRow>
    </GridContainer>
  ),

  name: 'Flexbox interaction',
};

export const NestedGrids = {
  render: () => (
    <GridContainer>
      <GridRow>
        <GridChild colspan="8 S12 M11 L10 XL9">
          <div className="demo-cell">
            8 S12 M11 L10 XL9
            <GridRow>
              <GridChild colspan="8 S12 M11 L10 XL9">
                <div className="demo-cell">8 S12 M11 L10 XL9</div>
              </GridChild>
            </GridRow>
          </div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="12 S12 M12 L12 XL12">
          <div className="demo-cell">
            12 S12 M12 L12 XL12
            <GridRow>
              <GridChild colspan="6 S6 M6 L6 XL6">
                <div className="demo-cell">S6 M6 L6 XL6</div>
              </GridChild>
              <GridChild colspan="6 S6 M6 L6 XL6">
                <div className="demo-cell">
                  S6 M6 L6 XL6
                  <GridRow>
                    <GridChild colspan="6 S6 M6 L6 XL6">
                      <div className="demo-cell">S6 M6 L6 XL6</div>
                    </GridChild>
                    <GridChild colspan="6 S6 M6 L6 XL6">
                      <div className="demo-cell">S6 M6 L6 XL6</div>
                    </GridChild>
                  </GridRow>
                </div>
              </GridChild>
            </GridRow>
          </div>
        </GridChild>
      </GridRow>
    </GridContainer>
  ),

  name: 'Nested grids',
};

export const Keywords = {
  render: () => (
    <GridContainer>
      <GridRow>
        <GridChild colspan="one-half">
          <div className="demo-cell">one-half</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="one-third">
          <div className="demo-cell">one-third</div>
        </GridChild>
        <GridChild colspan="two-thirds">
          <div className="demo-cell">two-thirds</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="one-quarter">
          <div className="demo-cell">one-quarter</div>
        </GridChild>
        <GridChild colspan="three-quarters">
          <div className="demo-cell">three-quarters</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="one-half Mone-third Lone-quarter XLone-half">
          <div className="demo-cell">one-half Mone-third Lone-quarter XLone-half</div>
        </GridChild>
        <GridChild colspan="one-half Mtwo-thirds Lthree-quarters XLone-half">
          <div className="demo-cell">one-half Mtwo-thirds Lthree-quarters XLone-half</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="5 center M6 L9 Luncenter XL6 XLcenter">
          <div className="demo-cell">5 center M6 L9 Luncenter XL6 XLcenter</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="one-half Scenter Muncenter Lcenter XLuncenter">
          <div className="demo-cell">one-half Scenter Muncenter Lcenter XLuncenter</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="one-half offset3 push2">
          <div className="demo-cell">one-half offset3 push2</div>
        </GridChild>
      </GridRow>
      <GridRow>
        <GridChild colspan="one-half Spush5 Mpush0 Lpush4 L7 Loffset1 XLpush2 XL5 XLoffset1">
          <div className="demo-cell">
            one-half Spush5 Mpush0 Lpush4 L7 Loffset1 XLpush2 XL5 XLoffset1
          </div>
        </GridChild>
        <GridChild colspan="one-half Spull5 Mpull0 Lpull8 L4 XLpull2 XL5">
          <div className="demo-cell">one-half Spull5 Mpull0 Lpull8 L4 XLpull2 XL5</div>
        </GridChild>
      </GridRow>
    </GridContainer>
  ),

  name: 'Keywords',
};
