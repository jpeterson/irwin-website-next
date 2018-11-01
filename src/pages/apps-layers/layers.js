import React from 'react';
import { graphql } from 'gatsby';
import { Button, Container, Header, Icon } from 'semantic-ui-react';

import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import PostsByTag from '../../components/PostsByTag';

const headerIconColor = 'teal';

const LayersPage = ({ data }) => {
  const posts =
    data.allMarkdownRemark &&
    data.allMarkdownRemark.edges.map(edge => edge.node);

  return (
    <Layout>
      <Breadcrumb
        page="Layers"
        parent={{ name: 'Apps & Layers', path: '/apps-layers' }}
      />
      <Container text textAlign="justified">
        {/* Launch Application */}

        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Button
            color="green"
            size="large"
            as="a"
            href="https://geoplatform.maps.arcgis.com/home/item.html?id=deea7a8c65734c6abc01d1713eed7eea"
            target="_blank"
          >
            Current Wildland Fires
          </Button>
          <Button
            color="green"
            size="large"
            as="a"
            href="https://geoplatform.maps.arcgis.com/home/item.html?id=fdd36fa7679a4484a46096af6ff78fc2"
            target="_blank"
          >
            Recently Updated Fires
          </Button>
        </div>

        {/* About */}

        <Header as="h1" icon textAlign="center">
          <Icon name="info" color={headerIconColor} circular />
          <Header.Content>About Layers</Header.Content>
        </Header>
        <p>IRWIN Layers are provided for...</p>

        <hr />

        <Header as="h1" icon textAlign="center">
          <Icon name="paperclip" color={headerIconColor} circular />
          <Header.Content>Resources</Header.Content>
        </Header>

        {/* User Guide */}

        <p>User Guide</p>

        <hr />

        {/* How to request access */}

        <Header as="h1" icon textAlign="center">
          <Icon name="key" color={headerIconColor} circular />
          <Header.Content>Accessing Layers</Header.Content>
        </Header>
        <p>
          If you have never accessed IRWIN Layers, here are the steps to get an
          account and access them.
        </p>
        <p>
          <ol>
            <li>
              If you already have an ArcGIS account, and are a member of the
              GeoPlatform organization, navigate to
              https://geoplatform.maps.arcgis.com and sign in.
            </li>
            <li>
              If you are not a member of the GeoPlatform organization or do not
              have an account, email Kayloni Ah Tong
              (kayloni_ahtong@ios.doi.gov) and request an account.
            </li>
            <li>
              Once you have a GeoPlatform ArcGIS account, navigate to
              https://geoplatform.maps.arcgis.com and sign in.
            </li>
            <li>When prompted, choose to sign in using ArcGIS.</li>
            <li>
              Request access to IRWIN Layers by navigating to the group with the
              following URL, and clicking “Join This Group”. NOTE: IRWIN Layers
              should be accessible within 24 – 48 hours from the time of your
              request. You will not be notified, so will need to periodically
              check to see if access has been granted.
            </li>
          </ol>
        </p>
      </Container>

      {/* Relevant articles */}

      <div style={{ marginTop: '4rem' }}>
        <hr />
        <h4>See the latest Layers posts:</h4>
        <PostsByTag tag="Layers" posts={posts} />
      </div>
    </Layout>
  );
};

// Working example of a graphql query to pull out posts by tag... need
// to figure out how to do this more dynamically (i.e. pass tag name to React
// component PostsByTag and let it query)
export const pageQuery = graphql`
  query LayersPostsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      filter: {
        frontmatter: { tags: { elemMatch: { tag: { in: ["Layers"] } } } }
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

export default LayersPage;
