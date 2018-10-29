import React from 'react';
import { Container, Header, Icon } from 'semantic-ui-react';

import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';

const headerIconColor = 'teal';

const LineupPage = () => {
  return (
    <Layout>
      <Breadcrumb
        page="Lineup"
        parent={{ name: 'Apps & Layers', path: '/apps-layers' }}
      />
      <Container text textAlign="justified">
        <Header as="h1" icon textAlign="center">
          <Icon name="info" color={headerIconColor} circular />
          <Header.Content>IRWIN Lineup</Header.Content>
        </Header>
      </Container>
    </Layout>
  );
};

export default LineupPage;
