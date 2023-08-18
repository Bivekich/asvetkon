import BlockContent from '@sanity/block-content-to-react'

const Advantages = ({ advantagesData }) => {
	return (
		<div className='box'>
			<i className={advantagesData.icon}></i>
			<h3>{advantagesData.title}</h3>
			<p>
				<BlockContent blocks={advantagesData.text} />
			</p>
		</div>
	)
}

export default Advantages
