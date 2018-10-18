import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';

const ResourceApiPage = () => {
  return (
    <Layout>
      <Link to="/integration">Back to Integration Services</Link>
      <div>Resource API page</div>
    </Layout>
  );
};

export default ResourceApiPage;
