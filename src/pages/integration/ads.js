import React from 'react';
import { graphql } from 'gatsby';
import { Container, Header, Icon } from 'semantic-ui-react';

import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import PostsByTag from '../../components/PostsByTag';

const headerIconColor = 'teal';

const AdsPage = ({ data }) => {
  const posts =
    data.allMarkdownRemark &&
    data.allMarkdownRemark.edges.map(edge => edge.node);

  return (
    <Layout>
      <Breadcrumb
        page="ADS"
        parent={{ name: 'Integration Services', path: '/integration' }}
      />

      <Container text textAlign="justified">
        <Header as="h1" icon textAlign="center">
          <Icon name="info" color={headerIconColor} circular />
          <Header.Content>Understanding the ADS</Header.Content>
        </Header>
        <p>
          The Authoritative Data Source (ADS) permission matrix defines a write
          system’s permission to edit an element based on the incident’s update
          history. By establishing a hierarchy for each write system, the ADS
          establishes a precedence of "authoritative" data. Higher precedence is
          given to more authoritative systems, on an element by element basis.
          In order for a particular system to update an element, that system
          must have equal or higher precedence than the last system to update
          it. The ADS exists to maintain data integrity as multiple systems
          begin to share information about a particular incident.
        </p>
        <p>
          There are three separate matrixes to account for various stages of a
          wildland fire incident: DEFAULT, ICS209, and APPROVED. When an
          incident is first created via SubmitIncident, the incident’s
          adsPermissionState is set to "DEFAULT". In this configuration, the
          incident is primarily managed by a CAD system, thus CAD systems have
          the highest priority on almost every data element.
        </p>
        <p>
          As an incident evolves, its management may require changing this
          hierarchy to allow the ICS209 system priority. In this scenario the
          CAD system "passes" ADS priority to ICS209 via calling UpdateIncident
          and setting its adsPermissionState to ICS209. This action transfers
          higher precedence of select elements to ICS209, allowing that system
          the ability to update fields it could not before. The WFDSS hierarchy
          also changes with the ICS209 permission state. The CAD system may
          re-acquire precedence by adjusting the adsPermissionState back to
          DEFAULT.
        </p>
        <p>
          The APPROVED state is reserved for final fire reporting systems. Once
          a report is deemed final, those systems may lock the incident from
          further updates by entering this state.
        </p>
      </Container>

      {/* Relevant articles */}

      <div style={{ marginTop: '4rem' }}>
        <hr />
        <h4>See the latest ADS announcements:</h4>
        <PostsByTag tag="ADS" posts={posts} />
      </div>
    </Layout>
  );
};

// Working example of a graphql query to pull out posts by tag... need
// to figure out how to do this more dynamically (i.e. pass tag name to React
// component PostsByTag and let it query)
export const pageQuery = graphql`
  query AdsPostsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { tags: { elemMatch: { tag: { in: ["ADS"] } } } } }
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

export default AdsPage;
