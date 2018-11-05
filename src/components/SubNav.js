import React from 'react';
import { Link } from 'gatsby';

import { pages } from '../../content/menu.json';

import { Menu } from 'semantic-ui-react';

import './SubNav.css';

const SubNav = props => {
  const path = window.location.pathname.split('/')[1];
  const subPages = pages.filter(page => {
    return page.path.indexOf(path) > -1;
  })[0].subpages;

  const getSubMenuItems = subPages => {
    return subPages.map(subPage => {
      return (
        <Menu.Item
          as={Link}
          to={subPage.path}
          activeClassName="active-sub-nav"
          key={subPage.path}
        >
          {subPage.name}
        </Menu.Item>
      );
    });
  };

  if (!subPages) return null;

  return (
    <div className="sub-nav" id="subnav">
      {getSubMenuItems(subPages)}
    </div>
  );
};

export default SubNav;
