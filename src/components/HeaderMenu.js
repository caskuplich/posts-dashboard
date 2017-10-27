import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';

class HeaderMenu extends Component {
  render() {
    return (
      <Menu size='huge' inverted borderless>
        <Menu.Item header>Posts Dashboard</Menu.Item>
        <Menu.Item position='right'>
          <Button primary>Novo post</Button>
        </Menu.Item>
      </Menu>
    );
  }
}

export default HeaderMenu;
