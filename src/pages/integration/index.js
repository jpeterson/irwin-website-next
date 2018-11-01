import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';

const IntegrationPage = () => {
  return (
    <Layout>
      <div>
        <ul>
          <li>
            <Link to="/integration/incident-api">Incident API</Link>
          </li>
          <li>
            <Link to="/integration/resource-api">Resource API</Link>
          </li>
          <li>
            <Link to="/integration/ads">ADS</Link>
          </li>
          <li>
            <Link to="/integration/environments">Environments</Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default IntegrationPage;
