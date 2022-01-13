/**
 * @file
 * Epilogue component
 */

import React from 'react';
import PropTypes from 'prop-types';
import { GridContainer, GridRow, GridChild } from '../grid';
import './styles.scss';

const CopyRight = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="g-epilogue-copyright">
      <a
        href="https://help.ft.com/help/legal-privacy/copyright/copyright-policy/"
        data-trackable="link-copyright"
      >
        Copyright
      </a>{' '}
      The Financial Times Limited {year}. All rights reserved.
    </footer>
  );
};

const Epilogue = ({ includeGrid }) => {
  return includeGrid ? (
    <GridContainer>
      <GridRow>
        <GridChild colspan="12 S11 Scenter M10 L9 XL8">
          <CopyRight />
        </GridChild>
      </GridRow>
    </GridContainer>
  ) : (
    <CopyRight />
  );
};

Epilogue.displayName = 'GEpilogue';

Epilogue.propTypes = {
  includeGrid: PropTypes.bool,
};

Epilogue.defaultProps = {
  includeGrid: true,
};

export default Epilogue;
