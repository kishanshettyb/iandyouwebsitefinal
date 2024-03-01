import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "gatsby";

const Solutions = () => {
	var settings = {
		dots: false,
		arrows: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplaySpeed: 3000,
		autoplay: true,
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
					slidesToShow: 5,
					slidesToScroll: 1,
					dots: false,
					arrows: false
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: false,
					arrows: false
				}
			}
		]
	};
	return (
		<section className="solutions-section">
			<Container>
				<ScrollAnimation animateIn="fadeInUp">
					<h2 className="fw-bold text-center display-3 text-primary font-philosopher">Find a Solution for</h2>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeInUp">
					<h5 className="fw-bold mb-4 text-center">Discovering Paths to Mental Health, Harmony, Fitness, and Vitality</h5>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeInUp">
					<Slider {...settings}>
						<div className="text-center d-flex flex-column align-items-center justify-content-center">
							<Link to="/stress/">
								<div className="icon-div">
									<StaticImage className="icons" src="../images/solutions/fear.png" alt="solutions" />
								</div>
								<h5 className=" fw-bold mt-3 font-philosopher1 text-uppercase">Stress</h5>
							</Link>
						</div>
						<div className="text-center d-flex flex-column align-items-center justify-content-center">
							<Link to="/depression/">
								<div className="icon-div">
									<StaticImage className="icons" src="../images/solutions/depression.png" alt="solutions" />
								</div>
								<h5 className=" fw-bold mt-3 font-philosopher1 text-uppercase">Depression</h5>
							</Link>
						</div>
						<div className="text-center d-flex flex-column align-items-center justify-content-center">
							<Link to="/sleep/">
								<div className="icon-div">
									<StaticImage className="icons" src="../images/solutions/sleeping.png" alt="solutions" />
								</div>
								<h5 className=" fw-bold mt-3 font-philosopher1 text-uppercase">Sleep</h5>
							</Link>
						</div>
						<div className="text-center d-flex flex-column align-items-center justify-content-center">
							<Link to="/immunity/">
								<div className="icon-div">
									<StaticImage className="icons" src="../images/solutions/immunity.png" alt="solutions" />
								</div>
								<h5 className=" fw-bold mt-3 font-philosopher1 text-uppercase">Immunity</h5>
							</Link>
						</div>
						<div className="text-center d-flex flex-column align-items-center justify-content-center">
							<Link to="/weightloss/">
								<div className="icon-div">
									<StaticImage className="icons" src="../images/solutions/body-fat.png" alt="solutions" />
								</div>
								<h5 className=" fw-bold mt-3 font-philosopher1 text-uppercase">Weight loss</h5>
							</Link>
						</div>
						<div className="text-center d-flex flex-column align-items-center justify-content-center">
							<Link to="/backpain/">
								<div className="icon-div">
									<StaticImage className="icons" src="../images/solutions/back-pain.png" alt="solutions" />
								</div>
								<h5 className=" fw-bold mt-3 font-philosopher1 text-uppercase">Back pain</h5>
							</Link>
						</div>
						<div className="text-center d-flex flex-column align-items-center justify-content-center">
							<Link to="/relationship/">
								<div className="icon-div">
									<StaticImage className="icons" src="../images/solutions/in-love.png" alt="solutions" />
								</div>
								<h5 className=" fw-bold mt-3 font-philosopher1 text-uppercase">Relationship</h5>
							</Link>
						</div>
						<div className="text-center d-flex flex-column align-items-center justify-content-center">
							<Link to="/wellness/">
								<div className="icon-div">
									<StaticImage className="icons" src="../images/solutions/exercise.png" alt="solutions" />
								</div>
								<h5 className=" fw-bold mt-3 font-philosopher1 text-uppercase">Wellness</h5>
							</Link>
						</div>
						{/*  */}
						<div className="text-center d-flex flex-column align-items-center justify-content-center">
							<Link to="/stress/">
								<div className="icon-div">
									<StaticImage className="icons" src="../images/solutions/fear.png" alt="solutions" />
								</div>
								<h5 className=" fw-bold mt-3 font-philosopher1 text-uppercase">Stress</h5>
							</Link>
						</div>
						<div className="text-center d-flex flex-column align-items-center justify-content-center">
							<Link to="/depression/">
								<div className="icon-div">
									<StaticImage className="icons" src="../images/solutions/depression.png" alt="solutions" />
								</div>
								<h5 className=" fw-bold mt-3 font-philosopher1 text-uppercase">Depression</h5>
							</Link>
						</div>
						<div className="text-center d-flex flex-column align-items-center justify-content-center">
							<Link to="/sleep/">
								<div className="icon-div">
									<StaticImage className="icons" src="../images/solutions/sleeping.png" alt="solutions" />
								</div>
								<h5 className=" fw-bold mt-3 font-philosopher1 text-uppercase">Sleep</h5>
							</Link>
						</div>
						<div className="text-center d-flex flex-column align-items-center justify-content-center">
							<Link to="/immunity/">
								<div className="icon-div">
									<StaticImage className="icons" src="../images/solutions/immunity.png" alt="solutions" />
								</div>
								<h5 className=" fw-bold mt-3 font-philosopher1 text-uppercase">Immunity</h5>
							</Link>
						</div>
						<div className="text-center d-flex flex-column align-items-center justify-content-center">
							<Link to="/weightloss/">
								<div className="icon-div">
									<StaticImage className="icons" src="../images/solutions/body-fat.png" alt="solutions" />
								</div>
								<h5 className=" fw-bold mt-3 font-philosopher1 text-uppercase">Weight loss</h5>
							</Link>
						</div>
						<div className="text-center d-flex flex-column align-items-center justify-content-center">
							<Link to="/backpain/">
								<div className="icon-div">
									<StaticImage className="icons" src="../images/solutions/back-pain.png" alt="solutions" />
								</div>
								<h5 className=" fw-bold mt-3 font-philosopher1 text-uppercase">Back pain</h5>
							</Link>
						</div>
						<div className="text-center d-flex flex-column align-items-center justify-content-center">
							<Link to="/relationship/">
								<div className="icon-div">
									<StaticImage className="icons" src="../images/solutions/in-love.png" alt="solutions" />
								</div>
								<h5 className=" fw-bold mt-3 font-philosopher1 text-uppercase">Relationship</h5>
							</Link>
						</div>
						<div className="text-center d-flex flex-column align-items-center justify-content-center">
							<Link to="/wellness/">
								<div className="icon-div">
									<StaticImage className="icons" src="../images/solutions/exercise.png" alt="solutions" />
								</div>
								<h5 className=" fw-bold mt-3 font-philosopher1 text-uppercase">Wellness</h5>
							</Link>
						</div>
					</Slider>
				</ScrollAnimation>
			</Container>
		</section>
	);
};

export default Solutions;
