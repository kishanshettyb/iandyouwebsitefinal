import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "gatsby";
import Slider from "react-slick";
import Banner from "./Banner";

const Wisdom = () => {
	var settings = {
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		centerMode: false,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 8000,
		pauseOnHover: false,
		arrows: false,
		loop: true,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
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
		<section>
			<Container fluid>
				<ScrollAnimation animateIn="fadeInUp">
					<h1 className="fw-bold text-center display-3 text-primary font-philosopher">Wisdom</h1>
					<p className="fw-bold mb-4 text-center mb-5">Insights and Reflections: Nurturing the Seeds of Wisdom</p>
				</ScrollAnimation>
				<Row>
					<Slider {...settings}>
						<Col md={3}>
							<div className="m-4">
								<Link to="wisdom" className="m-4">
									<StaticImage src="../images/wisdom/wisdom-1.jpeg" alt="wisdom" className="img-fluid br-20 shadow" />
								</Link>
							</div>
						</Col>
						<Col md={3}>
							<div className="m-4">
								<Link to="wisdom">
									<StaticImage src="../images/wisdom/wisdom-2.jpeg" alt="wisdom" className="img-fluid br-20 shadow" />
								</Link>
							</div>
						</Col>
						<Col md={3}>
							<div className="m-4">
								<Link to="wisdom">
									<StaticImage src="../images/wisdom/wisdom-3.jpeg" alt="wisdom" className="img-fluid br-20 shadow" />
								</Link>
							</div>
						</Col>
						<Col md={3}>
							<div className="m-4">
								<Link to="wisdom">
									<StaticImage src="../images/wisdom/wisdom-4.jpeg" alt="wisdom" className="img-fluid br-20 shadow" />
								</Link>
							</div>
						</Col>
						<Col md={3}>
							<div className="m-4">
								<Link to="wisdom">
									<StaticImage src="../images/wisdom/wisdom-5.jpeg" alt="wisdom" className="img-fluid br-20 shadow" />
								</Link>
							</div>
						</Col>
						<Col md={3}>
							<div className="m-4">
								<Link to="wisdom" className="m-4">
									<StaticImage src="../images/wisdom/wisdom-1.jpeg" alt="wisdom" className="img-fluid br-20 shadow" />
								</Link>
							</div>
						</Col>
						<Col md={3}>
							<div className="m-4">
								<Link to="wisdom">
									<StaticImage src="../images/wisdom/wisdom-2.jpeg" alt="wisdom" className="img-fluid br-20 shadow" />
								</Link>
							</div>
						</Col>
						<Col md={3}>
							<div className="m-4">
								<Link to="wisdom">
									<StaticImage src="../images/wisdom/wisdom-3.jpeg" alt="wisdom" className="img-fluid br-20 shadow" />
								</Link>
							</div>
						</Col>
						<Col md={3}>
							<div className="m-4">
								<Link to="wisdom">
									<StaticImage src="../images/wisdom/wisdom-4.jpeg" alt="wisdom" className="img-fluid br-20 shadow" />
								</Link>
							</div>
						</Col>
						<Col md={3}>
							<div className="m-4">
								<Link to="wisdom">
									<StaticImage src="../images/wisdom/wisdom-5.jpeg" alt="wisdom" className="img-fluid br-20 shadow" />
								</Link>
							</div>
						</Col>
					</Slider>
				</Row>
			</Container>
		</section>
	);
};

export default Wisdom;
