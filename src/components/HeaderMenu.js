import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react';

class HeaderMenu extends Component {
  render() {
    return (
      <Menu size='huge' inverted borderless>
        <Menu.Item header>Posts Dashboard</Menu.Item>
        <Menu.Item position='right'>
          <Button primary as={Link} to='/new'>Novo post</Button>
        </Menu.Item>
      </Menu>
    );
  }
}

export default HeaderMenu;
