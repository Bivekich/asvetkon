import { urlFor } from 'lib/client'
import Link from 'next/link'

const Catalog = ({ catalogData }) => {
	return (
		<Link href={`/service/${catalogData.slug.current}`}>
			<div class='box'>
				<img src={urlFor(catalogData.image)} alt='Картинка услуги' />
				<h3>{catalogData.price}</h3>
				<div class='content'>
					<div class='text'>
						<h3>{catalogData.title}</h3>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default Catalog
