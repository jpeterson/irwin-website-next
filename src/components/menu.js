import React from 'react';
import { Link } from 'gatsby';

import { pages } from '../../content/menu.json';
import './menu.css';

const Menu = () => {
  console.log(pages);

  const getLinkItem = (page, hasChildren) => {
    const childrenIndicator = hasChildren ? '...' : null;
    return (
      <Link to={page.path}>
        {page.name}
        {childrenIndicator}
      </Link>
    );
  };

  const getMenuItems = () => {
    return pages.map(page => {
      let subnav = getSubMenuItems(page.subpages);
      const hasChildren = subnav ? true : false;
      return (
        <li key={page.path}>
          {getLinkItem(page, hasChildren)}
          {subnav}
        </li>
      );
    });
  };

  const getSubMenuItems = pages => {
    if (!pages) return null;

    const subpages = pages.map(page => {
      return <li key={page.path}>{getLinkItem(page)}</li>;
    });

    return <div class="menu-subnav-container">{subpages}</div>;
  };

  return (
    <div class="menu-container">
      <ul class="menu-list">{getMenuItems()}</ul>
    </div>
  );
};

export default Menu;
