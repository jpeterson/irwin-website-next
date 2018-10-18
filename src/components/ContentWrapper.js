import React from 'react';

const ContentWrapper = ({ children }) => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: 1140,
      padding: '1.5rem'
    }}
  >
    {children}
  </div>
);

export default ContentWrapper;
