import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const BlogPage = ({ data }) => (
  <Layout>
    <h1>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>
          Posted by {post.node.frontmatter.author} on{' '}
          {post.node.frontmatter.date}
        </small>
        <p>
          <Link to={post.node.frontmatter.path}>Read more...</Link>
        </p>
        <hr />
      </div>
    ))}
  </Layout>
);

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
            author
          }
          excerpt
        }
      }
    }
  }
`;

export default BlogPage;
