import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

// TODO: use this module to conditionally render stuff based on breakpoints
// import { Responsive } from 'semantic-ui-react';

import Header from './Header';
import Footer from './Footer';
// import SiteNav from './SiteNav';
import ContentWrapper from './ContentWrapper';
import SubNav from './SubNav';

import favicon from '../images/favicon.png';

import 'semantic-ui-less/semantic.less';
import './Layout.css';

const Layout = ({ children, hasHero, subNav }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content="Helmet application" />
          <meta name="keywords" content="helmet, application" />
          <meta name="robots" content="noindex" />
          <link rel="shortcut icon" type="image/png" href={favicon} />
        </Helmet>
        <Header hasHero={hasHero} siteTitle={data.site.siteMetadata.title} />
        {subNav ? <SubNav page={subNav} /> : null}
        {hasHero ? children : <ContentWrapper>{children}</ContentWrapper>}
        <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
