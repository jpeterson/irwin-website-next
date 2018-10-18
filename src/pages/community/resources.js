import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';

const CommunityResourcesPage = () => {
  return (
    <Layout>
      <Link to="/community">Back to Community</Link>
      <div>Community Resources page</div>
    </Layout>
  );
};

export default CommunityResourcesPage;
