import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Seo } from "../components/Seo";
import RegisterModal from "../components/RegisterModal";
const nervoussystem = () => {
	return (
		<Layout>
			<Banner title="On The Mind Level" subTitle=" " mainLink="Eshwari Kriya" link="Nervous System" />
			<section>
				<Container>
					<h2 className="display-3 fw-bold font-philosopher text-primary  text-center">On The Mind Level</h2>
					<p className="fw-bold opacity-80 text-center"> </p>
					<div className="text-center  mb-5">
						<StaticImage src="../images/others/line-2.png" alt="line" className="line" />
					</div>
					<p>The Eshwari Kriya and Dhyana directly influences our nervous systems, making us happier and healthier.</p>
					<p>
						Mind-body interventions are beneficial in stress-related mental and physical disorders. Current research is finding associations between emotional disorders and vagal
						tone as indicated by heart rate variability. A neurophysiologic model of yogic breathing proposes to integrate research on yoga with polyvagal theory, vagal
						stimulation, hyperventilation, and clinical observations. Yogic breathing is a unique method for balancing the autonomic nervous system and influencing psychologic and
						stress-related disorders. Many studies demonstrate effects of yogic breathing on brain function and physiologic parameters, but the mechanisms have not been clarified.
						Eshwari Kriya (EK), can alleviate anxiety, depression, everyday stress, post-traumatic stress, and stress-related medical illnesses. Mechanisms contributing to a state
						of calm alertness include increased parasympathetic drive, calming of stress response systems, neuroendocrine release of hormones, and thalamic generators.
					</p>
				</Container>
			</section>
			<section>
				<Container>
					<p>Benefits</p>
					<ul className="mb-5">
						<li>Reduces mental fatigue </li>
						<li>Improvises concentration drastically and keeps you focused</li>
						<li>Keeps you free of stress and psychosomatic disorders caused due to stress</li>
						<li>Provides contentment and peace of mind</li>
						<li>Increases memory, skill and creativity</li>
					</ul>
					<div className="text-center">
						<RegisterModal btnTitle="Register" size="lg" classes="d-inline-flex px-5 align-items-center" />
					</div>
				</Container>
			</section>
		</Layout>
	);
};

export default nervoussystem;
export const Head = () => (
	<Seo
		title="Sri Prasad"
		description="Sri Prasad, one of the eminent new age master of Spiritual Yogic Science, imparting knowledge through Yogic Science in the name of Eshwari sadhana. His vision to create a disease-free, stress-free and as a whole a holistic society, has brought millions together in India and overseas."
	/>
);
