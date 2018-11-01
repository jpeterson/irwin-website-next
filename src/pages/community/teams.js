import React from 'react';
import { graphql } from 'gatsby';
import { Header } from 'semantic-ui-react';

import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import TeamList from '../../components/TeamList';
import PostsByTag from '../../components/PostsByTag';

import teams from './teams.json';

const CommunityTeamsPage = ({ data }) => {
  const posts =
    data.allMarkdownRemark &&
    data.allMarkdownRemark.edges.map(edge => edge.node);

  return (
    <Layout>
      <Breadcrumb
        page="Teams"
        parent={{ name: 'Community', path: '/community' }}
      />
      <Header as="h1">Core Team</Header>
      <div>placeholder for core team members</div>

      <Header as="h1">Extended Teams</Header>
      <TeamList teams={teams} />

      {/* Relevant articles */}

      <div style={{ marginTop: '4rem' }}>
        <hr />
        <h4>See the latest IRWIN Teams posts:</h4>
        <PostsByTag tag="Teams" posts={posts} />
      </div>
    </Layout>
  );
};

// Working example of a graphql query to pull out posts by tag... need
// to figure out how to do this more dynamically (i.e. pass tag name to React
// component PostsByTag and let it query)
export const pageQuery = graphql`
  query TeamsPostsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      filter: {
        frontmatter: { tags: { elemMatch: { tag: { in: ["Teams"] } } } }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
            author
            tags {
              tag
            }
          }
          excerpt
        }
      }
    }
  }
`;

export default CommunityTeamsPage;
