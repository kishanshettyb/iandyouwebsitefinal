import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import { Seo } from "../components/Seo";
import { StaticImage } from "gatsby-plugin-image";
import RegisterModal from "../components/RegisterModal";

const stress = () => {
	return (
		<Layout>
			<Banner title="Stress" subTitle="Discover Strategies to Overcome Stress and Improve Your Well-being" mainLink="Solutions For" link="Stress" />
			<Container>
				<h2 className="display-3 fw-bold font-philosopher text-primary  text-center">Stress</h2>
				<p className="fw-bold opacity-80 text-center">STRESS and an end for it</p>
				<div className="text-center  mb-5">
					<StaticImage src="../images/others/line-2.png" alt="line" className="line" />
				</div>
				<p>
					Eshwari Kriya encourages mental and physical relaxation, helps reduce stress and anxiety. It promotes flexibility, relieve tension, and alleviate pain. Eshwari Kriya will
					help you release physical, mental and emotional stress related problems{" "}
				</p>
				<p>
					According to the National Institutes of Health, scientific evidence shows that yoga (Eshwari Kriya) supports stress management, mental health, mindfulness, healthy
					eating, weight loss and quality sleep
				</p>
				<p>
					“Stress is not a problem, it is a mental discipline, one who fails to have that will end up in stress, what you need to do is, don’t hurry up in doing things or handling
					problems in a short time with less energy”
				</p>
				<p className="fw-bold fs-3 font-niconne">- Sri Prasad</p>
			</Container>
			<section>
				<Container>
					<Row>
						<Col md={4}>
							<div className="course-card mb-4">
								<StaticImage src="../images/workshops/dhyana-2.jpeg" className="image" alt="Course Card" />
								<div className="content">
									<h5 className="fw-bold mb-4">Online Eshwari Kriya Yoga</h5>
									<div className="d-flex justify-content-between align-items-center timings-div">
										<div>
											<StaticImage src="../images/icons/calendar.svg" className="icon me-2" alt="Date" />
											<span>1/03/2024</span>
										</div>
										<div>
											<StaticImage src="../images/icons/clock.svg" className="icon me-2" alt="Time" />
											<span>10:00 AM</span>
										</div>
										<div className="opacity-25">
											<StaticImage src="../images/icons/video-off.svg" className="icon me-2 " alt="Course Mode" />
											<span>Offline</span>
										</div>
									</div>
									<div className="address-div">
										<StaticImage src="../images/icons/map-pin.svg" className="icon me-2" alt="Address" />
										<span>Address Line 1</span>
									</div>
								</div>

								<div className="footer">
									<div className="d-flex justify-content-between align-items-center">
										<div>
											<h5 className="mb-0 fw-bold">Rs. 3,000</h5>
										</div>
										<div>
											<Button className="px-4 d-flex align-items-center" variant="primary">
												<StaticImage src="../images/icons/star-white.svg" className="me-2" alt="Register" />
												Register
											</Button>
											<RegisterModal />
										</div>
									</div>
									<p className="mt-3 text-center font-sm">*Your contribution benefits a host of social projects</p>
								</div>
							</div>
						</Col>
						<Col md={4}>
							<div className="course-card mb-4">
								<StaticImage src="../images/workshops/dhyana.png" className="image" alt="Course Card" />
								<div className="content">
									<h5 className="fw-bold mb-4">Online Eshwari Kriya Yoga</h5>
									<div className="d-flex justify-content-between align-items-center timings-div">
										<div>
											<StaticImage src="../images/icons/calendar.svg" className="icon me-2" alt="Date" />
											<span>1/03/2024</span>
										</div>
										<div>
											<StaticImage src="../images/icons/clock.svg" className="icon me-2" alt="Time" />
											<span>10:00 AM</span>
										</div>
										<div>
											<StaticImage src="../images/icons/video.svg" className="icon me-2" alt="Course Mode" />
											<span>Online</span>
										</div>
									</div>
									<div className="address-div">
										<StaticImage src="../images/icons/video.svg" className="icon me-2" alt="Course Mode" />
										<span>Online</span>
									</div>
								</div>

								<div className="footer">
									<div className="d-flex justify-content-between align-items-center">
										<div>
											<h5 className="mb-0 fw-bold">Rs. 3,000</h5>
										</div>
										<div>
											<Button className="px-4 d-flex align-items-center" variant="primary">
												<StaticImage src="../images/icons/star-white.svg" className="me-2" alt="Register" />
												Register
											</Button>
										</div>
									</div>
									<p className="mt-3 text-center font-sm">*Your contribution benefits a host of social projects</p>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Layout>
	);
};

export default stress;
export const Head = () => (
	<Seo
		title="Stress"
		description=" Stress is not a problem, it is a mental discipline, one who fails to have that will end up in stress, what you need to do is, don't hurry up in doing things or handling problems in a short time with less energy"
	/>
);
