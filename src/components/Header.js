import React from 'react';
import { Link, withPrefix } from 'gatsby';
import { Location } from '@reach/router';
import MediaQuery from 'react-responsive';
import classNames from 'classnames';

import styles from './Header.module.css';
import logo from '../images/logo.png';
import './Header.module.css';

class Header extends React.Component {
  state = {
    activeIndex: 0,
    active: false,
  };
  render() {
    return (
      <header className={classNames(this.props.className, 'container-full')}>
        <div className={classNames(styles.header, 'container')}>
          <Link to="/">
            <img src={logo} className={styles.logo} alt="logo" />
          </Link>
          <MediaQuery minDeviceWidth={1200}>
            <Location>
              {({ location }) => {
                if (location.pathname !== withPrefix('/')) {
                  return (
                    <nav>
                      <Link to="/projects">Проекты</Link>
                      <Link to="/about">О себе</Link>
                    </nav>
                  );
                }
              }}
            </Location>
          </MediaQuery>
        </div>
      </header>
    );
  }
}

export default Header;
