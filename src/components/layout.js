import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import MobileMenu from './Header/MobileMenu';
import classNames from 'classnames';
import { StaticQuery, graphql } from 'gatsby';

import Header from './Header';
import Footer from './Footer';
import './../styles/reset.css';
import './../styles/typography.css';
import './../styles/base.css';
import './../styles/variables.css';
import layoutStyles from './layout.module.css';

const Layout = ({ children }) => (
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
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <MobileMenu />
        <div className={layoutStyles.grid}>
          <Header className={layoutStyles.header} />
          <div className="container-full">
            <main className={classNames(layoutStyles.content, 'container')}>
              {children}
            </main>
          </div>
          <Footer className={layoutStyles.footer} />
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
