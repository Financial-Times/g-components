/**
 * @file
 * Modal dialog box
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createPortal } from 'react-dom';
import { usePortal } from '../../shared/hooks';
import './styles.scss';

const Modal = ({ className, parent, children, isOpen, closeModal, closeButton }) => {
  const parentEl = usePortal(parent);

  // Set up escape key handler
  useEffect(() => {
    const handler = ({ keyCode }) => {
      if (keyCode === 27) closeModal();
    };
    document.addEventListener('keydown', handler);
    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, [closeModal]);

  return (
    parentEl &&
    createPortal(
      isOpen && (
        <React.Fragment>
          <div
            className={classnames('g-modal-background', className)}
            role="button"
            aria-label="Close modal"
            onClick={closeModal}
            onKeyPress={closeModal}
            tabIndex={-1}
          />
          <div className="g-modal">
            {closeButton && (
              <div className="g-modal__close-button">
                <i
                  className="g-modal__close-button-icon"
                  role="button"
                  onClick={closeModal}
                  onKeyPress={closeModal}
                  tabIndex={0}
                  aria-label="Close dialog"
                />
              </div>
            )}
            {children}
          </div>
        </React.Fragment>
      ),
      parentEl,
    )
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  parent: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  closeButton: PropTypes.bool,
  classNames: PropTypes.string,
};

Modal.defaultProps = {
  parent: undefined,
  closeButton: true,
  classNames: undefined,
};

export default Modal;
