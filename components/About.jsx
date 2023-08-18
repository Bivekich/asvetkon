import BlockContent from '@sanity/block-content-to-react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const About = ({ aboutData }) => {
	return (
		<section className='about container' id='about'>
			<div className='about-img'>
				<img src={urlFor(aboutData.image)} alt='Картинка о компании'></img>
			</div>
			<div className='about-text'>
				<span>О нас</span>
				<h2>{aboutData.title}</h2>
				<p>
					<BlockContent blocks={aboutData.description} />
				</p>
				<Link href='#contact' className='btn'>
					{aboutData.buttonText}
				</Link>
			</div>
		</section>
	)
}

export default About
