import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import PostsByTag from '../../components/PostsByTag';

const ObserverPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(edge => edge.node);

  return (
    <Layout>
      <div>Observer homepage</div>
      <hr />
      <div>
        <h4>See the latest Observer posts:</h4>
        <PostsByTag tag="Observer" posts={posts} />
      </div>
    </Layout>
  );
};

// Working example of a graphql query to pull out posts by tag... need
// to figure out how to do this more dynamically (i.e. pass tag name to React
// component PostsByTag and let it query)
export const pageQuery = graphql`
  query ObserverPostsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      filter: {
        frontmatter: { tags: { elemMatch: { tag: { in: ["Observer"] } } } }
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

export default ObserverPage;
