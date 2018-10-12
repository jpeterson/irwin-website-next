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
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/apps-layers">Apps & Layers</Link>
      </li>
      <li>
        <Link to="/integration">Integration Services</Link>
      </li>
      <li>
        <Link to="/community">Community</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  </div>
);

export default Menu;
