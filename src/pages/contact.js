import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import { StaticImage } from "gatsby-plugin-image";

const contact = () => {
	return (
		<Layout>
			<Banner title="Contact" subTitle="A step towards wellbeing " mainLink="About Us" link="Contact" />
			<section className="contact-section">
				<Container>
					<Row>
						<Col md={6}>
							<div className="contact-card mb-5">
								<h2 className="fw-bold">Our Location</h2>
								<hr />
								<ul className="pt-3">
									<li>
										<h4 className="fw-bold">Address</h4>
										<a target="_blank" rel="noreferrer" href="https://maps.app.goo.gl/9YL3d8wSQGBycaMK8">
											<b>I and You Administration Office</b> <br />
											Above Canara Bank.1, 1st Main 1st Cross,
											<br /> Atmananda Colony, Sultanpalya, <br />
											Bengaluru, Karnataka 560032.
										</a>
									</li>
									<li>
										<h4 className="fw-bold">Phone</h4>
										<a target="_blank" rel="noreferrer" href="tel:+91 9900022506">
											+91 9900022506
										</a>
									</li>
									<li>
										<h4 className="fw-bold">Email</h4>
										<a target="_blank" rel="noreferrer" href="mailto:info@iandyou.org">
											info@iandyou.org
										</a>
									</li>
									<li>
										<h4 className="fw-bold">Social Links</h4>
										<ul className="social-media">
											<li>
												<a rel="noreferrer" target="_blank" href="https://www.facebook.com/srimnprasad.prasad">
													<StaticImage className="icon" src="../images/social/facebook.svg" alt="Sri Prasad Facebook" />
												</a>
											</li>
											<li>
												<a rel="noreferrer" target="_blank" href="https://www.instagram.com/sriprasadguruji">
													<StaticImage className="icon" src="../images/social/instagram.svg" alt="Sri Prasad instagram" />
												</a>
											</li>
											<li>
												<a href="/">
													<StaticImage className="icon" src="../images/social/youtube.svg" alt="Sri Prasad youtube" />
												</a>
											</li>
											<li>
												<a href="/">
													<StaticImage className="icon" src="../images/social/twitter.svg" alt="Sri Prasad twitter" />
												</a>
											</li>
											<li>
												<a href="/">
													<StaticImage className="icon" src="../images/social/linkedin.svg" alt="Sri Prasad linkedin" />
												</a>
											</li>
										</ul>
									</li>
								</ul>
							</div>
						</Col>
						<Col md={6}>
							<div className="contact-card mb-5">
								<h2 className="fw-bold">Contact Us</h2>
								<hr />
								<Form noValidate className="pt-3">
									<div>
										<Row className="mb-4">
											<Form.Group as={Col} md="12" controlId="validationCustom01">
												<Form.Label>Full Name</Form.Label>
												<Form.Control size="lg" required type="text" placeholder="Full name" />
												<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
											</Form.Group>
										</Row>
										<Row className="mb-4">
											<Form.Group as={Col} md="6" controlId="validationCustom03">
												<Form.Label>Email</Form.Label>
												<Form.Control size="lg" type="email" placeholder="Email" required />
												<Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
											</Form.Group>
											<Form.Group as={Col} md="6" controlId="validationCustom04">
												<Form.Label>Whatsapp No.</Form.Label>
												<Form.Control size="lg" type="text" placeholder="Whatsapp No." required />
												<Form.Control.Feedback type="invalid">Please provide a valid phone.</Form.Control.Feedback>
											</Form.Group>
										</Row>
										<Row className="mb-4">
											<Form.Group as={Col} md="12" controlId="validationCustom04">
												<Form.Label>Message</Form.Label>
												<Form.Control as="textarea" placeholder="Message" style={{ height: "130px" }} />
											</Form.Group>
										</Row>
									</div>
									<div className="text-center">
										<Button variant="dark" size="lg" className="px-5 mt-3 d-inline-flex align-items-center" type="submit">
											<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="star" />
											Submit form
										</Button>
									</div>
								</Form>
							</div>
						</Col>
						<Col md={12}>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1601164656786!2d77.6031544!3d13.025473700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17f0d9a8d851%3A0xbda1fb3360802cda!2sI%20and%20You%20Administration%20Office!5e0!3m2!1sen!2sin!4v1707894214724!5m2!1sen!2sin"
								allowfullscreen=""
								loading="lazy"
								title="map"
								referrerpolicy="no-referrer-when-downgrade"
							></iframe>
						</Col>
					</Row>
				</Container>
			</section>
		</Layout>
	);
};

export default contact;
