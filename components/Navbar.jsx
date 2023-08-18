import Link from 'next/link'
import { BiDiamond } from 'react-icons/bi'

const Navbar = () => {
	return (
		<nav className='nav container'>
			<Link className='logo' href='/'>
				<BiDiamond color='#2288ff' size='24px' />
				АСВЕТКОН
			</Link>
			<input type='checkbox' name='' id='menu'></input>
			<label for='menu'>
				<i className='bx bx-menu' id='menu-icon'></i>
			</label>
			<ul className='navbar'>
				<li>
					<Link href='/#about'>О нас</Link>
				</li>
				<li>
					<Link href='/#sales'>Каталог</Link>
				</li>
				<li>
					<Link href='/#shop'>Фурнитура</Link>
				</li>
				<li>
					<Link href='/#news'>Новости</Link>
				</li>
				<li>
					<Link href='/#blog'>Блог</Link>
				</li>
				<li>
					<Link href='/#reviews'>Отзывы</Link>
				</li>
			</ul>
			<Link href='/#contact' className='btn'>
				Контакты
			</Link>
		</nav>
	)
}

export default Navbar
