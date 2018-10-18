import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';

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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
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
