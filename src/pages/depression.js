import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Seo } from "../components/Seo";

const depression = () => {
	return (
		<Layout>
			<Banner title="Depression" subTitle="Breaking Down the Silent Struggle" mainLink="Solutions For" link="Drepression" />
			<section>
				<Container>
					<h2 className="display-3 fw-bold font-philosopher text-primary  text-center">Depression </h2>
					<p className="fw-bold opacity-80 text-center">Rise the Prana </p>
					<div className="text-center  mb-5">
						<StaticImage src="../images/others/line-2.png" alt="line" className="line" />
					</div>
					<p>
						Within one month of beginning Eshwari Kriya practice, participants sleep quality has significantly improved, tranquillity and positivity has increased while physical
						exhaustion, and symptoms of anxiety and depression has drastically decreased
					</p>
					<p>It's important to note that it was a small study with only 30 participants.</p>
					<p className="fw-bold mb-4">
						A 2019 study published in the Journal of Psychiatric Practice found that yoga (Eshwari Kriya) can be a helpful complementary treatment for clinical depression or major
						depressive disorder.
					</p>
					<div className="quote">
						<StaticImage className="left" src="../images/icons/quote.png" alt="quote" />
						<StaticImage className="right" src="../images/icons/quote.png" alt="quote" />
						<p className="desc font-philosopher">
							When the health problem seems to be unsolved, it seems that I can't solve problems, Relationship problem feels like losing the loved ones, Finance problem - not
							finding right way to increase, invest and losing it all, in such a condition your Prana level, energy level is on the lower side, you start feeling low and depressed
							- Eshwari kriya and Dhyana will increase manifolds the Prana and Energy levels within a month{" "}
						</p>
						<p className="fw-bold fs-3 font-niconne">- Sri Prasad</p>
					</div>
				</Container>
			</section>
		</Layout>
	);
};

export default depression;
export const Head = () => (
	<Seo
		title="Immortal Process"
		description="The theory of  karma and rebirth raises numerous questions such as how, when, and why did the cycle start in the first place, what is
						the relative Karmic merit of one karma versus another and why, and what evidence is there that rebirth actually happens, among others."
	/>
);
