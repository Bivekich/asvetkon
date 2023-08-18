import { Head, Navbar, Service } from 'components'
import { client } from 'lib/client'

const Services = ({ servicesData, id }) => {
	if (!id) {
		return <div>Loading ...</div>
	}

	return (
		<>
			<Head />

			<Navbar />

			<section className='sales container' id='sales'>
				<div className='heading'>
					<h2>{id[0].title}</h2>
				</div>

				<div className='sales-container container'>
					{servicesData?.map(servicesData => (
						<Service key={servicesData._id} servicesData={servicesData} />
					))}
				</div>
			</section>
		</>
	)
}

export const getStaticPaths = async () => {
	const query = `*[_type == "catalog"] {
    slug {
      current
    }
  }
  `

	const services = await client.fetch(query)

	const paths = services.map(service => ({
		params: {
			slug: service.slug.current,
		},
	}))

	return {
		paths,
		fallback: true,
	}
}

export const getStaticProps = async ({ params: { slug } }) => {
	const idQuery = `*[_type == "catalog" && slug.current == "${slug}"]{_id, title}`

	const id = await client.fetch(idQuery)

	const query = `*[_type == "services" && catalog._ref == "${id[0]._id}"]{title, description, catalog, image, _createdAt} | order(_createdAt, asc)`

	const servicesData = await client.fetch(query)

	return {
		props: { servicesData, id },
		revalidate: 1,
	}
}

export default Services
