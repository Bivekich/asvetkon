import {
	About,
	AboutShop,
	Advantages,
	Banner,
	BlogItem,
	Catalog,
	Footer,
	Head,
	Navbar,
	News,
	Reviews,
} from 'components'
import { client } from 'lib/client'

const HomePage = ({
	bannerData,
	aboutData,
	advantagesData,
	catalogData,
	newsData,
	reviewsData,
	blogData,
	aboutShopData,
}) => {
	return (
		<>
			<Head />

			<Navbar />

			<Banner bannerData={bannerData} />

			<About aboutData={aboutData} />

			<section className='boxes container'>
				{advantagesData?.map(advantagesData => (
					<Advantages
						key={advantagesData._id}
						advantagesData={advantagesData}
					/>
				))}
			</section>

			<section className='sales container ' id='sales'>
				<div class='heading'>
					<span>Каталог</span>
					<h2>Наша продукция</h2>
					<p>
						Все самое необходимое для организации рабочего, торгового и жилого
						пространства
					</p>
				</div>
				<div class='sales-container container'>
					{catalogData?.map(catalogData => (
						<Catalog key={advantagesData._id} catalogData={catalogData} />
					))}
				</div>
			</section>

			<AboutShop aboutShopData={aboutShopData} />

			<section id='news'>
				<div class='heading'>
					<span>Последние новости</span>
					<h2>Новости</h2>
				</div>
				<div className='news-container'>
					{newsData?.map(newsData => (
						<News key={newsData._id} newsData={newsData} />
					))}
				</div>
			</section>

			<section id='blog' className='blog-container container'>
				<div class='heading'>
					<span>Блог</span>
					<h2>Наш интренет-дневник</h2>
				</div>

				<div className='blogList-wrap'>
					{blogData.map(blog => (
						<BlogItem blog={blog} key={blogData._id} />
					))}
				</div>
			</section>

			<section id='reviews'>
				<div class='heading'>
					<span>Отзывы</span>
					<h2>О нашей работе</h2>
				</div>
				<div className='reviews_box_container'>
					{reviewsData?.map(reviewsData => (
						<Reviews key={reviewsData._id} reviewsData={reviewsData} />
					))}
				</div>
			</section>

			{/* <section className='contact container' id='contact'>
				<h2>Есть вопросы? Получите наши контакты себе на почту!</h2>
				<form id='mailform'>
					<input
						type='email'
						name='email'
						placeholder='yourmail@yandex.ru'
						value={values.email}
						onChange={handleChange}
						onBlur={onBlur}
					/>
					<button
						className='btn'
						isLoading={isLoading}
						disabled={!values.email}
						onClick={onSubmit}
					>
						Отправить
					</button>
				</form>
			</section> */}

			<Footer />
		</>
	)
}

export async function getStaticProps() {
	const bannerQuery = '*[_type == "banner"]{title, buttonText}[0]'
	const bannerData = await client.fetch(bannerQuery)

	const aboutQuery =
		'*[_type == "about"]{title, image, description, buttonText}[0]'
	const aboutData = await client.fetch(aboutQuery)

	const advantagesQuery = '*[_type == "advantages"]{_id, title, text, icon}'
	const advantagesData = await client.fetch(advantagesQuery)

	const catalogQuery =
		'*[_type == "catalog"]{_id, title, slug, price, image, _createdAt} | order(_createdAt, asc)'
	const catalogData = await client.fetch(catalogQuery)

	const aboutShopQuery = '*[_type == "aboutShop"]{title, image, description}[0]'
	const aboutShopData = await client.fetch(aboutShopQuery)

	const newsQuery =
		'*[_type == "news"]{title, news, image, date, _createdAt} | order(_createdAt, desc)[0..3]'
	const newsData = await client.fetch(newsQuery)

	const reviewsQuery =
		'*[_type == "reviews"]{name, review, star1, star2, star3, star4, star5, image, _updatedAt} | order(_createdAt, asc) [0..9]'
	const reviewsData = await client.fetch(reviewsQuery)

	const blogQuery =
		'*[_type == "blog"]{slug, title, cover, description, category, authorName, authorImage, _createdAt, shortDescription} | order(_createdAt, asc)'
	const blogData = await client.fetch(blogQuery)

	return {
		props: {
			bannerData,
			aboutData,
			advantagesData,
			catalogData,
			aboutShopData,
			newsData,
			reviewsData,
			blogData,
		},
		revalidate: 1,
	}
}

export default HomePage
