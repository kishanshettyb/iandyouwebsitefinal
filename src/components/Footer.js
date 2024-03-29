import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Footer = () => {
	return (
		<>
			<StaticImage src="../images/bg/footer.svg" className="mb--1" alt="footer" />
			<section className="footer-section position-relative z-index-low">
				<Container className="z-index-high">
					<Row>
						<Col xs={12} lg={4}>
							<StaticImage src="../images/I And You.png" className="logo mb-3" alt="I And You" />
							<p className=" about text-white me-0 me-md-5">
								Sri Prasad has established an organization in 2012 and named it “I and You Being Together Foundation”, a non -profit making, non-religious and volunteer
								organization that aims in bringing stress-free, disease-free, violence-free and self-realization in individuals to form a holistic society.
							</p>
							<Button variant="outline-primary mb-5" size="sm">
								Read More
							</Button>
						</Col>
						<Col xs={6} lg={2}>
							<h5 className="mt-5 mb-4 text-white fw-bold opacity-80">Quick Links</h5>
							<ul>
								<li>
									<Link to="/">Physiology</Link>
								</li>
								<li>
									<Link to="/">Nervous system</Link>
								</li>
								<li>
									<Link to="/">Hormones</Link>
								</li>
								<li>
									<Link to="/">Corporate kriya</Link>
								</li>
								<li>
									<Link to="/">I and you green</Link>
								</li>
								<li>
									<Link to="/">I and you Vidhya</Link>
								</li>
							</ul>
						</Col>
						<Col xs={6} lg={2}>
							<h5 className="mt-5 mb-4 text-white fw-bold opacity-80">Menus</h5>
							<ul>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/">About</Link>
								</li>
								<li>
									<Link to="/">Meditation</Link>
								</li>
								<li>
									<Link to="/">Wisdom</Link>
								</li>
								<li>
									<Link to="/">Contact</Link>
								</li>
								<li>
									<Link to="/">Register</Link>
								</li>
							</ul>
						</Col>
						<Col md={4}>
							<h5 className="mt-5 mb-4 text-white fw-bold opacity-80">Contact</h5>
							<ul>
								<li>
									<p className="fw-bold mb-1">Address</p>
									<a rel="noreferrer" href="https://maps.app.goo.gl/9YL3d8wSQGBycaMK8" target="_blank">
										I and You Administration Office Above Canara Bank.1, 1st Main 1st Cross, Atmananda Colony, Sultanpalya, Bengaluru, Karnataka 560032.
									</a>
								</li>
								<li>
									<p className="fw-bold mb-1">Email</p>
									<a rel="noreferrer" target="_blank" href="mailto:info@iandyou.org">
										info@iandyou.org
									</a>
								</li>
								<li>
									<p className="fw-bold mb-1">Phone</p>
									<a rel="noreferrer" target="_blank" href="tel:+91 9900022506">
										+91 9900022506
									</a>
								</li>
								<li>
									<p className="fw-bold mb-1">Social Links</p>
									<ul className="social-ul">
										<li>
											<a target="_blank" rel="noreferrer" href="https://www.facebook.com/iandyou.org">
												<StaticImage className="icon" src="../images/social/facebook.svg" alt="I and You facebook" />
											</a>
										</li>
										<li>
											<a target="_blank" rel="noreferrer" href="https://www.instagram.com/iandyoubeingtogether">
												<StaticImage className="icon" src="../images/social/instagram.svg" alt="I and You instagram" />
											</a>
										</li>
										<li>
											<a href="tel:+91 9900022506">
												<StaticImage className="icon" src="../images/social/linkedin.svg" alt="I and You linkedin" />
											</a>
										</li>
										<li>
											<a href="tel:+91 9900022506">
												<StaticImage className="icon" src="../images/social/twitter.svg" alt="I and You twitter" />
											</a>
										</li>
										<li>
											<a href="tel:+91 9900022506">
												<StaticImage className="icon" src="../images/social/youtube.svg" alt="I and You youtube" />
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</Col>
					</Row>
					<div className="copyright">
						<Row>
							<Col md={12} lg={6}>
								<p>
									Copyright &copy; 2024. <b>I And You Being Together Foundation.</b> All Rights Reserved.
								</p>
							</Col>
							<Col md={12} lg={6} className="terms justify-content-center justify-content-md-end d-flex">
								<a href="/terms/" className="d-inline me-4">
									Terms & Condition
								</a>
								<a href="/privacy/">Privacy Policy</a>
							</Col>
						</Row>
					</div>
				</Container>
			</section>
		</>
	);
};

export default Footer;
