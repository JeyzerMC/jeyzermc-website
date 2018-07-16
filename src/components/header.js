import React from 'react'
import Link from 'gatsby-link'
import { Container, Icon } from 'semantic-ui-react';

import './header.css'

const Header = ({ siteTitle }) => (
  <Container>
    <Link to='/page-2/'>
      <Icon name='user circle' size='huge' />
    </Link>
    <Container textAlign='right'>
      <Link to="/">
        <h1>Bjr</h1>
      </Link>

      <Link to="/">
        <h1>Test</h1>
      </Link>

      <Link to="/">
        <h1>TEst2</h1>
      </Link>
    </Container>
  </Container>
)

export default Header
