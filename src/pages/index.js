import React from 'react'
import MehdiImg from '../../res/images/me.jpg'
import 'semantic-ui-css/semantic.min.css';
import { Container, Image } from 'semantic-ui-react'
import styles from "./index.module.css";

const IndexPage = () => (
	<Container className={styles.frontPage} textAlign='center'>
		<h1>Hello, I'm Mehdi Chaid</h1>
		<p>Welcome to my website! The work is in progress.</p>
		<Image className='centered' src={MehdiImg} size='medium' />

		<Container>
			<h1 className={styles.headline}>
				Engineering student, game developer
				<br/>
				Machine Learning enthusiast
			</h1>
		</Container>
	</Container>
)

export default IndexPage
