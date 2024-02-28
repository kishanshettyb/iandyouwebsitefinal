import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Seo } from "../components/Seo";

const weightloss = () => {
	return (
		<Layout>
			<Banner title="Weight Loss" subTitle="Lose the unwanted from your Body" mainLink="Solutions For" link="Weight loss" />
			<Container>
				<h2 className="display-3 fw-bold font-philosopher text-primary  text-center">Weight Loss</h2>
				<p className="fw-bold opacity-80 text-center">Lose the unwanted from your Body</p>
				<div className="text-center  mb-5">
					<StaticImage src="../images/others/line-2.png" alt="line" className="line" />
				</div>
				<p>
					Hatha Yoga along with Eshwari Kriya and Dhyana if done right, brings a lifestyle change, in turn can help increase physical activity and decreased emotional eating. And
					it can help you manage stress, which can help with weight maintenance.
				</p>

				<p className="fw-bold">
					According to a new study, participating in yoga as part of a 6-month weight-loss program is doable for adults with obesity or overweight and may also be helpful for
					weight loss, with no differences seen between people practicing two distinct styles of yoga. Recently published in the journal Obesity, the study was partially funded by
					the National Centre for Complementary and Integrative Health and led by researchers at the University of Pittsburgh, Duke University Medical Center, and University of
					Zurich
				</p>
				<p className="fw-bold mb-4">
					Reference - Jakicic JM, Davis KK, Rogers RJ, et al. Feasibility of integration of yoga in a behavioral weight-loss intervention: a randomized trial. Obesity (Silver
					Spring). 2021;29(3):512-520.
				</p>

				<div className="quote">
					<StaticImage className="left" src="../images/icons/quote.png" alt="quote" />
					<StaticImage className="right" src="../images/icons/quote.png" alt="quote" />
					<p className="desc font-philosopher">
						Reducing weight is a wrong saying and not healthy, say I want to maintain weight, when you start maintaining weight you will see drastic changes in your body, your mood
						will improve for good, brings you good health and a young body, all you need is to take care of your food, do hatha yoga along with Eshwari Kriya and Dhyana{" "}
					</p>

					<p className="fw-bold fs-3 font-niconne">- Sri Prasad</p>
				</div>
			</Container>
		</Layout>
	);
};

export default weightloss;
export const Head = () => (
	<Seo
		title="Depression"
		description="Within one month of beginning Eshwari Kriya practice, participants sleep quality has significantly improved, tranquillity and positivity has increased while physical exhaustion, and symptoms of anxiety and depression has drastically decreased."
	/>
);
