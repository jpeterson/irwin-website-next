import React from 'react';
import { Container, Header, Icon } from 'semantic-ui-react';

import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';

const headerIconColor = 'teal';

const IncidentApiPage = () => {
  return (
    <Layout>
      <Breadcrumb
        page="Incident API"
        parent={{ name: 'Integration Services', path: '/integration' }}
      />

      <Container text textAlign="justified">
        <Header as="h1" icon textAlign="center">
          <Icon name="info" color={headerIconColor} circular />
          <Header.Content>Incident API</Header.Content>
        </Header>
      </Container>
    </Layout>
  );
};

export default IncidentApiPage;
