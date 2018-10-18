import React from 'react';
import { Link } from 'gatsby';

import { Image } from 'semantic-ui-react';
import logo from '../images/logo-color.png';

const Header = ({ siteTitle }) => (
  <div
    style={{
      // background: '#2b4d80'
      background: 'white'
    }}
  >
    <Link to="/" style={{ display: 'inline-block' }}>
      <Image
        src={logo}
        title={siteTitle}
        size="small"
        style={{ margin: '8px' }}
        inline
      />
    </Link>
  </div>
);

export default Header;
