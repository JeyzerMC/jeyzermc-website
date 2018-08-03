import React, { Component } from 'react'
import Link from 'gatsby-link'
import {
  Container
} from 'semantic-ui-react'

import styles from './footer.module.css'

export default class Footer extends Component {
  render() {
    return (
      <div className={styles.cont}>
        <Container>
          Footer
        </Container>
      </div>
    )
  }
}