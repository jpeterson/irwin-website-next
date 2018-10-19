import React from 'react';
import { Link } from 'gatsby';
import { Dropdown, Menu } from 'semantic-ui-react';

import { pages } from '../../content/menu.json';
import './siteNav.css';

// Workaround for using semantic-ui-react Dropdown as Gatsby Link
const ForwardedLink = React.forwardRef((props, ref) => (
  <Link {...props} innerRef={ref} />
));

const SiteNav = ({ hasHero, scrolled }) => {
  const getMenuItems = () => {
    return pages.map(page => {
      let subnav = getSubMenuItems(page.subpages);
      const hasChildren = subnav ? true : false;

      if (hasChildren) {
        return (
          <Dropdown
            key={page.name}
            text={page.name}
            as={ForwardedLink}
            to={page.path}
            activeClassName="active-nav"
            icon="dropdown"
            className="site-nav-dropdown"
            item
            simple
            floating
            pointing
          >
            {subnav}
          </Dropdown>
        );
      }

      return (
        <Menu.Item
          key={page.path}
          as={Link}
          to={page.path}
          activeClassName="active-nav"
          name={page.name}
          content={page.name}
        />
      );
    });
  };

  const getSubMenuItems = pages => {
    if (!pages) return null;

    const subpages = pages.map(page => {
      return (
        <Dropdown.Item
          as={Link}
          to={page.path}
          activeClassName="active-nav"
          key={page.path}
        >
          {page.name}
        </Dropdown.Item>
      );
    });

    return (
      <Dropdown.Menu className="site-nav-sub-menu">{subpages}</Dropdown.Menu>
    );
  };

  return (
    <Menu
      inverted
      className="site-nav-container"
      size={scrolled || !hasHero ? 'small' : null}
    >
      {getMenuItems()}
    </Menu>
  );
};

export default SiteNav;
