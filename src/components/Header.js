import React from 'react';
import { Link } from 'gatsby';

import SiteNav from './SiteNav';

import { Image } from 'semantic-ui-react';
import logo from '../images/logo-white.svg';

import './Header.css';

class Header extends React.Component {
  state = {
    scrolled: false
  };

  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.setScrolled(window.scrollY > 40);
    });
  }

  setScrolled = scrolled => {
    this.setState({ scrolled });
  };

  render() {
    const { scrolled } = this.state;
    const { siteTitle, hasHero } = this.props;

    return (
      <div
        className={
          scrolled || !hasHero
            ? 'site-header site-header-scrolled'
            : 'site-header'
        }
      >
        <Link to="/" style={{ display: 'inline-block' }}>
          <Image src={logo} title={siteTitle} />
        </Link>
        <SiteNav hasHero={hasHero} scrolled={scrolled} />
      </div>
    );
  }
}

export default Header;
