import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

const CelebrateLife = () => {
	return (
		<section className="celebrate-section">
			<Container>
				<Row className="d-flex align-items-center">
					<Col lg={6} className="order-2 order-lg-1">
						<ScrollAnimation animateIn="fadeInUp">
							<h2 className="text-primary text-center fw-bold mb-3 display-3 font-philosopher mb-5">
								Celebrate life through
								<br /> Eshwari Kriya
							</h2>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeInUp">
							<p className="mb-5 text-white opacity-75 ">
								I often tell my Sadhaks to Celebrate life, life is a celebration, it's a celebration by default but, why then are we struggling to lead a happy life ? why are we
								suffering ? why does it feel as if life is a misery ? It’s because we do not know the management, you may be a management student or an expert in objective world
								but life is a subjective world, so to celebrate life one must know the management of Body, Mind and Emotions for that one should have five types of strength which
								are already present but needs to be strengthened consciously without strengthening it one cannot experience the absolute truth, in sanskrit we call it as Bala
								(Strength) there are basically five types of Bala or Strenght or Power, the first one is Deha Bala which means Physical Strength , the second one is Mano Bala
								meaning Psychic Strength , the third one is Budhi Bala means Intellectual strength or Power , the fourth one is Athma Bala meaning the Power of the inner being and
								fifth one is very important that is Dhiva Bala means the power of the divine.
							</p>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeInUp">
							<div className="text-center">
								<Button variant="primary" size="lg" className="px-5 d-inline-flex justify-content-center align-items-center">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="star" />
									Learn More
								</Button>
							</div>
						</ScrollAnimation>
					</Col>
					<Col lg={6} className="position-relative order-1 order-lg-2">
						<StaticImage src="../images/bg/pic1.png" alt="Celebrate life through Eshwari Kriya" className="img-fluid eshwari-kriya-img slideskew" />
						<StaticImage src="../images/bg/back.svg" alt="Celebrate life through Eshwari Kriya" className="img-fluid eshwari-kriya-bg" />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default CelebrateLife;
