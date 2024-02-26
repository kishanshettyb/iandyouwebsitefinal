import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import JotformEmbed from "react-jotform-embed";

const Register = (props) => {
	const eshwarikriya = "../images/workshops/eshwari_kriya.jpg";

	return (
		<section className="register-card">
			<Container>
				<Row>
					<Col xl={6} className="pe-lg-0">
						<StaticImage className="register-card-image h-50" src={`${eshwarikriya}`} alt="Page Banner" />
					</Col>

					<Col xl={6} className="ps-lg-0 position-relative">
						<div className="frame-footer"></div>
						<JotformEmbed src="https://form.jotform.com/240461544692054" />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Register;
