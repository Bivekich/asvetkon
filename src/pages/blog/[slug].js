import BlockContent from '@sanity/block-content-to-react'
import { Head, Navbar } from 'components'
import { client, urlFor } from 'lib/client'

const Blog = ({ blog }) => {
	if (!blog) {
		return <div>Loading ...</div>
	}

	return (
		<>
			<Head />

			<Navbar />

			<div className='blog-wrap'>
				<div className='blog-wrap-header'>
					<p className='blog-date'>Опубликовано {blog[0]._createdAt}</p>
					<h1>{blog[0].title}</h1>
				</div>
				<img src={urlFor(blog[0].cover)} alt='cover' />
				<p className='blog-desc'>
					<BlockContent blocks={blog[0].description} />
				</p>
			</div>
		</>
	)
}

export const getStaticPaths = async () => {
	const query = `*[_type == "blog"] {
    slug {
      current
    }
  }
  `

	const blogs = await client.fetch(query)

	const paths = blogs.map(blog => ({
		params: {
			slug: blog.slug.current,
		},
	}))

	return {
		paths,
		fallback: true,
	}
}

export const getStaticProps = async ({ params: { slug } }) => {
	const blogQuery = `*[_type == "blog" && slug.current == "${slug}"]{_createdAt, title, description, cover}`

	const blog = await client.fetch(blogQuery)

	return {
		props: { blog },
		revalidate: 1,
	}
}

export default Blog
