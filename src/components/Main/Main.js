import NavBar from '../Navigation/Nav';
import Gallery from '../Gallery/Gallery';
import './Main.css';
import { FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

export default function Main() {
	const [isVisible, setIsVisible] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	useEffect(() => {
		// Button is displayed after scrolling for 500 pixels
		const toggleVisibility = () => {
			if (window.pageYOffset > 500) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	return (
		<>
			{isVisible && (
				<div className='top-btn' onClick={scrollToTop}>
					<FaArrowUp className='uparrow'></FaArrowUp>
				</div>
			)}
			<section className='main-section'>
				<div className='cont-fluid'>
					<NavBar />
					<div className='title'>
						Scrimba Projects </div>
					<hr class="hr" />
					<Gallery />
				</div>
			</section>
		</>
	);
}
