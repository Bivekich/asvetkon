import BlockContent from '@sanity/block-content-to-react'
import { urlFor } from 'lib/client'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import Modal from 'react-modal'

const Service = ({ servicesData }) => {
	const [modalIsOpen, setModalIsOpen] = useState(false)

	const openModal = () => setModalIsOpen(true)

	const closeModal = () => setModalIsOpen(false)

	return (
		<>
			<button onClick={openModal} className='reset-button'>
				<div className='box'>
					<img src={urlFor(servicesData.image)} alt='Картинка услуги' />
					<h3>{servicesData.title}</h3>
					<div className='content'>
						<div className='text-desc'>
							<h3>
								<BlockContent blocks={servicesData.description} />
							</h3>
						</div>
					</div>
				</div>
			</button>

			<Modal className='popup' isOpen={modalIsOpen} onRequestClose={closeModal}>
				<button onClick={closeModal} className='reset-button close'>
					<IoClose />
				</button>
				<h3 className='header'>{servicesData.title}</h3>
				<img src={urlFor(servicesData.image)} alt='Service image'></img>
			</Modal>
		</>
	)
}

export default Service
