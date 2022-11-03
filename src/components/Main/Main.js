import NavBar from '../Navigation/Nav';
import Gallery from '../Gallery/Gallery';
import './Main.css';
import { FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Main() {
	const [isVisible, setIsVisible] = useState(false);
	const goToBtn = () => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	};

	const listentoScroll = () => {
		let heightToHidden = 25;
		const winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;
		if (winScroll > heightToHidden) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', listentoScroll);
		return () => window.removeEventListener('scroll', listentoScroll);
	}, []);
	return (
		<>
			{isVisible && (
				<div className='top-btn' onClick={goToBtn}>
					<FaArrowUp className='uparrow'></FaArrowUp>
					{/* <h1>Button here!!</h1> */}
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
