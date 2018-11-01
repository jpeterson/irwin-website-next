import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';

const CommunityPage = () => {
  return (
    <Layout>
      <div>
        <ul>
          <li>
            <Link to="/community/teams">Teams</Link>
          </li>
          <li>
            <Link to="/community/resources">Community Resources</Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default CommunityPage;
