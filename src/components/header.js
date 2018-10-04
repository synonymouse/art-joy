import React from 'react';
import { Link, Match } from 'gatsby';
import MediaQuery from 'react-responsive';
import classNames from 'classnames';
import styles from './Header.module.css';
import logo from '../images/logo.png';
import './Header.module.css';

const Header = props => (
  <header className={classNames(props.className, 'container-full')}>
    <div className={classNames(styles.header, 'container')}>
      <MediaQuery minDeviceWidth={1200}>
        <Link to="/projects">Проекты</Link>
      </MediaQuery>
      <Link to="/" exact={true}>
        <img src={logo} className={styles.logo} alt="logo" />
      </Link>
      <MediaQuery minDeviceWidth={1200}>
        <Link to="/about">О себе</Link>
      </MediaQuery>
    </div>
  </header>
);

export default Header;
