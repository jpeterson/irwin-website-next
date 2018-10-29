import React from 'react';
import { Container, Header, Icon } from 'semantic-ui-react';

import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';

const headerIconColor = 'teal';

const LayersPage = () => {
  return (
    <Layout>
      <Breadcrumb
        page="Layers"
        parent={{ name: 'Apps & Layers', path: '/apps-layers' }}
      />
      <Container text textAlign="justified">
        <Header as="h1" icon textAlign="center">
          <Icon name="info" color={headerIconColor} circular />
          <Header.Content>IRWIN Layers</Header.Content>
        </Header>
      </Container>
    </Layout>
  );
};

export default LayersPage;
