import React, { useEffect } from 'react';

const TawkTo = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/667304acdd590416e257cc06/1i0okknf0';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    const style = document.createElement('style');
    style.innerHTML = `
    .tawk-min-container .tawk-button-circle.tawk-button-large {
        background: red !important;
      }
    `;
    document.head.appendChild(style);


    return () => {
      document.body.removeChild(script);
      document.body.removeChild(style);
    };
  }, []);

  return null;
};

export default TawkTo;
