import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Seo } from "../components/Seo";

const eshwaridhyana = () => {
	return (
		<Layout>
			<Banner title="Eshwari Dhyana" subTitle="" mainLink="Workshops" link="Eshwari Dhyana" />
			<section>
				<Container>
					<h2 className="display-3 fw-bold font-philosopher text-primary  text-center">Eshwari Dhyana</h2>
					<p className="fw-bold opacity-80 text-center"></p>
					<div className="text-center  mb-5">
						<StaticImage src="../images/others/line-2.png" alt="line" className="line" />
					</div>
					<Row className="d-flex align-items-center justify-content-start">
						<Col md={4}>
							<StaticImage src="../images/banners/eshwari-dhyana.jpeg" alt="Eshwari Dhyana" className="br-20 img-fluid" />
						</Col>
						<Col md={6}>
							<div className="ms-0 ms-md-5">
								<p>
									Eshwari dhyana is come from a good old Shaktha tradition, Eshwari Dhyana is described as a simple, natural, effortless Dhyana technique that doesn't involve much
									concentration. One uses a Powerful Energized Dhyana mantra as a vehicle to let the mind settle down naturally in its source .
								</p>
								<p>
									In this regard, the main goal of Eshwari Dhyana is to have one's thoughts in the present moment, the process involves transcending thought itself and experiencing
									a state of pure awareness in which one is aware but without an object of thought or feelings, a subjective experience during meditation are clearly reflected in
									the contrasting neurophysiologic states associated with each practice. Eshwari Dhyana has been found to activate the brain's default mode network, which is a
									natural resting state of the brain regular practice of Eshwari Dhyana can result in a state of cosmic consciousness, in which the experience of transcendence is
									always present in one's awareness, even during activity, with greater clarity and focus, One comes to experience one's self as universal and omnipresent. One's
									identity shifts from the individual to the cosmic. Eshwari Dhyana is a simple , effortless yet effective Shaktha method
								</p>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Layout>
	);
};

export default eshwaridhyana;
export const Head = () => (
	<Seo
		title="Eshwaridhyana"
		description="Eshwari dhyana is come from a good old Shaktha tradition, Eshwari
              Dhyana is described as a simple, natural, effortless Dhyana
              technique that doesn't involve much concentration. One uses a
              Powerful Energized Dhyana mantra as a vehicle to let the mind
              settle down naturally in its source."
	/>
);
