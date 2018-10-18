import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';

const IncidentApiPage = () => {
  return (
    <Layout>
      <Link to="/integration">Back to Integration Services</Link>
      <div>Incident API page</div>
    </Layout>
  );
};

export default IncidentApiPage;
