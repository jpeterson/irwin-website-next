import React from 'react';
import { graphql, Link } from 'gatsby';

const PostsByTag = ({ tag, posts }) => {
  console.log({ tag, posts });

  if (!posts || !posts.length) {
    return 'No articles found.';
  }

  return (
    <div style={{ border: '1px solid #efefef', padding: '20px' }}>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const postTagFragment = graphql`
  fragment MarkdownFrontmatter on MarkdownRemark {
    frontmatter {
      path
      title
      date(formatString: "MMMM DD, YYYY")
    }
  }
`;

export default PostsByTag;
