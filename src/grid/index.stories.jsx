import { Fragment } from 'react';
import { GridContainer, GridRow, GridChild } from './';
import './_stories.scss';

export default {
  title: 'Core/Grid/Grid',
};

export const DefaultGrid = {
  render: () => (
    /* Responsive column spans */
    /* Human friendly modifiers */
    /* Stacked, wrapping columns */
    <Fragment>
      <GridContainer>
        <GridRow>
          <GridChild colspan="1">
            <div className="demo-cell">1</div>
          </GridChild>
          <GridChild colspan="1">
            <div className="demo-cell">1</div>
          </GridChild>
          <GridChild colspan="1">
            <div className="demo-cell">1</div>
          </GridChild>
          <GridChild colspan="1">
            <div className="demo-cell">1</div>
          </GridChild>
          <GridChild colspan="1">
            <div className="demo-cell">1</div>
          </GridChild>
          <GridChild colspan="1">
            <div className="demo-cell">1</div>
          </GridChild>
          <GridChild colspan="1">
            <div className="demo-cell">1</div>
          </GridChild>
          <GridChild colspan="1">
            <div className="demo-cell">1</div>
          </GridChild>
          <GridChild colspan="1">
            <div className="demo-cell">1</div>
          </GridChild>
          <GridChild colspan="1">
            <div className="demo-cell">1</div>
          </GridChild>
          <GridChild colspan="1">
            <div className="demo-cell">1</div>
          </GridChild>
          <GridChild colspan="1">
            <div className="demo-cell">1</div>
          </GridChild>
        </GridRow>
        <GridRow>
          <GridChild colspan="2">
            <div className="demo-cell">2</div>
          </GridChild>
          <GridChild colspan="2">
            <div className="demo-cell">2</div>
          </GridChild>
          <GridChild colspan="2">
            <div className="demo-cell">2</div>
          </GridChild>
          <GridChild colspan="2">
            <div className="demo-cell">2</div>
          </GridChild>
          <GridChild colspan="2">
            <div className="demo-cell">2</div>
          </GridChild>
          <GridChild colspan="2">
            <div className="demo-cell">2</div>
          </GridChild>
        </GridRow>
        <GridRow>
          <GridChild colspan="3">
            <div className="demo-cell">3</div>
          </GridChild>
          <GridChild colspan="3">
            <div className="demo-cell">3</div>
          </GridChild>
          <GridChild colspan="3">
            <div className="demo-cell">3</div>
          </GridChild>
          <GridChild colspan="3">
            <div className="demo-cell">3</div>
          </GridChild>
        </GridRow>
        <GridRow>
          <GridChild colspan="4">
            <div className="demo-cell">4</div>
          </GridChild>
          <GridChild colspan="4">
            <div className="demo-cell">4</div>
          </GridChild>
          <GridChild colspan="4">
            <div className="demo-cell">4</div>
          </GridChild>
        </GridRow>
        <GridRow compact={true}>
          <GridChild colspan="6">
            <div className="demo-cell">6 (compact)</div>
          </GridChild>
          <GridChild colspan="6">
            <div className="demo-cell">6 (compact)</div>
          </GridChild>
        </GridRow>
        <GridRow>
          <GridChild colspan="12">
            <div className="demo-cell">12</div>
          </GridChild>
        </GridRow>
        {}
        <GridRow>
          <GridChild colspan="8 S12 M8">
            <div className="demo-cell">
              <span data-demo-highlight="default">8</span>
              <span data-demo-highlight="S">S12</span>
              <span data-demo-highlight="M L XL">M8</span>
              <GridRow>
                <GridChild colspan="6 S12 M6 XL3">
                  <div className="demo-cell">
                    <span data-demo-highlight="default">6</span>
                    <span data-demo-highlight="S">S12</span>
                    <span data-demo-highlight="M L">M6</span>
                    <span data-demo-highlight="XL">XL3</span>
                  </div>
                </GridChild>
                <GridChild colspan="6 S12 M6 XL3">
                  <div className="demo-cell">
                    <span data-demo-highlight="default">6</span>
                    <span data-demo-highlight="S">S12</span>
                    <span data-demo-highlight="M L">M6</span>
                    <span data-demo-highlight="XL">XL3</span>
                  </div>
                </GridChild>
                <GridChild colspan="6 S12 M6 XL3">
                  <div className="demo-cell">
                    <span data-demo-highlight="default">6</span>
                    <span data-demo-highlight="S">S12</span>
                    <span data-demo-highlight="M L">M6</span>
                    <span data-demo-highlight="XL">XL3</span>
                  </div>
                </GridChild>
                <GridChild colspan="6 S12 M6 XL3">
                  <div className="demo-cell">
                    <span data-demo-highlight="default">6</span>
                    <span data-demo-highlight="S">S12</span>
                    <span data-demo-highlight="M L">M6</span>
                    <span data-demo-highlight="XL">XL3</span>
                  </div>
                </GridChild>
              </GridRow>
            </div>
          </GridChild>
          <GridChild colspan="4 S12 M4">
            <div className="demo-cell">
              <span data-demo-highlight="default">4</span>
              <span data-demo-highlight="S">S12</span>
              <span data-demo-highlight="M L XL">M4</span>
              <GridRow>
                <GridChild colspan="12 L7 XL6">
                  <div className="demo-cell">
                    <span data-demo-highlight="default S M">12</span>
                    <span data-demo-highlight="L">L7</span>
                    <span data-demo-highlight="XL">XL6</span>
                  </div>
                </GridChild>
                <GridChild colspan="12 L5 XL6">
                  <div className="demo-cell">
                    <span data-demo-highlight="default S M">12</span>
                    <span data-demo-highlight="L">L5</span>
                    <span data-demo-highlight="XL">XL6</span>
                  </div>
                </GridChild>
              </GridRow>
            </div>
          </GridChild>
        </GridRow>
        {}
        <GridRow>
          <GridChild colspan="one-half">
            <div className="demo-cell">one-half</div>
          </GridChild>
          <GridChild colspan="one-quarter">
            <div className="demo-cell">one-quarter</div>
          </GridChild>
          <GridChild colspan="one-quarter">
            <div className="demo-cell">one-quarter</div>
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
          <GridChild colspan="one-third push8">
            <div className="demo-cell">one-third push8 (first in source)</div>
          </GridChild>
          <GridChild colspan="two-thirds pull4">
            <div className="demo-cell">two-thirds pull4 (last in source)</div>
          </GridChild>
        </GridRow>
        <GridRow>
          <GridChild colspan="one-third center">
            <div className="demo-cell">one-third center</div>
          </GridChild>
        </GridRow>
        {}
        <GridRow>
          <GridChild colspan="one-half">
            <div className="demo-cell">one-half</div>
          </GridChild>
          <GridChild colspan="one-quarter">
            <div className="demo-cell">one-quarter</div>
          </GridChild>
          <GridChild colspan="one-quarter">
            <div className="demo-cell">one-quarter</div>
          </GridChild>
          <GridChild colspan="one-quarter">
            <div className="demo-cell">one-quarter</div>
          </GridChild>
          <GridChild colspan="one-quarter">
            <div className="demo-cell">one-quarter</div>
          </GridChild>
        </GridRow>
        <GridRow>
          <GridChild colspan="one-third">
            <div className="demo-cell">one-third</div>
          </GridChild>
          <GridChild colspan="one-third">
            <div className="demo-cell">one-third</div>
          </GridChild>
          <GridChild colspan="two-thirds">
            <div className="demo-cell">two-thirds</div>
          </GridChild>
        </GridRow>
        <GridRow>
          <GridChild colspan="full-width">
            <div className="demo-cell">full-width</div>
          </GridChild>
          <GridChild colspan="full-width">
            <div className="demo-cell">full-width</div>
          </GridChild>
        </GridRow>
      </GridContainer>
      <p
        style={{
          textAlign: 'center',
        }}
      >
        With container bleed:
      </p>
      <GridContainer bleed={true}>
        <GridRow>
          <GridChild colspan="6">
            <div class="demo-cell">6</div>
          </GridChild>
          <GridChild colspan="6">
            <div class="demo-cell">6</div>
          </GridChild>
        </GridRow>
        <GridRow compact={true}>
          <GridChild colspan="6">
            <div class="demo-cell">6 (compact)</div>
          </GridChild>
          <GridChild colspan="6">
            <div class="demo-cell">6 (compact)</div>
          </GridChild>
        </GridRow>
      </GridContainer>
    </Fragment>
  ),

  name: 'Default grid',
};
