import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Seo } from "../components/Seo";

const relationship = () => {
	return (
		<Layout>
			<Banner title="Relationship" subTitle="Forgiveness and continued loving is the solution" mainLink="Solutions For" link="Relationship" />
			<section>
				<Container>
					<h2 className="display-3 fw-bold font-philosopher text-primary  text-center">Relationship </h2>
					<p className="fw-bold opacity-80 text-center">Forgiveness and continued loving is the solution</p>
					<div className="text-center  mb-5">
						<StaticImage src="../images/others/line-2.png" alt="line" className="line" />
					</div>
					<p>
						Eshwari Kriya and Dhyana should be considered as a complementary therapy or alternative method for medical therapy in the treatment of stress, anxiety, depression, and
						other mood disorders as it has been shown to create a greater sense of well-being, increase feelings of relaxation, improved self-confidence and body image, improve
						efficiency, better interpersonal relationships, increase attentiveness, lower irritability, and encourage an optimistic outlook on life.
					</p>
					<p>Most important in the relationship is understanding our own emotions, our ability to forgive, accept the person and having patience.</p>
					<div className="quote">
						<StaticImage className="left" src="../images/icons/quote.png" alt="quote" />
						<StaticImage className="right" src="../images/icons/quote.png" alt="quote" />
						<p className="desc font-philosopher">
							Handling emotions is more than just management, its an ability to understand, accept with right amount of patience, finding someone who loves you, the best thing is
							you love them in a better way, in a relationship forgiving and continued loving is the solution.
						</p>
						<p className="desc font-philosopher">Dhyana and Eshwari Kriya will unfold these abilities within you </p>
						<p className="fw-bold fs-3 font-niconne">- Sri Prasad</p>
					</div>
				</Container>
			</section>
		</Layout>
	);
};

export default relationship;
export const Head = () => (
	<Seo
		title="Relationship"
		description="Eshwari Kriya and Dhyana should be considered as a complementary therapy or alternative method for medical therapy in the treatment of stress, anxiety, depression, and other mood disorders as it has been shown to create a greater sense of well-being, increase feelings of relaxation, improved self-confidence and body image, improve efficiency, better interpersonal relationships, increase attentiveness, lower irritability, and encourage an optimistic outlook on life."
	/>
);
