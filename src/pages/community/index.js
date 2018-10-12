import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/layout';

const CommunityPage = () => {
  return (
    <Layout>
      <div>
        IRWIN is a community.
        <ul>
          <li>
            <Link to="/community/teams">Who are we?</Link>
          </li>
          <li>
            <Link to="/community/resources">Resources</Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default CommunityPage;
