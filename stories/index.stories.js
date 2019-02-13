/**
 * @file
 * Main Storybook.js stories
 */

import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf, addDecorator } from '@storybook/react';
import {
  withKnobs, text, boolean, select, array,
} from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import Observer from 'react-scroll-percentage';
import { TopAd, MiddleAd } from '../components/ads';
import Analytics from '../components/analytics';
import ArticleHead from '../components/article-head';
import Comments from '../components/comments';
import Footer from '../components/footer';
import Header from '../components/header';
// import HtmlHead from '../components/html-head';
import Layout, { GridContainer, GridRow, GridChild } from '../components/layout';
import OnwardJourney from '../components/onwardjourney';
import Share from '../components/share';
import DataTable from '../components/data-table';
import DataFilter from '../components/data-filter';
import Sticky from '../components/sticky';
import '../shared/critical-path.scss';

const defaultFlags = {
  prod: false,
  errorReporting: true,
  analytics: false,
  googleAnalytics: false,
  ads: false,
  onwardjourney: true,
  shareButtons: true,
  header: true,
  footer: true,
  comments: true,
  data: false,
  dark: false,
};

const DEFAULT = {
  flags: defaultFlags,
  url: 'https://local.ft.com/',
  summary: 'This is a standfirst',
  topic: {
    url: 'https://local.ft.com/',
    name: 'Testing',
  },
  bylines: [{ name: 'Ændrew Rininsland', url: 'https://ft.com/ændrew-rininsland' }],
  image: {
    uuid: 'f07ccec8-7ded-11e8-af48-190d103e32a4',
  },
  headline: text('Headline', 'New Starter Kit site'),
  title: 'New Starter Kit site',
  id: '3a499586-b2e0-11e4-a058-00144feab7de',
  pubdate: new Date('2018-07-25T17:43:37.00Z').toISOString(),
  buildTime: new Date('2018-07-25T17:43:37.00Z').toISOString(),
  ads: {
    gptSite: 'test.5887.origami', // Ad unit hierarchy makes ads more granular.
    gptZone: false, // Start with ft.com and /companies /markets /world as appropriate to your story
    dfpTargeting: false, // granular targeting is optional and will be specified by the ads team
  },
};

const lorem = `Lorem ipsum dolor sit amet, esse mediocritatem et eos, ex cum nostrum singulis inciderint.
Error vitae molestie ea sit, cu usu facilis deleniti, nec ea novum solet. No pro labores
omnesque, duo ut tractatos accusamus. Usu vitae mollis ut, cetero detraxit cu qui. Et elitr
dolore praesent est.

Ex his oratio perpetua expetendis, commune suscipiantur nec at, vel lorem atqui option ne.
Habeo congue vel te. Ex quo summo principes. Eu dicta solet molestiae eam, eu ius primis
consectetuer. Ei dicant numquam omittam qui. Vim dicunt nostrud volutpat ex, cu mel
gubergren constituto.

Ad qui wisi minimum cotidieque, ea vis esse discere intellegam. Et omnium inimicus vim. Ea
sale dicam homero ius. Impedit eligendi delicata in mel, vis soluta temporibus an, ex vis
vide laoreet. No per hinc ferri mediocritatem, eam modus ubique atomorum ne. Iudico offendit
ut his.

Mel fastidii eleifend no, ut oratio intellegam cum. Iudico dignissim sadipscing ei mel. At
laudem legendos erroribus eos. Aliquid dolorem dissentiunt eos cu. Eros suscipiantur mea ei,
tantas vituperata vis ad. Pri et dicunt regione, ut quando volutpat abhorreant eos.

Ad cum saperet docendi, ex habeo nemore euismod vix, usu semper instructior cu. Natum
salutatus consetetur sit cu. Ad erroribus complectitur vis. Ne possim similique vis. Ne enim
soluta vix, quis natum ne qui, ei vidit latine partiendo mei. Mel ea duis essent vivendo.`;

addDecorator(withKnobs);
addDecorator(withInfo);

// Layout
storiesOf('Layout', module)
  .add(
    'default',
    () => (
      <Layout
        flags={DEFAULT.flags}
        headline={text('Headline', DEFAULT.headline)}
        title={text('Title', DEFAULT.title)}
        topic={DEFAULT.topic}
        url={text('Url', DEFAULT.url)}
        publishedDate={DEFAULT.pubdate}
        buildTime={DEFAULT.buildTime}
        ads={DEFAULT.ads}
        id={DEFAULT.id}
      >
        {[
          ...text('Content', lorem)
            .split(/\n\n/)
            .map((par, idx) => <p key={idx /* eslint-disable-line */}>{par}</p>),
          <MiddleAd />,
        ]}
      </Layout>
    ),
    {
      info: `
    <Layout /> is the primary component you'll work with in Starter Kit.
    All the other components in this story are already included with it, and it's
    the default export of g-components. To use it, you supply it children, which
    get wrapped as the main article body. Make sure to wrap paragraphs in <p> tags
    to maintain typographic styles.
  `,
    },
  )
  .add('With custom children', () => (
    <Layout
      flags={DEFAULT.flags}
      headline={text('Headline', DEFAULT.headline)}
      title={text('Title', DEFAULT.title)}
      topic={DEFAULT.topic}
      url={text('Url', DEFAULT.url)}
      publishedDate={DEFAULT.pubdate}
      buildTime={DEFAULT.buildTime}
    >
      <GridContainer>
        <GridRow>
          <GridChild>
            <div>
              {text('Content', lorem)
                .split(/\n\n/)
                .map((par, idx) => <p key={idx /* eslint-disable-line */}>{par}</p>)}
            </div>
          </GridChild>
        </GridRow>
      </GridContainer>
    </Layout>
  ));

storiesOf('Layout, dark theme', module)
  .addDecorator((story) => {
    document.documentElement.classList.add('dark');
    return story();
  })
  .add(
    'default',
    () => (
      <Layout
        flags={{ ...DEFAULT.flags, dark: true }}
        headline={text('Headline', DEFAULT.headline)}
        title={text('Title', DEFAULT.title)}
        topic={DEFAULT.topic}
        url={text('Url', DEFAULT.url)}
        publishedDate={DEFAULT.pubdate}
        buildTime={DEFAULT.buildTime}
        ads={DEFAULT.ads}
        id={DEFAULT.id}
      >
        {[
          ...text('Content', lorem)
            .split(/\n\n/)
              .map((par, idx) => <p key={idx /* eslint-disable-line */}>{par}</p>),
          <MiddleAd />,
        ]}
      </Layout>
    ),
    {
      info: `
    <Layout /> is the primary component you'll work with in Starter Kit.
    All the other components in this story are already included with it, and it's
    the default export of g-components. To use it, you supply it children, which
    get wrapped as the main article body. Make sure to wrap paragraphs in <p> tags
    to maintain typographic styles.
  `,
    },
  )
  .add('With custom children', () => (
    <Layout
      flags={{ ...DEFAULT.flags, dark: true }}
      headline={text('Headline', DEFAULT.headline)}
      title={text('Title', DEFAULT.title)}
      topic={DEFAULT.topic}
      url={text('Url', DEFAULT.url)}
      publishedDate={DEFAULT.pubdate}
      buildTime={DEFAULT.buildTime}
    >
      <GridContainer>
        <GridRow>
          <GridChild>
            <div>
              {text('Content', lorem)
                .split(/\n\n/)
                .map((par, idx) => <p key={idx /* eslint-disable-line */}>{par}</p>)}
            </div>
          </GridChild>
        </GridRow>
      </GridContainer>
    </Layout>
  ));

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

// storiesOf('Grid components', module).add('default grid', () => [
//   /* Constant column spans */
//   <GridContainer key="1">
//     <GridRow>
//       <GridChild span={1}>
//         <DemoCell>
// 1
//         </DemoCell>
//       </GridChild>
//       <GridChild span={1}>
//         <DemoCell>
// 1
//         </DemoCell>
//       </GridChild>
//       <GridChild span={1}>
//         <DemoCell>
// 1
//         </DemoCell>
//       </GridChild>
//       <GridChild span={1}>
//         <DemoCell>
// 1
//         </DemoCell>
//       </GridChild>
//       <GridChild span={1}>
//         <DemoCell>
// 1
//         </DemoCell>
//       </GridChild>
//       <GridChild span={1}>
//         <DemoCell>
// 1
//         </DemoCell>
//       </GridChild>
//       <GridChild span={1}>
//         <DemoCell>
// 1
//         </DemoCell>
//       </GridChild>
//       <GridChild span={1}>
//         <DemoCell>
// 1
//         </DemoCell>
//       </GridChild>
//       <GridChild span={1}>
//         <DemoCell>
// 1
//         </DemoCell>
//       </GridChild>
//       <GridChild span={1}>
//         <DemoCell>
// 1
//         </DemoCell>
//       </GridChild>
//       <GridChild span={1}>
//         <DemoCell>
// 1
//         </DemoCell>
//       </GridChild>
//       <GridChild span={1}>
//         <DemoCell>
// 1
//         </DemoCell>
//       </GridChild>
//     </GridRow>
//     <GridRow>
//       <GridChild span={2}>
//         <DemoCell>
// 2
//         </DemoCell>
//       </GridChild>
//       <GridChild span={2}>
//         <DemoCell>
// 2
//         </DemoCell>
//       </GridChild>
//       <GridChild span={2}>
//         <DemoCell>
// 2
//         </DemoCell>
//       </GridChild>
//       <GridChild span={2}>
//         <DemoCell>
// 2
//         </DemoCell>
//       </GridChild>
//       <GridChild span={2}>
//         <DemoCell>
// 2
//         </DemoCell>
//       </GridChild>
//       <GridChild span={2}>
//         <DemoCell>
// 2
//         </DemoCell>
//       </GridChild>
//     </GridRow>
//     <GridRow>
//       <GridChild span={3}>
//         <DemoCell>
// 3
//         </DemoCell>
//       </GridChild>
//       <GridChild span={3}>
//         <DemoCell>
// 3
//         </DemoCell>
//       </GridChild>
//       <GridChild span={3}>
//         <DemoCell>
// 3
//         </DemoCell>
//       </GridChild>
//       <GridChild span={3}>
//         <DemoCell>
// 3
//         </DemoCell>
//       </GridChild>
//     </GridRow>
//     <GridRow>
//       <GridChild span={4}>
//         <DemoCell>
// 4
//         </DemoCell>
//       </GridChild>
//       <GridChild span={4}>
//         <DemoCell>
// 4
//         </DemoCell>
//       </GridChild>
//       <GridChild span={4}>
//         <DemoCell>
// 4
//         </DemoCell>
//       </GridChild>
//     </GridRow>
//     <GridRow compact>
//       <GridChild span={6}>
//         <DemoCell>
// 6 (compact)
//         </DemoCell>
//       </GridChild>
//       <GridChild span={6}>
//         <DemoCell>
// 6 (compact)
//         </DemoCell>
//       </GridChild>
//     </GridRow>
//     <GridRow>
//       <GridChild span={12}>
//         <DemoCell>
// 12
//         </DemoCell>
//       </GridChild>
//     </GridRow>
//
//     {/* Responsive column spans */}
//     <GridRow>
//       <GridChild span="8 S12 M8">
//         <DemoCell>
//           <span data-demo-highlight="default">
// 8
//           </span>
//           <span data-demo-highlight="S">
// S12
//           </span>
//           <span data-demo-highlight="M L XL">
// M8
//           </span>
//
//           <GridRow>
//             <GridChild span="6 S12 M6 XL3">
//               <DemoCell>
//                 <span data-demo-highlight="default">
// 6
//                 </span>
//                 <span data-demo-highlight="S">
// S12
//                 </span>
//                 <span data-demo-highlight="M L">
// M6
//                 </span>
//                 <span data-demo-highlight="XL">
// XL3
//                 </span>
//               </DemoCell>
//             </GridChild>
//             <GridChild span="6 S12 M6 XL3">
//               <DemoCell>
//                 <span data-demo-highlight="default">
// 6
//                 </span>
//                 <span data-demo-highlight="S">
// S12
//                 </span>
//                 <span data-demo-highlight="M L">
// M6
//                 </span>
//                 <span data-demo-highlight="XL">
// XL3
//                 </span>
//               </DemoCell>
//             </GridChild>
//             <GridChild span="6 S12 M6 XL3">
//               <DemoCell>
//                 <span data-demo-highlight="default">
// 6
//                 </span>
//                 <span data-demo-highlight="S">
// S12
//                 </span>
//                 <span data-demo-highlight="M L">
// M6
//                 </span>
//                 <span data-demo-highlight="XL">
// XL3
//                 </span>
//               </DemoCell>
//             </GridChild>
//             <GridChild span="6 S12 M6 XL3">
//               <DemoCell>
//                 <span data-demo-highlight="default">
// 6
//                 </span>
//                 <span data-demo-highlight="S">
// S12
//                 </span>
//                 <span data-demo-highlight="M L">
// M6
//                 </span>
//                 <span data-demo-highlight="XL">
// XL3
//                 </span>
//               </DemoCell>
//             </GridChild>
//           </GridRow>
//         </DemoCell>
//       </GridChild>
//       <GridChild span="4 S12 M4">
//         <DemoCell>
//           <span data-demo-highlight="default">
// 4
//           </span>
//           <span data-demo-highlight="S">
// S12
//           </span>
//           <span data-demo-highlight="M L XL">
// M4
//           </span>
//
//           <GridRow>
//             <GridChild span="12 L7 XL6">
//               <DemoCell>
//                 <span data-demo-highlight="default S M">
// 12
//                 </span>
//                 <span data-demo-highlight="L">
// L7
//                 </span>
//                 <span data-demo-highlight="XL">
// XL6
//                 </span>
//               </DemoCell>
//             </GridChild>
//             <GridChild span="12 L5 XL6">
//               <DemoCell>
//                 {/* <span data-demo-highlight="default S M"> */}
//                 <DemoCellHighlight>
// 12
//                 </DemoCellHighlight>
//                 {/* <span data-demo-highlight="L"> */}
//                 <DemoCellHighlight>
// L5
//                 </DemoCellHighlight>
//                 {/* <span data-demo-highlight="XL"> */}
//                 <DemoCellHighlight>
// XL6
//                 </DemoCellHighlight>
//               </DemoCell>
//             </GridChild>
//           </GridRow>
//         </DemoCell>
//       </GridChild>
//     </GridRow>
//
//     {/* Human friendly modifiers */}
//     <GridRow>
//       <GridChild span="one-half">
//         <DemoCell>
// one-half
//         </DemoCell>
//       </GridChild>
//       <GridChild span="one-quarter">
//         <DemoCell>
// one-quarter
//         </DemoCell>
//       </GridChild>
//       <GridChild span="one-quarter">
//         <DemoCell>
// one-quarter
//         </DemoCell>
//       </GridChild>
//     </GridRow>
//     <GridRow>
//       <GridChild span="one-third">
//         <DemoCell>
// one-third
//         </DemoCell>
//       </GridChild>
//       <GridChild span="two-thirds">
//         <DemoCell>
// two-thirds
//         </DemoCell>
//       </GridChild>
//     </GridRow>
//     <GridRow>
//       <GridChild span="one-third push8">
//         <DemoCell>
// one-third push8 (first in source)
//         </DemoCell>
//       </GridChild>
//       <GridChild span="two-thirds pull4">
//         <DemoCell>
// two-thirds pull4 (last in source)
//         </DemoCell>
//       </GridChild>
//     </GridRow>
//     <GridRow>
//       <GridChild span="one-third center">
//         <DemoCell>
// one-third center
//         </DemoCell>
//       </GridChild>
//     </GridRow>
//
//     {/* Stacked, wrapping columns */}
//     <GridRow>
//       <GridChild span="one-half">
//         <DemoCell>
// one-half
//         </DemoCell>
//       </GridChild>
//       <GridChild span="one-quarter">
//         <DemoCell>
// one-quarter
//         </DemoCell>
//       </GridChild>
//       <GridChild span="one-quarter">
//         <DemoCell>
// one-quarter
//         </DemoCell>
//       </GridChild>
//       <GridChild span="one-quarter">
//         <DemoCell>
// one-quarter
//         </DemoCell>
//       </GridChild>
//       <GridChild span="one-quarter">
//         <DemoCell>
// one-quarter
//         </DemoCell>
//       </GridChild>
//     </GridRow>
//     <GridRow>
//       <GridChild span="one-third">
//         <DemoCell>
// one-third
//         </DemoCell>
//       </GridChild>
//       <GridChild span="one-third">
//         <DemoCell>
// one-third
//         </DemoCell>
//       </GridChild>
//       <GridChild span="two-thirds">
//         <DemoCell>
// two-thirds
//         </DemoCell>
//       </GridChild>
//     </GridRow>
//     <GridRow>
//       <GridChild span="full-width">
//         <DemoCell>
// full-width
//         </DemoCell>
//       </GridChild>
//       <GridChild span="full-width">
//         <DemoCell>
// full-width
//         </DemoCell>
//       </GridChild>
//     </GridRow>
//   </GridContainer>,
//
//   <p key="2" style={{ textAlign: 'center' }}>
//     With container bleed:
//   </p>,
//
//   <GridContainer key="3" bleed>
//     <GridRow>
//       <GridChild span={6}>
//         <DemoCell>
// 6
//         </DemoCell>
//       </GridChild>
//       <GridChild span={6}>
//         <DemoCell>
// 6
//         </DemoCell>
//       </GridChild>
//     </GridRow>
//     <GridRow compact>
//       <GridChild span={6}>
//         <DemoCell>
// 6 (compact)
//         </DemoCell>
//       </GridChild>
//       <GridChild span={6}>
//         <DemoCell>
// 6 (compact)
//         </DemoCell>
//       </GridChild>
//     </GridRow>
//   </GridContainer>,
// ]);

// Ads
storiesOf('Ads', module).add('Top ad', () => <TopAd />);
storiesOf('Ads', module).add('Middle ad', () => <MiddleAd />);

// Analytics
storiesOf('Analytics', module).add(
  'default',
  () => [
    <h4 key="1">
You won&apos;t see anything here as &quot;Analytics&quot; has no visual output
    </h4>,
    <Analytics key="2" id={DEFAULT.uuid} flags={DEFAULT.flags} />,
  ],
  {
    info: `
    The analytics module won't display because it's mainly a behind-the-scenes thing.
    You need to just simply import it whereever.
  `,
  },
);

storiesOf('ArticleHead', module).add('default', () => (
  <ArticleHead
    flags={DEFAULT.flags}
    url={DEFAULT.url}
    headline="Testing <ArticleHead> component"
    summary={DEFAULT.summary}
    mainImage={DEFAULT.image}
    topic={DEFAULT.topic}
    bylines={DEFAULT.bylines}
    publishedDate={DEFAULT.pubdate}
    buildTime={DEFAULT.buildTime}
  />
));

storiesOf('Comments', module).add('default', () => <Comments />);

storiesOf('Footer', module).add('default', () => <Footer />);

storiesOf('Header', module).add('default', () => <Header />);

// storiesOf('HtmlHead', module).add('default', () => [
//   <h4 key="1">
// You won&apos;t see anything here as &quot;HtmlHead&quot; has no visual output
//   </h4>,
//   <HtmlHead
//     key="2"
//     flags={defaultFlags}
//     title="Testing <HtmlHead>"
//     topic={DEFAULT.topic}
//     headline={DEFAULT.headline}
//     id={DEFAULT.uuid}
//     url={DEFAULT.url}
//     buildTime={DEFAULT.buildTime}
//   />,
// ]);

storiesOf('OnwardJourney', module).add('default', () => (
  <OnwardJourney
    relatedContent={[{ rows: 2, list: 'thing/adae44ca-4ea7-3cf8-8332-bf85ec89a558' }]}
  />
));

storiesOf('Share', module).add('default', () => <Share url={DEFAULT.url} />);

storiesOf('DataTable', module).add('default', () => (
  <DataTable
    captionTop={text('captionTop', 'FT editors')}
    captionBottom={text('captionBottom', null)}
    headers={[
      {
        contents: 'Year',
        columnType: 'number',
        columnName: 'appointed',
      },
      {
        contents: 'Editor',
        columnName: 'name',
      },
    ]}
    rows={[
      { appointed: '1945', name: 'Hargreaves Parkinson' },
      { appointed: '1949', name: 'Sir Gordon Newton' },
      { appointed: '1973', name: 'Fredy Fisher' },
      { appointed: '1981', name: 'Sir Geoffrey Owen' },
      { appointed: '1991', name: 'Richard Lambert' },
      { appointed: '2001', name: 'Andrew Gowers' },
      { appointed: '2006', name: 'Lionel Barber' },
    ]}
    responsive={select('responsive', ['none', 'scroll', 'flat'], 'flat')}
    isHeaderHidden={boolean('isHeaderHidden', false)}
    isSortable={boolean('isSortable', true)}
    isStriped={boolean('isStriped', false)}
    isLinedHorizontal={boolean('isLinedHorizontal', false)}
    isLinedVertical={boolean('isLinedVertical', false)}
    isCompact={boolean('isCompact', false)}
  />
));

storiesOf('DataFilter', module).add('default', () => (
  <DataFilter
    initial={text('initial', 'Paul')}
    selectFrom={text('selectFrom', 'name')}
    searchOver={array('searchOver', [])}
    searchPlaceholder={text('searchPlaceholder', null)}
    data={[{ name: 'John' }, { name: 'Paul' }, { name: 'George' }, { name: 'Ringo' }]}
    isAllSelectable={boolean('isAllSelectable', false)}
    isRadioSelectable={boolean('isRadioSelectable', false)}
  />
));

storiesOf('Sticky', module)
  .add(
    'default',
    () => (
      <div
        style={{
          backgroundColor: 'rgba(155, 155, 155, 0.7)',
          marginBottom: '100vh',
          marginTop: '20vh',
        }}
      >
        <Sticky
          graphic={({ percentage, inView }) => (
            <h1 style={{ backgroundColor: '#969696', padding: '1em' }}>
              Percentage:
              {' '}
              {(percentage * 100).toFixed(1)}
              %
              {' '}
              <br />
              {' '}
In viewport:
              {' '}
              {inView ? 'yes' : 'no'}
            </h1>
          )}
          article={({ percentage, inView }) => (
            <div style={{ fontSize: '500%' }}>
              <h1>
                Lorem ipsum; pct:
                {percentage}
                ; inview:
                {inView}
              </h1>
              <h1>
                Lorem ipsum; pct:
                {percentage}
                ; inview:
                {inView}
              </h1>
              <h1>
                Lorem ipsum; pct:
                {percentage}
                ; inview:
                {inView}
              </h1>
              <h1>
                Lorem ipsum; pct:
                {percentage}
                ; inview:
                {inView}
              </h1>
              <h1>
                Lorem ipsum; pct:
                {percentage}
                ; inview:
                {inView}
              </h1>
              <h1>
                Lorem ipsum; pct:
                {percentage}
                ; inview:
                {inView}
              </h1>
              <h1>
                Lorem ipsum; pct:
                {percentage}
                ; inview:
                {inView}
              </h1>
              <h1>
                Lorem ipsum; pct:
                {percentage}
                ; inview:
                {inView}
              </h1>
              <h1>
                Lorem ipsum; pct:
                {percentage}
                ; inview:
                {inView}
              </h1>
              <h1>
                Lorem ipsum; pct:
                {percentage}
                ; inview:
                {inView}
              </h1>
              <h1>
                Lorem ipsum; pct:
                {percentage}
                ; inview:
                {inView}
              </h1>
              <h1>
                Lorem ipsum; pct:
                {percentage}
                ; inview:
                {inView}
              </h1>
              <h1>
                Lorem ipsum; pct:
                {percentage}
                ; inview:
                {inView}
              </h1>
              <h1>
                Lorem ipsum; pct:
                {percentage}
                ; inview:
                {inView}
              </h1>
              <h1>
                Lorem ipsum; pct:
                {percentage}
                ; inview:
                {inView}
              </h1>
              <h1>
                Lorem ipsum; pct:
                {percentage}
                ; inview:
                {inView}
              </h1>
              <h1>
                Lorem ipsum; pct:
                {percentage}
                ; inview:
                {inView}
              </h1>
              <h1>
                Lorem ipsum; pct:
                {percentage}
                ; inview:
                {inView}
              </h1>
              <h1>
                Lorem ipsum; pct:
                {percentage}
                ; inview:
                {inView}
              </h1>
              <h1>
                Lorem ipsum; pct:
                {percentage}
                ; inview:
                {inView}
              </h1>
            </div>
          )}
        />
      </div>
    ),
    {
      info: `
  <Sticky> can be used to do sticky-positioned scrolling interactive graphics,
    as popularised by The Pudding. The key thing to remember is that <Sticky>
    takes two props, each of which is an element-returning function:
    - article({percentage, inView, updateGraphic})
      -- \`Percentage\` is total % of container element scrolled
      -- \`inView\` is whether the container is in the viewport
      -- \`updateGraphic\` is a function that can be used to pass a label to the
        container element's state (and then on to the graphic itself).
    - graphic({percentage, inView, current})
      -- \`Percentage\` is total % of container element scrolled
      -- \`inView\` is whether the container is in the viewport
      -- \`current\` is the label currently set by the article in terms of what's visible

      See the "complex case" story for how to use updateGraphic
`,
    },
  )
  .add(
    'Complex case',
    () => (
      <div
        style={{
          backgroundColor: 'rgba(155, 155, 155, 0.7)',
          marginBottom: '100vh',
          marginTop: '20vh',
        }}
      >
        <Sticky
          graphic={({ percentage, inView, current }) => (
            <h1 style={{ backgroundColor: '#969696', padding: '1em' }}>
              Percentage:
              {' '}
              {(percentage * 100).toFixed(1)}
              %
              {' '}
              <br />
              {' '}
Frame is in viewport:
              {' '}
              {inView ? 'yes' : 'no'}
              <br />
              {' '}
Currently viewing line:
              {/* prettier-ignore */}
              {' '}
              {current}
            </h1>
          )}
          article={({ updateGraphic }) => (
            <div style={{ fontSize: '500%' }}>
              {['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'].map(
                (label, idx) => (
                  <Observer>
                    {({ inView }) => {
                      if (inView) updateGraphic(idx);
                      return (
                        <h1>
                          {label}
                        </h1>
                      );
                    }}
                  </Observer>
                ),
              )}
            </div>
          )}
        />
      </div>
    ),
    {
      info: `
    <Sticky> can be used to do sticky-positioned scrolling interactive graphics,
      as popularised by The Pudding. The key thing to remember is that <Sticky>
      takes two props, each of which is an element-returning function:
      - article({percentage, inView, updateGraphic})
        -- \`Percentage\` is total % of container element scrolled
        -- \`inView\` is whether the container is in the viewport
        -- \`updateGraphic\` is a function that can be used to pass a label to the
          container element's state (and then on to the graphic itself).
      - graphic({percentage, inView, current})
        -- \`Percentage\` is total % of container element scrolled
        -- \`inView\` is whether the container is in the viewport
        -- \`current\` is the label currently set by the article in terms of what's visible

        See the "complex case" story for how to use updateGraphic
  `,
    },
  );
