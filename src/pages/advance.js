import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import { Seo } from "../components/Seo";
const advance = () => {
	return (
		<Layout>
			<Banner title="Advance" subTitle="Master the perfection" mainLink="Meditation" link="Advanced" />
			<section className="meditation-page-section">
				<Container>
					<h2 className="fw-bold text-primary display-3 mb-3 font-philosopher">Advance - Master the perfection </h2>
					<p>
						Eshwari Siddha Dhyana is a advance meditation is the way to master the perfections, this form of meditation is designed based on the 3rd chapter of the “Patanjali Yoga
						Sutra “known as Vibhuti Pada
					</p>
					<p>
						Significantly we learn to recognize the field of all possibilities in our mind as per Acharya Patanjali, this awakening arises at the meeting point ( Samyama ) of
						Dharana, Dhyana and Samadhi
					</p>
					<p>In the chapter Vibhuti Pada, Acharya Patanjali discussed about the Psychic abilities and the way to acquire </p>
					<p>He has mentioned many but we work on the 18 types of the Psychic abilities which are essentially require to lead a Holistic life </p>
					<p>This teaching will be thought online and offline and there will be two levels, each level the Sadhaka will learn 9 sutras (Mantras) </p>
					<p>To attend this class, one should practice Eshwari Dhyana for 3 months at least</p>
				</Container>
			</section>
			<section>
				<Container>
					<h2 className="fw-bold text-primary display-3 mb-3 font-philosopher">The Benefits:</h2>
					<ul>
						<li>One can develop Multiple intelligence like...</li>
						<li>Active, optimum Perception from five senses </li>
						<li>The sense of clear separation of intellect and self </li>
						<li>The creative intelligence and intuitive intelligence </li>
						<li>Clairaudience abilities</li>
						<li>The clairvoyant abilities </li>
						<li>Conquer thirst and hunger </li>
						<li>Eshwari Siddha Dhyana which is the key to celebrate a blissful life</li>
						<li>ESD trains the conscious mind function optimum </li>
						<li>ESD trains the awareness to act according to Cosmic law </li>
						<li>ESD develops higher levels of intelligence </li>
						<li>ESD increases learning abilities and creativity</li>
						<li>ESD increases brain and neurological efficacy</li>
						<li>ESD provides mind /body coordination which is expressed in skill-oriented actions</li>
						<li>ESD reduces negative tendencies and promotes positivity</li>
						<li>ESD enhances harmony in the family and society </li>
						<li>ESD unfolds creative intelligence and intuitive intelligence</li>
					</ul>
				</Container>
			</section>
		</Layout>
	);
};

export default advance;
export const Head = () => (
	<Seo
		title="Advance"
		description="Advance - Master the perfection Eshwari Siddha Dhyana is a advance meditation is the way to master the perfections, this form of meditation is designed based on the 3rd chapter of the “Patanjali Yoga Sutra “known as Vibhuti Pada"
	/>
);
