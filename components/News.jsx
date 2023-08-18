import BlockContent from '@sanity/block-content-to-react'
import { urlFor } from '../lib/client'

const News = ({ newsData }) => {
	return (
		<div className='blog-box'>
			<div className='blog-img'>
				<img src={urlFor(newsData.image)} alt='Картинка новости' />
			</div>
			<div className='blog-text'>
				<span>{newsData.date}</span>
				<a href='#news' className='blog-title'>
					{newsData.title}
				</a>
				<p>
					<BlockContent blocks={newsData.news} />
				</p>
			</div>
		</div>
	)
}

export default News
