/**
 * @file
 * Epilogue component
 */

import React from 'react';
import { GridContainer, GridRow, GridChild } from '../grid';
import styles from './styles.module.scss';

const Epilogue = () => {
  const year = new Date().getFullYear();
  return (
    <GridContainer>
      <GridRow>
        <GridChild colspan="12 S11 Scenter M10 L9 XL8">
          <footer className={styles['g-epilogue-copyright']}>
            <a
              href="https://help.ft.com/help/legal-privacy/copyright/copyright-policy/"
              data-trackable="link-copyright"
            >
              Copyright
            </a>{' '}
            The Financial Times Limited {year}. All rights reserved.
          </footer>
        </GridChild>
      </GridRow>
    </GridContainer>
  );
};

Epilogue.displayName = 'GEpilogue';

export default Epilogue;
