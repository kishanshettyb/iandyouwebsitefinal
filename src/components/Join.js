import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { StaticImage } from "gatsby-plugin-image";

const Join = () => {
	return (
		<section className="join-section">
			<Container>
				<h2 className="text-primary text-center fw-bold mb-3 display-3 font-philosopher mb-5">I want to join a program but...</h2>

				<Row className="d-flex align-items-center">
					<Col md={12} lg={12} xl={5} className="order-2 order-xl-1">
						<StaticImage src="../images/workshops/dhyana-2.jpeg" className="br-20 mb-5 mb-md-0 mt-xl-0 mt-5 mt-xl-0 " alt="Join Program" />
					</Col>
					<Col md={12} lg={12} xl={7} className="order-1 order-xl-2">
						<div className="questions">
							<Row>
								<Col md={6} lg={6}>
									<Accordion>
										<Accordion.Item eventKey="0">
											<Accordion.Header>What is Eshwari Kriya?</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">
													Eshwari kriya is a 20min unique yogic technique which is derived from ancient yoga tantra text known as Rudra Yamala Tantra, Eshwari Kriya for your
													overall wellbeing and to lead Holistic life.
												</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="1">
											<Accordion.Header>Who can learn?</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">
													<b>Everyone can learn, the age should be 18+,</b> It is mandatory to share your health issues with your program trainer. So that they can recommend the
													modulations to the practice that are well-suited for you People with schizophrenia avoid, Not recommended for the Pregnant women and the one in the
													psychiatric medication. A gentler and more powerful meditation practice called Eshwari Dhyan is more effective in such cases
												</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="2">
											<Accordion.Header>What is the workshop schedule?</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">
													Eshwari Kriya is a 3 days workshop each day practice is 2hrs, it starts from Friday to Sunday, on Sunday workshop will be 4hrs, the total workshop time is
													8hrs{" "}
												</p>
											</Accordion.Body>
										</Accordion.Item>

										<Accordion.Item eventKey="4">
											<Accordion.Header>I don't have time?</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">
													Have you noticed that, you postpone the good things but never postpone regular things. You never say, "I will postpone my Movie, Party, outing and silly
													things, do you?" but we always postpone the Life changing positive things, just invest 8hrs in 3 days intervals to bring happiness, health and succuss to
													your life.
												</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="5">
											<Accordion.Header>How long it will take me to learn?</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">
													It depends on person to person, but on the 3 day you will be learned well, you can practice alone without the external support Additional to that we offer
													regular follow-up session and we will provide Notes
												</p>
											</Accordion.Body>
										</Accordion.Item>
									</Accordion>
								</Col>
								<Col md={6} lg={6}>
									<Accordion>
										<Accordion.Item eventKey="5">
											<Accordion.Header>How long it will take me to learn?</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">
													It depends on person to person, but on the 3 day you will be learned well, you can practice alone without the external support Additional to that we offer
													regular follow-up session and we will provide Notes
												</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="6">
											<Accordion.Header>How soon I will start seeing results?</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">
													On the final day of the workshop, you start seeing the results, but guruji ask everyone to practice 48days of regularly to see wonderful results in their
													health{" "}
												</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="7">
											<Accordion.Header>Why do you charge?</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">
													Charging to the workshop is the deferent thing and valuing the ancient knowledge is the deferent thing. One should understand that, if you offer the
													course free, people don't value it. But the fee will be used for the expenses of the workshop and the remaining major funds go to supports our project I
													and You Vidhya and I and You Green
												</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="8">
											<Accordion.Header>Who developed these workshops?</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">
													Sri Prasad, known popularly as the new age Masters of Spiritual Yogic Sri Vidhya, of his prominent works includes his teachings for imparting knowledge of
													Yogic Science in the name of Eshwari Kriya with a vision to create disease-free, stress-free and holistic life, his selfless action has brought millions
													together across India and overseas.
												</p>
												<hr />
												<p>
													The impact of the 27th August 2007 night on full Lunar eclipse, a full moon night under the bright rays of the moon he had seated with closed eyes and as
													the earth blocked the way of light darkening the rays of moon during total lunar eclipse that had encompassed light, the prevailing darkness which had
													eventually tarnished the eclipse in his mind which had blocked him; at Rudra gavi (the cave of Rudra), a cave in Siddharabetta (the mystic’s hill), having
													seated secluded with closed eyes he had forgotten himself for 36hours unknown of the time and space, those moments had finally brought him to realization
													of existential cosmic and self-reality that eventually had changed his quest for spiritual seeking. The realization gave rise to Eshwari Sadhana - Yogic
													Shakta Srividhya, Sri Prasad began teaching Yogic Science in 2008 by the name Eshwari Kriya to create a disease-free, stress-free and holistic living
												</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="9">
											<Accordion.Header>I will join!</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">You have taken a wise decision to bring out your new version to lead a holistic life, Congratulation </p>
												<p>Jai Guru Dev </p>
											</Accordion.Body>
										</Accordion.Item>
									</Accordion>
								</Col>
							</Row>
							<div className="text-center">
								<Button variant="dark" size="lg" className="px-5 mt-4">
									Register Now
								</Button>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Join;
