import React from 'react';
import { Link } from 'gatsby';

const Menu = () => (
  <div
    style={{
      background: '#f4f4f4',
      paddingTop: '10px'
    }}
  >
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly'
      }}
    >
      <li>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li>
        <Link to="/apps-layers" activeClassName="active">
          Apps & Layers
        </Link>
      </li>
      <li>
        <Link to="/integration" activeClassName="active">
          Integration Services
        </Link>
      </li>
      <li>
        <Link to="/community" activeClassName="active">
          Community
        </Link>
      </li>
      <li>
        <Link to="/about" activeClassName="active">
          About
        </Link>
      </li>
      <li>
        <Link to="/blog" activeClassName="active">
          Blog
        </Link>
      </li>
    </ul>
  </div>
);

export default Menu;
