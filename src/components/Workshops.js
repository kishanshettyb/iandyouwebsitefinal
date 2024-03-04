import { Col, Container, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import React from "react";
import { Link } from "gatsby";
import ScrollAnimation from "react-animate-on-scroll";

const Workshops = () => {
	var settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerPadding: "150px",
		centerMode: false,
		autoplay: false,
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
		<div className="workshop-section">
			<section>
				<Container className="pb-5">
					<ScrollAnimation animateIn="fadeInUp">
						<h2 className="fw-bold display-3 font-philosopher text-primary">Workshops</h2>
					</ScrollAnimation>
					<Row>
						<ScrollAnimation animateIn="fadeInUp">
							<Slider {...settings}>
								<Col md={3}>
									<Link to="/eshwarikriya/">
										<div className="basic-card">
											<StaticImage className="card-image" src="../images/workshops/eshwari_kriya.jpg" alt="Eshwari Kriya" />
											<div className="content">
												<h5 className="fw-bold text-black">Eshwari Kriya</h5>
												<p>
													Most people say that their act was Crying and i hope most of us will agree with that but if you ask me, I would say it’s a big No, do you know why ?
													because the 1st immediate act which we perform was Breathing{" "}
												</p>
											</div>
										</div>
									</Link>
								</Col>
								<Col md={3}>
									<Link to="/eshwaridhyana/">
										<div className="basic-card">
											<StaticImage className="card-image" src="../images/workshops/dhyana.png" alt="Eshwari Dhyana" />
											<div className="content">
												<h5 className="fw-bold text-black">Eshwari Dhyana</h5>
												<p>
													Eshwari dhyana is come from a good old Shaktha tradition, Eshwari Dhyana is described as a simple, natural, effortless Dhyana technique that doesn't
													involve much concentration. One uses a Powerful Energized Dhyana mantra as a vehicle to let the mind settle down naturally in its source.
												</p>
											</div>
										</div>
									</Link>
								</Col>
								<Col md={3}>
									<Link to="/immortalprocess/">
										<div className="basic-card">
											<StaticImage className="card-image" src="../images/workshops/immortal_process_new.png" alt="Immortal Process" />
											<div className="content">
												<h5 className="fw-bold text-black">Immortal Process</h5>
												<p>
													The theory of "karma and rebirth" raises numerous questions such as how, when, and why did the cycle start in the first place, what is the relative Karmic
													merit of one karma versus another and why, and what evidence is there that rebirth actually happens, among others.
												</p>
											</div>
										</div>
									</Link>
								</Col>
							</Slider>
						</ScrollAnimation>
					</Row>
				</Container>
			</section>
			<section className="workshop-section-bottom">
				<StaticImage src="../images/bg/workshop.svg" className="bg-image" alt="" />
			</section>
		</div>
	);
};

export default Workshops;
