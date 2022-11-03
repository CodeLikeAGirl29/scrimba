/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/

import React from "react";

export default function Navbar() {
	return (
		<nav>
			<img src='https://res.cloudinary.com/codelikeagirl29/image/upload/v1659548052/icons/react-js_wrmh1e.svg' className='nav--icon' />
			<h3 className='nav--logo_text'>ReactFacts</h3>
			<h4 className='nav--title'>React Course - Project 1</h4>
		</nav>
	);
}
