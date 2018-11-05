import React from 'react';
import { graphql } from 'gatsby';
import { Container, Header, Icon } from 'semantic-ui-react';

import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import PostsByTag from '../../components/PostsByTag';

const headerIconColor = 'teal';

const EnvironmentsPage = ({ data }) => {
  const posts =
    data.allMarkdownRemark &&
    data.allMarkdownRemark.edges.map(edge => edge.node);

  return (
    <Layout>
      <Breadcrumb
        page="Environments"
        parent={{ name: 'Integration Services', path: '/integration' }}
      />

      <Container text textAlign="justified">
        <Header as="h1" icon textAlign="center">
          <Icon name="info" color={headerIconColor} circular />
          <Header.Content>IRWIN Software Environments</Header.Content>
        </Header>

        <p>
          IRWIN is composed of three accessible environments, which are utilized
          to deliberately promote changes and allow for testing cycles with
          various stakeholders. Each system is given credentials to authenticate
          to each environment.
        </p>

        <Header>Test</Header>
        <a
          href="https://irwint.doi.gov"
          target="_blank"
          rel="noopener noreferrer"
        >
          irwint.doi.gov
        </a>
        <p>
          The lowest, most volatile environment that supports the Core Team’s
          development and functional testing of new changes. Stability and
          uptime are not guaranteed.
        </p>

        <Header>OAT (Operational Acceptance Test)</Header>
        <a
          href="https://irwinoat.doi.gov"
          target="_blank"
          rel="noopener noreferrer"
        >
          irwinoat.doi.gov
        </a>
        <p>
          The most stable environment prior to Production, supporting integrated
          testing across all integrated systems. Development changes that pass
          functional testing are promoted to this environment in a scheduled
          manner with appropriate notification, lead-time, and documentation.
        </p>

        <Header>Production</Header>
        <a
          href="https://irwin.doi.gov"
          target="_blank"
          rel="noopener noreferrer"
        >
          irwin.doi.gov
        </a>
        <p>
          The fully operational environment for IRWIN. Only approved changes,
          fully tested by the community, are promoted with a tightly controlled
          and articulated schedule.
        </p>

        <hr />

        <Header as="h1" icon textAlign="center">
          <Icon name="cog" color={headerIconColor} circular />
          <Header.Content>REST Pages</Header.Content>
        </Header>
        <p>
          The REST Pages can be an extremely helpful tool for development and
          testing. To access the REST Pages add /arcgis/rest/services to the
          environment url (for example https://irwinoat.doi.gov/arcgis/rest/ to
          connect to OAT). Click the login link in the upper-right and enter
          your credentials. Once logged in, the layers and tables can be
          inspected. In addition, most operations are available from this
          interface, including Query, Add and Update.
        </p>
        <p>
          For more in-depth information on interacting with services from the
          REST Pages, check out the Esri's{' '}
          <a
            href="https://developers.arcgis.com/rest/services-reference/feature-service.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            ArcGIS REST API documentation
          </a>
          .
        </p>
      </Container>

      {/* Relevant articles */}

      <div style={{ marginTop: '4rem' }}>
        <hr />
        <h4>See the latest Environments announcements:</h4>
        <PostsByTag tag="Environments" posts={posts} />
      </div>
    </Layout>
  );
};

// Working example of a graphql query to pull out posts by tag... need
// to figure out how to do this more dynamically (i.e. pass tag name to React
// component PostsByTag and let it query)
export const pageQuery = graphql`
  query EnvironmentsPostsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      filter: {
        frontmatter: { tags: { elemMatch: { tag: { in: ["Environments"] } } } }
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

export default EnvironmentsPage;
