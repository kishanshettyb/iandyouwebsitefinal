import React from "react";
import bannervideo from "../images/videos/video.mp4";
import ScrollAnimation from "react-animate-on-scroll";

const Hero = () => {
	return (
		<div className="position-relative hero">
			<video autoPlay={true} muted={true} loop={true}>
				<source src={bannervideo} type="video/mp4" />
			</video>
			<div className="overlay"></div>
			<div className="content">
				<ScrollAnimation animateIn="fadeInUp">
					<h1 className="fw-bold display-1 font-philosopher text-warning mt-3 text-shadow">I And You Being Together</h1>
					<h2 className="fw-bold display-2 font-philosopher text-white  text-shadow"> Let's move together</h2>
					<h3 className="fw-bold display-3 font-niconne text-white text-shadow">- Sangachadwam</h3>
				</ScrollAnimation>
			</div>
		</div>
	);
};

export default Hero;
