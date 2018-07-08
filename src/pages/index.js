import React from 'react'
import Link from 'gatsby-link'

import MehdiImg from '../../res/images/me.jpg'
import styles from "./index.module.css";

const IndexPage = () => (
  <div>
    <h1 className={styles.user}>Hello, I'm Mehdi Chaid</h1>
    <p>Welcome to my website! The work is in progress.</p>
    {/* <Link to="/page-2/">Go to page 2</Link> */}

    <img  src={MehdiImg}/>
  </div>
)

export default IndexPage
