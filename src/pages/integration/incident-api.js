import React from 'react';
import { graphql } from 'gatsby';
import { Button, Container, Header, Icon } from 'semantic-ui-react';

import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import PostsByTag from '../../components/PostsByTag';

const headerIconColor = 'teal';

const IncidentApiPage = ({ data }) => {
  const posts =
    data.allMarkdownRemark &&
    data.allMarkdownRemark.edges.map(edge => edge.node);

  return (
    <Layout>
      <Breadcrumb
        page="Incident API"
        parent={{ name: 'Integration Services', path: '/integration' }}
      />

      <Container text textAlign="justified">
        <Header as="h1" icon textAlign="center">
          <Icon name="info" color={headerIconColor} circular />
          <Header.Content>Incident API</Header.Content>
        </Header>

        <p>
          The IRWIN Incident API is designed to broker common wildland fire
          Incident data across various applications. This RESTful API exposes
          standard Create, Read, Update, and utility operations, allowing
          integrated systems to share operational data. Although the API is
          customized, it follows standard extension guidelines of the underlying
          ArcGIS Enterprise software. These custom operations:
        </p>
        <ol>
          <li>Validate data standards</li>
          <li>
            Authorize updates on an element-by-element basis only by
            authoritative systems
          </li>
          <li>
            Provide operations specific to the business needs of the wildland
            fire community
          </li>
        </ol>
        <p>
          The API’s role is to provide the ability for many disparate systems to
          create and edit incident information, or retrieve updated incident
          data on demand. With the understanding that these external systems
          leverage different core technologies, languages, platforms, are in
          varying lifecycle stages, or have different business rules, the API
          provides a common, flexible approach to integration yet constrains
          participants to accepted standards and defined workflows.
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Button>REST Page</Button>
          <Button>API Documentation</Button>
        </div>
        <p />
        <hr />

        <Header as="h1" icon textAlign="center">
          <Icon name="key" color={headerIconColor} circular />
          <Header.Content>Resources</Header.Content>
        </Header>

        <p>Integration Specification</p>

        <p>Data Dictionary</p>

        <p>Release Notes</p>

        <p>Workflow Diagrams</p>
      </Container>

      {/* Relevant articles */}

      <div style={{ marginTop: '4rem' }}>
        <hr />
        <h4>See the latest Incident API announcements:</h4>
        <PostsByTag tag="Incident API" posts={posts} />
      </div>
    </Layout>
  );
};

// Working example of a graphql query to pull out posts by tag... need
// to figure out how to do this more dynamically (i.e. pass tag name to React
// component PostsByTag and let it query)
export const pageQuery = graphql`
  query IncidentApiPostsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      filter: {
        frontmatter: { tags: { elemMatch: { tag: { in: ["Incident API"] } } } }
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

export default IncidentApiPage;
