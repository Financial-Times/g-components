/**
 * @file
 * An accordion component
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Accordion = ({ children }) => {
  return (
    <div className="g-accordion">
      {children}
    </div>
  );
};

const AccordionSection = ({ isExpanded = false, children: [title, ...body] }) => {
  const [expanded, setExpanded] = useState(isExpanded);
  return (
    <div className="g-accordion-section">
      <div
        className={`g-accordion-section__header ${expanded ? 'g-accordion-section__header--expanded' : ''}`}
        onClick={() => setExpanded(!expanded)}
      >
        {title}
      </div>
      {expanded && (<div className="g-accordion-section__body">{body}</div>)}
    </div>
  );
};

Accordion.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

Accordion.displayName = 'GAccordion';

AccordionSection.propTypes = {
  isExpanded: PropTypes.boolean,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

AccordionSection.displayName = 'GAccordionSection';

export { Accordion, AccordionSection };
