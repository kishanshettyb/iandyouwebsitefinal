import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import { Seo } from "../components/Seo";
import { StaticImage } from "gatsby-plugin-image";
import RegisterModal from "../components/RegisterModal";

const meditation = () => {
	return (
		<Layout>
			<Banner title="Meditation" subTitle="Cultivating Inner Peace" mainLink="Meditation" link="Overview" />
			<section className="meditation-page-section">
				<Container>
					<Row className="d-flex align-items-center">
						<Col md={6}>
							<h2 className="fw-bold text-primary display-3 mb-3 font-philosopher">What is meditation? </h2>
							<p className="fw-bold">Meditation is not an act, not even an idea, not a technique, even not a mental exercise.</p>
							<p>
								It is just like a deep sleep with an awareness, awareness of your thoughts, feelings and sensations without any disturbance, maintaining a peaceful, blissful state,
								touching your inner true potential to manifest the desirable things to attract good luck and resting in the true self, in your existential reality is Meditation.{" "}
							</p>
						</Col>
						<Col md={6} className=" d-flex justify-content-center">
							<div className="position-relative">
								<StaticImage src="../images/bg/meditation/dhyana-1.jpeg" alt="Eshwari Kriya" className="  img-fluid eshwari-girl-image" />
								<div className="bg-circle">
									<StaticImage src="../images/bg/media-dark.svg" className="rotate-360" alt="Eshwari Kriya" />
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			<section className="bg-light">
				<Container>
					<h2 className="fw-bold text-primary display-4 mb-3 font-philosopher">Why one should meditate?</h2>
					<p>
						The mind is wavery not stable, Mind is a reason for our wellbeing and misery, if you really want to lead a happy, healthy and successful life then one should meditate,
						because meditation is the source of Happiness, Joy and peace of mind.
					</p>
					<p>
						If you want to get read from Stress, Strain, Anxiety, Psychosomatic health and mental issues, Hormonal imbalance, weight gain, Body pains, High BP, Diabetics, Stomach
						discomfort any such problems, Meditation is the solution along with Eshwari Kriya practice, will helps you to reverse it{" "}
					</p>
				</Container>
			</section>
			<section>
				<Container>
					<h2 className="fw-bold text-primary display-4 mb-3 font-philosopher">Do I need to change or accept any other religion?</h2>
					<p>
						One should understand basically that, Religion is a Faith based Ideology to bring wellbeing to your life and society, Harmony to your life and society, to establish
						ethical and Value-added life and society, that is possible when you follow it 100%, now because of our lifestyle and busy schedules we fail to follow it{" "}
					</p>
					<p>
						But sitting and spending 20min with your self will not demand you to change or accept any other religion, jogging, Gym and Physical exercise never asked you change your
						religion
					</p>
					<p>Your education, Technology or a medical practice never asked you to change the religion </p>
					<p>In the same way meditation will not aske or demand you to change or accept the religion </p>
					<p>Why we think so is, in the Hindu culture meditation is widely practiced and the branches of Hindu Cultures Like Buddhism and Jainism practice the same </p>
					<p>But the meditation can practice irrespective of cast, creed and religion, meditation is universal practice. </p>
				</Container>
			</section>
			<section className="bg-light">
				<Container>
					<h2 className="fw-bold text-primary display-4 mb-3 font-philosopher">Do I need to change my life style?</h2>
					<p>
						Will you change if I tell, yes? what is life style? Life style doesn't mean that encouraging our comfort zone, willing to do what ever we would like to, expecting what
						ever it should come and fall on our lap{" "}
					</p>
					<p>
						No, you have done that before but you attracted Stress, Anxiety and misery, now if you want to reverse it and bring back happiness, health and succuss in to the life
						then need to do very little changes in the life style{" "}
					</p>
				</Container>
			</section>
			<section>
				<Container>
					<h2 className="fw-bold text-primary display-4 mb-3 font-philosopher">What are the benefits? are they proven scientifically?</h2>
					<p>
						The Benefits of Meditation are, a calm mind, focussed attention, good concentration power, clarity of thoughts and feelings, balanced emotions in stressful situations,
						improved communication skills, the birth of new skills and talents, unshakeable inner strength, healing powers, ability to connect to an inner source of energy,
						relaxation, rejuvenation, and even the ability to attract good luck! These are all the natural effects of regular meditation practice.
					</p>
					<p>There are 1000 of Studies are conducted, Clinical studies, Trials and research done on the mediation from national and international universities</p>
					<p className="mb-5">Because meditation is a science, science of consciousness, so it is proven scientifically.</p>
				</Container>
			</section>
			<section className="d-none">
				<Container>
					<h2 className="fw-bold font-philosopher text-primary display-4 mb-5">Yoga Programs</h2>
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
											<RegisterModal btnTitle="Register" classes="d-flex align-items-center" />
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
											<RegisterModal btnTitle="Register" classes="d-flex align-items-center" />
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

export default meditation;

export const Head = () => <Seo title="Meditation" description="Meditation is not an act, not even an idea, not a technique, even not a mental exercise." />;
