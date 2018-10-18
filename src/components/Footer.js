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
            <Image src={logo} size="medium" />
            <Divider />
            <p>DOI Boise NIFC</p>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Apps & Layers" />
            <List link inverted>
              <List.Item as="a">Observer</List.Item>
              <List.Item as="a">Lineup</List.Item>
              <List.Item as="a">Layers</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Integration Services" />
            <List link inverted>
              <List.Item as="a">Incident API</List.Item>
              <List.Item as="a">Resource API</List.Item>
              <List.Item as="a">ADS</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Community" />
            <List link inverted>
              <List.Item as="a">Teams</List.Item>
              <List.Item as="a">Resources</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <List link inverted>
              <List.Item as="a">Latest Articles</List.Item>
              <List.Item as="a">About IRWIN</List.Item>
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
