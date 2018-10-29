import React from 'react';
import { Link } from 'gatsby';

import { Breadcrumb as SemanticBreadcrumb } from 'semantic-ui-react';

const Breadcrumb = ({ page, parent }) => {
  return (
    <SemanticBreadcrumb size="small">
      <SemanticBreadcrumb.Section link>
        <Link to={parent.path}>{parent.name}</Link>
      </SemanticBreadcrumb.Section>
      <SemanticBreadcrumb.Divider />
      <SemanticBreadcrumb.Section active>{page}</SemanticBreadcrumb.Section>
    </SemanticBreadcrumb>
  );
};

export default Breadcrumb;
