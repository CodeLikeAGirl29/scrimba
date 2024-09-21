import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import './Nav.css';

export default function Nav() {
	return (
		<Navbar
			className='nav-container'
			collapseOnSelect
			expand='lg'
			bg='transparent'
			variant='light'
		>
			<Container>
				<Navbar.Brand className='nav' href='/'>
					<img
						alt='logo'
						src='https://res.cloudinary.com/codelikeagirl29/image/upload/v1648607116/devlindsey_anfenl.png'
						className='logo'
					/>
				</Navbar.Brand>
			</Container>
		</Navbar>
	);
}
