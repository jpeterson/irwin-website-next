// Framework and third-party non-ui
import React from 'react';
import { Link } from 'gatsby';
import { Header, Icon } from 'semantic-ui-react';

// Redux operations and local helpers/utils/modules

// Component specific modules (Component-styled, etc.)

// App components

// Third-party components (buttons, icons, etc.)

// JSON

// CSS
import './LinkedHeader.css';

const LinkedHeader = props => {
  const pathname = window.location.pathname;
  const id = props.id || props.children.replace(' ', '-').toLowerCase();
  return (
    <Header as="h3" id={id} className="linked-header">
      <Header.Content>{props.children}</Header.Content>
      <Link to={`${pathname}#${id}`} className="linked-header-icon">
        <Icon name="linkify" size="small" />
      </Link>
    </Header>
  );
};

export default LinkedHeader;
