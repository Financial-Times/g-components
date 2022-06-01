import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const getEmbedUrl = (flourishUrl) => {
  return flourishUrl.replace(
    /https:\/\/public\.flourish\.studio\/(visualisation|story)\/(\d+)\//g,
    'https://flo.uri.sh/$1/$2/embed?auto=1',
  );
};

const FlourishEmbed = ({ url, alt }) => {
  const elRef = useRef(null);

  useEffect(() => {
    window.addEventListener('message', (event) => {
      if (event.origin === 'https://flo.uri.sh') {
        const eventData = JSON.parse(event.data);
        if (eventData.src && elRef.current.src === eventData.src.replace('#slide-0', '')) {
          elRef.current.height = eventData.height;
        }
      }
    });
  }, []);

  return (
    <iframe
      ref={elRef}
      src={getEmbedUrl(url)}
      title={alt}
      scrolling="no"
      frameBorder="0"
      width="100%"
      height="600px"
      sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
    />
  );
};

FlourishEmbed.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

FlourishEmbed.displayName = 'GFlourishEmbed';

export default FlourishEmbed;
