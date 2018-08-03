import React, { Component } from 'react'
import Link from 'gatsby-link'
import {
  Menu,
  Container
} from 'semantic-ui-react'

export default class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Container>
        <Menu secondary>
          <Link to='/'>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          </Link>
          <Menu.Menu position='right'>
            <Link to='/about'>
              <Menu.Item
                name='about'
                active={activeItem === 'about'}
                onClick={this.handleItemClick} />
            </Link>
            <Link to='/work'>
              <Menu.Item
                name='work'
                active={activeItem === 'work'}
                onClick={this.handleItemClick}
              />
            </Link>
            <Link to='/blogs'>
              <Menu.Item
                name='blogs'
                active={activeItem === 'blogs'}
                onClick={this.handleItemClick}
              />
            </Link>
          </Menu.Menu>
        </Menu>
      </Container>
    )
  }
}