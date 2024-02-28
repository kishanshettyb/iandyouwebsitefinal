import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import Layout from "../components/Layout";
import { Seo } from "../components/Seo";

const guruji = () => {
	return (
		<Layout>
			<section>
				<Container>
					<Row className="d-flex align-items-center justify-content-center">
						<Col md={4}>
							<StaticImage className="img-fluid br-20" src="../images/sri-prasad-guruji.jpeg" alt="Sri Prasad Guruji" />
						</Col>
						<Col md={6}>
							<h2 className="display-3 fw-bold font-philosopher text-primary  text-start">Sri Prasad</h2>
							<p className="mb-5">
								Sri Prasad, one of the eminent new age master of Spiritual Yogic Science, imparting knowledge through Yogic Science in the name of Eshwari sadhana. His vision to
								create a disease-free, stress-free and as a whole a holistic society, has brought millions together in India and overseas.
							</p>
							<h2 className="display-6 fw-bold font-philosopher text-primary  text-start">Path Towards Spirituality</h2>
							<p>
								Running down through the life and journey of Sri Prasad and explore a little about how he imparted the most secret of spiritual knowledge Sri Vidhya through Yogic
								Science, and the founding of I and You Being Together Foundation which also involves various humanitarian service oriented activities.
							</p>
							<ul className="social-media my-4">
								<li>
									<a rel="noreferrer" target="_blank" href="https://www.facebook.com/srimnprasad.prasad">
										<StaticImage className="icon" src="../images/social/facebook.svg" alt="Sri Prasad Facebook" />
									</a>
								</li>
								<li>
									<a rel="noreferrer" target="_blank" href="https://www.instagram.com/sriprasadguruji">
										<StaticImage className="icon" src="../images/social/instagram.svg" alt="Sri Prasad instagram" />
									</a>
								</li>
								<li>
									<a href="/">
										<StaticImage className="icon" src="../images/social/youtube.svg" alt="Sri Prasad youtube" />
									</a>
								</li>
								<li>
									<a href="/">
										<StaticImage className="icon" src="../images/social/twitter.svg" alt="Sri Prasad twitter" />
									</a>
								</li>
								<li>
									<a href="/">
										<StaticImage className="icon" src="../images/social/linkedin.svg" alt="Sri Prasad linkedin" />
									</a>
								</li>
							</ul>
							<a target="_blank" rel="noreferrer" href="https://sriprasad.org/about/">
								<Button className="px-3" variant="primary">
									Read More
								</Button>
							</a>
						</Col>
					</Row>
				</Container>
			</section>
		</Layout>
	);
};

export default guruji;
export const Head = () => (
	<Seo
		title="Sri Prasad"
		description="Sri Prasad, one of the eminent new age master of Spiritual Yogic Science, imparting knowledge through Yogic Science in the name of Eshwari sadhana. His vision to create a disease-free, stress-free and as a whole a holistic society, has brought millions together in India and overseas."
	/>
);
