/**
 * @file
 * OnwardJourney component
 */

import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { makeCancelable } from '../shared/helpers';
import './styles.scss';

const OnwardJourney = ({ urlBase, layout, relatedContent }) => {
  const [sections, setSections] = useState([]);
  const sectionP = useRef();

  useEffect(() => {
    (async () => {
      sectionP.current = makeCancelable(
        Promise.all(
          relatedContent.map(({ list, rows = 1 }) => {
            const limit = rows * 4;
            const url = `${urlBase}${list}/html/${layout}?limit=${limit}`;
            return fetch(url).then(res => res.text());
          }),
        ),
      );

      try {
        const sections = await sectionP.current.promise;
        setSections(sections);
      } catch (e) {
        if (e.isCanceled) return;
        console.error(e); // eslint-disable-line no-console
      }
    })();

    // Cleanup
    return () => {
      sectionP.current.cancel();
    };
  }, [layout, relatedContent, urlBase]);

  return sections.map((section, idx) => (
    <section
      key={idx} // eslint-disable-line react/no-array-index-key
      className="onward-journey__section"
      data-g-component="onward-journey"
      dangerouslySetInnerHTML={{ __html: section }} // eslint-disable-line react/no-danger
    />
  ));
};

OnwardJourney.displayName = 'GOnwardJourney';

OnwardJourney.propTypes = {
  relatedContent: PropTypes.arrayOf(
    PropTypes.shape({
      rows: PropTypes.number.isRequired,
      list: PropTypes.string,
    }),
  ),
  urlBase: PropTypes.string,
  layout: PropTypes.string,
};

OnwardJourney.defaultProps = {
  relatedContent: [],
  urlBase: 'https://ig.ft.com/onwardjourney/v3/',
  layout: '',
};

export default OnwardJourney;
