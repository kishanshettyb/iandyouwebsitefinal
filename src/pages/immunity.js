import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Seo } from "../components/Seo";

const immunity = () => {
	return (
		<Layout>
			<Banner title="Immunity" subTitle="Strengthen the inner Warrior" mainLink="Solutions For" link="Immunity" />
			<Container>
				<h2 className="display-3 fw-bold font-philosopher text-primary  text-center">Immunity </h2>
				<p className="fw-bold opacity-80 text-center">Strengthen the inner Warrior</p>
				<div className="text-center  mb-5">
					<StaticImage src="../images/others/line-2.png" alt="line" className="line" />
				</div>
				<p>
					A 5000-year-old subtle science, it focuses on bringing harmony in the mind and the body. It is a combination of physical exercise, diet control, breathing techniques and
					concentration, which strengthens the body and relaxes the mind. This, in turn, improves immunity.
				</p>
				<p>
					New research published in the Journal of Behavioural Medicine suggests that yoga can be a helpful way to boost your immune system and decrease inflammation in the body.
				</p>
				<p>Ref: yoga and its health benefits in our book The Harvard Medical School Guide to Yoga.</p>
				<p>
					Ayurveda and yogic science always goes hand in hand, it's learned that saying Ojas has connection with Vyadhikshamatva (Immunity), Ojas is the essence of the Spatha Datu
					which is formed through our Food, if your food is too hygienic and by drinking bottled water your body will not adjust to other forms of food, body should have developed
					the nature to adjust with all types of food and water, then the inner warrior will become stronger, such adjustments to the mind with regards to the food and water is
					possible with the Eshwari Kriya and the Dhyana
				</p>
				<p className="fw-bold fs-3 font-niconne">- Sri Prasad</p>
			</Container>
		</Layout>
	);
};

export default immunity;
export const Head = () => (
	<Seo
		title="Immunity"
		description="A 5000-year-old subtle science, it focuses on bringing harmony in the mind and the body. It is a combination of physical exercise, diet control, breathing techniques and concentration, which strengthens the body and relaxes the mind. This, in turn, improves immunity."
	/>
);
