import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/developer.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<p>Hi there! I'm</p>
				<h1>Andrés.</h1>
				<h4>A developer from <span>Costa Rica.</span></h4>
				<div>
				<Button as={AnchorLink} href="#about">
					Learn More
				</Button>
				</div>
			</Details>
			<Thumbnail>
				<img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
