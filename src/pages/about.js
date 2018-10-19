import React from 'react';
import { Container, Divider, Header, Icon, Item } from 'semantic-ui-react';

import Layout from '../components/Layout';
// import logo from '../images/logo-notext.png';

const headerIconColor = 'teal';

const AboutPage = () => (
  <Layout>
    <Container text textAlign="justified">
      <Header as="h1" icon textAlign="center">
        <Icon name="info" color={headerIconColor} circular />
        <Header.Content>About IRWIN</Header.Content>
      </Header>
      <p>
        The{' '}
        <strong>
          Integrated Reporting of Wildland-Fire Information (IRWIN)
        </strong>{' '}
        service is an investment intended to enable “end-to-end” fire reporting
        capability. IRWIN provides data exchange capabilities between existing
        applications used to manage data related to wildland fire incidents.
        IRWIN focuses on the goals of reducing redundant data entry, identifying
        authoritative data sources, and improving the consistency, accuracy, and
        availability of operational data.
      </p>
      <p>
        IRWIN can be thought of as a central hub that orchestrates data between
        the various applications. Users continue to utilize existing
        applications. Data is synchronized between participating applications to
        ensure the most current data is available in near real time. IRWIN
        supports conflict detection and resolution on all new wildfire incidents
        to support a unique record for each incident.
      </p>

      <Divider section />

      <Header as="h1" icon textAlign="center">
        <Icon name="users" color={headerIconColor} circular />
        <Header.Content>Background</Header.Content>
      </Header>
      <p>
        The Integrated Reporting of Wildland-Fire Information (IRWIN) service is
        a Wildland Fire Information and Technology (WFIT) affiliated investment
        that is intended to provide an "end–to–end" fire reporting capability.
        This investment will streamline incident business processes and improve
        the quality of data for collecting and reporting incidents and events.
        The IRWIN Core team is tasked with providing integrated data exchange
        capabilities between the existing applications used to manage incidents
        related to wildland fire. IRWIN is focused on the goals of reducing
        redundant data entry, identifying authoritative data sources, and
        improving the consistency, accuracy, and availability of operational
        data.
      </p>
      <p>
        Data is currently entered into many unique systems. Basic fire
        information, such as location, size, environmental conditions, and
        resources, is often repeatedly entered into stand-alone systems as a
        foundation for their capabilities. More timely, accurate information is
        entered into operation systems as conditions change over the life of an
        incident, while the original, outdated data remains in the supporting
        systems. Users tend to query systems they are most familiar with and
        consequently, may not be accessing the most up to date data available.
      </p>
      <p>
        An example is the location of a fire (latitude and longitude). A 2008
        interagency efficiency report identified that an interagency dispatcher
        may enter this piece of data up to 26 times into different systems. Once
        the dispatcher has received the required information from each system,
        they do not go back and update each system as more up to date location
        information becomes available.
      </p>
      <p>
        When questions arise about individual fires, frequently, there are often
        multiple answers depending upon which data source is queried for the
        answer. While all of the answers may be valid in their specific context,
        there is no authoritative data source for a consistent answer. This
        presents a challenge for both the interagency fire community and line
        management at all levels of fire management agencies and departments.
      </p>
      <p>
        Multiple studies and analysis over the years have identified a need for
        a more integrated approach to managing wildland fire occurrence data.
        These analyses include but are not limited to:{' '}
      </p>
      <ul>
        <li>
          National Interagency Fire Statistics Information Project (NIFSIP),
          September 1998
        </li>
        <li>Fire Statistics Task Group Proposal to NWCG, August 2003</li>
        <li>
          Report of the eGov Disaster Management Task Group to the National Fire
          and Aviation Executive Board, March 2006
        </li>
        <li>
          Fire Occurrence Reporting System (FORS) Study for the National Fire
          and Aviation Executive Board, February 2007
        </li>
        <li>
          National Wildland Fire Enterprise Architecture Blueprint, Version 2.0,
          July 2008
        </li>
        <li>
          Management Efficiency Assessment of the Interagency Wildland Fire
          Dispatch and Related Services, August 2008
        </li>
      </ul>
      <p>
        In addition to the data inaccuracies, the capability to access the data
        and use it for lessons learned, planning for future events, and to
        inform decisions about future requirements is not readily available. The
        desire to execute future initiatives in kind is a laborious process
        taking considerable person-hours or the creation of "one off"
        initiatives to answer the question at hand. Further complicating matters
        is the need to incorporate non-federal partners data and develop
        requirements that can be incorporated into a holistic solution that
        considers the whole picture of data and is designed to be scalable to
        meet current and future demands.
      </p>

      <Divider section />

      <Header as="h1" icon textAlign="center" id="key-contacts">
        <Icon name="address card outline" color={headerIconColor} circular />
        <Header.Content>Key Contacts</Header.Content>
      </Header>

      <Item.Group divided relaxed>
        <Item>
          <Item.Image
            size="small"
            src="https://react.semantic-ui.com/images/avatar/large/zoe.jpg"
          />
          <Item.Content verticalAlign="middle">
            <Item.Header>Jaymee Fojtik</Item.Header>
            <Item.Meta>Project Manager</Item.Meta>
            <Item.Description>
              <p>
                <a href="tel:(+1-208-334-6191">(208) 334-6191</a>
                <br />
                <a href="mailto:jaymee_fojtik@ios.doi.gov">
                  jaymee_fojtik@ios.doi.gov
                </a>
              </p>
              <p />
            </Item.Description>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image
            size="small"
            src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
          />
          <Item.Content>
            <Item.Header>Chuck Wamack</Item.Header>
            <Item.Meta>
              Department of the Interior (DOI) Business Lead
            </Item.Meta>
            <Item.Description>
              <p>
                <a href="tel:(+1-208-334-6190">(208) 334-6190</a>
                <br />
                <a href="mailto:david_wamack@ios.doi.gov">
                  david_wamack@ios.doi.gov
                </a>
              </p>
            </Item.Description>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image
            size="small"
            src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
          />
          <Item.Content>
            <Item.Header>Kara Stringer</Item.Header>
            <Item.Meta>U.S. Forest Service Business Lead</Item.Meta>
            <Item.Description>
              <p>
                <a href="tel:(+1-801-531-5320">(801) 531-5320</a>
                <br />
                <a href="mailto:kstringer@fs.fed.us">kstringer@fs.fed.us</a>
              </p>
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </Container>
  </Layout>
);

export default AboutPage;
