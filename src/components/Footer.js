import React from 'react';
import { Link } from 'gatsby';

import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment
} from 'semantic-ui-react';

import logo from '../images/logo-white.png';
import './Footer.css';

const FooterLink = props => <Link {...props} className="footer-link" />;

const Footer = ({ siteTitle }) => (
  <Segment
    inverted
    vertical
    style={{ padding: '5em 0em', background: '#2b4d80' }}
  >
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={4} verticalAlign="middle" textAlign="center">
            <Image as={Link} to="/" src={logo} size="medium" />
            <Divider />
            <p>DOI Boise NIFC</p>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4">
              <FooterLink to="/apps-layers">Apps & Layers</FooterLink>
            </Header>
            <List link inverted>
              <List.Item as={Link} to="/apps-layers/observer">
                Observer
              </List.Item>
              <List.Item as={Link} to="/apps-layers/lineup">
                Lineup
              </List.Item>
              <List.Item as={Link} to="/apps-layers/layers">
                Layers
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4">
              <FooterLink to="/integration">Integration Services</FooterLink>
            </Header>
            <List link inverted>
              <List.Item as={Link} to="/integration/incident-api">
                Incident API
              </List.Item>
              <List.Item as={Link} to="/integration/resource-api">
                Resource API
              </List.Item>
              <List.Item as={Link} to="/integration/ads">
                ADS
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4">
              <FooterLink to="/community">Community</FooterLink>
            </Header>
            <List link inverted>
              <List.Item as={Link} to="/community/teams">
                Teams
              </List.Item>
              <List.Item as={Link} to="/community/resources">
                Resources
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <List link inverted>
              <List.Item as={Link} to="/blog">
                Latest Articles
              </List.Item>
              <List.Item as={Link} to="/about">
                About IRWIN
              </List.Item>
            </List>
            {/* 
            <Header as="h4" inverted>
              Footer Header
            </Header>
            <p>
              Extra space for a call to action inside the footer that could help
              re-engage users.
            </p>
            */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
