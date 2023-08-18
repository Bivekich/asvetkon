import { urlFor } from 'lib/client'
import Link from 'next/link'

const BlogItem = ({
	blog: {
		cover,
		title,
		category,
		description,
		authorImage,
		authorName,
		_createdAt,
		slug,
		shortDescription,
	},
}) => {
	return (
		<div className='blogItem-wrap'>
			<img
				className='blogItem-cover'
				src={urlFor(cover)}
				alt='Картинка поста'
			/>
			{/* Chip */}
			<h3>{title}</h3>
			<p className='blogItem-desc'>{shortDescription}</p>
			<footer>
				<div className='blogItem-author'>
					<img src={urlFor(authorImage)} alt='Аватар автора' />
					<div>
						<h6>{authorName}</h6>
						<p>{_createdAt}</p>
					</div>
				</div>
				<Link href={`/blog/${slug.current}`} className='blogItem-link'>
					→
				</Link>
			</footer>
		</div>
	)
}

export default BlogItem
