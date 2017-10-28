import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class HeaderMenu extends Component {
  render() {
    return (
      <Menu size='huge' inverted borderless>
        <Menu.Item header as={Link} to='/'>Posts Dashboard</Menu.Item>
      </Menu>
    );
  }
}

export default HeaderMenu;
