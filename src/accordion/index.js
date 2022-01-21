/**
 * @file
 * An accordion component
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.module.scss';

const Accordion = ({ children }) => {
  return <div className={styles['g-accordion']}>{children}</div>;
};

const AccordionSection = ({ isExpanded = false, children: [title, ...body], id = false }) => {
  const [expanded, setExpanded] = useState(isExpanded);
  return (
    <div className="g-accordion-section">
      <button
        className={classNames(
          styles['g-accordion-section__header'],
          expanded && styles['g-accordion-section__header--expanded'],
        )}
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded(!expanded)}
        {...(id ? { id } : {})}
      >
        {title}
      </button>
      {expanded && <div className={styles['g-accordion-section__body']}>{body}</div>}
    </div>
  );
};

Accordion.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

Accordion.displayName = 'GAccordion';

AccordionSection.propTypes = {
  isExpanded: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

AccordionSection.defaultProps = {
  isExpanded: false,
  id: false,
};

AccordionSection.displayName = 'GAccordionSection';

export { Accordion, AccordionSection };
