import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Snow from "./Snow";
import ScrollAnimation from "react-animate-on-scroll";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import RegisterModal from "../components/RegisterModal";

const EshwariKriya = () => {
	const [isOpen, setOpen] = useState(false);
	return (
		<section className="eshwari-section position-relative pb-0">
			<ModalVideo channel="youtube" youtube={{ mute: 0, autoplay: 0 }} isOpen={isOpen} videoId="TKdqtu1UN6M&t=14s" onClose={() => setOpen(false)} />

			<div className="position-relative">
				<Container>
					<ScrollAnimation animateIn="fadeInUp">
						<h2 className="display-3 fw-bold text-center text-primary font-philosopher text-uppercase">Eshwari Kriya</h2>
						<p className="fw-bold text-center display-5 font-niconne opacity-75 mb-5">Cultivating Inner Peace</p>
					</ScrollAnimation>
					<Row className="justify-content-center pt-5">
						<Col md={6} className="position-relative">
							<div className="position-relative">
								<StaticImage src="../images/workshops/eshwarikriyaphose.jpeg" alt="Eshwari Kriya" className="eshwari-girl-image d-block m-auto" />
								<div className="bg-circle">
									<StaticImage src="../images/bg/media.svg" className="rotate-360" alt="Eshwari Kriya" />
								</div>
							</div>
							{/* <div className="text-center">
								<StaticImage src="../images/bg/meditation/dhyana-1.jpeg" className="mainimg rounded-circle" alt="Meditation" />
							</div>
							<div class="banner-media-bg">
								<div class="bnr-circle1"></div>
								<div class="bnr-circle2">
									<div class="icon-bx icon1">
										<StaticImage src="../images/bg/meditation/logo1.svg" alt="Image" />
									</div>
									<div class="icon-bx icon2">
										<StaticImage src="../images/bg/meditation/logo2.png" alt="Image" />
									</div>
								</div>
							</div> */}
						</Col>
					</Row>
				</Container>
				<Snow />
				{/* <div className="yoga shadow-lg  d-none d-md-none">
					<div className="yoga-inner">
						<StaticImage src="../images/bg/meditation/yoga-1.png" className="yoga-img" alt="Yoga" />
					</div>
				</div>

				<div className="yoga-1  d-none d-md-none">
					<div className="yoga-inner">
						<StaticImage src="../images/bg/meditation/img-11.png" className="yoga-img" alt="Yoga" />
					</div>
				</div> */}

				<div className="yoga-card shadow-lg slideskew d-none d-xl-block">
					<StaticImage src="../images/workshops/dhyana.png" className="yoga-img" alt="Eshwari Kriya" />
					<p className="my-3 fw-bold">
						In simple statement we would say that <b>ESHWARI KRIYA</b> is a perfect tool for Happy ,Healthy, Prosperous and Successful life Celebrate life through Eshwari Kriya.
					</p>
				</div>

				<div className="yoga-card-round shadow-lg   d-none d-xl-block">
					<StaticImage src="../images/workshops/dhyana-2.jpeg" className="yoga-img" alt="Eshwari Kriya" />
					<Button className="bg-white playBtn" onClick={() => setOpen(true)}>
						<StaticImage alt="Play" src="../images/bg/meditation/play.svg" />
					</Button>
				</div>
				<div className="yoga-card yoga-card-left shadow-lg slideskew d-none d-xl-block">
					<StaticImage src="../images/workshops/eshwari_dhyana.jpg" className="yoga-img" alt="Eshwari Kriya" />
					<p className="my-3 fw-bold">
						<b>ESHWARI KRIYA</b> is a time-tested practice that cultivates boundless levels of Emotional, Psychological and Physical fitness.
					</p>
				</div>
				<div className="yoga-card-round yoga-card-round-left shadow-lg   d-none d-xl-block">
					<StaticImage src="../images/workshops/eshwari_kriya_new.jpeg" className="yoga-img" alt="Eshwari Kriya" />
					<Button className="bg-white playBtn" onClick={() => setOpen(true)}>
						<StaticImage alt="Play" src="../images/bg/meditation/play.svg" />
					</Button>
				</div>
			</div>
			<div className="mt-100">
				<Container className="pt-5 pb-5">
					<Row className="mb-5">
						<Col xs={6} md={4} xl={2}>
							<ScrollAnimation delay="200" animateIn="fadeInUp">
								<div className="meditation-card">
									<div className="image">
										<StaticImage className="icon" src="../images/eshwarikriya/strain.jpeg" alt="Beginer" />
									</div>
									<div className="content">
										<p>Reduces mental fatigue (strain)</p>
									</div>
								</div>
							</ScrollAnimation>
						</Col>
						<Col xs={6} md={4} xl={2}>
							<ScrollAnimation delay="400" animateIn="fadeInUp">
								<div className="meditation-card">
									<div className="image">
										<StaticImage className="icon" src="../images/eshwarikriya/stress.jpeg" alt="Beginer" />
									</div>
									<div className="content">
										<p>Improvises concentration drastically</p>
									</div>
								</div>
							</ScrollAnimation>
						</Col>
						<Col xs={6} md={4} xl={2}>
							<ScrollAnimation delay="600" animateIn="fadeInUp">
								<div className="meditation-card">
									<div className="image">
										<StaticImage className="icon" src="../images/bg/meditation/relax.jpeg" alt="Beginer" />
									</div>
									<div className="content">
										<p>
											Keeps you free <br />
											of stress
										</p>
									</div>
								</div>
							</ScrollAnimation>
						</Col>
						<Col xs={6} md={4} xl={2}>
							<ScrollAnimation delay="800" animateIn="fadeInUp">
								<div className="meditation-card">
									<div className="image">
										<StaticImage className="icon" src="../images/eshwarikriya/peace.jpeg" alt="Beginer" />
									</div>
									<div className="content">
										<p>Provides contentment and peace of mind</p>
									</div>
								</div>
							</ScrollAnimation>
						</Col>
						<Col xs={6} md={4} xl={2}>
							<ScrollAnimation delay="1000" animateIn="fadeInUp">
								<div className="meditation-card">
									<div className="image">
										<StaticImage className="icon" src="../images/eshwarikriya/creativity.jpg" alt="Beginer" />
									</div>
									<div className="content">
										<p>Increases memory,skill and creativity.</p>
									</div>
								</div>
							</ScrollAnimation>
						</Col>
						<Col xs={6} md={4} xl={2}>
							<ScrollAnimation delay="1200" animateIn="fadeInUp">
								<div className="meditation-card">
									<div className="image">
										<StaticImage className="icon" src="../images/eshwarikriya/healthy.jpeg" alt="Beginer" />
									</div>
									<div className="content">
										<p>Keeps you healthy and fit.</p>
									</div>
								</div>
							</ScrollAnimation>
						</Col>
					</Row>
					<div className="text-center">
						<RegisterModal btnTitle="Register" variant="dark" size="lg" classes="d-inline-flex align-items-center px-5" />
					</div>
				</Container>
			</div>
			<StaticImage src="../images/bg/eshwari.svg" className="bg-image mb--1" alt="" />
		</section>
	);
};

export default EshwariKriya;
