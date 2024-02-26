import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { StaticImage } from "gatsby-plugin-image";
import Slider from "react-slick";

const UpComingEvents = () => {
	var settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerPadding: "150px",
		centerMode: false,
		autoplay: true,
		speed: 3000,
		autoplaySpeed: 4000,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					dots: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: false
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			}
		]
	};
	return (
		<section className="upcomingevents-section">
			<Container>
				<ScrollAnimation animateIn="fadeInUp">
					<h2 className="fw-bold display-3 font-philosopher text-primary mb-5">Upcoming Events</h2>
				</ScrollAnimation>
				<Row>
					<ScrollAnimation animateIn="fadeInUp">
						<Slider {...settings}>
							<Col md={4}>
								<div className="events-card">
									<StaticImage src="../images/workshops/srikari.jpeg" className="main-img" alt="Event name" />
									<div className="center-img">
										<StaticImage src="../images/bg/half-circle.svg" className="center-img-icon" alt="Event name" />
										<StaticImage src="../images/workshops/guruji1x1.jpeg" className="second-img" alt="Event name" />
									</div>
									<div className="content">
										<h5 className="fw-bold">Sri Kari</h5>
										<p className="text-primary">
											Srikari : Kari means giver of boons and Sri meaning the Devi who bestows all; health, protection, prosperity, happiness and success.​
										</p>
									</div>
								</div>
							</Col>
							<Col md={4}>
								<div className="events-card">
									<StaticImage src="../images/workshops/navarathri.jpeg" className="main-img" alt="Event name" />
									<div className="center-img">
										<StaticImage src="../images/bg/half-circle.svg" className="center-img-icon" alt="Event name" />
										<StaticImage src="../images/workshops/guruji1x1.jpeg" className="second-img" alt="Event name" />
									</div>
									<div className="content">
										<h5 className="fw-bold">Tri Netra</h5>
										<p className="text-primary">
											Srikari : Kari means giver of boons and Sri meaning the Devi who bestows all; health, protection, prosperity, happiness and success.​
										</p>
									</div>
								</div>
							</Col>
						</Slider>
					</ScrollAnimation>
				</Row>
			</Container>
		</section>
	);
};

export default UpComingEvents;
