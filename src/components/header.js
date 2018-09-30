import React from 'react'
import { Link } from 'gatsby'
import MobileMenu from './Header/MobileMenu'
import logo from '../images/logo.png'
import './Header.css'

const Header = ({ siteTitle }) => (
  <header className="App-header-container container-full">
    <MobileMenu />
    <div className="App-header container">
      <Link to="/projects">Проекты</Link>
      <Link to="/" exact={true}>
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
      <Link to="/about">О себе</Link>
    </div>
  </header>
)

export default Header
