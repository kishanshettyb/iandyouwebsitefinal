import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import { Seo } from "../components/Seo";
import { StaticImage } from "gatsby-plugin-image";

const sleep = () => {
	return (
		<Layout>
			<Banner title="Sleep" mainLink="Solutions For" link="Sleep" />
			<Container>
				<h2 className="display-3 fw-bold font-philosopher text-primary  text-center">Sleep</h2>
				<p className="fw-bold opacity-80 text-center">Fall asleep within 5 min </p>
				<div className="text-center  mb-5">
					<StaticImage src="../images/others/line-2.png" alt="line" className="line" />
				</div>
				<p>
					Sleep problems are one of the most common medical complaints. Lack of sleep is associated with significantly decreased work performance, impaired daytime function, and
					increased health care costs.
				</p>
				<p>
					Medline/PubMed, Clinical Key, ScienceDirect, Embase, PsycINFO, and the Cochrane Library were searched throughout the month of June, 2019. Randomized controlled trials
					comparing yoga groups with control groups in women with sleep problems were included. Two reviewers independently evaluated risk of bias by using the risk of bias tool
					suggested by the Cochrane Collaboration for programming and conducting systematic reviews and meta-analyses.{" "}
				</p>
				<p>
					The main outcome measure was sleeping quality or the severity of insomnia, which was measured using subjective instruments, such as the Pittsburgh Sleep Quality Index
					(PSQI), Insomnia Severity Index (ISI), or objective instruments such as polysomnography, actigraphy, and safety of the intervention. For each outcome, a standardized mean
					difference (SMD) and confidence intervals (CIs) of 95% were determined.
				</p>

				<p>
					When your mind is occupied with too much in planning, future anxiety, worries and too many expectations, this slowly leads to insomnia. Sleep like a baby without any
					expectation, worry and planning. Eshwari Kriya and Dhyana will help you attain such a quality of mind which enhances good sleep within 5 min{" "}
				</p>
				<p className="fw-bold fs-3 font-niconne">- Sri Prasad </p>
			</Container>
		</Layout>
	);
};

export default sleep;
export const Head = () => (
	<Seo
		title="Sleep"
		description="Sleep problems are one of the most common medical complaints. Lack of sleep is associated with significantly decreased work performance, impaired daytime function, and increased health care costs."
	/>
);
