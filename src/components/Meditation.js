import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "gatsby";
import SelectMeditation from "./SelectMeditation";

const Meditation = () => {
	return (
		<section className="meditaion-new-section">
			<Container className="mb-5 pb-5">
				<h2 className="fw-bold font-philosopher text-white    text-center display-2  text-uppercase">
					Mastering the art of <br />
					Meditation
				</h2>
				<h2 className="text-white opacity-75 mb-5 fw-bold font-niconne display-4 text-center">Cultivating Inner Peace</h2>

				<Row className="pt-5 d-flex align-items-center justify-content-md-center  justify-content-xl-between">
					<Col md={6} xl={5} className=" d-flex justify-content-center">
						<div className="position-relative">
							<StaticImage src="../images/bg/meditation/dhyana-1.jpeg" alt="Eshwari Kriya" className="  img-fluid eshwari-girl-image" />
							<div className="bg-circle">
								<StaticImage src="../images/bg/media.svg" className="rotate-360" alt="Eshwari Kriya" />
							</div>
						</div>
					</Col>
					<Col md={12} xl={7} className="order-lg-2 d-flex  flex-column  justify-content-left">
						<div className="ms-0 ms-md-5">
							<Row>
								<Col md={12}>
									<h2 className="fw-bold opacity-75 text-center text-white mb-5 mt-5 mt-xl-0">Yoga Programs</h2>
								</Col>
								<Col xs={6} md={6}>
									<ScrollAnimation delay="200" animateIn="fadeInUp">
										<Link to="/beginners/">
											<div className="meditation-card d-flex ">
												<div className="image">
													<StaticImage className="icon" src="../images/bg/meditation/beginer.svg" alt="Beginer" />
												</div>
												<div className="content">
													<h4 className="fw-bold">Beginer</h4>
													<p>
														Embark on Your <br />
														Meditation Journey
													</p>
												</div>
											</div>
										</Link>
									</ScrollAnimation>
								</Col>
								<Col xs={6} md={6}>
									<ScrollAnimation delay="400" animateIn="fadeInUp">
										<Link to="/advance/">
											<div className="meditation-card">
												<div className="image">
													<StaticImage className="icon" src="../images/bg/meditation/advanced.jpeg" alt="Beginer" />
												</div>
												<div className="content">
													<h4 className="fw-bold">Advanced</h4>
													<p>
														Embark on Your Meditation <br /> Journey
													</p>
												</div>
											</div>
										</Link>
									</ScrollAnimation>
								</Col>
								<Col xs={6} md={6}>
									<ScrollAnimation delay="600" animateIn="fadeInUp">
										<Link to="/relaxation/">
											<div className="meditation-card">
												<div className="image">
													<StaticImage className="icon" src="../images/bg/meditation/relax.jpeg" alt="Beginer" />
												</div>
												<div className="content">
													<h4 className="fw-bold">Relaxations</h4>
													<p>Unwind and De-stress: Relaxation through Meditation</p>
												</div>
											</div>
										</Link>
									</ScrollAnimation>
								</Col>
								<Col xs={6} md={6}>
									<ScrollAnimation delay="800" animateIn="fadeInUp">
										<Link to="/childrens/">
											<div className="meditation-card">
												<div className="image">
													<StaticImage className="icon" src="../images/bg/meditation/children.jpg" alt="Beginer" />
												</div>
												<div className="content">
													<h4 className="fw-bold">Childrens</h4>
													<p>Mindfulness for Young Minds: Fun Meditation Practices</p>
												</div>
											</div>
										</Link>
									</ScrollAnimation>
								</Col>
							</Row>
							<div className="text-center">
								{/* <RegisterModal btnTitle="Register" variant="dark" size="lg" classes="d-inline-flex align-items-center mt-5 px-5" /> */}
								<SelectMeditation btnTitle="Register" variant="dark" size="lg" classes="d-inline-flex align-items-center mt-5 px-5" />
							</div>
						</div>
					</Col>
				</Row>
			</Container>
			<StaticImage src="../images/bg/pattern3.svg" className="bg-image mb--1" alt="" />
		</section>
	);
};

export default Meditation;
