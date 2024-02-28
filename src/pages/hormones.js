import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Seo } from "../components/Seo";
import RegisterModal from "../components/RegisterModal";
const harmones = () => {
	return (
		<Layout>
			<Banner title="Hormones" subTitle="Effect on Harmones" mainLink="Eshwari Kriya" link="Harmones" />
			<section>
				<Container>
					<h2 className="display-3 fw-bold font-philosopher text-primary  text-center">HORMONS </h2>
					<p className="fw-bold opacity-80 text-center">EFFECT ON HORMONS </p>
					<div className="text-center  mb-5">
						<StaticImage src="../images/others/line-2.png" alt="line" className="line" />
					</div>
					<p>
						When we're talking about hormonal imbalances in women, stress management is a wise and right start. The Eshwari Kriya and Dhyana and its sequence will calm your nervous
						system and detox your organs.
					</p>

					<p>
						Eshwari Kriya encourages a healthy lifestyle, including balanced eating, which can support hormonal balance. Incorporating EK practices into a routine can be a valuable
						complement to conventional treatments for hormonal imbalances, including PCOD, PCOS and thyroid disorders.{" "}
					</p>
					<p>
						It offers a holistic approach, addressing physical, mental, and emotional aspects of well-being. By embracing the simplicity and effectiveness of EK, individuals can
						take wise steps toward achieving hormonal balance and overall health.
					</p>

					<div className="text-center">
						<RegisterModal btnTitle="Register" size="lg" classes="d-inline-flex px-5 align-items-center" />
					</div>
				</Container>
			</section>
		</Layout>
	);
};

export default harmones;
export const Head = () => (
	<Seo
		title="Sri Prasad"
		description="Sri Prasad, one of the eminent new age master of Spiritual Yogic Science, imparting knowledge through Yogic Science in the name of Eshwari sadhana. His vision to create a disease-free, stress-free and as a whole a holistic society, has brought millions together in India and overseas."
	/>
);
