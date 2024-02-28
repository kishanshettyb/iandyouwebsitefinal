import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

const Guruji = () => {
	return (
		<section className="guruji-section-new position-relative">
			<Container>
				<Row>
					<Col md={6}>
						<div className="content">
							<h2 className="fs-4 fw-bold text-primary">Founder, I And You Being Together Foundation</h2>
							<h2 className="display-5 fw-bold text-primary font-philosopher mb-4">Sri Prasad</h2>
							<p className="mb-4 text-white">
								Sri Prasad, one of the eminent new age master of Spiritual Yogic Science, imparting knowledge through Yogic Science in the name of Eshwari sadhana. His vision to
								create a disease-free, stress-free and as a whole a holistic society, has brought millions together in India and overseas.
							</p>
							<Button variant="light" className="  d-flex justify-content-center align-items-center">
								<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="star" />
								Learn More
							</Button>
						</div>
					</Col>
					<Col md={6}></Col>
				</Row>
			</Container>
		</section>
	);
};

export default Guruji;
