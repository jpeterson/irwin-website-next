import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  console.log(post);

  const { title, author, date, tags } = post.frontmatter;

  return (
    <Layout>
      <div>
        <Link to="/blog">Back to All</Link>
        <hr />
        <h1>{title}</h1>
        <h4>
          Posted by {author} on {date}
        </h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div>
          Tags:
          <ul>
            {tags.map(({ tag }) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export const postQuery = graphql`
  query PostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
        tags {
          tag
        }
      }
    }
  }
`;

export default BlogPostTemplate;
