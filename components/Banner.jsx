import Link from 'next/link'

const Banner = ({ bannerData }) => {
	return (
		<section className='home container' id='home'>
			<div className='home-text'>
				<h1>{bannerData.title}</h1>
				<Link href='#contact' className='btn'>
					{bannerData.buttonText}
				</Link>
			</div>
		</section>
	)
}

export default Banner
