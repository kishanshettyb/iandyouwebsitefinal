import React from "react";
import bannervideo from "../images/videos/video.mp4";
import bannervideo2 from "../images/videos/video-3.mp4";
import bannerimage from "../images/banners/sanskar.jpeg";
import Slider from "react-slick";
import ScrollAnimation from "react-animate-on-scroll";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "react-bootstrap";
import { Link } from "gatsby";

const Hero = () => {
	var settings = {
		dots: false,
		arrows: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplaySpeed: 5000,
		autoplay: true,
		focusOnSelect: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
					arrows: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
					arrows: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
					arrows: false
				}
			}
		]
	};
	return (
		<Slider {...settings} className="hero-section">
			<div className="position-relative banner-2 hero">
				<video autoPlay={true} muted={true} loop={true}>
					<source src={bannervideo2} type="video/mp4" />
				</video>
				<div className="overlay"></div>
				<div className="content">
					<ScrollAnimation animateIn="fadeInUp">
						<h1 className="fw-bold display-1 font-philosopher text-white mt-4 text-shadow">I And You Being Together</h1>
						<h2 className="fw-bold display-2 font-philosopher text-white  text-shadow"> Let's move together</h2>
						<h3 className="fw-bold display-3 font-niconne text-white text-shadow">- Sangachadwam</h3>
					</ScrollAnimation>
				</div>
			</div>
			<div className="position-relative  banner-1 hero">
				<StaticImage src="../images/banners/sanskar.jpeg" className="banner-img" alt="Eshwari Kids Kriya" />
				<div className="overlay"></div>
				<div className="content">
					<ScrollAnimation animateIn="fadeInUp">
						<h1 className="fw-bold display-1 font-philosopher text-white mt-4 text-shadow">Eshwari Kids Kriya</h1>
						<h2 className="fw-bold display-6 w-75 m-auto font-philosopher opacity-75 text-white  text-shadow">
							SANSKAR aims at the holistic development of a child <br />
							through EshwariKriya Kriya
						</h2>
						<div className="text-center">
							<Link to="/childrens/">
								<Button variant="outline-light" size="lg" className="px-4 my-5 d-inline-flex align-items-center">
									Read More
								</Button>
							</Link>
						</div>
					</ScrollAnimation>
				</div>
			</div>
		</Slider>
	);
};

export default Hero;
