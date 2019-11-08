/**
 * @file
 * Main Storybook.js stories
 */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { storiesOf, addDecorator } from '@storybook/react';
import { withKnobs, text, boolean, select, array } from '@storybook/addon-knobs';
import Observer from 'react-scroll-percentage';
import { TopAd, MiddleAd } from '../components/ads';
import Analytics from '../components/analytics';
import ArticleHead from '../components/article-head';
import Comments from '../components/comments';
import Footer from '../components/footer';
import Header from '../components/header';
// import HtmlHead from '../components/html-head';
import Layout, { GridContainer, GridRow, GridChild, Context } from '../components/layout';
import OnwardJourney from '../components/onwardjourney';
import Share from '../components/share';
import DataTable from '../components/data-table';
import DataFilter from '../components/data-filter';
import Sticky from '../components/sticky';
import AutosuggestSearch from '../components/autosuggest-search';
import ConstituencyLookup from '../components/elections/constituency-lookup';
import { getPartyInfo } from '../components/elections/utils';
import LastUpdated from '../components/last-updated';
import DateTime from '../components/datetime';
import ConstituencyResultsTable from '../components/elections/constituency-results-table';
import RaceResult from '../components/elections/race-result-indicator';
import '../shared/critical-path.scss';

const DemoCell = ({ children }) => (
  <div
    style={{
      backgroundColor: 'transparent',
      zoom: 1,
      minHeight: '2em',
      textAlign: 'center',
      paddingTop: '1rem',
      overflow: 'hidden',
      fontSize: '1.3rem',
      lineHeight: '1.2',
    }}
  >
    {children}
  </div>
);

const DemoCellHighlight = ({ children }) => (
  <span
    style={{
      display: 'inline-block',
      transition: '0.2s all 0.25s ease-in-out',
      opacity: 0.6,
      transform: 'scale(0.75)',
    }}
  >
    {children}
  </span>
);

DemoCellHighlight.propTypes = {
  children: PropTypes.node.isRequired,
};

DemoCell.propTypes = {
  children: PropTypes.node.isRequired,
};

storiesOf('RaceResult', module).add('default', () => (
  <div style={{ width: '100%' }}>
    <RaceResult incumbent="Labour" winner="Labour" />
    <RaceResult incumbent="Conservative" winner="Labour" />
    <RaceResult incumbent="Labour" winner="Conservative" />
    <RaceResult incumbent="Liberal Democrats" winner="Liberal Democrats" />
    <RaceResult incumbent="Conservative" winner="Liberal Democrats" />
    <RaceResult incumbent="Green" winner="Green" />
  </div>
));
