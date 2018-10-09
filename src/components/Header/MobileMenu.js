import React, { Component } from 'react';
import { Link } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';
import './MobileMenu.css';

// Docs
// https://github.com/negomi/react-burger-menu/wiki/FAQ#i-want-to-control-the-open-state-programmatically-but-i-dont-understand-how-to-use-the-isopen-prop

class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    return (
      <Menu
        right
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
      >
        <Link to="/" onClick={() => this.closeMenu()}>
          Главная
        </Link>
        <Link
          to="/projects"
          activeClassName="is-active"
          onClick={() => this.closeMenu()}
        >
          Проекты
        </Link>
        <Link
          to="/about"
          activeClassName="is-active"
          onClick={() => this.closeMenu()}
        >
          О себе
        </Link>
      </Menu>
    );
  }
}

export default MobileMenu;
