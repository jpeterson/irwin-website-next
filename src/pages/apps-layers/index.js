import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';

const AppsAndLayersPage = () => {
  return (
    <Layout>
      <div>
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
      </div>
    </Layout>
  );
};

export default AppsAndLayersPage;
