import React from 'react';
import { graphql } from 'gatsby';
import { Button, Container } from 'semantic-ui-react';

import Layout from '../../components/Layout';
import PostsByTag from '../../components/PostsByTag';
import SideNav from '../../components/SideNav';
import LinkedHeader from '../../components/LinkedHeader';

import { pages } from '../../../content/menu.json';

const ObserverPage = ({ data }) => {
  const posts =
    data.allMarkdownRemark &&
    data.allMarkdownRemark.edges.map(edge => edge.node);

  return (
    <Layout>
      <div className="content-sidenav-container">
        <SideNav pages={pages[1].subpages[0].subpages} />
        <Container text textAlign="justified">
          {/* Launch Application */}

          <div style={{ textAlign: 'center' }}>
            <Button
              color="green"
              size="large"
              as="a"
              href="https://irwin.doi.gov/observer"
              target="_blank"
            >
              Launch Observer
            </Button>
          </div>

          {/* About */}
          <LinkedHeader>About Observer</LinkedHeader>
          <p>
            Observer is a read-only web application designed for viewing data
            that is being shared through the IRWIN integration services. Access
            to this application is granted through the GeoPlatform ArcGIS Online
            Organization.
          </p>
          <p>
            Observer provides current and transactional views of incident and
            resource data being shared by partners within the wildland fire
            community. This data provides the location, size, conditions and
            many other attributes that help classify fires.
          </p>

          <hr />

          <LinkedHeader>Resources</LinkedHeader>

          {/* User Guide */}

          <p>User Guide</p>

          {/* Changelog */}

          <p>Changelog</p>

          <hr />

          {/* How to request access */}
          <LinkedHeader>Accessing Observer</LinkedHeader>
          <p>
            If you have never accessed Observer, here are the steps to get an
            account and access the app.
          </p>
          <p>
            <ol>
              <li>
                If you already have an ArcGIS account, and are a member of the
                GeoPlatform organization, navigate to
                https://geoplatform.maps.arcgis.com and sign in.
              </li>
              <li>
                If you are not a member of the GeoPlatform organization or do
                not have an account, email Kayloni Ah Tong
                (kayloni_ahtong@ios.doi.gov) and request an account.
              </li>
              <li>
                Once you have a GeoPlatform ArcGIS account, navigate to
                https://geoplatform.maps.arcgis.com and sign in.
              </li>
              <li>When prompted, choose to sign in using ArcGIS.</li>
              <li>
                Request access to Observer by navigating to the group with the
                following URL, and clicking “Join This Group”. NOTE: Observer
                should be accessible within 24 – 48 hours from the time of your
                request. You will not be notified, so will need to periodically
                check to see if access has been granted.
              </li>
              <li>
                Once you have been granted access to start using Observer, go to
                https://irwin.doi.gov/observer and click on Login.
              </li>
              <li>
                To allow Observer to access your ArcGIS Online account, select
                "ArcGIS" at the prompt to “Sign in to GeoPlatform.gov Using”.
              </li>
              <li>Enter your ArcGIS credentials and click "Sign In”.</li>
            </ol>
          </p>
        </Container>
      </div>

      {/* Relevant articles */}

      <div style={{ marginTop: '4rem' }}>
        <hr />
        <h4>See the latest Observer announcements:</h4>
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
