import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import { Seo } from "../components/Seo";
import { StaticImage } from "gatsby-plugin-image";

const stress = () => {
	return (
		<Layout>
			<Banner title="Stress" subTitle="Discover Strategies to Overcome Stress and Improve Your Well-being" mainLink="Solutions For" link="Stress" />
			<Container>
				<h2 className="display-3 fw-bold font-philosopher text-primary  text-center">Stress</h2>
				<p className="fw-bold opacity-80 text-center">STRESS and an end for it</p>
				<div className="text-center  mb-5">
					<StaticImage src="../images/others/line-2.png" alt="line" className="line" />
				</div>
				<p>
					Eshwari Kriya encourages mental and physical relaxation, helps reduce stress and anxiety. It promotes flexibility, relieve tension, and alleviate pain. Eshwari Kriya will
					help you release physical, mental and emotional stress related problems{" "}
				</p>
				<p>
					According to the National Institutes of Health, scientific evidence shows that yoga (Eshwari Kriya) supports stress management, mental health, mindfulness, healthy
					eating, weight loss and quality sleep
				</p>
				<p>
					“Stress is not a problem, it is a mental discipline, one who fails to have that will end up in stress, what you need to do is, don’t hurry up in doing things or handling
					problems in a short time with less energy”
				</p>
				<p className="fw-bold fs-3 font-niconne">- Sri Prasad</p>
			</Container>
		</Layout>
	);
};

export default stress;
export const Head = () => (
	<Seo
		title="Stress"
		description=" Stress is not a problem, it is a mental discipline, one who fails to have that will end up in stress, what you need to do is, don't hurry up in doing things or handling problems in a short time with less energy"
	/>
);
