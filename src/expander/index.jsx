/**
 * @file
 * A wrapper component for showing or hiding child content
 */

import React, { Children, useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './styles.scss';

export const Expander = ({
  children,
  showLabel,
  itemsToShow,
  showLessText,
  showMoreText,
  tagName,
  hasNote,
}) => {
  const [expanded, setExpanded] = useState(false);
  const Tag =
    tagName === 'tr'
      ? ({ children: tagChildren, className, style }) => (
          <tr className={className} style={style}>
            <td colSpan="1000">{tagChildren}</td>
          </tr>
        )
      : tagName;
  const childArray = Children.toArray(children);
  return (
    <React.Fragment>
      {(expanded && children) ||
        (!expanded &&
          Children.count(children) > 1 && [
            ...childArray.slice(0, itemsToShow),
            hasNote ? childArray[childArray.length - 1] : null,
          ])}
      <Tag className="g-expander__header" colSpan={tagName === 'td' ? 1000 : undefined}>
        {
          <button
            className={classnames(
              'g-expander__expand-button',
              expanded && 'g-expander__expand-button--open',
            )}
            type="button"
            onClick={() => setExpanded(!expanded)}
          >
            {showLabel && <span>{expanded ? showLessText : showMoreText}</span>}
            <i />
          </button>
        }
      </Tag>
    </React.Fragment>
  );
};

Expander.propTypes = {
  showLabel: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  itemsToShow: PropTypes.number,
  showLessText: PropTypes.string,
  showMoreText: PropTypes.string,
  tagName: PropTypes.string,
  hasNote: PropTypes.bool,
};

Expander.defaultProps = {
  showLabel: true,
  itemsToShow: 3,
  showLessText: 'Show less',
  showMoreText: 'Show more',
  tagName: 'div',
  hasNote: false,
};

Expander.displayName = 'GExpander';

export default Expander;
