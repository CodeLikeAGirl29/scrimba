import React from 'react';
import user from './images/user.png';
import staricon from './images/star-filled.png';
import './style.css';

export default function App() {
	const [contact, setContact] = React.useState({
		firstName: 'John',
		lastName: 'Doe',
		phone: '+1 (719) 555-1212',
		email: 'itsmyrealname@example.com',
		isFavorite: false,
	});

	let starIcon = contact.isFavorite ? 'star-filled.png' : 'star-empty.png';

	function toggleFavorite() {
		setContact((prevContact) => {
			return {
				...prevContact,
				isFavorite: !prevContact.isFavorite,
			};
		});
	}

	return (
		<main>
			<article className='card'>
				<img src={user} className='card--image' alt='user' />
				<div className='card--info'>
					<img
						src={staricon}
						className='card--favorite'
						onClick={toggleFavorite}
						alt='star'
					/>
					<h2 className='card--name'>
						{contact.firstName} {contact.lastName}
					</h2>
					<p className='card--contact'>{contact.phone}</p>
					<p className='card--contact'>{contact.email}</p>
				</div>
			</article>
		</main>
	);
}
