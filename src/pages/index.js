import React from 'react'
import Link from 'gatsby-link'
import MehdiImg from '../../res/images/me.jpg'
import 'semantic-ui-css/semantic.min.css';
import styles from "./index.module.css";
import Header from '../components/header'
import { Container, Image, Reveal } from 'semantic-ui-react'

const IndexPage = () => (
  <Container textAlign='center'>
    <h1>Hello, I'm Mehdi Chaid</h1>
    <p>Welcome to my website! The work is in Test.</p>
    <Reveal animated='fade'>
      <Reveal.Content visible>
        {/* <div> <p> ok</p></div> */}
      </Reveal.Content>
      <Reveal.Content hidden>
        {/* <Image src='/images/avatar/large/ade.jpg' size='small' /> */}
        <Image src={MehdiImg} size='small' />
      </Reveal.Content>
    </Reveal>
  </Container>
)

export default IndexPage
