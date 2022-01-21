/**
 * @file
 * Sharing buttons
 */

import React, { useEffect, useRef } from 'react';
import OShare from '@financial-times/o-share';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.module.scss';
import classNames from 'classnames';

export const Share = ({
  url,
  text,
  textTwitter,
  textFacebook,
  textLinkedIn,
  textWhatsApp,
  separated,
  dark,
  size,
}) => {
  const ref = useRef();

  useEffect(() => {
    (async () => {
      new OShare(ref.current); // eslint-disable-line no-new
    })();
  }, []);

  const services = [
    {
      name: 'Twitter',
      link:
        'https://twitter.com/intent/tweet' +
        `?url=${url}` +
        `&text=${textTwitter || text}` +
        '&via=FinancialTimes',
    },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/sharer.php' + `?u=${url}` + `&t=${textFacebook || text}`,
    },
    {
      name: 'LinkedIn',
      link:
        'https://www.linkedin.com/shareArticle' +
        '?mini=true' +
        `&url=${url}` +
        `&title=${textLinkedIn || text}` +
        `&source=Financial+Times`,
    },
    {
      name: 'WhatsApp',
      link: `whatsapp://send?text=${textWhatsApp || text} - ${url}`,
    },
  ];

  return (
    <div
      className={classnames(
        styles['g-share'],
        separated && styles['g-share--separated'],
        styles[`g-share--${size}`],
      )}
    >
      <div
        className={classnames(styles['o-share'], dark && styles['o-share--inverse'])}
        data-o-component="o-share"
      >
        <ul>
          {services.map(({ name, link }) => (
            <li key={name} className={styles['o-share__action']}>
              <a
                className={classNames(
                  styles['o-share__icon'],
                  styles[`o-share__icon--${name.toLowerCase()}`],
                )}
                href={link}
                rel="noopener"
              >
                <span className={styles['o-share__text']}>
                  Share on {name}. Opens in a new window.
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Share.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textTwitter: PropTypes.string,
  textFacebook: PropTypes.string,
  textLinkedIn: PropTypes.string,
  textWhatsApp: PropTypes.string,
  separated: PropTypes.bool,
  dark: PropTypes.bool,
  size: PropTypes.oneOf(['default', 'small']),
};

Share.displayName = 'GShare';

export default Share;
