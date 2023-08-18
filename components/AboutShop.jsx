import BlockContent from '@sanity/block-content-to-react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const AboutShop = ({ aboutShopData }) => {
	return (
		<section className='about container' id='shop'>
			<div className='about-img'>
				<img src={urlFor(aboutShopData.image)} alt='Картинка о магазине'></img>
			</div>
			<div className='about-text'>
				<span>О магазине</span>
				<h2>{aboutShopData.title}</h2>
				<p>
					<BlockContent blocks={aboutShopData.description} />
				</p>
				<Link href='/shop' className='btn'>
					Перейти в магазин
				</Link>
			</div>
		</section>
	)
}

export default AboutShop