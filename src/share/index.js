/**
 * @file
 * Sharing buttons
 */

import React, { useEffect, useRef } from 'react';
import OShare from '@financial-times/o-share';
import PropTypes from 'prop-types';
import './styles.scss';

const Share = ({
  url,
  text,
  textTwitter,
  textFacebook,
  textLinkedIn,
  textWhatsApp,
  separated,
  dark,
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
      link: 'https://twitter.com/intent/tweet'
        + `?url=${url}`
        + `&text=${textTwitter || text}`
        + '&via=FinancialTimes',
    },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/sharer.php'
        + `?u=${url}`
        + `&t=${textFacebook || text}`,
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/shareArticle'
        + '?mini=true'
        + `&url=${url}`
        + `&title=${textLinkedIn || text}`
        + `&source=Financial+Times`,
    },
    {
      name: 'WhatsApp',
      link: `whatsapp://send?text=${textWhatsApp || text} - ${url}`,
    },
  ];

  return (
    <div className={['g-share', separated && 'g-share--separated'].join(' ')}>
      <div
        className={['o-share', dark && 'o-share--inverse'].join(' ')}
        data-o-component="o-share"
      >
        <ul>
          {services.map(({ name, link }) => (
            <li key={name} className="o-share__action">
              <a
                className={`o-share__icon o-share__icon--${name.toLowerCase()}`}
                href={link}
                rel="noopener"
              >
                <span className="o-share__text">
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
};

Share.displayName = 'GShare';

export default Share;
