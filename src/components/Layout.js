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

import favicon from '../images/favicon.png';

import 'semantic-ui-less/semantic.less';
import './layout.css';

const Layout = ({ children, hasHero }) => (
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
          <link rel="shortcut icon" type="image/png" href={favicon} />
        </Helmet>
        <Header hasHero={hasHero} siteTitle={data.site.siteMetadata.title} />
        {/* <SiteNav /> */}
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
