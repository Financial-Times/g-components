import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const getEmbedUrl = (flourishUrl) => {
  return flourishUrl.replace(/https:\/\/public\.flourish\.studio\/(visualisation|story)\/(\d+)\//g, 'https://flo.uri.sh/$1/$2/embed?auto=1');
}

const FlourishEmbed = ({ url, alt }) => {
  useEffect(() => {
    window.addEventListener('message', event => {
      if (event.origin === 'https://flo.uri.sh') {
        const eventData = JSON.parse(event.data);
        const iframes = document.querySelectorAll('iframe');
        iframes.forEach(i => {
          if (i.src === eventData.src.replace('#slide-0', '')) {
            i.height = eventData.height;
          }
        });
      }
    });
  }, []);

  return (
    <iframe
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
