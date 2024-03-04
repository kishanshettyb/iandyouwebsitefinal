import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Slider from "react-slick";
import ScrollAnimation from "react-animate-on-scroll";

const Testimonial = () => {
	const [isActive, setIsActive] = useState(true);
	const handleClick = (event) => {
		setIsActive((current) => !current);
	};
	var settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: false,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 4000,
		arrows: true,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					arrows: false
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
					arrows: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
					arrows: false
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
					arrows: false
				}
			}
		]
	};
	return (
		<section className="testimonial-section">
			<Container>
				<Row>
					<ScrollAnimation animateIn="fadeInUp">
						<Slider {...settings}>
							<Col xs={12} lg={4}>
								<div className="testimonial-card position-relative  br-20">
									<Button variant="link" className="btn-link" onClick={handleClick}>
										{isActive ? (
											<span>
												More <StaticImage src="../images/icons/arrow-right-1.svg" alt="Arrow Right" />
											</span>
										) : (
											<span>
												Less <StaticImage src="../images/icons/arrow-right-1.svg" alt="Arrow Right" />
											</span>
										)}
									</Button>
									<StaticImage src="../images/icons/quote.png" class="left" alt="left" />
									<StaticImage src="../images/icons/quote.png" class="right" alt="left" />
									<StaticImage src="../images/testimonials/megan.jpeg" className="avatar" alt="testimonial" />
									<h2 className="fw-bold fs-3">Megan</h2>
									<h6 className="text-primary">English professor , writing professor & poet in New York City</h6>
									<ul className="rating">
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
									</ul>
									<div className="content">
										<p className={isActive ? " pt-2 desc line-clamp" : "pt-2 desc"}>
											This is Megan from NY. I am passing along the testimonial I wrote about my experience with Eshwari Kriya below: <br />
											Words cannot fully capture the gratitude I feel for Prasad Guruji and the Eshwari Kriya program. It has been a truly life-changing experience for me in many
											ways! During the training itself, I could feel the care and warmth radiating from Prasad Guruji’s presence, even though it took place over Zoom. Guruji was
											extremely thorough in his descriptions of the techniques and the importance of the sequencing / purpose behind them; he continually asked for participant
											questions and clarified so much through his answers that I have finally been able to resolve obstacles I have been encountering in my personal practice for
											years. I could feel the power and the love behind the energetic initiation Guruji gave us on the final day, so much so that I felt I instantly went into deep
											meditation just by being present (which is something I have only experienced a couple other times in my life). Kavya was also wonderful in organizing things
											leading up to the training and in following up afterwards with written instructions for what was covered.
											<br /> <br />
											Since attending the program three months ago and practicing the kriya daily, I feel enormous changes in my energy levels, mood and general wellness. I feel
											more attuned with my own rhythms and able to carry out my daily tasks with ease and clarity. As a survivor of a violent abusive relationship, I have suffered
											with symptoms of severe PTSD for years and thought I would never be free of certain experiences (nightmares, extreme nervous system dysregulation in unsafe
											environments) despite being in therapy and trying all other conventionally recommended methods. Eshwari Kriya has shifted all of this for me in a way I never
											imagined possible – I feel changed on a subtle cellular level, so that now when triggering moments arise I am able to witness them with some distance and not
											become immobilized by the intensity of the sensations. Even for people without this history, I would highly recommend Eshwari Kriya to anyone seeking more
											balance, health, joy and peace in their daily life. All this for a 20 minute commitment a day! Thank you so much, Prasad Guruji, for the blessing you have
											brought into my life through this practice and for the ultimate compassion you have shown in sharing this divine wisdom to help heal and uplift so many.
											<br /> <br />
											Jai Gurudev!!
										</p>
									</div>
								</div>
							</Col>
							<Col xs={12} lg={4}>
								<div className="testimonial-card position-relative  br-20">
									<Button variant="link" className="btn-link" onClick={handleClick}>
										{isActive ? (
											<span>
												More <StaticImage src="../images/icons/arrow-right-1.svg" alt="Arrow Right" />
											</span>
										) : (
											<span>
												Less <StaticImage src="../images/icons/arrow-right-1.svg" alt="Arrow Right" />
											</span>
										)}
									</Button>
									<StaticImage src="../images/icons/quote.png" class="left" alt="left" />
									<StaticImage src="../images/icons/quote.png" class="right" alt="left" />
									<StaticImage src="../images/testimonials/indra.jpg" className="avatar" alt="testimonial" />
									<h2 className="fw-bold fs-3">S.Indra</h2>
									<h6 className="text-primary">CEO - eDatalabs</h6>
									<ul className="rating">
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
									</ul>
									<div className="content">
										<p className={isActive ? " pt-2 desc line-clamp" : "pt-2 desc"}>
											A scientific process based simple way of gurujis teaching, I was overwhelmed, he revealed answers making me understand of the queries which were stored in my
											heart for long, even without asking, as a short tempered person that I was, after initiation I could see noticeable changes in my temper & behaviour, i am
											experiencing joy, peace and more productivity in my work Jai guru dev
										</p>
									</div>
								</div>
							</Col>
							<Col xs={12} lg={4}>
								<div className="testimonial-card position-relative  br-20">
									<Button variant="link" className="btn-link" onClick={handleClick}>
										{isActive ? (
											<span>
												More <StaticImage src="../images/icons/arrow-right-1.svg" alt="Arrow Right" />
											</span>
										) : (
											<span>
												Less <StaticImage src="../images/icons/arrow-right-1.svg" alt="Arrow Right" />
											</span>
										)}
									</Button>
									<StaticImage src="../images/icons/quote.png" class="left" alt="left" />
									<StaticImage src="../images/icons/quote.png" class="right" alt="left" />
									<StaticImage src="../images/testimonials/Gangadhar.jpg" className="avatar" alt="testimonial" />
									<h2 className="fw-bold fs-3">Gangadhar C Uppin</h2>
									<h6 className="text-primary">Associate Vice President - MICRO LABS LIMITED</h6>
									<ul className="rating">
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
									</ul>
									<div className="content">
										<p className={isActive ? " pt-2 desc line-clamp" : "pt-2 desc"}>
											Eshwari Kriya has helped me to face many challenges with a balanced approach, cool and calm mind to a more responsive than reactive approach, at all levels
											like - personal, professional, emotional and as a whole in the society.
										</p>
									</div>
								</div>
							</Col>
							<Col xs={12} lg={4}>
								<div className="testimonial-card position-relative  br-20">
									<Button variant="link" className="btn-link" onClick={handleClick}>
										{isActive ? (
											<span>
												More <StaticImage src="../images/icons/arrow-right-1.svg" alt="Arrow Right" />
											</span>
										) : (
											<span>
												Less <StaticImage src="../images/icons/arrow-right-1.svg" alt="Arrow Right" />
											</span>
										)}
									</Button>
									<StaticImage src="../images/icons/quote.png" class="left" alt="left" />
									<StaticImage src="../images/icons/quote.png" class="right" alt="left" />
									<StaticImage src="../images/testimonials/person.jpg" className="avatar" alt="testimonial" />
									<h2 className="fw-bold fs-3">Tina Pradeep Kale</h2>
									<h6 className="text-primary">Cabin Supervisor - Emirates</h6>
									<ul className="rating">
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
									</ul>
									<div className="content">
										<p className={isActive ? " pt-2 desc line-clamp" : "pt-2 desc"}>
											Eshwari Kriya has helped me to face many challenges with a balanced approach, cool and calm mind to a more responsive than reactive approach, at all levels
											like - personal, professional, emotional and as a whole in the society.
										</p>
									</div>
								</div>
							</Col>
							<Col xs={12} lg={4}>
								<div className="testimonial-card position-relative  br-20">
									<Button variant="link" className="btn-link" onClick={handleClick}>
										{isActive ? (
											<span>
												More <StaticImage src="../images/icons/arrow-right-1.svg" alt="Arrow Right" />
											</span>
										) : (
											<span>
												Less <StaticImage src="../images/icons/arrow-right-1.svg" alt="Arrow Right" />
											</span>
										)}
									</Button>
									<StaticImage src="../images/icons/quote.png" class="left" alt="left" />
									<StaticImage src="../images/icons/quote.png" class="right" alt="left" />
									<StaticImage src="../images/testimonials/shalini.jpg" className="avatar" alt="testimonial" />
									<h2 className="fw-bold fs-3">Shalini</h2>
									<h6 className="text-primary">Homemaker</h6>
									<ul className="rating">
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
									</ul>
									<div className="content">
										<p className={isActive ? " pt-2 desc line-clamp" : "pt-2 desc"}>
											I'm a complete homemaker since 20 years, and have completely dedicated my life befitting all the roles my family needed. In the process of being so and trying
											my best to fit into all the befitting roles while also keeping myself happy, i had been feeling lost somewhere. Not to mistake, i do love my family and feel
											blessed to have them,i just felt empty like there was something more i yearned for. My emotions had grown too strong for me to bare and they had always gotten
											the better of me.
										</p>
									</div>
								</div>
							</Col>
							<Col xs={12} lg={4}>
								<div className="testimonial-card position-relative  br-20">
									<Button variant="link" className="btn-link" onClick={handleClick}>
										{isActive ? (
											<span>
												More <StaticImage src="../images/icons/arrow-right-1.svg" alt="Arrow Right" />
											</span>
										) : (
											<span>
												Less <StaticImage src="../images/icons/arrow-right-1.svg" alt="Arrow Right" />
											</span>
										)}
									</Button>
									<StaticImage src="../images/icons/quote.png" class="left" alt="left" />
									<StaticImage src="../images/icons/quote.png" class="right" alt="left" />
									<StaticImage src="../images/testimonials/aruna.jpg" className="avatar" alt="testimonial" />
									<h2 className="fw-bold fs-3">Mrs. Aruna M G</h2>
									<h6 className="text-primary">Associate Professor - M S Engineering College</h6>
									<ul className="rating">
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
									</ul>
									<div className="content">
										<p className={isActive ? " pt-2 desc line-clamp" : "pt-2 desc"}>
											Without any Experience and Knowledge about Eshwari Kriya, I joined and experienced a wonderfull journey within myself Physically, mentally and learnt how to
											balance my life journey. Eshwari Kriya really is a god’s gift to me and it has changed my lifestyle. There are no words to explain. I have now thought of
											doing Eshwari Kriya alone after experiencing its many benefits and have continued this journey to learn and experience and also attend all the workshops and
											courses. Sri Prasad Guruji's teaching is very simple, realistic,scientific and effective.
										</p>
									</div>
								</div>
							</Col>
							<Col xs={12} lg={4}>
								<div className="testimonial-card position-relative  br-20">
									<Button variant="link" className="btn-link" onClick={handleClick}>
										{isActive ? (
											<span>
												More <StaticImage src="../images/icons/arrow-right-1.svg" alt="Arrow Right" />
											</span>
										) : (
											<span>
												Less <StaticImage src="../images/icons/arrow-right-1.svg" alt="Arrow Right" />
											</span>
										)}
									</Button>
									<StaticImage src="../images/icons/quote.png" class="left" alt="left" />
									<StaticImage src="../images/icons/quote.png" class="right" alt="left" />
									<StaticImage src="../images/testimonials/santhosh.jpeg" className="avatar" alt="testimonial" />
									<h2 className="fw-bold fs-3">Dr Santhosh Kumar P</h2>
									<h6 className="text-primary">ENT, Head & Neck surgeon ( MS ENT, Fellowship in Rhinoloy and Anterior skull base surgery )</h6>
									<ul className="rating">
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
										<li>
											<StaticImage src="../images/icons/star-1.svg" className="icons" alt="Ratings" />
										</li>
									</ul>
									<div className="content">
										<p className={isActive ? " pt-2 desc line-clamp" : "pt-2 desc"}>
											Jai Gurudev, I like to share my experience regarding Eshwari Kriya and other workshops with guruji. I had a strained lower back ( started with heavyweight
											lifting in gym) and the pain was persistent for longer duration( more than 4yrs) and it was diagnosed as piriformis syndrome and B/L Sacroilitis. Had tried
											all sorts of treatment ( medications, Physio therapy) but to no relief. This had hampered my day to day activities and it had made me lose my confidence.
											later in 2010 I met Sri Prasad guruji and he guided me through eshwari Kriya and intermittently he did Nirmalikarana Kriya. And those Experiences can be
											tasted and cannot be explained, one must experience ESHWARI KRIYA and Nirmalikarna Kriya to Taste the reality,it's nature and experiences. Benefits: There are
											a wholesome, the mind starts to kindle every aspect of its mechanism, accepting things the way they come that keep it stress free and experience the inner
											joy, the physical body starts supporting you to the extent that it keeps you fit for ages and helps to work more than 16hrs a day. Eshwari Kriya alone is a
											stepping stone to experiencing the infinite and universal bliss. I am looking forward to attend more and more of gurujis workshops for knowledge, betterment
											and sprirtual upliftment.
										</p>
									</div>
								</div>
							</Col>
						</Slider>
					</ScrollAnimation>
				</Row>
			</Container>
		</section>
	);
};

export default Testimonial;
