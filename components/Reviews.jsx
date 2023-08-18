import { urlFor } from '../lib/client'

const Reviews = ({ reviewsData }) => {
	return (
		<div className='review-box'>
			<div className='box-top'>
				<div className='profile'>
					<div className='profile-img'>
						<img src={urlFor(reviewsData.image)} alt='' />
					</div>
					<div className='name-user'>
						<strong>{reviewsData.name}</strong>
					</div>
				</div>
				<div className='reviews'>
					<i className={reviewsData.star1}></i>
					<i className={reviewsData.star2}></i>
					<i className={reviewsData.star3}></i>
					<i className={reviewsData.star4}></i>
					<i className={reviewsData.star5}></i>
				</div>
			</div>
			<div className='client-comment'>
				<p>{reviewsData.review}</p>
			</div>
		</div>
	)
}
export default Reviews
