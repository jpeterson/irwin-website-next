import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/layout';

const AppsAndLayersPage = () => {
  return (
    <Layout>
      <div>
        IRWIN has the following apps & layers:
        <h3>Apps</h3>
        <ul>
          <li>
            <Link to="/apps-layers/observer">Observer</Link>
          </li>
          <li>
            <Link to="/apps-layers/lineup">Lineup</Link>
          </li>
        </ul>
        <h3>
          <Link to="/apps-layers/layers">Layers</Link>
        </h3>
        <ul>
          <li>Current Wildland Fires</li>
          <li>Recently Updated Fires</li>
        </ul>
      </div>
    </Layout>
  );
};

export default AppsAndLayersPage;
