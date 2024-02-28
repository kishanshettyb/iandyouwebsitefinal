import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import { Seo } from "../components/Seo";
const beginners = () => {
	return (
		<Layout>
			<Banner title="Beginners" subTitle="A step towards wellbeing " mainLink="Meditation" link="Beginners" />
			<section className="meditation-page-section">
				<Container>
					<h2 className="fw-bold text-primary display-3 mb-3 font-philosopher">Beginners - a step towards wellbeing </h2>
					<p>
						Eshwari Dhyana is a first step, in this process the Sadhak will learn, understand and recognize the three types of activities of the mind and they learn the way of
						altering those activities{" "}
					</p>
					<p>They learn the way to calm and quite the mind to recognise the inner peace by distancing the thoughts, feeling and sensation</p>
					<p>Later they will practice the way to empty the mind, then they learn knowledge tips to stay longer time in that empty sate or maintain that empty state of the mind </p>
					<p>In the beginning we learn the way to travel towards the True self or Existential reality</p>
				</Container>
			</section>
		</Layout>
	);
};

export default beginners;
export const Head = () => (
	<Seo
		title="Beginners"
		description="Beginners - a step towards wellbeing Eshwari Dhyana is a first step, in this process the Sadhak will learn, understand and recognize the three types of activities of the mind and they learn the way of altering those activities"
	/>
);
