import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Seo } from "../components/Seo";

const wellness = () => {
	return (
		<Layout>
			<Banner title="Wellness" subTitle=">Be the observer of your thought, feeling and the sensation" mainLink="Solutions For" link="Wellness" />
			<Container>
				<h2 className="display-3 fw-bold font-philosopher text-primary  text-center">Wellness </h2>
				<p className="fw-bold opacity-80 text-center">Be the observer of your thought, feeling and the sensation</p>
				<div className="text-center  mb-5">
					<StaticImage src="../images/others/line-2.png" alt="line" className="line" />
				</div>
				<p>
					According to the National Institutes of Health, scientific evidence shows that yoga - Eshwari Kriya and Dhyana, supports stress management, mental health, mindfulness,
					healthy eating, weight loss and quality sleep.
				</p>
				<p className="fw-bold mb-4">
					The World Health Organization has recognized the role of spirituality as that which brings you a sense of satisfaction, wellness, connectivity, and confidence in whatever
					you do
				</p>
				<div className="quote">
					<StaticImage className="left" src="../images/icons/quote.png" alt="quote" />
					<StaticImage className="right" src="../images/icons/quote.png" alt="quote" />
					<p className="desc font-philosopher">
						Gaining knowledge and implementing that in our day-to-day activity will build a good quality of life, such good qualities will bring wellness, only possible when you
						are aware of your thoughts, feelings and sensations and have control over it. For this you need spiritual knowledge and practicing Eshwari Kriya and Dhyana is a wise
						way
					</p>
					<p className="fw-bold fs-3 font-niconne">- Sri Prasad</p>
				</div>
			</Container>
		</Layout>
	);
};

export default wellness;
export const Head = () => (
	<Seo
		title="Wellness"
		description="According to the National Institutes of Health, scientific evidence shows that yoga – Eshwari Kriya and Dhyana, supports stress management, mental health, mindfulness, healthy eating, weight loss and quality sleep.
The World Health Organization has recognized the role of spirituality as that which brings you a sense of satisfaction, wellness, connectivity, and confidence in whatever you do."
	/>
);
