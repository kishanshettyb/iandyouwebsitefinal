import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Topbar = () => {
	return (
		<div className="topbar px-0 px-lg-4 d-none d-md-block">
			<Container fluid>
				<Row className="d-flex justify-content-between">
					<Col md={7}>
						<ul>
							<li>
								<a href="/" className="mb-0">
									<StaticImage className="icon" src="../images/icons/globe.svg" alt="I and You phone" />
									Translate
								</a>
							</li>
							<li>
								<a href="mailto:info@iandyou.org">
									<StaticImage className="icon" src="../images/icons/mail.svg" alt="I and You mail" />
									info@indyou.org
								</a>
							</li>
							<li>
								<a href="tel:+91 9900022506">
									<StaticImage className="icon" src="../images/icons/phone.svg" alt="I and You phone" />
									+91 9900022506
								</a>
							</li>
						</ul>
					</Col>
					<Col md={5}>
						<div className="d-flex justify-content-end">
							<ul>
								<li>
									<a href="/" className="mb-0">
										<StaticImage className="icon" src="../images/icons/share-2.svg" alt="I and You share" />
										Follow Us :
									</a>
								</li>
								<li>
									<a href="mailto:info@iandyou.org">
										<StaticImage className="icon" src="../images/social/facebook.svg" alt="I and You facebook" />
									</a>
								</li>
								<li>
									<a href="mailto:info@iandyou.org">
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
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Topbar;
