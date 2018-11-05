import React from 'react';
import { Link } from 'gatsby';

import { Menu } from 'semantic-ui-react';

import './SideNav.css';

const SideNav = props => {
  const getMenuItems = subpages => {
    return subpages.map(subpage => {
      return (
        <Menu.Item
          name={subpage.name}
          as={Link}
          to={subpage.path}
          activeClassName="active-side-nav"
          content={subpage.name}
        />
      );
    });
  };

  return (
    <div className="side-nav" id="sidenav">
      <Menu pointing secondary vertical>
        {getMenuItems(props.pages)}
      </Menu>
    </div>
  );
};

export default SideNav;
