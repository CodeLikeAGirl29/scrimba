import React from 'react';

export default function Navbar() {
	return (
		<nav>
			<a href='https://github.com/codelikeagirl29'>
				<img alt='GitHub logo' src='/images/github-logo.png' />
			</a>
			<div className='nav--title-container'>
				<img
					src='/images/earth-icon.png'
					className='nav--logo'
					alt='Planet earth icon'
				/>
				<p className='nav--title'>My Travel Journal</p>
			</div>
			<a href='https://www.linkedin.com/in/lindsey-howard'>
				<img alt='Linkedin logo' src='/images/linkedin-logo.png' />
			</a>
		</nav>
	);
}
