import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/layout';

const IntegrationPage = () => {
  return (
    <Layout>
      <div>
        IRWIN has the following integration services:
        <ul>
          <li>
            <Link to="/integration/incident-api">Incident API</Link>
          </li>
          <li>
            <Link to="/integration/resource-api">Resource API</Link>
          </li>
        </ul>
        There's also the <Link to="/integration/ads">ADS...</Link>
      </div>
    </Layout>
  );
};

export default IntegrationPage;
