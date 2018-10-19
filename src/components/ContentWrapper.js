import React from 'react';

const ContentWrapper = ({ children }) => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: 1140,
      padding: '1.5rem',
      paddingTop: '105px'
    }}
  >
    {children}
  </div>
);

export default ContentWrapper;
