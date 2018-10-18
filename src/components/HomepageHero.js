import React from 'react';
import PropTypes from 'prop-types';

import { Header, Image } from 'semantic-ui-react';

import './HomepageHero.css';

import logo from '../images/logo.png';

const HomepageHero = ({ mobile }) => (
  <div className={mobile ? 'home-hero mobile' : 'home-hero'}>
    <Image src={logo} size="big" />
    <Header
      as="h2"
      content="Integrated Reporting of Wildland-Fire Information"
      className="subheading"
      inverted
    />
  </div>
);

HomepageHero.propTypes = {
  mobile: PropTypes.bool
};

export default HomepageHero;
