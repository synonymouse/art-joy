import React from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'
import styles from './Header.module.css'
import logo from '../images/logo.png'
import './Header.module.css'

const Header = props => (
  <header className={classNames(props.className, 'container-full')}>
    <div className={classNames(styles.header, 'container')}>
      <Link to="/projects">Проекты</Link>
      <Link to="/" exact={true}>
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
      <Link to="/about">О себе</Link>
    </div>
  </header>
)

export default Header
