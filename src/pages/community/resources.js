import React from 'react';
import { graphql } from 'gatsby';
import { Container, Header, Icon } from 'semantic-ui-react';

import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import PostsByTag from '../../components/PostsByTag';

const headerIconColor = 'teal';

const CommunityResourcesPage = ({ data }) => {
  const posts =
    data.allMarkdownRemark &&
    data.allMarkdownRemark.edges.map(edge => edge.node);

  return (
    <Layout>
      <Breadcrumb
        page="Resources"
        parent={{ name: 'Community', path: '/community' }}
      />

      <Container text textAlign="justified">
        <Header as="h1" icon textAlign="center">
          <Icon name="info" color={headerIconColor} circular />
          <Header.Content>Community Resources</Header.Content>
        </Header>
        <p>
          At this time, the Wildland Fire Lessons Learned Center is the home for
          most IRWIN Community Resources.
        </p>
        <p>
          You can find most IRWIN technical and business artifacts in the
          <br />
          <a
            href="https://www.wildfirelessons.net/communities/community-home?CommunityKey=5b76814b-c0e4-42f8-ba48-9faf1c616093"
            target="_blank"
            rel="noopener noreferrer"
          >
            IRWIN Extended Team Community
          </a>
          .
        </p>
      </Container>

      {/* Relevant articles */}

      <div style={{ marginTop: '4rem' }}>
        <hr />
        <h4>See the latest Community Resource announcements:</h4>
        <PostsByTag tag="Community Resource" posts={posts} />
      </div>
    </Layout>
  );
};

// Working example of a graphql query to pull out posts by tag... need
// to figure out how to do this more dynamically (i.e. pass tag name to React
// component PostsByTag and let it query)
export const pageQuery = graphql`
  query CommunityResourcePostsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      filter: {
        frontmatter: {
          tags: { elemMatch: { tag: { in: ["Community Resource"] } } }
        }
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

export default CommunityResourcesPage;
