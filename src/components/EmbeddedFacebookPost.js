import React, { useEffect } from 'react';

export default function EmbeddedFacebookPost() {
  useEffect(() => {
    window.fbAsyncInit = function () {
      // eslint-disable-next-line no-undef
      FB.init({
        appId: '103422315059712',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v9.0',
      });
      // eslint-disable-next-line no-undef
      FB.api(
        '/103422315059712/feed',
        (response) => {
          // eslint-disable-next-line no-console
          console.log('response', response);
          if (response && !response.error) {
            /* handle the result */
            // eslint-disable-next-line no-console
            console.log('response', response);
          }
        },
      );
    };
  }, []);

  return (
    <div style={{ width: '98%', margin: 'auto' }}>
      {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
      {/* <iframe */}
      {/*  src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D104355291633081%26id%3D103422315059712&width=500&show_text=true&appId=236264791332297&height=487' */}
      {/*  width='500' */}
      {/*  height='487' */}
      {/*  style={{ border: 'none', overflow: 'hidden', width: '100%' }} */}
      {/*  scrolling='no' */}
      {/*  frameBorder='0' */}
      {/*  allowFullScreen='true' */}
      {/*  allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share' */}
      {/* /> */}
    </div>

  );
}
